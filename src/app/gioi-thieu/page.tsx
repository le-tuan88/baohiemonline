import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Về chúng tôi - Bảo Hiểm Online",
  description: "Bảo Hiểm Online là nền tảng môi giới bảo hiểm trực tuyến uy tín với hơn 10 năm kinh nghiệm. Kết nối khách hàng với các giải pháp bảo hiểm tốt nhất.",
  alternates: { canonical: "https://baohiem.online/gioi-thieu/" },
};

export default function GioiThieuPage() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--primary) 0%, #1e3a6e 100%)", padding: "4rem 0", textAlign: "center", color: "white" }}>
        <div className="container">
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>
            Về Bảo Hiểm Online
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.0625rem" }}>
            Đối tác bảo hiểm tin cậy của hàng ngàn gia đình Việt
          </p>
        </div>
      </div>

      <section style={{ padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "4rem" }}>
            <div>
              <div className="section-badge">Giới thiệu</div>
              <h2 className="section-title">Chúng tôi là ai?</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
                <strong>Bảo Hiểm Online</strong> (baohiem.online) là nền tảng môi giới bảo hiểm trực tuyến được thành lập với sứ mệnh giúp mọi người dễ dàng tiếp cận các giải pháp bảo hiểm chất lượng cao với chi phí hợp lý.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                Chúng tôi hợp tác chính thức với các công ty bảo hiểm hàng đầu Việt Nam như Bảo Việt, PVI, MIC, VBI, Bảo Minh, PJICO, Liberty, Dai-ichi Life và nhiều đối tác uy tín khác.
              </p>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--blue))",
                borderRadius: 20, padding: "2rem", color: "white",
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem",
              }}
            >
              {[
                { value: "10+", label: "Năm kinh nghiệm" },
                { value: "50K+", label: "Khách hàng" },
                { value: "9+", label: "Đối tác bảo hiểm" },
                { value: "98%", label: "Hài lòng" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "1.875rem", color: "#fbbf24" }}>{s.value}</div>
                  <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, marginBottom: "1.5rem", fontSize: "1.5rem" }}>Sứ mệnh & Giá trị</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.25rem" }}>
              {[
                { icon: "🎯", title: "Minh bạch", desc: "Tư vấn trung thực, không hoa hồng ẩn, không áp lực" },
                { icon: "🤝", title: "Tận tâm", desc: "Đồng hành cùng khách hàng từ khi mua đến khi bồi thường" },
                { icon: "💡", title: "Chuyên nghiệp", desc: "Đội ngũ chuyên gia bảo hiểm có chứng chỉ hành nghề" },
                { icon: "🔐", title: "Bảo mật", desc: "Thông tin khách hàng được bảo vệ theo tiêu chuẩn cao nhất" },
              ].map((v) => (
                <div key={v.title} className="card" style={{ padding: "1.5rem" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{v.icon}</div>
                  <h4 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, marginBottom: "0.5rem" }}>{v.title}</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/lien-he/" className="btn-primary">Liên hệ tư vấn ngay</Link>
          </div>
        </div>
      </section>
    </>
  );
}

