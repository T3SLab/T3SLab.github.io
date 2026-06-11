import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NEWS } from "@/data";

export const metadata: Metadata = { title: "News" };

function parseNewsDate(date: string): number {
  const [year, month] = date.split("·").map((s) => parseInt(s.trim(), 10));
  return year * 100 + (month || 0);
}

export default function NewsPage() {
  const sorted = [...NEWS].sort(
    (a, b) => parseNewsDate(b.date) - parseNewsDate(a.date),
  );

  return (
    <div
      className="page-enter"
      style={{
        maxWidth: "var(--content-max)",
        width: "100%",
        margin: "0 auto",
        padding: "var(--space-8) var(--gutter) var(--space-9)",
      }}
    >
      <article className="flex flex-col" style={{ gap: "var(--space-8)" }}>
        <SectionHeader kicker="Newsroom" title="News & announcements" />

        <ul className="list-none m-0 p-0" style={{ marginTop: "calc(-1 * var(--space-6))" }}>
          {sorted.map((n, i) => (
            <li
              key={i}
              className="grid items-baseline gap-(--space-5)"
              style={{
                gridTemplateColumns: "120px 1fr",
                paddingTop: i === 0 ? 0 : "var(--space-4)",
                paddingBottom: "var(--space-4)",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              <span
                className="font-mono uppercase"
                style={{
                  fontSize: "var(--fs-xs)",
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                }}
              >
                {n.date}
              </span>
              <span style={{ fontSize: "var(--fs-md)", color: "var(--fg-2)" }}>
                {n.body}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
