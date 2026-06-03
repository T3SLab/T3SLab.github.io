"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { CTFS, type CTFEvent } from "@/data";

type SortKey = "date" | "place" | "points";

function CTFsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const [sortBy, setSortBy] = useState<SortKey>("date");

  const filtered = CTFS.filter((c) => {
    if (!query) return true;
    return (c.name + " " + c.category + " " + c.notes)
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "place") return a.place - b.place;
    if (sortBy === "points") return b.points - a.points;
    return b.date.localeCompare(a.date);
  });

  const best = Math.min(...CTFS.map((c) => c.place));
  const totalWriteups = CTFS.reduce((s, c) => s + c.writeups, 0);

  return (
    <article
      className="flex flex-col page-enter"
      style={{ gap: "var(--space-8)", paddingBottom: "var(--space-9)" }}
    >
      <SectionHeader kicker="Competitions" title="Capture the Flag" />

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
        T3S fields a CTF team that competes year-round — primarily in jeopardy
        events, with a focus on pwn, reverse engineering, and side-channel
        challenges that mirror our research. We publish writeups for every
        solve.
      </p>

      {/* Overview stats */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{
          gap: 1,
          background: "var(--rule)",
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        {[
          { label: "Best finish", value: `#${best}` },
          {
            label: "Events this cycle",
            value: CTFS.length.toString().padStart(2, "0"),
          },
          { label: "Writeups published", value: String(totalWriteups) },
          { label: "Captain", value: "P. Patel" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex flex-col"
            style={{
              padding: "var(--space-5) var(--space-4)",
              background: "var(--bg)",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: "var(--fs-xs)",
                color: "var(--muted)",
                marginBottom: 6,
              }}
            >
              {s.label}
            </div>
            <div
              className="font-serif font-normal"
              style={{
                fontSize: i === 3 ? "var(--fs-lg)" : "var(--fs-xl)",
                lineHeight: 1,
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Sort chips */}
      <div
        className="flex flex-wrap gap-(--space-5)"
        style={{
          paddingBottom: "var(--space-5)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="flex items-center flex-wrap gap-(--space-3)">
          <span
            className="font-mono uppercase"
            style={{
              fontSize: "var(--fs-xs)",
              color: "var(--muted)",
              letterSpacing: "0.08em",
            }}
          >
            Sort
          </span>
          <div className="flex gap-1 flex-wrap">
            {(
              [
                ["date", "Most recent"],
                ["place", "Best placement"],
                ["points", "Highest points"],
              ] as [SortKey, string][]
            ).map(([k, l]) => (
              <Chip key={k} active={sortBy === k} onClick={() => setSortBy(k)}>
                {l}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="ctf-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Place</th>
              <th className="hidden sm:table-cell">Points</th>
              <th className="hidden sm:table-cell">Category</th>
              <th>Writeups</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((c, i) => (
              <CTFRow key={i} event={c} />
            ))}
          </tbody>
        </table>
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
          No events match your search.
        </div>
      )}
    </article>
  );
}

function CTFRow({ event: c }: { event: CTFEvent }) {
  const [open, setOpen] = useState(false);
  const isPodium = c.place <= 3;
  const isTopTen = c.place <= 10;

  return (
    <>
      <tr onClick={() => setOpen((v) => !v)}>
        <td
          className="font-mono"
          style={{
            fontSize: "var(--fs-xs)",
            color: "var(--muted)",
            paddingRight: "var(--space-4)",
            whiteSpace: "nowrap",
          }}
        >
          {c.date}
        </td>
        <td
          className="font-serif"
          style={{
            fontSize: "var(--fs-base)",
            color: "var(--fg)",
            paddingRight: "var(--space-4)",
          }}
        >
          {c.name}
        </td>
        <td
          className="font-mono"
          style={{
            fontSize: "var(--fs-base)",
            color: isPodium ? "var(--accent)" : "var(--fg)",
            fontWeight: isTopTen ? 500 : 400,
            paddingRight: "var(--space-4)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "var(--muted)" }}>#</span>
          {c.place}
          <span
            className="font-mono"
            style={{
              fontSize: "var(--fs-xs)",
              color: "var(--muted)",
              marginLeft: 2,
            }}
          >
            /{c.of}
          </span>
        </td>
        <td
          className="hidden sm:table-cell font-mono"
          style={{
            fontSize: "var(--fs-sm)",
            color: "var(--fg-2)",
            paddingRight: "var(--space-4)",
          }}
        >
          {c.points.toLocaleString()}
        </td>
        <td
          className="hidden sm:table-cell font-mono"
          style={{
            fontSize: "var(--fs-xs)",
            color: "var(--muted)",
            paddingRight: "var(--space-4)",
          }}
        >
          {c.category}
        </td>
        <td
          className="font-mono"
          style={{
            fontSize: "var(--fs-sm)",
            color: "var(--fg-2)",
            whiteSpace: "nowrap",
          }}
        >
          {c.writeups} <span style={{ color: "var(--muted)" }}>↗</span>
        </td>
      </tr>

      {open && (
        <tr>
          <td
            colSpan={6}
            style={{ padding: 0, borderBottom: "1px solid var(--rule)" }}
          >
            <div
              style={{
                background: "var(--bg-2)",
                borderLeft: "2px solid var(--accent)",
                padding: "var(--space-4) var(--space-5)",
                fontSize: "var(--fs-base)",
                color: "var(--fg-2)",
                lineHeight: "var(--lh-body)",
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: "var(--fs-xs)",
                  color: "var(--muted)",
                  marginRight: 8,
                }}
              >
                notes
              </span>
              {c.notes}
              <div
                className="flex flex-wrap gap-3 font-mono"
                style={{
                  marginTop: "var(--space-3)",
                  fontSize: "var(--fs-xs)",
                }}
              >
                {Array.from({ length: c.writeups }).map((_, i) => (
                  <a
                    key={i}
                    href="#"
                    className="inline-flex items-center gap-1"
                    style={{ color: "var(--link)" }}
                  >
                    writeup-{String(i + 1).padStart(2, "0")}{" "}
                    <Icon name="ext" size={10} />
                  </a>
                ))}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default function CTFsPage() {
  return (
    <div
      style={{
        maxWidth: "var(--content-max)",
        width: "100%",
        margin: "0 auto",
        padding: "var(--space-8) var(--gutter)",
      }}
    >
      <Suspense>
        <CTFsContent />
      </Suspense>
    </div>
  );
}
