import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogList } from "@/components/ui/BlogList";
import { BLOGS } from "@/data";

export const metadata: Metadata = { title: "Blog" };

export default function BlogsPage() {
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

        <BlogList posts={BLOGS} />
      </article>
    </div>
  );
}
