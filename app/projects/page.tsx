"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { completeApps } from "@/data/Projects";
import { smallProjects } from "@/data/Projects";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    setMounted(true);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#2d2d3a",
        color: "#e0e0e0",
        fontFamily: "'Courier New', Courier, monospace",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: isMobile ? "2rem 1.5rem" : "8rem 10rem",
        position: "relative",
      }}
    >
      {/* Dekorasi Kiri Atas */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: "8rem",
            left: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(5, 12px)",
            gap: "8px",
            opacity: 0.6,
          }}
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`dot-top-${i}`}
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#9ca3af",
              }}
            />
          ))}
        </div>
      )}

      {/* Header Halaman */}
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          marginBottom: "4rem",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#e0e0e0",
          }}
        >
          <span style={{ color: "#c084fc" }}>/</span>projects
        </h1>
        <p style={{ fontSize: "0.95rem", color: "#9ca3af" }}>
          List of my projects
        </p>
      </div>

      {/* ── Complete Apps Section ── */}
      <section
        id="complete-apps"
        style={{
          marginBottom: "5rem",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.5rem" : "2rem",
            fontWeight: "bold",
            color: "#e0e0e0",
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: "#c084fc" }}>#</span>complete-apps
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {completeApps.map((project) => (
            <div
              key={project.id}
              style={{
                border: "1px solid #4a4a5a",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "transparent",
              }}
            >
              {/* Thumbnail Image */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  position: "relative",
                  borderBottom: "1px solid #4a4a5a",
                  backgroundColor: "#1e1e28",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9ca3af",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Tech Stack */}
              <div
                style={{
                  padding: "0.6rem",
                  borderBottom: "1px solid #4a4a5a",
                  fontSize: "0.8rem",
                  color: "#9ca3af",
                }}
              >
                {project.tech}
              </div>

              {/* Deskripsi & Tombol */}
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "0.8rem",
                    color: "#e0e0e0",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#9ca3af",
                    marginBottom: "1.5rem",
                    lineHeight: 1.5,
                  }}
                >
                  {project.desc}
                </p>
                <div
                  style={{ marginTop: "auto", display: "flex", gap: "1rem" }}
                >
                  {project.buttons.map((btn, idx) => (
                    <a
                      key={idx}
                      href={btn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.4rem 1rem",
                        backgroundColor: btn.outline
                          ? "transparent"
                          : "#4a4a5a",
                        color: btn.outline ? "#e0e0e0" : "#9ca3af",
                        border: `1px solid ${btn.outline ? "#c084fc" : "#4a4a5a"}`,
                        fontFamily: "'Courier New', Courier, monospace",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        textDecoration: "none",
                        display: "inline-block",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (btn.outline) {
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "#c084fc";
                          (e.currentTarget as HTMLElement).style.color =
                            "#2d2d3a";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (btn.outline) {
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "transparent";
                          (e.currentTarget as HTMLElement).style.color =
                            "#e0e0e0";
                        }
                      }}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Small Projects Section ── */}
      <section
        id="small-projects"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.6s, transform 1s ease 0.6s",
          position: "relative",
        }}
      >
        {/* Dekorasi Kanan Bawah */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              top: "5rem",
              right: "-5rem",
              display: "grid",
              gridTemplateColumns: "repeat(5, 12px)",
              gap: "8px",
              opacity: 0.6,
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`dot-bot-${i}`}
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "#9ca3af",
                }}
              />
            ))}
          </div>
        )}

        <h2
          style={{
            fontSize: isMobile ? "1.5rem" : "2rem",
            fontWeight: "bold",
            color: "#e0e0e0",
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: "#c084fc" }}>#</span>small-projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {smallProjects.map((project) => (
            <div
              key={project.id}
              style={{
                border: "1px solid #4a4a5a",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "transparent",
              }}
            >
              {/* Tech Stack (Langsung tanpa gambar) */}
              <div
                style={{
                  padding: "0.6rem",
                  borderBottom: "1px solid #4a4a5a",
                  fontSize: "0.8rem",
                  color: "#9ca3af",
                }}
              >
                {project.tech}
              </div>

              {/* Deskripsi & Tombol */}
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "0.8rem",
                    color: "#e0e0e0",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#9ca3af",
                    marginBottom: "1.5rem",
                    lineHeight: 1.5,
                  }}
                >
                  {project.desc}
                </p>
                <div
                  style={{ marginTop: "auto", display: "flex", gap: "1rem" }}
                >
                  {project.buttons.map((btn, idx) => (
                    <a
                      key={idx}
                      href={btn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.4rem 1rem",
                        backgroundColor: btn.outline
                          ? "transparent"
                          : "#4a4a5a",
                        color: btn.outline ? "#e0e0e0" : "#9ca3af",
                        border: `1px solid ${btn.outline ? "#c084fc" : "#4a4a5a"}`,
                        fontFamily: "'Courier New', Courier, monospace",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        textDecoration: "none",
                        display: "inline-block",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (btn.outline) {
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "#c084fc";
                          (e.currentTarget as HTMLElement).style.color =
                            "#2d2d3a";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (btn.outline) {
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "transparent";
                          (e.currentTarget as HTMLElement).style.color =
                            "#e0e0e0";
                        }
                      }}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
