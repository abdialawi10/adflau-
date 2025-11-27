// app/signup/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Demo-only: "create" account locally then go to login
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "adflau-user",
        JSON.stringify({ email })
      );
    }
    window.location.href = "/login";
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create your Adflau AI account</h1>
        <p className="auth-subtitle">
          This demo stores your details only in your browser.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-label">
            Email
            <input
              type="email"
              className="auth-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="auth-label">
            Password
            <input
              type="password"
              className="auth-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="auth-button auth-button--primary"
          >
            Sign up
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link href="/login" className="auth-link">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}