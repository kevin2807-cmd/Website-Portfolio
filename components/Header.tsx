"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "about-me", href: "/about-me" },
  { label: "contacts", href: "/contacts" },
];

const SOCIAL_ICONS = [
  {
    label: "GitHub",
    href: "https://github.com/kevin2807-cmd",
    path: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kevin-leonard-berutu-64aa64288/",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/kevinleonard28_",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

function Logo() {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#e0e0e0",
          letterSpacing: "0.05em",
          fontFamily: "'Courier New', Courier, monospace",
          gap: "8px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "18px",
            height: "18px",
            border: "2px solid #e0e0e0",
            borderRadius: "3px",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "2px",
              left: "2px",
              width: "8px",
              height: "8px",
              backgroundColor: "#e0e0e0",
              borderRadius: "1px",
            }}
          />
        </span>
        Kevin
      </div>
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Kunci scroll saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0.9rem 1.5rem" : "1.5rem 10rem",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          backgroundColor: "#2d2d3a",
        }}
      >
        <Logo />

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {NAV_LINKS.map((link) => {
              // Logika Aktif: Highlight jika path cocok
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.split("#")[0]) &&
                    link.href !== "/";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    color:
                      isActive || hoveredLink === link.label
                        ? "#e0e0e0"
                        : "#9ca3af",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontFamily: "'Courier New', Courier, monospace",
                    fontWeight: "normal",
                    transition: "color 0.2s",
                  }}
                >
                  <span style={{ color: "#c084fc" }}>#</span>
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

        {/* Mobile Toggle */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#e0e0e0",
            }}
          >
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
              </svg>
            )}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#2d2d3a",
            zIndex: 190,
            display: "flex",
            flexDirection: "column",
            padding: "6rem 2rem",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.split("#")[0]);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: isActive ? "#e0e0e0" : "#9ca3af",
                    textDecoration: "none",
                    fontSize: "1.75rem",
                    fontFamily: "'Courier New', Courier, monospace",
                  }}
                >
                  <span style={{ color: "#c084fc" }}>#</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Sidebar Sosial (Hanya Desktop) */}
      {!isMobile && (
        <>
          <div
            style={{
              position: "fixed",
              left: "2.9rem",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              zIndex: 50,
            }}
          >
            {SOCIAL_ICONS.map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                style={{ color: "#9ca3af", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
          <div
            style={{
              position: "fixed",
              left: "3.5rem",
              top: "4rem",
              bottom: "35rem",
              width: "1.5px",
              backgroundColor: "#3d3d4e",
              zIndex: 40,
            }}
          />
        </>
      )}
    </>
  );
}
