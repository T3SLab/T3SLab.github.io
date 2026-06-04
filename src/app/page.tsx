import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { PortraitSlot } from "@/components/ui/PortraitSlot";
import { PubRow } from "@/components/ui/PubRow";
import { LAB, STATS, PI, NEWS, PUBLICATIONS } from "@/data";

export const metadata: Metadata = {
  title: "T₃S Lab — Trusted Systems, Security & Software",
};

export default function HomePage() {
  return (
    <div
      className="page-enter w-full mx-auto"
      style={{
        maxWidth: "var(--content-max)",
        padding: "var(--space-8) var(--gutter)",
      }}
    >
      <article className="flex flex-col" style={{ gap: "var(--space-9)" }}>
        <Hero />
        <StatsStrip />
        <DirectorSection />
        <LatestPublications />
        <NewsSection />
      </article>
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden isolate"
      style={{
        margin: "calc(-1 * var(--space-8)) calc(-1 * var(--gutter)) 0",
        padding: "clamp(28px, 5vw, 64px) var(--gutter) var(--space-6)",
      }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow" />
      </div>

      {/* Center content */}
      <div
        className="flex flex-col items-center text-center mx-auto"
        style={{ maxWidth: 760 }}
      >
        {/* Logo plate */}
        <div
          className="inline-flex rounded-xl"
          style={{
            padding: 14,
            marginBottom: "var(--space-5)",
            border: "1px solid var(--rule)",
            background: "color-mix(in oklab, var(--bg) 75%, transparent)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <Logo size={72} />
        </div>

        {/* Display headline */}
        <h1
          className="m-0 font-serif font-normal"
          style={{
            fontSize: "clamp(64px, 11vw, 132px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            color: "var(--fg)",
          }}
        >
          T
          <sub
            className="font-mono font-normal"
            style={{
              fontSize: "0.42em",
              letterSpacing: 0,
              verticalAlign: "baseline",
              color: "var(--accent)",
              margin: "0 0.04em",
              position: "relative",
              top: "-0.05em",
            }}
          >
            3
          </sub>
          S
          <span
            style={{
              color: "var(--muted-2)",
              fontWeight: 300,
              margin: "0 0.04em",
            }}
          >
            ·
          </span>
          Lab
        </h1>

        {/* Full name kicker */}
        <div
          className="font-mono uppercase"
          style={{
            marginTop: "var(--space-3)",
            color: "var(--muted)",
            letterSpacing: "0.18em",
            fontSize: "var(--fs-xs)",
          }}
        >
          {LAB.full}
        </div>

        {/* Tagline */}
        <p
          className="font-serif"
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            lineHeight: 1.22,
            letterSpacing: "-0.012em",
            color: "var(--fg)",
            textWrap: "balance" as React.CSSProperties["textWrap"],
            margin: "var(--space-6) 0 var(--space-4)",
            maxWidth: "18em",
          }}
        >
          {LAB.tagline}
        </p>

        {/* Mission */}
        <p
          className="m-0"
          style={{
            fontSize: "var(--fs-md)",
            lineHeight: 1.6,
            color: "var(--fg-2)",
            textWrap: "pretty" as React.CSSProperties["textWrap"],
            maxWidth: "38em",
          }}
        >
          {LAB.mission}
        </p>

        {/* CTA row */}
        <div
          className="flex flex-wrap gap-3 justify-center"
          style={{ marginTop: "var(--space-6)" }}
        >
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 font-medium rounded-(--r-md) transition-transform duration-[120ms] hover:-translate-y-px"
            style={{
              fontSize: 14,
              border: "1px solid var(--fg)",
              background: "var(--fg)",
              color: "var(--bg)",
              padding: "10px 16px",
              textDecoration: "none",
            }}
          >
            Read our work <Icon name="arrow" size={14} />
          </Link>
          <Link
            href="/members"
            className="btn-ghost-link inline-flex items-center gap-2 font-medium rounded-(--r-md)"
            style={{
              fontSize: 14,
              padding: "10px 16px",
              textDecoration: "none",
            }}
          >
            Meet the lab
          </Link>
        </div>
      </div>

      {/* Meta row */}
      <aside
        style={{
          marginTop: "var(--space-8)",
          paddingTop: "var(--space-5)",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <dl
          className="m-0 p-0 grid gap-(--space-5) grid-cols-2 md:grid-cols-4"
        >
          {[
            { dt: "Director", dd: PI.name },
            { dt: "Department", dd: LAB.department },
            { dt: "Institution", dd: LAB.university },
            {
              dt: "Contact",
              dd: (
                <a
                  href={`mailto:${LAB.email}`}
                  style={{ color: "var(--link)" }}
                >
                  {LAB.email}
                </a>
              ),
            },
          ].map(({ dt, dd }) => (
            <div key={dt} className="flex flex-col gap-1">
              <dt
                className="font-mono uppercase"
                style={{
                  fontSize: "var(--fs-xs)",
                  letterSpacing: "0.08em",
                  color: "var(--muted)",
                }}
              >
                {dt}
              </dt>
              <dd
                className="m-0"
                style={{ fontSize: 14, color: "var(--fg-2)" }}
              >
                {dd}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}

function StatsStrip() {
  return (
    <section
      className="grid grid-cols-2 md:grid-cols-4"
      style={{
        gap: 1,
        background: "var(--rule)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      {STATS.map((s) => (
        <div
          key={s.k}
          className="flex flex-col"
          style={{
            padding: "var(--space-5) var(--space-4)",
            background: "var(--bg)",
          }}
        >
          <div
            className="font-serif font-normal"
            style={{
              fontSize: "var(--fs-2xl)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: 6,
              color: "var(--fg)",
            }}
          >
            {s.v}
          </div>
          <div style={{ fontSize: 14, color: "var(--fg-2)" }}>{s.k}</div>
          <div
            className="font-mono"
            style={{
              fontSize: "var(--fs-xs)",
              color: "var(--muted)",
              marginTop: 2,
            }}
          >
            {s.sub}
          </div>
        </div>
      ))}
    </section>
  );
}

function DirectorSection() {
  return (
    <section>
      <SectionHeader kicker="Principal Investigator" title="Director" />
      <div className="grid gap-(--space-7) items-start grid-cols-1 md:grid-cols-[260px_1fr]">
        {/* Portrait + links */}
        <div className="flex flex-col gap-(--space-4)">
          <PortraitSlot src="/assets/pictures/armanuzzaman_portrait.jpg" alt="Dr. Md. Armanuzzaman" width={260} height={320} />
          <div className="flex flex-col gap-1.5 font-mono">
            {PI.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="director-link inline-flex items-center gap-1.5"
                style={{
                  fontSize: "var(--fs-xs)",
                  padding: "2px 0",
                  letterSpacing: "0.02em",
                }}
              >
                {l.label} <Icon name="ext" size={11} />
              </a>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div>
          <h3
            className="font-serif font-normal m-0"
            style={{
              fontSize: "var(--fs-lg)",
              letterSpacing: "-0.005em",
              color: "var(--fg)",
              marginBottom: 6,
            }}
          >
            {PI.name}
          </h3>
          <div
            className="font-mono"
            style={{
              fontSize: "var(--fs-xs)",
              color: "var(--muted)",
              marginTop: 2,
            }}
          >
            {PI.title} · {PI.pronouns}
          </div>
          <p
            style={{
              fontSize: "var(--fs-md)",
              lineHeight: 1.65,
              color: "var(--fg-2)",
              textWrap: "pretty" as React.CSSProperties["textWrap"],
              margin: "var(--space-4) 0 0",
            }}
          >
            {PI.bio}
          </p>
        </div>
      </div>
    </section>
  );
}

function LatestPublications() {
  return (
    <section>
      <SectionHeader
        kicker="Recent"
        title="Latest publications"
        right={
          <Link
            href="/publications"
            className="link-muted-accent inline-flex items-center gap-1 font-mono"
            style={{
              fontSize: "var(--fs-xs)",
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
          >
            All publications <Icon name="arrow" size={12} />
          </Link>
        }
      />
      <ol className="list-none m-0 p-0">
        {PUBLICATIONS.slice(0, 4).map((pub, i) => (
          <PubRow key={i} pub={pub} />
        ))}
      </ol>
    </section>
  );
}

function NewsSection() {
  return (
    <section style={{ paddingBottom: "var(--space-9)" }}>
      <SectionHeader kicker="Newsroom" title="News & announcements" />
      <ul className="list-none m-0 p-0">
        {NEWS.map((n, i) => (
          <li
            key={i}
            className="grid items-baseline gap-(--space-5)"
            style={{
              gridTemplateColumns: "120px 1fr",
              padding: "var(--space-4) 0",
              borderTop: "1px solid var(--rule)",
              ...(i === NEWS.length - 1
                ? { borderBottom: "1px solid var(--rule)" }
                : {}),
            }}
          >
            <span
              className="font-mono uppercase"
              style={{
                fontSize: "var(--fs-xs)",
                color: "var(--muted)",
                letterSpacing: "0.06em",
              }}
            >
              {n.date}
            </span>
            <span style={{ fontSize: "var(--fs-md)", color: "var(--fg-2)" }}>
              {n.body}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
