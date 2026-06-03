import { type ReactNode } from "react";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  right?: ReactNode;
}

export function SectionHeader({ kicker, title, right }: SectionHeaderProps) {
  return (
    <header
      className="flex items-end justify-between gap-(--space-5)"
      style={{
        paddingBottom: "var(--space-4)",
        borderBottom: "1px solid var(--rule)",
        marginBottom: "var(--space-6)",
      }}
    >
      <div>
        {kicker && (
          <div
            className="font-mono uppercase font-medium"
            style={{
              fontSize: "var(--fs-xs)",
              letterSpacing: "0.12em",
              color: "var(--muted)",
              marginBottom: "var(--space-3)",
            }}
          >
            {kicker}
          </div>
        )}
        <h2
          className="font-serif font-normal m-0"
          style={{
            fontSize: "var(--fs-xl)",
            lineHeight: "var(--lh-tight)",
            letterSpacing: "-0.015em",
            color: "var(--fg)",
          }}
        >
          {title}
        </h2>
      </div>
      {right && (
        <div style={{ color: "var(--muted)", flexShrink: 0 }}>{right}</div>
      )}
    </header>
  );
}
