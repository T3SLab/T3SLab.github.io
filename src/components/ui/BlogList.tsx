"use client";

import { useState } from "react";
import type { BlogPost } from "@/data";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");

  const filtered = posts.filter((b) => {
    if (!query) return true;
    return (b.title + " " + b.author + " " + b.excerpt + " " + b.tag)
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  return (
    <>
      <input
        type="search"
        placeholder="Search posts…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="font-mono"
        style={{
          width: "100%",
          maxWidth: "28rem",
          padding: "var(--space-3) var(--space-4)",
          background: "var(--bg)",
          border: "1px solid var(--rule)",
          borderRadius: "var(--r-sm)",
          fontSize: "var(--fs-sm)",
          color: "var(--fg)",
          outline: "none",
        }}
      />

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
    </>
  );
}
