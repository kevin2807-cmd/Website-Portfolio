"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/Projects";

const skillsData = {
  col1: [
    {
      title: "Languages",
      items: ["TypeScript Lua", "Python JavaScript", "Golang C++"],
    },
  ],
  col2: [
    {
      title: "Databases",
      items: ["SQLite PostgreSQL", "Mongo Redis"],
    },
    {
      title: "CyberSecurity Tools",
      items: [
        "Nmap Metasploit johnThe Ripper",
        "Wireshark BurpSuite Aircrack-ng",
      ],
    },
  ],
  col3: [
    {
      title: "Tools",
      items: [
        "VSCode Neovim Linux",
        "Parrot Kali Arch",
        "Git Docker Kubernetes",
      ],
    },
    {
      title: "Frameworks",
      items: [
        "React Vue",
        "Disnake Discord.js",
        "Flask Express.js",
        "Nest.js Laravel",
      ],
    },
  ],
};

export default function Home() {
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
      }}
    >
      {/* ── Hero Section ── */}
      <section
        id="home"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          paddingLeft: isMobile ? "1.5rem" : "10rem",
          paddingRight: isMobile ? "1.5rem" : "10rem",
          paddingTop: isMobile ? "5.5rem" : "5rem",
          paddingBottom: isMobile ? "2rem" : "0",
          position: "relative",
          gap: isMobile ? "0" : "0",
        }}
      >
        {/* Left / Top: Text */}
        <div
          style={{
            flex: isMobile ? "unset" : "1",
            maxWidth: isMobile ? "100%" : "480px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "1.75rem" : "2rem",
              fontWeight: "bold",
              lineHeight: 1.35,
              marginBottom: "1rem",
              color: "#e0e0e0",
            }}
          >
            Kevin is a{" "}
            <span style={{ color: "#c084fc" }}>Software Engineer</span> and
            <br />
            <span style={{ color: "#c084fc" }}>Cyber Security Enthusiast</span>
          </h1>

          <p
            style={{
              fontSize: "0.85rem",
              color: "#9ca3af",
              lineHeight: 1.7,
              marginBottom: isMobile ? "1.5rem" : "2rem",
              letterSpacing: "0.02em",
            }}
          >
            He architects secure, high-performance applications
            {isMobile ? " " : <br />}
            where robust systems meet modern web experiences.
          </p>

          {/* Contact button — hidden on mobile (below image instead) */}
          {!isMobile && (
            <div>
              <a
                href="/contacts"
                rel="noopener noreferrer"
                style={{
                  border: "1px solid #e0e0e0",
                  backgroundColor: "transparent",
                  color: "#e0e0e0",
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.85rem",
                  fontFamily: "'Courier New', Courier, monospace",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  transition: "background-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#e0e0e0";
                  (e.currentTarget as HTMLElement).style.color = "#2d2d3a";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#e0e0e0";
                }}
              >
                Contact me !!
              </a>
            </div>
          )}
        </div>

        {/* Right / Bottom: Visual */}
        <div
          style={{
            flex: isMobile ? "unset" : "1",
            position: "relative",
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-end",
            alignItems: "flex-end",
            height: isMobile ? "340px" : "520px",
            width: isMobile ? "100%" : "auto",
            marginTop: isMobile ? "1.5rem" : "0",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.9s ease 0.2s",
          }}
        >
          {/* Geometric outline squares */}
          <div
            style={{
              position: "absolute",
              top: isMobile ? "20px" : "60px",
              left: isMobile ? "40px" : "400px",
              zIndex: 20,
            }}
          >
            <div
              style={{
                width: isMobile ? "100px" : "150px",
                height: isMobile ? "50px" : "100px",
                border: "1.5px solid #c084fc",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            <div
              style={{
                width: isMobile ? "50px" : "70px",
                height: isMobile ? "70px" : "100px",
                border: "1.5px solid #c084fc",
                position: "absolute",
                top: "22px",
                left: "22px",
              }}
            />
            <div
              style={{
                width: isMobile ? "35px" : "50px",
                height: isMobile ? "35px" : "50px",
                border: "1.5px solid #c084fc",
                position: "absolute",
                top: "44px",
                left: "14px",
              }}
            />
          </div>

          {/* Dot grid */}
          <div
            style={{
              position: "absolute",
              bottom: isMobile ? "90px" : "80px",
              right: isMobile ? "10px" : "5px",
              zIndex: 20,
              display: "grid",
              gridTemplateColumns: `repeat(5, 10px)`,
              gap: "10px",
            }}
          >
            {Array.from({ length: isMobile ? 25 : 25 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#9ca3af",
                  opacity: 0.6,
                }}
              />
            ))}
          </div>

          {/* Avatar card */}
          <div
            style={{
              position: "relative",
              zIndex: 3,
              width: isMobile ? "220px" : "280px",
              height: isMobile ? "310px" : "400px",
            }}
          >
            {/* Photo placeholder */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "4px",
                overflow: "hidden",
                backgroundColor: "#1e1e28",
              }}
            >
              <Image
                src="/Poto.png"
                alt="Kevin Leonard Berutu"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
              {/* Gradient overlay on top of the photo */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 60%, #2d2d3a 100%)",
                  zIndex: 1,
                }}
              />
            </div>
            {/* "Currently working on" badge */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "-10px",
                right: "-10px",
                backgroundColor: "#e0e0e0",
                color: "#1e1e28",
                padding: "0.5rem 1rem",
                fontSize: isMobile ? "0.75rem" : "0.8rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                zIndex: 4,
                letterSpacing: "0.02em",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#c084fc",
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />
              Currently working on <strong>Portfolio</strong>
            </div>
          </div>
        </div>

        {/* Mobile-only contact button (below the image) */}
        {isMobile && (
          <button
            style={{
              border: "1px solid #e0e0e0",
              backgroundColor: "transparent",
              color: "#e0e0e0",
              padding: "0.65rem 1.6rem",
              fontSize: "0.85rem",
              fontFamily: "'Courier New', Courier, monospace",
              cursor: "pointer",
              letterSpacing: "0.05em",
              marginTop: "2rem",
              alignSelf: "flex-start",
              transition: "background-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "#e0e0e0";
              (e.currentTarget as HTMLElement).style.color = "#2d2d3a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLElement).style.color = "#e0e0e0";
            }}
          >
            Contact me !!
          </button>
        )}
      </section>

      {/* ── Quote Section ── */}
      <section
        style={{
          padding: isMobile ? "3rem 1.5rem" : "4rem 6rem 4rem 8rem",
          position: "relative",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 0.4s",
        }}
      >
        {/* Decorative square — desktop only */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              right: "3rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: "70px",
              height: "70px",
              border: "1.5px solid #4a4a5a",
            }}
          />
        )}

        <div
          style={{
            maxWidth: isMobile ? "100%" : "600px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-1rem",
              left: "-0.75rem",
              fontSize: "3rem",
              color: "#9ca3af",
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            "
          </div>

          <div style={{ border: "1px solid #4a4a5a", padding: "1.5rem 2rem" }}>
            <p
              style={{
                fontSize: isMobile ? "0.85rem" : "0.95rem",
                color: "#e0e0e0",
                letterSpacing: "0.03em",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Success is not final, failure is not fatal: It is the courage to
              continue that counts.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              style={{
                border: "1px solid #4a4a5a",
                borderTop: "none",
                padding: "0.5rem 1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "#9ca3af",
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                }}
              >
                "
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "#e0e0e0",
                  letterSpacing: "0.05em",
                }}
              >
                - Winston Churchill
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section
        id="projects"
        style={{
          padding: isMobile ? "3rem 1.5rem" : "4rem 10rem",
          position: "relative",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.6s, transform 1s ease 0.6s",
        }}
      >
        {/* Dekorasi Kotak Sebagian di Kanan */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "60px",
              height: "120px",
              border: "1.5px solid #4a4a5a",
              borderRight: "none",
            }}
          />
        )}

        {/* Header Projects */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <h2
              style={{
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: "bold",
                color: "#e0e0e0",
                marginRight: "1rem",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#c084fc" }}>#</span>projects
            </h2>
            <div
              style={{
                height: "1px",
                backgroundColor: "#c084fc",
                flex: isMobile ? 1 : 0.5,
                opacity: 0.5,
              }}
            />
          </div>
          <a
            href="/projects"
            style={{
              fontSize: "0.9rem",
              color: "#e0e0e0",
              textDecoration: "none",
              whiteSpace: "nowrap",
              marginLeft: "1rem",
            }}
          >
            View all ~~&gt;
          </a>
        </div>

        {/* Grid Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "1.5rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              style={{
                border: "1px solid #4a4a5a",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "transparent",
              }}
            >
              {/* Gambar / Thumbnail */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  position: "relative",
                  borderBottom: "1px solid #4a4a5a",
                  backgroundColor: "#1e1e28",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Stack Teknologi */}
              <div
                style={{
                  padding: "0.6rem",
                  borderBottom: "1px solid #4a4a5a",
                  fontSize: "0.8rem",
                  color: "#9ca3af",
                  lineHeight: 1.5,
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
                  {project.description}
                </p>

                {/* Pembungkus Tombol (mendorong tombol ke bawah jika teks pendek) */}
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

      {/* ── Skills Section ── */}
      <section
        id="skills"
        style={{
          padding: isMobile ? "3rem 1.5rem" : "4rem 10rem",
          position: "relative",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.8s, transform 1s ease 0.8s",
        }}
      >
        {/* Header Skills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: "bold",
              color: "#e0e0e0",
              marginRight: "2rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#c084fc" }}>#</span>skills
          </h2>
          <div
            style={{
              height: "1px",
              backgroundColor: "#c084fc",
              width: isMobile ? "30%" : "200px",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Content Wrapper */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "2rem",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          {/* Bagian Kiri: Ilustrasi Bentuk Geometris */}
          <div
            style={{
              flex: 1,
              position: "relative",
              width: "100%",
              minHeight: isMobile ? "250px" : "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{ position: "relative", width: "250px", height: "250px" }}
            >
              {/* Dot Grid 1 (Kiri Atas) */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "0",
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 12px)",
                  gap: "10px",
                  opacity: 0.6,
                }}
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={`dot1-${i}`}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#9ca3af",
                    }}
                  />
                ))}
              </div>

              {/* Kotak Outline Besar (Kanan Atas) */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "10px",
                  width: "80px",
                  height: "80px",
                  border: "1.5px solid #9ca3af",
                  opacity: 0.5,
                }}
              />

              {/* Kotak Ungu Overlap (Kiri Bawah) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "20px",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    border: "1.5px solid #c084fc",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "1.5px solid #c084fc",
                    position: "absolute",
                    top: "-20px",
                    left: "25px",
                    backgroundColor: "#2d2d3a",
                  }}
                />
              </div>

              {/* Dot Grid 2 (Tengah Bawah) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "110px",
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 12px)",
                  gap: "10px",
                  opacity: 0.6,
                }}
              >
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={`dot2-${i}`}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#9ca3af",
                    }}
                  />
                ))}
              </div>

              {/* Kotak Outline Kecil (Kanan Bawah) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "35px",
                  right: "20px",
                  width: "45px",
                  height: "45px",
                  border: "1.5px solid #9ca3af",
                  opacity: 0.5,
                }}
              />
            </div>
          </div>

          {/* Bagian Kanan: Daftar Skills */}
          <div
            style={{
              flex: 2,
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "1.2rem",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            {/* Helper function untuk me-render kotak skill */}
            {[skillsData.col1, skillsData.col2, skillsData.col3].map(
              (column, colIndex) => (
                <div
                  key={colIndex}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                    flex: isMobile ? "1" : "0 1 200px",
                  }}
                >
                  {column.map((skill, index) => (
                    <div
                      key={index}
                      style={{
                        border: "1px solid #4a4a5a",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Judul Kategori */}
                      <div
                        style={{
                          padding: "0.5rem",
                          borderBottom: "1px solid #4a4a5a",
                          color: "#e0e0e0",
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                        }}
                      >
                        {skill.title}
                      </div>
                      {/* Isi Item Skills */}
                      <div
                        style={{
                          padding: "0.5rem",
                          color: "#9ca3af",
                          fontSize: "0.85rem",
                          lineHeight: 1.6,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {skill.items.map((item, i) => (
                          <span key={i}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── About Me Section ── */}
      <section
        id="about-me"
        style={{
          padding: isMobile ? "3rem 1.5rem" : "4rem 10rem",
          position: "relative",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 1s, transform 1s ease 1s",
        }}
      >
        {/* Dekorasi Dot Grid Kanan Jauh */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              right: "2rem",
              top: "60%",
              display: "grid",
              gridTemplateColumns: "repeat(5, 12px)",
              gap: "10px",
              opacity: 0.6,
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`dot-far-right-${i}`}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#9ca3af",
                }}
              />
            ))}
          </div>
        )}

        {/* Header About Me */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: "bold",
              color: "#e0e0e0",
              marginRight: "2rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#c084fc" }}>#</span>about-me
          </h2>
          <div
            style={{
              height: "1px",
              backgroundColor: "#c084fc",
              width: isMobile ? "40%" : "300px",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Konten Utama */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "3rem" : "5rem",
            alignItems: "center",
          }}
        >
          {/* Bagian Kiri: Teks */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "1rem",
                color: "#9ca3af",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Hello, i'm Kevin Leonard Berutu!
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#9ca3af",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
              }}
            >
              I'm an Informatics student and a Full-Stack Developer based in
              Surabaya, Indonesia. I specialize in building robust web
              applications, turning complex system requirements into scalable
              and secure digital solutions.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#9ca3af",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
              }}
            >
              My passion lies at the intersection of software engineering,
              system architecture, and business innovation. Whether I'm
              developing with Next.js and Golang, designing business models for
              tech competitions, or diving into cyber security, I constantly
              push myself to learn and create technologies that drive real-world
              efficiency.
            </p>

            <a
              href="/about-me"
              style={{
                padding: "0.6rem 1.4rem",
                backgroundColor: "transparent",
                color: "#e0e0e0",
                border: "1px solid #c084fc",
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: "0.9rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#c084fc";
                (e.currentTarget as HTMLElement).style.color = "#1e1e28";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color = "#e0e0e0";
              }}
            >
              Read more {"->"}
            </a>
          </div>

          {/* Bagian Kanan: Gambar & Dekorasi */}
          <div
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              justifyContent: isMobile ? "center" : "end",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: isMobile ? "280px" : "340px",
                height: isMobile ? "350px" : "450px",
              }}
            >
              {/* Dot Grid 1 (Kiri Atas Gambar) */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "-20px",
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 12px)",
                  gap: "10px",
                  opacity: 0.6,
                  zIndex: 2,
                }}
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={`dot-img-1-${i}`}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#9ca3af",
                    }}
                  />
                ))}
              </div>

              {/* Dot Grid 2 (Kanan Bawah Gambar) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "60px",
                  right: "-30px",
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 12px)",
                  gap: "10px",
                  opacity: 0.6,
                  zIndex: 2,
                }}
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={`dot-img-2-${i}`}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#9ca3af",
                    }}
                  />
                ))}
              </div>

              {/* Garis Ungu di Bawah Gambar */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "10%",
                  width: "80%",
                  height: "1.5px",
                  backgroundColor: "#c084fc",
                  zIndex: 2,
                }}
              />

              {/* Tempat Gambar Profil */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                  borderBottom: "1px solid #c084fc",
                }}
              >
                {/* Gambar Profil */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#1e1e28",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#4a4a5a",
                  }}
                >
                  <Image
                    src="/GambarDiri.png"
                    alt="About Me"
                    fill
                    style={{ objectFit: "contain", objectPosition: "bottom" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contacts Section ── */}
      <section
        id="contacts"
        style={{
          padding: isMobile ? "3rem 1.5rem" : "4rem 10rem",
          position: "relative",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 1.2s, transform 1s ease 1.2s",
          marginBottom: "4rem",
        }}
      >
        {/* Dekorasi Dot Grid Kiri Jauh (Desktop) */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              display: "grid",
              gridTemplateColumns: "repeat(5, 12px)",
              gap: "10px",
              opacity: 0.6,
            }}
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={`dot-contact-${i}`}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#9ca3af",
                }}
              />
            ))}
          </div>
        )}

        {/* Header Contacts */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: "bold",
              color: "#e0e0e0",
              marginRight: "2rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#c084fc" }}>#</span>contacts
          </h2>
          <div
            style={{
              height: "1px",
              backgroundColor: "#c084fc",
              width: isMobile ? "40%" : "150px",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Konten Utama Contacts */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            gap: "3rem",
          }}
        >
          {/* Bagian Kiri: Teks Deskripsi */}
          <div style={{ flex: 1, maxWidth: "500px" }}>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#9ca3af",
                lineHeight: 1.6,
              }}
            >
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me
            </p>
          </div>

          {/* Bagian Kanan: Kotak Kontak */}
          <div style={{ flex: isMobile ? "1" : "0 0 auto" }}>
            <div
              style={{
                border: "1px solid #4a4a5a",
                padding: "1.2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                minWidth: "250px",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#e0e0e0",
                  marginBottom: "0.5rem",
                }}
              >
                Message me here
              </h3>

              {/* Item Kontak: Discord */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
              >
                {/* SVG Ikon Discord */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#9ca3af"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                <span style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                  kevinleonard28_
                </span>
              </div>

              {/* Item Kontak: Email */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
              >
                {/* SVG Ikon Email */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                  kl905577@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
