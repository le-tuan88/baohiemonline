import type { Metadata } from "next";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "Bảo hiểm Tài sản & Doanh nghiệp",
  description: "Bảo hiểm nhà tư nhân, cháy nổ, hàng hóa, xây dựng, kỹ thuật và trách nhiệm doanh nghiệp từ Bảo Việt, PVI, MIC, PJICO.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-khac/" },
};

const groups = [
  {
    title: "Bảo hiểm tài sản",
    icon: "🏠",
    color: "#059669",
    products: [
      { title: "Bảo hiểm nhà tư nhân", href: "/bao-hiem-khac/nha-tu-nhan/", desc: "Bảo vệ ngôi nhà trước rủi ro thiên tai, trộm cắp" },
      { title: "Bảo hiểm cháy nổ", href: "/bao-hiem-khac/chay-no/", desc: "Bắt buộc cho nhà xưởng, cơ sở sản xuất" },
      { title: "Bảo hiểm xây dựng", href: "/bao-hiem-khac/xay-dung/", desc: "Bảo vệ công trình trong quá trình thi công" },
    ],
  },
  {
    title: "Bảo hiểm doanh nghiệp",
    icon: "🏢",
    color: "#0F766E",
    products: [
      { title: "Bảo hiểm trách nhiệm", href: "/bao-hiem-khac/trach-nhiem/", desc: "Trách nhiệm nghề nghiệp, sản phẩm" },
      { title: "Bảo hiểm hàng hóa", href: "/bao-hiem-khac/hang-hoa/", desc: "Bảo vệ hàng hóa trong quá trình vận chuyển" },
      { title: "Bảo hiểm kỹ thuật", href: "/bao-hiem-khac/ky-thuat/", desc: "Máy móc thiết bị điện tử, công trình" },
    ],
  },
];

export default function BaoHiemKhacPage() {
  return (
    <MainLayout>
      <div style={{ background: "linear-gradient(135deg, #059669 0%, #047857 100%)", padding: "4rem 0", textAlign: "center", color: "white" }}>
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🏢</div>
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
            Bảo hiểm khác
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto 2rem" }}>
            Tài sản, cháy nổ, hàng hóa, kỹ thuật và trách nhiệm doanh nghiệp
          </p>
          <Link href="/lien-he/" className="btn-primary" style={{ background: "white", color: "#059669" }}>
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
                  <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.375rem", color: "var(--text-dark)" }}>{group.title}</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                  {group.products.map((prod) => (
                    <Link key={prod.href} href={prod.href} className="card" style={{ padding: "1.25rem 1.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.5rem", fontFamily: "'Be Vietnam Pro', sans-serif", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke={group.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {prod.title}
                      </div>
                      <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{prod.desc}</p>
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
