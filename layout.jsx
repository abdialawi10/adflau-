// app/layout.jsx
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "Adflau AI – Helping small businesses think big",
  description: "Generate consistent, on-brand ads with Adflau AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="app-shell">
            <Header />
            <main className="app-main">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
