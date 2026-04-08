import type { Metadata } from "next";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "Bảo hiểm Sức khỏe - So sánh & Mua Online",
  description: "So sánh và mua bảo hiểm sức khỏe từ Bảo Việt, MIC, VBI, PVI. Bảo vệ toàn diện cho cá nhân và gia đình với chi phí hợp lý nhất.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/" },
};

const brands = [
  {
    name: "Bảo Việt",
    color: "#C62828",
    products: [
      { title: "Bảo Việt An Gia", href: "/bao-hiem-suc-khoe/bao-viet-an-gia/", desc: "Bảo hiểm sức khỏe toàn diện cho cá nhân và gia đình" },
      { title: "Bảo Việt Intercare", href: "/bao-hiem-suc-khoe/bao-viet-intercare/", desc: "Gói chăm sóc sức khỏe cao cấp chuẩn quốc tế" },
      { title: "BH Sức khoẻ tổ chức (Bảo Việt)", href: "/bao-hiem-suc-khoe/bao-viet-to-chuc/", desc: "Dành cho doanh nghiệp, tổ chức và nhóm nhân viên" },
      { title: "Bảo Việt Tâm Bình", href: "/bao-hiem-suc-khoe/bao-viet-tam-binh/", desc: "Bảo hiểm ung thư và bệnh hiểm nghèo" },
      { title: "An tâm viện phí", href: "/bao-hiem-suc-khoe/an-tam-vien-phi/", desc: "Chi trả 100% viện phí nằm viện" },
      { title: "Bảo Việt KCare", href: "/bao-hiem-suc-khoe/bao-viet-kcare/", desc: "Bảo hiểm sức khỏe cho trẻ em" },
    ],
  },
  {
    name: "MIC",
    color: "#1565C0",
    products: [
      { title: "MIC Care", href: "/bao-hiem-suc-khoe/mic-care/", desc: "Bảo hiểm sức khỏe linh hoạt từ MIC" },
      { title: "BH Sức khoẻ tổ chức (MIC)", href: "/bao-hiem-suc-khoe/mic-to-chuc/", desc: "Gói nhóm cho doanh nghiệp, tổ chức" },
    ],
  },
  {
    name: "VBI",
    color: "#00695C",
    products: [
      { title: "VBI Care", href: "/bao-hiem-suc-khoe/vbi-care/", desc: "Chăm sóc sức khỏe toàn diện từ VBI Vietinbank" },
      { title: "BH Sức khoẻ tổ chức (VBI)", href: "/bao-hiem-suc-khoe/vbi-to-chuc/", desc: "Giải pháp bảo hiểm nhóm cho doanh nghiệp" },
    ],
  },
  {
    name: "PVI",
    color: "#E65100",
    products: [
      { title: "PVI Care", href: "/bao-hiem-suc-khoe/pvi-care/", desc: "Bảo hiểm sức khỏe uy tín từ PVI" },
      { title: "BH Sức khoẻ tổ chức (PVI)", href: "/bao-hiem-suc-khoe/pvi-to-chuc/", desc: "Bảo hiểm nhóm nhân viên toàn diện" },
    ],
  },
];

export default function BaoHiemSucKhoePage() {
  return (
    <MainLayout>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #4F46E5 0%, #1D4ED8 100%)", padding: "4rem 0", textAlign: "center", color: "white" }}>
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🏥</div>
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
            Bảo hiểm Sức khỏe
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto 2rem" }}>
            So sánh và chọn gói bảo hiểm sức khỏe phù hợp nhất từ 4 công ty bảo hiểm uy tín hàng đầu
          </p>
          <Link href="/lien-he/" className="btn-primary" style={{ background: "white", color: "#4F46E5" }}>
            Nhận tư vấn miễn phí
          </Link>
        </div>
      </div>

      {/* Brands & Products */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {brands.map((brand) => (
              <div key={brand.name}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: 4, height: 36, background: brand.color, borderRadius: 2 }} />
                  <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--text-dark)" }}>
                    {brand.name}
                  </h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                  {brand.products.map((prod) => (
                    <Link key={prod.href} href={prod.href} className="card" style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke={brand.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span style={{ fontWeight: 700, color: "var(--text-dark)", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                          {prod.title}
                        </span>
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

      {/* CTA */}
      <div style={{ background: "var(--bg-light)", padding: "3rem 0", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, marginBottom: "0.75rem" }}>Chưa biết chọn gói nào?</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>Chuyên gia của chúng tôi sẽ tư vấn miễn phí gói phù hợp nhất với nhu cầu của bạn.</p>
          <Link href="/lien-he/" className="btn-primary">🎯 Tư vấn miễn phí ngay</Link>
        </div>
      </div>
    </MainLayout>
  );
}
