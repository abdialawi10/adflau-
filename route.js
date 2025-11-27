// app/api/generate-ad/route.js
import OpenAI from "openai";

export async function POST(req) {
  try {
    const body = await req.json();
    const { prompt, tone, brandingMode, anchorAd, regenerate, switchTone } = body;

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Optionally rotate tone if "Switch Tone" pressed
    const tones = ["professional", "casual", "fun", "bold", "luxury"];
    let nextTone = tone;
    if (switchTone) {
      const idx = tones.indexOf(tone);
      nextTone = tones[(idx + 1) % tones.length];
    }

    const system = `
You are an AI ad generator for a tool called Adflau AI.
Return a single, clean ad as plain text. No JSON, no markdown.

Tone: ${switchTone ? nextTone : tone}
Branding mode: ${brandingMode ? "ON" : "OFF"}

${
  anchorAd
    ? `Use the following anchor ad as the style reference. Match its voice, structure and rhythm:\n"""${anchorAd}"""\n`
    : ""
}
`;

    const userContent = regenerate
      ? `Regenerate a new variation of this ad, keeping the same offer but improving clarity and punch:\n"""${prompt || anchorAd || ""}"""`
      : prompt;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: userContent },
      ],
      temperature: 0.8,
    });

    const ad = completion.choices[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ ad, nextTone }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API ERROR", err);
    return new Response(
      JSON.stringify({
        error: "Generation failed",
        details: err.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}