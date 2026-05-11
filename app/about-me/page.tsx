"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";

// --- DATA UNTUK SKILLS ---
const skillsData = [
  {
    category: "Languages",
    items: [
      "TypeScript",
      "Go (Golang)",
      "JavaScript",
      "HTML/CSS",
      "Python",
      "C/C++",
      "Bash",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "GORM"],
  },
  {
    category: "Cyber Security Tools",
    items: [
      "Wireshark",
      "Kali Linux",
      "Nmap",
      "Metasploit",
      "Burp Suite",
      "Ghidra",
      "John the Ripper",
    ],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "NestJS", "Tailwind", "Mittre ATT&CK"],
  },
  {
    category: "Other",
    items: ["System Architecture", "UML", "BMC", "REST APIs"],
  },
];

// --- DATA UNTUK FUN FACTS ---
const funFacts = [
  "I live in Surabaya, East Java",
  "I'm an Informatics student in my 6th semester",
  "I like exploring Cyber Security concepts",
  "I love designing System Architectures",
  "I often build apps with Next.js and Go",
];

export default function AboutMe() {
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
      {/* ── 1. Header Section ── */}
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          marginBottom: "3rem",
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
          <span style={{ color: "#c084fc" }}>/</span>about-me
        </h1>
        <p style={{ fontSize: "0.95rem", color: "#e0e0e0" }}>Who am i?</p>
      </div>

      {/* ── 2. Deskripsi & Gambar ── */}
      <section
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "3rem" : "5rem",
          marginBottom: "5rem",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
        }}
      >
        {/* Kiri: Teks */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "1rem",
              color: "#9ca3af",
              marginBottom: "1.5rem",
              lineHeight: 1.6,
            }}
          >
            Hello, I'm Kevin!
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
            applications, turning complex system requirements into scalable and
            secure digital solutions.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#9ca3af", lineHeight: 1.7 }}>
            My passion lies at the intersection of software engineering, system
            architecture, and business innovation. Whether I'm developing with
            Next.js and Golang, designing business models for tech competitions,
            or diving into cyber security, I constantly push myself to learn and
            create technologies that drive real-world efficiency.
          </p>
        </div>

        {/* Kanan: Gambar */}
        <div
          style={{
            flex: 1,
            position: "relative",
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-end",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              position: "relative",
              width: isMobile ? "280px" : "320px",
              height: isMobile ? "350px" : "400px",
            }}
          >
            {/* Dot Grid 1 */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "-20px",
                display: "grid",
                gridTemplateColumns: "repeat(5, 12px)",
                gap: "8px",
                opacity: 0.6,
                zIndex: 2,
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

            {/* Dot Grid 2 */}
            <div
              style={{
                position: "absolute",
                bottom: "60px",
                right: "-30px",
                display: "grid",
                gridTemplateColumns: "repeat(5, 12px)",
                gap: "8px",
                opacity: 0.6,
                zIndex: 2,
              }}
            >
              {Array.from({ length: 25 }).map((_, i) => (
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

            {/* Garis Bawah */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "10%",
                width: "80%",
                height: "1.5px",
                backgroundColor: "#c084fc",
                zIndex: 2,
              }}
            />

            {/* Gambar Profil */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                zIndex: 1,
                borderBottom: "1px solid #c084fc",
              }}
            >
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
                [Area Gambar Profil]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Skills Section ── */}
      <section
        style={{
          marginBottom: "5rem",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.6s, transform 1s ease 0.6s",
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
          <span style={{ color: "#c084fc" }}>#</span>skills
        </h2>

        {/* Grid Skills - Menyamping */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "flex-start",
          }}
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #4a4a5a",
                display: "flex",
                flexDirection: "column",
                minWidth: "160px",
                flex: "1 1 auto",
              }}
            >
              <div
                style={{
                  padding: "0.5rem",
                  borderBottom: "1px solid #4a4a5a",
                  color: "#e0e0e0",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                {skill.category}
              </div>
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
      </section>

      {/* ── 4. Fun-Facts Section ── */}
      <section
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.9s, transform 1s ease 0.9s",
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
          <span style={{ color: "#c084fc" }}>#</span>my-fun-facts
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Kiri: Fakta-fakta */}
          <div
            style={{ flex: 2, display: "flex", flexWrap: "wrap", gap: "1rem" }}
          >
            {funFacts.map((fact, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #4a4a5a",
                  padding: "0.6rem 1rem",
                  color: "#9ca3af",
                  fontSize: "0.85rem",
                  backgroundColor: "transparent",
                }}
              >
                {fact}
              </div>
            ))}
          </div>

          {/* Kanan: Dekorasi Geometris */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{ position: "relative", width: "150px", height: "150px" }}
            >
              {/* Dot grid Kiri Atas */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "-20px",
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 12px)",
                  gap: "10px",
                  opacity: 0.6,
                }}
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={`dot3-${i}`}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#9ca3af",
                    }}
                  />
                ))}
              </div>

              {/* Kotak Outline Ungu Atas */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "10px",
                  width: "60px",
                  height: "60px",
                  border: "1.5px solid #c084fc",
                  zIndex: 2,
                }}
              />

              {/* Kotak Outline Ungu Bawah (Overlap) */}
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  right: "40px",
                  width: "60px",
                  height: "60px",
                  border: "1.5px solid #c084fc",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
