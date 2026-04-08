import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liên hệ - Tư vấn Bảo hiểm Miễn phí",
  description: "Liên hệ Bảo Hiểm Online để nhận tư vấn bảo hiểm miễn phí. Đội ngũ chuyên gia sẵn sàng hỗ trợ 7h-21h mỗi ngày.",
  alternates: { canonical: "https://baohiem.online/lien-he/" },
};

export default function LienHePage() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--primary) 0%, #1e3a6e 100%)", padding: "4rem 0", textAlign: "center", color: "white" }}>
        <div className="container">
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>
            Liên hệ & Tư vấn
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.0625rem" }}>
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 7h–21h mỗi ngày
          </p>
        </div>
      </div>

      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "flex-start" }}>
            {/* Contact info */}
            <div>
              <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, marginBottom: "1.5rem", fontSize: "1.5rem" }}>
                Thông tin liên hệ
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { icon: "📞", label: "Hotline tư vấn", value: "1900 xxxx", sub: "Miễn phí, 7h–21h mỗi ngày" },
                  { icon: "✉️", label: "Email hỗ trợ", value: "hotro@baohiem.online", sub: "Phản hồi trong 24h" },
                  { icon: "📍", label: "Địa chỉ", value: "TP. Hồ Chí Minh, Việt Nam", sub: "" },
                  { icon: "🕐", label: "Giờ làm việc", value: "7:00 - 21:00", sub: "Tất cả các ngày trong tuần" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(224,92,26,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{item.label}</div>
                      <div style={{ fontWeight: 700, color: "var(--text-dark)", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.0625rem" }}>{item.value}</div>
                      {item.sub && <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.125rem" }}>{item.sub}</div>}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--bg-light)", borderRadius: 16, border: "1px solid var(--border)" }}>
                <h3 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, marginBottom: "1rem" }}>Kết nối mạng xã hội</h3>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {[
                    { label: "Facebook", icon: "f", color: "#1877F2" },
                    { label: "Zalo", icon: "Z", color: "#0068FF" },
                    { label: "YouTube", icon: "▶", color: "#FF0000" },
                  ].map((s) => (
                    <Link key={s.label} href="#" title={s.label} style={{ width: 44, height: 44, borderRadius: 10, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "1rem" }}>
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 20, padding: "2.5rem", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, marginBottom: "0.5rem", fontSize: "1.375rem" }}>
                Đăng ký tư vấn miễn phí
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.75rem" }}>
                Điền thông tin, chuyên gia sẽ gọi lại trong 30 phút
              </p>

              <form action="https://formspree.io/f/your_form_id" method="POST" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.5rem", color: "var(--text-dark)" }}>Họ và tên *</label>
                  <input
                    type="text" name="name" required placeholder="Nguyễn Văn A"
                    style={{ width: "100%", border: "2px solid var(--border)", borderRadius: 10, padding: "0.75rem 1rem", fontSize: "0.9375rem", outline: "none", fontFamily: "'Be Vietnam Pro', sans-serif", transition: "border-color 0.2s" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.5rem", color: "var(--text-dark)" }}>Số điện thoại *</label>
                  <input
                    type="tel" name="phone" required placeholder="0901 234 567"
                    style={{ width: "100%", border: "2px solid var(--border)", borderRadius: 10, padding: "0.75rem 1rem", fontSize: "0.9375rem", outline: "none", fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.5rem", color: "var(--text-dark)" }}>Loại bảo hiểm quan tâm</label>
                  <select
                    name="type"
                    style={{ width: "100%", border: "2px solid var(--border)", borderRadius: 10, padding: "0.75rem 1rem", fontSize: "0.9375rem", outline: "none", fontFamily: "'Be Vietnam Pro', sans-serif", background: "white" }}
                  >
                    <option value="">-- Chọn loại bảo hiểm --</option>
                    <option value="suc-khoe">Bảo hiểm sức khỏe</option>
                    <option value="xe-co-gioi">Bảo hiểm xe cơ giới</option>
                    <option value="du-lich">Bảo hiểm du lịch</option>
                    <option value="tai-nan">Bảo hiểm tai nạn</option>
                    <option value="nhan-tho">Bảo hiểm nhân thọ</option>
                    <option value="khac">Bảo hiểm khác</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.5rem", color: "var(--text-dark)" }}>Ghi chú thêm</label>
                  <textarea
                    name="message" rows={3} placeholder="Nhu cầu, câu hỏi của bạn..."
                    style={{ width: "100%", border: "2px solid var(--border)", borderRadius: 10, padding: "0.75rem 1rem", fontSize: "0.9375rem", outline: "none", fontFamily: "'Be Vietnam Pro', sans-serif", resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.875rem" }}>
                  🎯 Gửi yêu cầu tư vấn
                </button>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textAlign: "center" }}>
                  Thông tin của bạn được bảo mật tuyệt đối
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

