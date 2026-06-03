import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Avatar } from "@/components/ui/Avatar";
import { MEMBERS, type Member, type MemberKind } from "@/data";

export const metadata: Metadata = { title: "Members" };

const GROUPS: { key: MemberKind; title: string; size: "lg" | "md" | "sm" }[] = [
  { key: "faculty", title: "Faculty", size: "lg" },
  { key: "postdoc", title: "Postdoctoral researchers", size: "md" },
  { key: "phd", title: "PhD students", size: "md" },
  { key: "ms", title: "MS students", size: "md" },
  { key: "undergrad", title: "Undergraduate researchers", size: "sm" },
  { key: "alumni", title: "Alumni", size: "sm" },
];

const AVATAR_SIZE = { lg: 128, md: 96, sm: 64 };
const GRID_MIN = { lg: "220px", md: "170px", sm: "140px" };

interface MembersPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function MembersPage({ searchParams }: MembersPageProps) {
  const { q: query = "" } = await searchParams;

  const totalCount = Object.values(MEMBERS).flat().length;

  function filter(arr: Member[]) {
    if (!query) return arr;
    const q = query.toLowerCase();
    return arr.filter((m) =>
      (m.name + " " + m.role + " " + m.area).toLowerCase().includes(q),
    );
  }

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

        {GROUPS.map((g) => {
          const list = filter(MEMBERS[g.key]);
          if (list.length === 0) return null;

          return (
            <section key={g.key}>
              <h3
                className="flex items-baseline gap-3 m-0 font-normal font-serif"
                style={{
                  fontSize: "var(--fs-lg)",
                  letterSpacing: "-0.01em",
                  marginBottom: "var(--space-5)",
                  paddingBottom: "var(--space-3)",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                <span>{g.title}</span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "var(--fs-xs)",
                    color: "var(--muted)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {list.length.toString().padStart(2, "0")}
                </span>
              </h3>

              <div
                className="grid"
                style={{
                  gridTemplateColumns: `repeat(auto-fill, minmax(${GRID_MIN[g.size]}, 1fr))`,
                  gap: "var(--space-5)",
                }}
              >
                {list.map((m, i) => (
                  <MemberCard key={i} member={m} size={g.size} />
                ))}
              </div>
            </section>
          );
        })}
      </article>
    </div>
  );
}

function MemberCard({
  member: m,
  size,
}: {
  member: Member;
  size: "lg" | "md" | "sm";
}) {
  return (
    <div className="flex flex-col gap-3 transition-transform duration-150 hover:-translate-y-0.5 cursor-default">
      <Avatar name={m.name} area={m.area} size={AVATAR_SIZE[size]} />
      <div className="flex flex-col gap-0.5">
        <div
          className="font-serif font-normal"
          style={{
            fontSize: size === "lg" ? "var(--fs-md)" : "var(--fs-sm)",
            color: "var(--fg)",
            letterSpacing: "-0.005em",
            lineHeight: 1.3,
          }}
        >
          {m.name}
        </div>
        <div
          className="font-mono"
          style={{
            fontSize: "var(--fs-xs)",
            color: "var(--muted)",
            letterSpacing: "0.02em",
          }}
        >
          {m.role}
        </div>
        {m.area && (
          <div style={{ fontSize: "var(--fs-sm)", color: "var(--fg-2)" }}>
            {m.area}
          </div>
        )}
      </div>
    </div>
  );
}
