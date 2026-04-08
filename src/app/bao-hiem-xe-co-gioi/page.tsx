import type { Metadata } from "next";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "Bảo hiểm Xe cơ giới - Ô tô, Xe máy",
  description: "So sánh bảo hiểm vật chất ô tô, TNDS ô tô và TNDS xe máy từ Bảo Việt, PVI, MIC, Bảo Minh, PJICO, DBV với giá tốt nhất.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-xe-co-gioi/" },
};

const groups = [
  {
    title: "Bảo hiểm vật chất ô tô",
    icon: "🚗",
    href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/",
    desc: "Bảo hiểm thân xe, vật chất theo giá trị thị trường",
    brands: [
      { name: "Bảo Việt", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/bao-viet/" },
      { name: "PVI", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/pvi/" },
      { name: "MIC", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/mic/" },
      { name: "Bảo Minh", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/bao-minh/" },
      { name: "PJICO", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/pjico/" },
      { name: "DBV", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/dbv/" },
    ],
  },
  {
    title: "Bảo hiểm TNDS ô tô",
    icon: "🚙",
    href: "/bao-hiem-xe-co-gioi/tnds-o-to/",
    desc: "Bảo hiểm trách nhiệm dân sự bắt buộc cho ô tô",
    brands: [
      { name: "Bảo Việt", href: "/bao-hiem-xe-co-gioi/tnds-o-to/bao-viet/" },
      { name: "PVI", href: "/bao-hiem-xe-co-gioi/tnds-o-to/pvi/" },
      { name: "MIC", href: "/bao-hiem-xe-co-gioi/tnds-o-to/mic/" },
      { name: "Bảo Minh", href: "/bao-hiem-xe-co-gioi/tnds-o-to/bao-minh/" },
      { name: "PJICO", href: "/bao-hiem-xe-co-gioi/tnds-o-to/pjico/" },
      { name: "DBV", href: "/bao-hiem-xe-co-gioi/tnds-o-to/dbv/" },
    ],
  },
  {
    title: "Bảo hiểm TNDS xe máy",
    icon: "🏍️",
    href: "/bao-hiem-xe-co-gioi/tnds-xe-may/",
    desc: "Bảo hiểm trách nhiệm dân sự bắt buộc cho xe máy",
    brands: [
      { name: "Bảo Việt", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/bao-viet/" },
      { name: "PVI", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/pvi/" },
      { name: "MIC", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/mic/" },
    ],
  },
];

export default function XeCoGioiPage() {
  return (
    <MainLayout>
      <div style={{ background: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)", padding: "4rem 0", textAlign: "center", color: "white" }}>
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🚗</div>
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
            Bảo hiểm Xe cơ giới
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto 2rem" }}>
            Vật chất ô tô, TNDS ô tô & xe máy từ Bảo Việt, PVI, MIC, Bảo Minh, PJICO, DBV
          </p>
          <Link href="/lien-he/" className="btn-primary" style={{ background: "white", color: "#0D9488" }}>
            Nhận tư vấn miễn phí
          </Link>
        </div>
      </div>

      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {groups.map((group) => (
              <div key={group.title}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "2rem" }}>{group.icon}</span>
                  <div>
                    <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.375rem", color: "var(--text-dark)" }}>{group.title}</h2>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{group.desc}</p>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
                  {group.brands.map((b) => (
                    <Link key={b.href} href={b.href} className="card" style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: 700, color: "var(--text-dark)", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {b.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
