import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bảo hiểm Nhân thọ - Tích lũy & Bảo vệ",
  description: "Bảo hiểm nhân thọ từ Bảo Việt Nhân Thọ và Manulife. Đầu tư tương lai, bảo vệ gia đình với các gói tích lũy dài hạn.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-nhan-tho/" },
};

const brands = [
  {
    name: "Bảo Việt Nhân Thọ",
    color: "#C62828",
    products: [
      { title: "An Gia Phúc Lộc", href: "/bao-hiem-nhan-tho/an-gia-phuc-loc/", desc: "Tích lũy tiết kiệm kết hợp bảo vệ toàn diện" },
      { title: "An Gia Thịnh Vượng", href: "/bao-hiem-nhan-tho/an-gia-thinh-vuong/", desc: "Đầu tư linh hoạt, hưởng lợi tức hấp dẫn" },
      { title: "Tích lũy giáo dục", href: "/bao-hiem-nhan-tho/tich-luy-giao-duc/", desc: "Bảo vệ tương lai học vấn cho con trẻ" },
    ],
  },
  {
    name: "Manulife",
    color: "#0C2340",
    products: [
      { title: "Manulife Pro", href: "/bao-hiem-nhan-tho/manulife-pro/", desc: "Bảo hiểm nhân thọ cao cấp liên kết đầu tư" },
      { title: "Manulife Sống Khỏe", href: "/bao-hiem-nhan-tho/manulife-song-khoe/", desc: "Bảo vệ sức khỏe kết hợp tích lũy dài hạn" },
    ],
  },
];

export default function NhanThoPage() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)", padding: "4rem 0", textAlign: "center", color: "white" }}>
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>💎</div>
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
            Bảo hiểm Nhân thọ
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto 2rem" }}>
            Tích lũy tài sản và bảo vệ gia đình với các gói nhân thọ từ Bảo Việt và Manulife
          </p>
          <Link href="/lien-he/" className="btn-primary" style={{ background: "white", color: "#7C3AED" }}>
            Nhận tư vấn miễn phí
          </Link>
        </div>
      </div>
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {brands.map((brand) => (
              <div key={brand.name}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: 4, height: 36, background: brand.color, borderRadius: 2 }} />
                  <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--text-dark)" }}>{brand.name}</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                  {brand.products.map((prod) => (
                    <Link key={prod.href} href={prod.href} className="card" style={{ padding: "1.25rem 1.5rem" }}>
                      <div style={{ fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.5rem", fontFamily: "'Be Vietnam Pro', sans-serif" }}>{prod.title}</div>
                      <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{prod.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

