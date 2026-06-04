import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectGrid } from "@/components/ui/ProjectGrid";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
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
        <SectionHeader kicker="Software & research" title="Projects" />

        <p
          style={{
            fontSize: "var(--fs-md)",
            lineHeight: 1.65,
            color: "var(--fg-2)",
            maxWidth: "var(--content-narrow)",
            margin: "calc(-1 * var(--space-6)) 0 0",
            textWrap: "pretty" as React.CSSProperties["textWrap"],
          }}
        >
          Long-running research vehicles in the lab. Each project corresponds to
          a thesis chapter or sequence of papers, plus a public artifact we
          maintain on GitHub.
        </p>

        <ProjectGrid />
      </article>
    </div>
  );
}
