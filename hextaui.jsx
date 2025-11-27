// components/ui/hextaui.jsx

export function HCard({ children }) {
  return <div className="h-card">{children}</div>;
}

export function HButton({ children, variant = "primary", disabled, ...props }) {
  const className = [
    "h-button",
    variant === "primary" && "h-button-primary",
    variant === "outline" && "h-button-outline",
    variant === "ghost" && "h-button-ghost",
    variant === "subtle" && "h-button-subtle",
    disabled && "h-button-disabled",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export function TagPill({ label, active, onClick }) {
  return (
    <button
      type="button"
      className={`tag-pill ${active ? "tag-pill-active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}