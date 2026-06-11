"use client";

import { useState, useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Wordmark } from "@/components/ui/Wordmark";
import { Icon } from "@/components/ui/Icon";
import { SearchBox } from "./SearchBox";

const TABS = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/members", label: "Members" },
  { href: "/ctfs", label: "CTFs" },
  { href: "/projects", label: "Projects" },
  { href: "/news", label: "News" },
  { href: "/blogs", label: "Blog" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} theme`
          : "Toggle theme"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-[var(--r-md)] cursor-pointer transition-[background,border-color,color] duration-150"
      style={{
        appearance: "none",
        border: "1px solid var(--rule)",
        background: "var(--bg-2)",
        width: 32,
        height: 32,
        color: "var(--fg-2)",
        flexShrink: 0,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "var(--bg-3)";
        e.currentTarget.style.color = "var(--fg)";
        e.currentTarget.style.borderColor = "var(--rule-strong)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "var(--bg-2)";
        e.currentTarget.style.color = "var(--fg-2)";
        e.currentTarget.style.borderColor = "var(--rule)";
      }}
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      <Icon name={mounted ? (isDark ? "sun" : "moon") : "moon"} size={15} />
    </button>
  );
}

export function Topbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50"
        style={{
          background: "color-mix(in oklab, var(--bg) 88%, transparent)",
          backdropFilter: "saturate(160%) blur(14px)",
          WebkitBackdropFilter: "saturate(160%) blur(14px)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div
          className="flex items-center gap-[var(--space-5)]"
          style={{
            maxWidth: "var(--content-max)",
            margin: "0 auto",
            padding: `${scrolled ? 8 : 14}px var(--gutter)`,
            transition: "padding 0.2s ease",
          }}
        >
          {/* Brand */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 flex-shrink-0"
            style={{ color: "var(--fg)" }}
          >
            <Wordmark size={15} />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-0.5 flex-1"
            style={{ marginLeft: "var(--space-4)" }}
            aria-label="Primary"
          >
            {TABS.map((tab) => {
              const isActive =
                tab.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(tab.href);

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className="relative inline-flex items-center rounded-[var(--r-md)] font-medium transition-[color,background] duration-150"
                  style={{
                    fontSize: 14,
                    color: isActive ? "var(--fg)" : "var(--muted)",
                    padding: "8px 12px",
                    textDecoration: "none",
                  }}
                  aria-current={isActive ? "page" : undefined}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "var(--fg)";
                    e.currentTarget.style.background = "var(--bg-2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = isActive
                      ? "var(--fg)"
                      : "var(--muted)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {tab.label}
                  {isActive && (
                    <span
                      className="absolute rounded-[2px]"
                      style={{
                        left: 12,
                        right: 12,
                        bottom: scrolled ? -9 : -15,
                        height: 2,
                        background: "var(--accent)",
                        transition: "bottom 0.2s ease",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Tools */}
          <div className="flex items-center gap-1.5 ml-auto md:ml-0">
            <Suspense>
              <SearchBox />
            </Suspense>
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-[var(--r-md)] cursor-pointer transition-[background,border-color,color] duration-150"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMobileOpen((v) => !v)}
              style={{
                appearance: "none",
                border: "1px solid var(--rule)",
                background: "var(--bg-2)",
                width: 32,
                height: 32,
                color: "var(--fg-2)",
              }}
            >
              <Icon name={mobileOpen ? "x" : "menu"} size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer — rendered outside header so it can be fixed full-height */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.35)" }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.nav
              key="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-50 flex flex-col"
              style={{
                width: "min(320px, 85vw)",
                background: "color-mix(in oklab, var(--bg) 88%, transparent)",
                backdropFilter: "saturate(160%) blur(24px)",
                WebkitBackdropFilter: "saturate(160%) blur(24px)",
                borderLeft: "1px solid var(--rule)",
                paddingTop: "var(--space-7)",
                paddingBottom: "var(--space-7)",
              }}
              aria-label="Primary mobile"
            >
              {/* Close button */}
              <div
                className="flex items-center justify-between"
                style={{ padding: "0 var(--gutter) var(--space-5)", borderBottom: "1px solid var(--rule)", marginBottom: "var(--space-3)" }}
              >
                <Wordmark size={13} />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation"
                  className="inline-flex items-center justify-center rounded-[var(--r-md)]"
                  style={{
                    appearance: "none",
                    border: "1px solid var(--rule)",
                    background: "var(--bg-2)",
                    width: 32,
                    height: 32,
                    color: "var(--fg-2)",
                    cursor: "pointer",
                  }}
                >
                  <Icon name="x" size={15} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col" style={{ padding: "0 var(--gutter)" }}>
                {TABS.map((tab) => {
                  const isActive =
                    tab.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(tab.href);

                  return (
                    <Link
                      key={tab.href}
                      href={tab.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between"
                      style={{
                        fontSize: 16,
                        color: isActive ? "var(--accent)" : "var(--fg)",
                        padding: "14px 0",
                        borderBottom: "1px solid var(--rule)",
                        textDecoration: "none",
                      }}
                    >
                      <span>{tab.label}</span>
                      <Icon name="arrow" size={14} />
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
