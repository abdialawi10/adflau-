// components/Header.jsx
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="header">
      {/* Left: logo + name */}
      <div className="header-left">
        <Link href="/" className="brand">
          <Image
            src="/adflau.png"   // make sure your logo file is /public/adflau.png
            alt="Adflau AI logo"
            width={40}
            height={40}
            className="brand-logo"
          />
          <div className="brand-text">
            <span className="brand-name">Adflau AI</span>
            <span className="brand-tagline">Helping small businesses think big</span>
          </div>
        </Link>
      </div>

      {/* Center: MVP badge */}
      <div className="header-center">
        
      </div>

      {/* Right: theme + auth */}
      <div className="header-right">
        <ThemeToggle />
        <Link href="/login" className="auth-button auth-button--outline">
          Log in
        </Link>
        <Link href="/signup" className="auth-button auth-button--primary">
          Sign up
        </Link>
      </div>
    </header>
  );
}
