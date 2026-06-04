import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MemberGrid } from "@/components/ui/MemberGrid";
import { MEMBERS } from "@/data";

export const metadata: Metadata = { title: "Members" };

export default function MembersPage() {
  const totalCount = Object.values(MEMBERS).flat().length;

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
        <SectionHeader kicker="Roster" title="Members" />

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
          We are a small group of {totalCount} researchers across the
          systems-security stack — from speculation and side channels up to
          TEE-aware operating systems.
        </p>

        <MemberGrid />
      </article>
    </div>
  );
}
