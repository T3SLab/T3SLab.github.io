import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BLOGS } from "@/data";

export const metadata: Metadata = { title: "Blog" };

interface BlogsPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { q: query = "" } = await searchParams;

  const filtered = BLOGS.filter((b) => {
    if (!query) return true;
    return (b.title + " " + b.author + " " + b.excerpt + " " + b.tag)
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
        <SectionHeader kicker="Writing" title="Blog" />

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
          Long-form writing from the lab — research retrospectives, tutorials we
          wish we had, CTF retros, and the occasional opinion. RSS coming soon.
        </p>

        <ol className="list-none m-0 p-0">
          {filtered.map((post, i) => (
            <li
              key={i}
              className="grid gap-(--space-5) grid-cols-1 sm:grid-cols-[160px_1fr]"
              style={{
                padding: "var(--space-6) 0",
                borderBottom: "1px solid var(--rule)",
                ...(i === 0 ? { borderTop: "1px solid var(--rule)" } : {}),
              }}
            >
              {/* Meta column */}
              <div className="flex flex-col gap-1 pt-0.5">
                <span
                  className="font-mono"
                  style={{
                    fontSize: "var(--fs-xs)",
                    color: "var(--fg)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {post.date}
                </span>
                <span
                  className="font-mono uppercase"
                  style={{
                    fontSize: "var(--fs-xs)",
                    color: "var(--muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {post.tag}
                </span>
              </div>

              {/* Body column */}
              <div>
                <h3 className="m-0" style={{ marginBottom: "var(--space-3)" }}>
                  <a
                    href={post.slug ? `/blogs/${post.slug}` : "#"}
                    className="blog-title-link font-serif font-normal"
                    style={{
                      fontSize: "var(--fs-xl)",
                      lineHeight: "var(--lh-tight)",
                      letterSpacing: "-0.012em",
                      textDecoration: "none",
                    }}
                  >
                    {post.title}
                  </a>
                </h3>
                <p
                  className="m-0 font-serif"
                  style={{
                    fontSize: "var(--fs-md)",
                    lineHeight: 1.55,
                    color: "var(--fg-2)",
                    maxWidth: "38em",
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "var(--fs-xs)",
                    color: "var(--muted)",
                    marginTop: "var(--space-4)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {post.author} · {post.read} read
                </div>
              </div>
            </li>
          ))}
        </ol>

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
            No posts match your search.
          </div>
        )}
      </article>
    </div>
  );
}
