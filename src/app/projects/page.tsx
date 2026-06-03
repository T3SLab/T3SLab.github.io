import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { PROJECTS, type Project, type ProjectStatus } from "@/data";

export const metadata: Metadata = { title: "Projects" };

const STATUS_STYLES: Record<ProjectStatus, { dot: string; label: string }> = {
  active: { dot: "oklch(0.72 0.18 145)", label: "active" },
  maintained: { dot: "oklch(0.72 0.18 75)", label: "maintained" },
  archived: { dot: "var(--muted)", label: "archived" },
};

interface ProjectsPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const { q: query = "" } = await searchParams;

  const filtered = PROJECTS.filter((p) => {
    if (!query) return true;
    return (p.name + " " + p.blurb + " " + p.tags.join(" "))
      .toLowerCase()
      .includes(query.toLowerCase());
  });

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

        {/* Grid — 1px gridlines via gap + background trick */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{
            gap: 1,
            background: "var(--rule)",
            borderRadius: "var(--r-md)",
            overflow: "hidden",
          }}
        >
          {filtered.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
          {/* Maintain even grid when odd number of items */}
          {filtered.length % 2 !== 0 && (
            <div style={{ background: "var(--bg)" }} />
          )}
        </div>

        {filtered.length === 0 && (
          <div
            className="text-center font-mono"
            style={{
              padding: "var(--space-7) 0",
              border: "1px dashed var(--rule)",
              borderRadius: "var(--r-md)",
              fontSize: "var(--fs-sm)",
              color: "var(--muted)",
            }}
          >
            No projects match your search.
          </div>
        )}
      </article>
    </div>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const statusStyle = STATUS_STYLES[p.status];

  return (
    <article
      className="proj-card flex flex-col"
      style={{ padding: "var(--space-6)" }}
    >
      {/* Header: name + status */}
      <header className="flex items-baseline justify-between gap-3 mb-2">
        <h3
          className="font-serif font-medium m-0"
          style={{
            fontSize: "var(--fs-lg)",
            color: "var(--fg)",
            letterSpacing: "-0.005em",
            lineHeight: 1.2,
          }}
        >
          {p.name}
        </h3>
        <span
          className="font-mono uppercase inline-flex items-center gap-1 flex-shrink-0"
          style={{
            fontSize: "var(--fs-xs)",
            color: statusStyle.dot,
            letterSpacing: "0.06em",
          }}
        >
          <Icon name="dot" size={8} />
          {statusStyle.label}
        </span>
      </header>

      {/* Meta */}
      <div
        className="font-mono"
        style={{
          fontSize: "var(--fs-xs)",
          color: "var(--muted)",
          marginBottom: "var(--space-3)",
        }}
      >
        since {p.started} · funded by {p.funder}
      </div>

      {/* Blurb */}
      <p
        className="flex-1 m-0"
        style={{
          fontSize: 14.5,
          lineHeight: "var(--lh-body)",
          color: "var(--fg-2)",
        }}
      >
        {p.blurb}
      </p>

      {/* Footer: tags + repo */}
      <footer
        className="flex items-center justify-between gap-3 flex-wrap"
        style={{
          marginTop: "var(--space-5)",
          paddingTop: "var(--space-4)",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono"
              style={{
                fontSize: "var(--fs-xs)",
                padding: "2px 7px",
                background: "var(--bg-2)",
                border: "1px solid var(--rule)",
                borderRadius: 3,
                color: "var(--fg-2)",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={`https://${p.repo}`}
          className="link-muted-accent font-mono inline-flex items-center gap-1 flex-shrink-0"
          style={{ fontSize: "var(--fs-xs)", letterSpacing: "0.02em" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {p.repo} <Icon name="ext" size={11} />
        </a>
      </footer>
    </article>
  );
}
