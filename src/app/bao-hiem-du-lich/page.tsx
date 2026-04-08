import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bảo hiểm Du lịch - Quốc tế & Trong nước",
  description: "Mua bảo hiểm du lịch quốc tế và trong nước từ Bảo Việt, Liberty, PVI, Bảo Minh, MIC. Giá tốt, thủ tục nhanh, bảo vệ toàn chuyến đi.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-du-lich/" },
};

const groups = [
  {
    title: "Bảo Bảo hiểm du lịch quốc tế",
    brands: ["Bảo Việt", "Liberty", "PVI", "Bảo Minh", "MIC"],
    href: "/bao-hiem-du-lich/quoc-te/",
    icon: "✈️",
    color: "#0EA5E9",
  },
  {
    title: "Bảo hiểm du lịch trong nước",
    brands: ["Bảo Việt", "Liberty", "PVI", "Bảo Minh", "MIC"],
    href: "/bao-hiem-du-lich/trong-nuoc/",
    icon: "🗺️",
    color: "#06B6D4",
  },
];

export default function DuLichPage() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", padding: "4rem 0", textAlign: "center", color: "white" }}>
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>✈️</div>
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
            Bảo hiểm Du lịch
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto 2rem" }}>
            An tâm khám phá thế giới với bảo hiểm du lịch từ Bảo Việt, Liberty, PVI, Bảo Minh, MIC
          </p>
          <Link href="/lien-he/" className="btn-primary" style={{ background: "white", color: "#0EA5E9" }}>
            Nhận tư vấn miễn phí
          </Link>
        </div>
      </div>

      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {groups.map((group) => (
              <div key={group.title} className="card" style={{ padding: "2rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{group.icon}</div>
                <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, color: group.color, marginBottom: "1.5rem", fontSize: "1.25rem" }}>
                  {group.title}
                </h2>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {group.brands.map((b) => (
                    <li key={b}>
                      <Link href={`${group.href}${b.toLowerCase().replace(/ /g, "-")}/`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-body)", fontSize: "0.9375rem", fontWeight: 600, fontFamily: "'Be Vietnam Pro', sans-serif" }} className="hover:text-[var(--accent)]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke={group.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {b}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

