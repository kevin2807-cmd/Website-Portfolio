"use client";

import { useEffect, useState } from "react";

export default function Contacts() {
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
      {/* Dekorasi Garis Kiri Atas */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: "8rem",
            left: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 12px)",
            gap: "8px",
            opacity: 0.6,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
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

      {/* Dekorasi Kotak Sebagian di Kanan Jauh */}
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
          <span style={{ color: "#c084fc" }}>/</span>contacts
        </h1>
        <p style={{ fontSize: "0.95rem", color: "#e0e0e0" }}>Who am i?</p>
      </div>

      {/* ── 2. Konten Kontak Utama ── */}
      <section
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: "3rem",
          marginBottom: "6rem",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
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
        <div
          style={{
            flex: isMobile ? "1" : "0 0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "stretch" : "flex-start",
            gap: "1.5rem",
          }}
        >
          {/* Kotak 2: Message me here */}
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
                marginBottom: "0.2rem",
              }}
            >
              Message me here
            </h3>

            {/* Discord */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
            >
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

            {/* Email */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
            >
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
      </section>

      {/* ── 3. All Media Section ── */}
      <section
        style={{
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
          <span style={{ color: "#c084fc" }}>#</span>all-media
        </h2>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Akun 1: Instagram / X */}
          <a
            href="https://instagram.com/kevinleonard28_"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "#9ca3af",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e0e0e0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
            <span style={{ fontSize: "0.9rem" }}>@kevinleonard28_</span>
          </a>

          {/* Akun 2: LinkedIn (Sebagai variasi karena di gambar ada dua burung twitter) */}
          <a
            href="https://www.linkedin.com/in/kevin-leonard-berutu-64aa64288/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "#9ca3af",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e0e0e0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span style={{ fontSize: "0.9rem" }}>@Kevin Leonard Berutu</span>
          </a>
        </div>
      </section>
    </main>
  );
}
