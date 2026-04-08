import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bảo hiểm Tai nạn - Cá nhân & Tổ chức",
  description: "Mua bảo hiểm tai nạn từ Bảo Việt, MIC, PVI. Bảo vệ trước mọi rủi ro tai nạn bất ngờ trong cuộc sống và lao động.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-tai-nan/" },
};

const brands = [
  {
    name: "Bảo Việt",
    color: "#C62828",
    products: [
      { title: "Bảo hiểm tai nạn 247", href: "/bao-hiem-tai-nan/bao-viet-247/", desc: "Bảo vệ 24/7 trước mọi rủi ro tai nạn" },
      { title: "Bảo hiểm tai nạn trách nhiệm cao", href: "/bao-hiem-tai-nan/bao-viet-tnc/", desc: "Mức bồi thường cao, bảo vệ toàn diện" },
      { title: "Cologne Re", href: "/bao-hiem-tai-nan/cologne-re/", desc: "Bảo hiểm tai nạn kết hợp Cologne Re" },
    ],
  },
  {
    name: "MIC",
    color: "#1565C0",
    products: [
      { title: "Bảo hiểm tai nạn MIC", href: "/bao-hiem-tai-nan/mic-tai-nan/", desc: "Gói tai nạn linh hoạt từ MIC" },
      { title: "Bảo hiểm vận động viên thể thao", href: "/bao-hiem-tai-nan/vdv-the-thao/", desc: "Dành riêng cho vận động viên và người chơi thể thao" },
    ],
  },
  {
    name: "PVI",
    color: "#E65100",
    products: [
      { title: "Bảo hiểm tai nạn PVI", href: "/bao-hiem-tai-nan/pvi-tai-nan/", desc: "Bảo hiểm tai nạn cá nhân uy tín từ PVI" },
    ],
  },
];

export default function TaiNanPage() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, #E05C1A 0%, #c94c10 100%)", padding: "4rem 0", textAlign: "center", color: "white" }}>
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🛡️</div>
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
            Bảo hiểm Tai nạn
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto 2rem" }}>
            Bảo vệ trước mọi rủi ro tai nạn từ Bảo Việt, MIC và PVI
          </p>
          <Link href="/lien-he/" className="btn-primary" style={{ background: "white", color: "#E05C1A" }}>
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
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke={brand.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span style={{ fontWeight: 700, color: "var(--text-dark)", fontFamily: "'Be Vietnam Pro', sans-serif" }}>{prod.title}</span>
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
    </>
  );
}

