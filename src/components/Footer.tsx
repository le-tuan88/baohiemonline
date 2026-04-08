import Link from "next/link";

const footerLinks = {
  sucKhoe: {
    label: "Bảo hiểm Sức khỏe",
    links: [
      { title: "Bảo Việt An Gia", href: "/bao-hiem-suc-khoe/bao-viet-an-gia/" },
      { title: "MIC Care", href: "/bao-hiem-suc-khoe/mic-care/" },
      { title: "VBI Care", href: "/bao-hiem-suc-khoe/vbi-care/" },
      { title: "PVI Care", href: "/bao-hiem-suc-khoe/pvi-care/" },
      { title: "Bảo Việt Intercare", href: "/bao-hiem-suc-khoe/bao-viet-intercare/" },
    ],
  },
  xeCo: {
    label: "Bảo hiểm Xe cơ giới",
    links: [
      { title: "Vật chất ô tô Bảo Việt", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/bao-viet/" },
      { title: "TNDS ô tô", href: "/bao-hiem-xe-co-gioi/tnds-o-to/" },
      { title: "TNDS xe máy", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/" },
      { title: "Vật chất ô tô PVI", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/pvi/" },
      { title: "Vật chất ô tô MIC", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/mic/" },
    ],
  },
  duLich: {
    label: "Bảo hiểm Du lịch",
    links: [
      { title: "Du lịch quốc tế Bảo Việt", href: "/bao-hiem-du-lich/quoc-te/bao-viet/" },
      { title: "Du lịch quốc tế Liberty", href: "/bao-hiem-du-lich/quoc-te/liberty/" },
      { title: "Du lịch quốc tế PVI", href: "/bao-hiem-du-lich/quoc-te/pvi/" },
      { title: "Du lịch trong nước", href: "/bao-hiem-du-lich/trong-nuoc/" },
    ],
  },
  hotro: {
    label: "Hỗ trợ",
    links: [
      { title: "Về chúng tôi", href: "/gioi-thieu/" },
      { title: "Blog & Kiến thức", href: "/blog/" },
      { title: "Liên hệ tư vấn", href: "/lien-he/" },
      { title: "Chính sách bảo mật", href: "/chinh-sach-bao-mat/" },
      { title: "Điều khoản sử dụng", href: "/dieu-khoan/" },
    ],
  },
};

const insurancePartners = [
  "Bảo Việt", "PVI", "MIC", "VBI", "Bảo Minh",
  "PJICO", "Liberty", "Manulife", "DBV",
];

export default function Footer() {
  return (
    <footer>
      {/* Partners strip */}
      <div style={{ background: "var(--bg-section)", borderTop: "1px solid var(--border)", padding: "2rem 0" }}>
        <div className="container">
          <p style={{ textAlign: "center", fontSize: "0.8125rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "1.25rem" }}>
            Đối tác phân phối bảo hiểm uy tín
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
            {insurancePartners.map((p) => (
              <span
                key={p}
                style={{
                  background: "white", border: "1.5px solid var(--border)",
                  borderRadius: 8, padding: "0.5rem 1.25rem",
                  fontSize: "0.875rem", fontWeight: 700, color: "var(--primary)",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ background: "var(--primary)", padding: "3.5rem 0 2rem", color: "rgba(255,255,255,0.85)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2.5rem",
              marginBottom: "3rem",
            }}
          >
            {/* Brand col */}
            <div style={{ gridColumn: "span 1" }}>
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 11,
                    background: "rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "2px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M13 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L13 2z" fill="white" opacity="0.3"/>
                    <path d="M9.5 13l2.5 2.5L16.5 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", lineHeight: 1.1 }}>Bảo Hiểm Online</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontFamily: "'Be Vietnam Pro', sans-serif" }}>baohiem.online</div>
                </div>
              </Link>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem", color: "rgba(255,255,255,0.7)" }}>
                Nền tảng môi giới bảo hiểm trực tuyến uy tín — kết nối khách hàng với các giải pháp bảo vệ tài chính tốt nhất.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { icon: "📍", text: "TP. Hồ Chí Minh, Việt Nam" },
                  { icon: "📞", text: "1900 xxxx (7h-21h mỗi ngày)" },
                  { icon: "✉️", text: "hotro@baohiem.online" },
                ].map((info, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.75)" }}>
                    <span>{info.icon}</span>
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>
              {/* Socials */}
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
                {[
                  { label: "Facebook", icon: "f" },
                  { label: "Zalo", icon: "Z" },
                  { label: "YouTube", icon: "▶" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href="#"
                    title={s.label}
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: "rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "1px solid rgba(255,255,255,0.2)",
                      fontWeight: 700, fontSize: "0.9rem", color: "white",
                      transition: "all 0.2s",
                    }}
                    className="hover:bg-[var(--accent)] hover:border-transparent"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([key, col]) => (
              <div key={key}>
                <h4 style={{ fontWeight: 700, fontSize: "0.9375rem", color: "white", marginBottom: "1rem", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  {col.label}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", transition: "color 0.15s", fontFamily: "'Be Vietnam Pro', sans-serif" }}
                        className="hover:text-white"
                      >
                        › {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)" }}>
              © 2026 Bảo Hiểm Online. Bản quyền thuộc về baohiem.online
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {[
                { title: "Chính sách bảo mật", href: "/chinh-sach-bao-mat/" },
                { title: "Điều khoản sử dụng", href: "/dieu-khoan/" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", transition: "color 0.15s" }} className="hover:text-white">
                  {l.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
