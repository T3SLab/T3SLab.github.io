import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import { Icon } from "@/components/ui/Icon";
import { LAB } from "@/data";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--rule)",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "var(--space-7) var(--gutter) 0",
        }}
      >
        {/* Top row */}
        <div className="grid gap-[var(--space-7)] grid-cols-1 md:grid-cols-[220px_1fr]">
          {/* Brand block */}
          <div className="flex flex-col gap-[var(--space-3)]">
            <Wordmark size={14} />
            <div
              className="font-mono"
              style={{
                fontSize: "var(--fs-xs)",
                color: "var(--muted)",
                letterSpacing: "0.02em",
                lineHeight: 1.5,
              }}
            >
              {LAB.full}
            </div>
          </div>

          {/* Columns */}
          <div className="grid gap-[var(--space-6)] grid-cols-1 sm:grid-cols-3">
            <FooterCol heading="Institution">
              <span>{LAB.university}</span>
              <span style={{ color: "var(--muted)" }}>{LAB.department}</span>
              <span style={{ color: "var(--muted)" }}>{LAB.address}</span>
            </FooterCol>
            <FooterCol heading="Contact">
              <a href={`mailto:${LAB.email}`}>{LAB.email}</a>
              <a href="#">Visit · directions</a>
              <a href="#">Prospective students</a>
            </FooterCol>
            <FooterCol heading="Elsewhere">
              <a href="#" className="inline-flex items-center gap-1">
                GitHub <Icon name="ext" size={10} />
              </a>
              <a href="#" className="inline-flex items-center gap-1">
                Google Scholar <Icon name="ext" size={10} />
              </a>
              <a href="#" className="inline-flex items-center gap-1">
                arXiv <Icon name="ext" size={10} />
              </a>
              <a href="#">RSS</a>
            </FooterCol>
          </div>
        </div>
      </div>

      {/* Base row */}
      <div
        className="flex flex-wrap items-center justify-between gap-4 font-mono"
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "var(--space-5) var(--gutter)",
          borderTop: "1px solid var(--rule)",
          marginTop: "var(--space-6)",
          fontSize: "var(--fs-xs)",
        }}
      >
        <span style={{ color: "var(--fg-2)" }}>
          © 2026 T3S Lab · The University of Texas at El Paso
        </span>
        <span style={{ color: "var(--muted)" }}>
          Built with care in El Paso, TX
        </span>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="font-mono uppercase font-medium"
        style={{
          fontSize: "var(--fs-xs)",
          color: "var(--fg)",
          letterSpacing: "0.1em",
          marginBottom: "var(--space-2)",
        }}
      >
        {heading}
      </div>
      <div
        className="flex flex-col gap-1"
        style={{
          fontSize: "var(--fs-sm)",
          color: "var(--fg-2)",
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </div>
  );
}
