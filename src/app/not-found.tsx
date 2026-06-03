import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center flex-1 text-center page-enter"
      style={{ padding: "var(--space-9) var(--gutter)" }}
    >
      <div
        className="font-mono uppercase"
        style={{
          fontSize: "var(--fs-xs)",
          color: "var(--muted)",
          letterSpacing: "0.12em",
          marginBottom: "var(--space-3)",
        }}
      >
        404
      </div>
      <h1
        className="font-serif font-normal m-0"
        style={{
          fontSize: "var(--fs-xl)",
          color: "var(--fg)",
          letterSpacing: "-0.015em",
          marginBottom: "var(--space-5)",
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontSize: "var(--fs-md)",
          color: "var(--fg-2)",
          marginBottom: "var(--space-6)",
        }}
      >
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-medium rounded-(--r-md) transition-transform duration-120 hover:-translate-y-px"
        style={{
          fontSize: 14,
          border: "1px solid var(--fg)",
          background: "var(--fg)",
          color: "var(--bg)",
          padding: "10px 16px",
          textDecoration: "none",
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
