"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid #3d3d4e",
        padding: isMobile ? "1.25rem 1.5rem" : "1.5rem 6rem",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: isMobile ? "0.75rem" : "0",
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "0.8rem",
        color: "#9ca3af",
        backgroundColor: "#2d2d3a",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      {/* Left: copyright */}
      <span>
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "#c084fc" }}>Elias</span>. All rights reserved.
      </span>

      {/* Center: nav links */}
      <div
        style={{
          display: "flex",
          gap: "1.25rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["home", "works", "about-me", "contacts"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              letterSpacing: "0.03em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#c084fc")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#9ca3af")
            }
          >
            #{item}
          </a>
        ))}
      </div>

      {/* Right: made with */}
      <span>
        Made with <span style={{ color: "#c084fc" }}>Next.js</span>
      </span>
    </footer>
  );
}
