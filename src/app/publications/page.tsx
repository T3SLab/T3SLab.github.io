"use client";

import { useMemo, useState } from "react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PubRow } from "@/components/ui/PubRow";
import { Chip } from "@/components/ui/Chip";
import { PUBLICATIONS, PUB_TOPICS } from "@/data";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PublicationsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const years = useMemo(
    () =>
      Array.from(new Set(PUBLICATIONS.map((p) => p.year))).sort(
        (a, b) => b - a,
      ),
    [],
  );

  const [topic, setTopic] = useState("all");
  const [year, setYear] = useState("all");

  const filtered = PUBLICATIONS.filter((p) => {
    if (topic !== "all" && p.topic !== topic) return false;
    if (year !== "all" && String(p.year) !== String(year)) return false;
    if (query) {
      const hay = (
        p.title +
        " " +
        p.authors.join(" ") +
        " " +
        p.venue +
        " " +
        p.topic
      ).toLowerCase();
      if (!hay.includes(query.toLowerCase())) return false;
    }
    return true;
  });

  const grouped = filtered.reduce<Record<number, typeof filtered>>((acc, p) => {
    (acc[p.year] ??= []).push(p);
    return acc;
  }, {});

  return (
    <article
      className="flex flex-col page-enter"
      style={{ gap: "var(--space-8)", paddingBottom: "var(--space-9)" }}
    >
      <SectionHeader kicker="Index" title="Publications" />

      <p
        style={{
          fontSize: "var(--fs-md)",
          lineHeight: 1.65,
          color: "var(--fg-2)",
          maxWidth: "var(--content-narrow)",
          margin: `calc(-1 * var(--space-6)) 0 0`,
          textWrap: "pretty" as React.CSSProperties["textWrap"],
        }}
      >
        Selected and recent publications from the lab. We aim to release
        artifacts and writeups alongside every paper; click{" "}
        <span className="font-mono" style={{ fontSize: "var(--fs-xs)" }}>
          pdf
        </span>
        ,{" "}
        <span className="font-mono" style={{ fontSize: "var(--fs-xs)" }}>
          bib
        </span>
        , or{" "}
        <span className="font-mono" style={{ fontSize: "var(--fs-xs)" }}>
          code
        </span>{" "}
        on any entry.
      </p>

      {/* Filters */}
      <div
        className="flex flex-wrap gap-[var(--space-5)]"
        style={{
          paddingBottom: "var(--space-5)",
          borderBottom: "1px solid var(--rule)",
          marginTop: "calc(-1 * var(--space-6))",
        }}
      >
        <FilterGroup label="Topic">
          {PUB_TOPICS.map((t) => (
            <Chip
              key={t.id}
              active={topic === t.id}
              onClick={() => setTopic(t.id)}
            >
              {t.label}
            </Chip>
          ))}
        </FilterGroup>
        <FilterGroup label="Year">
          <Chip active={year === "all"} onClick={() => setYear("all")}>
            All
          </Chip>
          {years.map((y) => (
            <Chip
              key={y}
              active={String(year) === String(y)}
              onClick={() => setYear(String(y))}
            >
              {y}
            </Chip>
          ))}
        </FilterGroup>
      </div>

      {/* Result count */}
      <div
        className="font-mono"
        style={{
          fontSize: "var(--fs-xs)",
          color: "var(--muted)",
          marginTop: "calc(-1 * var(--space-6))",
        }}
      >
        {filtered.length} {filtered.length === 1 ? "result" : "results"}
        {query && <> · matching &ldquo;{query}&rdquo;</>}
      </div>

      {/* Grouped list */}
      {Object.entries(grouped)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([y, items]) => (
          <section
            key={y}
            className="flex flex-col"
            style={{ gap: "var(--space-3)" }}
          >
            <h3
              className="font-mono uppercase m-0"
              style={{
                fontSize: "var(--fs-sm)",
                color: "var(--muted)",
                letterSpacing: "0.1em",
                paddingBottom: 8,
                borderBottom: "1px solid var(--rule)",
              }}
            >
              {y}
            </h3>
            <ol className="list-none m-0 p-0">
              {items.map((p, i) => (
                <PubRow key={i} pub={p} />
              ))}
            </ol>
          </section>
        ))}

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
          No publications match the current filters.
        </div>
      )}
    </article>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center flex-wrap gap-[var(--space-3)]">
      <span
        className="font-mono uppercase"
        style={{
          fontSize: "var(--fs-xs)",
          color: "var(--muted)",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </span>
      <div className="flex gap-1 flex-wrap">{children}</div>
    </div>
  );
}

export default function PublicationsPage() {
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
        <PublicationsContent />
      </Suspense>
    </div>
  );
}
