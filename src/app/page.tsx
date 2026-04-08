export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getHomePosts } from "@/lib/wp-api";

export const metadata: Metadata = {
  title: "Bảo Hiểm Online - Môi giới bảo hiểm uy tín số 1 Việt Nam",
  description:
    "Baohiem.online - Nền tảng môi giới bảo hiểm trực tuyến. So sánh và mua bảo hiểm sức khỏe, xe ô tô, du lịch, tai nạn, nhân thọ từ Bảo Việt, PVI, MIC, VBI với giá tốt nhất.",
  alternates: { canonical: "https://baohiem.online/" },
};

const productCategories = [
  {
    icon: "🏥",
    title: "Sức khỏe",
    desc: "Bảo vệ sức khỏe toàn diện cho cả gia đình",
    href: "/bao-hiem-suc-khoe/",
    color: "#4F46E5",
    bg: "#EEF2FF",
    brands: ["Bảo Việt", "MIC", "VBI", "PVI"],
  },
  {
    icon: "🚗",
    title: "Xe cơ giới",
    desc: "Bảo hiểm vật chất & TNDS ô tô, xe máy",
    href: "/bao-hiem-xe-co-gioi/",
    color: "#0D9488",
    bg: "#F0FDF4",
    brands: ["Bảo Việt", "PVI", "MIC", "Bảo Minh"],
  },
  {
    icon: "✈️",
    title: "Du lịch",
    desc: "An tâm khám phá trong và ngoài nước",
    href: "/bao-hiem-du-lich/",
    color: "#0EA5E9",
    bg: "#F0F9FF",
    brands: ["Bảo Việt", "Liberty", "PVI", "MIC"],
  },
  {
    icon: "🛡️",
    title: "Tai nạn",
    desc: "Bảo vệ trước rủi ro tai nạn bất ngờ",
    href: "/bao-hiem-tai-nan/",
    color: "#E05C1A",
    bg: "#FFF7ED",
    brands: ["Bảo Việt", "MIC", "PVI"],
  },
  {
    icon: "💎",
    title: "Nhân thọ",
    desc: "Tích lũy & bảo vệ tương lai gia đình",
    href: "/bao-hiem-nhan-tho/",
    color: "#7C3AED",
    bg: "#F5F3FF",
    brands: ["Bảo Việt", "Dai-ichi Life"],
  },
  {
    icon: "🏢",
    title: "Bảo hiểm khác",
    desc: "Tài sản, cháy nổ, hàng hóa, kỹ thuật...",
    href: "/bao-hiem-khac/",
    color: "#059669",
    bg: "#ECFDF5",
    brands: ["Bảo Việt", "PVI", "MIC", "PJICO"],
  },
];

const stats = [
  { value: "10+", label: "Năm kinh nghiệm", icon: "📅" },
  { value: "50.000+", label: "Khách hàng tin dùng", icon: "👥" },
  { value: "9+", label: "Công ty bảo hiểm uy tín", icon: "🏛️" },
  { value: "98%", label: "Khách hàng hài lòng", icon: "⭐" },
];

const whyUs = [
  {
    icon: "🔍",
    title: "So sánh miễn phí",
    desc: "So sánh nhiều gói bảo hiểm từ các công ty hàng đầu để chọn giải pháp phù hợp nhất.",
  },
  {
    icon: "👨‍💼",
    title: "Tư vấn chuyên nghiệp",
    desc: "Đội ngũ chuyên gia bảo hiểm giàu kinh nghiệm, tư vấn tận tâm, không áp đặt.",
  },
  {
    icon: "⚡",
    title: "Xử lý nhanh chóng",
    desc: "Hỗ trợ làm hợp đồng và bồi thường nhanh chóng, minh bạch theo đúng quy định.",
  },
  {
    icon: "🔒",
    title: "Cam kết bảo mật",
    desc: "Thông tin khách hàng được bảo mật tuyệt đối. Chúng tôi không chia sẻ dữ liệu bên thứ ba.",
  },
];

// Format date helper
function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("vi-VN", {
      year: "numeric", month: "long", day: "numeric",
    });
  } catch { return dateStr; }
}

export default async function HomePage() {
  const posts = await getHomePosts();

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, #1e3a6e 50%, #0a1628 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Decorative blobs */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: 350, height: 350, borderRadius: "50%", background: "rgba(29,78,216,0.2)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: 400, height: 400, borderRadius: "50%", background: "rgba(224,92,26,0.15)", filter: "blur(70px)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(224,92,26,0.15)", color: "#fbbf24",
                borderRadius: 50, padding: "0.375rem 1rem", fontSize: "0.8125rem",
                fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase",
                border: "1px solid rgba(251,191,36,0.25)", marginBottom: "1.5rem",
              }}
            >
              🏆 Nền tảng môi giới bảo hiểm số 1
            </div>

            <h1
              style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                color: "white",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Bảo hiểm toàn diện —{" "}
              <span style={{ color: "#fbbf24" }}>An tâm</span>{" "}
              mọi khoảnh khắc
            </h1>

            <p
              style={{
                fontSize: "1.0625rem", color: "rgba(255,255,255,0.78)",
                lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: 560, margin: "0 auto 2.5rem",
              }}
            >
              So sánh và mua bảo hiểm từ 9+ công ty uy tín hàng đầu Việt Nam. Tư vấn miễn phí, xử lý nhanh chóng, cam kết quyền lợi tối ưu.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/lien-he/" className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                🎯 Tư vấn miễn phí ngay
              </Link>
              <Link href="/bao-hiem-suc-khoe/" className="btn-secondary" style={{ fontSize: "1rem", padding: "0.875rem 2rem", background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.25)", color: "white" }}>
                Khám phá sản phẩm
              </Link>
            </div>

            {/* Trust signals */}
            <div
              style={{
                display: "flex", flexWrap: "wrap", justifyContent: "center",
                gap: "1.5rem", marginTop: "3rem",
              }}
            >
              {["✅ Không phí tư vấn", "✅ Hơn 50.000 khách hàng", "✅ Thanh toán an toàn", "✅ Hỗ trợ 7h-21h"].map((t) => (
                <span key={t} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section style={{ background: "var(--accent)", padding: "2rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.5rem",
              textAlign: "center",
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>{s.icon}</div>
                <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "1.75rem", color: "white", lineHeight: 1.1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", marginTop: "0.25rem", fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS GRID ===== */}
      <section style={{ padding: "5rem 0", background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge">Danh mục sản phẩm</div>
            <h2 className="section-title">
              Giải pháp bảo hiểm <span>toàn diện</span>
            </h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Chúng tôi cung cấp đầy đủ các loại bảo hiểm từ các công ty bảo hiểm hàng đầu Việt Nam
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {productCategories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="card"
                style={{ padding: "1.75rem", textDecoration: "none" }}
              >
                <div
                  style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: cat.bg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.75rem", marginBottom: "1.125rem",
                    border: `1.5px solid ${cat.color}22`,
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontWeight: 800, fontSize: "1.1875rem",
                    color: "var(--text-dark)", marginBottom: "0.5rem",
                  }}
                >
                  {cat.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1rem", lineHeight: 1.6 }}>
                  {cat.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {cat.brands.map((b) => (
                    <span
                      key={b}
                      style={{
                        fontSize: "0.75rem", fontWeight: 600,
                        background: cat.bg, color: cat.color,
                        borderRadius: 6, padding: "0.25rem 0.625rem",
                        border: `1px solid ${cat.color}30`,
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: "1.25rem", display: "flex", alignItems: "center",
                    gap: "0.5rem", color: cat.color, fontWeight: 700, fontSize: "0.875rem",
                  }}
                >
                  Xem chi tiết
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="section-badge">Tại sao chọn chúng tôi</div>
              <h2 className="section-title">
                Đối tác bảo hiểm <span>đáng tin cậy</span>
              </h2>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                Với hơn 10 năm kinh nghiệm trong lĩnh vực môi giới bảo hiểm, chúng tôi cam kết mang lại giải pháp bảo vệ tốt nhất cho bạn và gia đình.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {whyUs.map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 48, height: 48, borderRadius: 12,
                        background: "rgba(224,92,26,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.375rem", flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, marginBottom: "0.25rem", color: "var(--text-dark)" }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/gioi-thieu/" className="btn-primary">
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>

            {/* Visual panel */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--blue) 100%)",
                  borderRadius: 24, padding: "2.5rem",
                  color: "white", position: "relative", overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                <div style={{ position: "absolute", bottom: -60, left: -40, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
                <h3 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.5rem", marginBottom: "1.5rem", position: "relative" }}>
                  Quy trình đơn giản
                </h3>
                {[
                  { step: "01", title: "Liên hệ tư vấn", desc: "Gọi điện hoặc điền form nhận tư vấn" },
                  { step: "02", title: "So sánh & chọn gói", desc: "Chuyên gia phân tích nhu cầu, đề xuất gói phù hợp" },
                  { step: "03", title: "Ký hợp đồng", desc: "Hoàn tất hồ sơ và thanh toán bảo hiểm" },
                  { step: "04", title: "Được bảo vệ", desc: "Hưởng quyền lợi bảo hiểm ngay lập tức" },
                ].map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex", gap: "1rem", alignItems: "flex-start",
                      marginBottom: i < 3 ? "1.25rem" : 0, position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 800, fontSize: "0.875rem", flexShrink: 0,
                        border: "2px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, marginBottom: "0.2rem", fontSize: "0.9375rem" }}>{step.title}</div>
                      <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)" }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: "2rem", position: "relative" }}>
                  <Link
                    href="/lien-he/"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.5rem",
                      background: "white", color: "var(--primary)",
                      padding: "0.75rem 1.75rem", borderRadius: 50,
                      fontWeight: 700, fontSize: "0.9375rem", transition: "all 0.2s",
                    }}
                    className="hover:bg-amber-400"
                  >
                    Bắt đầu ngay
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      {posts && posts.length > 0 && (
        <section style={{ padding: "5rem 0", background: "var(--bg-light)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div className="section-badge">Kiến thức bảo hiểm</div>
                <h2 className="section-title" style={{ marginBottom: "0.25rem" }}>
                  Tin tức & <span>Bài viết</span>
                </h2>
              </div>
              <Link href="/blog/" className="btn-secondary" style={{ fontSize: "0.875rem", padding: "0.625rem 1.25rem" }}>
                Xem tất cả →
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {posts.slice(0, 6).map((post: {
                id: string; title: string; slug: string; date: string; excerpt?: string;
                categories?: { nodes: { name: string; slug: string }[] };
                featuredImage?: { node: { mediaItemUrl: string; altText: string } };
              }) => (
                <article key={post.id} className="card" style={{ overflow: "hidden" }}>
                  <div style={{ height: 200, background: "var(--bg-section)", position: "relative", overflow: "hidden" }}>
                    {post.featuredImage?.node?.mediaItemUrl ? (
                      <Image
                        src={post.featuredImage.node.mediaItemUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, var(--primary) 0%, var(--blue) 100%)", fontSize: "3rem" }}>
                        🛡️
                      </div>
                    )}
                    {post.categories?.nodes?.[0] && (
                      <span
                        style={{
                          position: "absolute", top: 12, left: 12,
                          background: "var(--accent)", color: "white",
                          fontSize: "0.75rem", fontWeight: 700,
                          padding: "0.25rem 0.75rem", borderRadius: 50,
                        }}
                      >
                        {post.categories.nodes[0].name}
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "0.625rem" }}>
                      {formatDate(post.date)}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 700, fontSize: "1rem",
                        color: "var(--text-dark)", marginBottom: "0.75rem",
                        lineHeight: 1.4,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      <Link href={`/${post.slug}/`} className="hover:text-[var(--accent)]">
                        {post.title}
                      </Link>
                    </h3>
                    {post.excerpt && (
                      <div
                        style={{
                          fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6,
                          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                    )}
                    <Link
                      href={`/${post.slug}/`}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.375rem",
                        marginTop: "1rem", color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem",
                      }}
                    >
                      Đọc thêm →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA SECTION ===== */}
      <section
        style={{
          padding: "5rem 0",
          background: "linear-gradient(135deg, var(--primary) 0%, #1e3a6e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(224,92,26,0.1)", filter: "blur(60px)" }} />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "white", marginBottom: "1rem",
            }}
          >
            Bắt đầu bảo vệ gia đình bạn ngay hôm nay
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", marginBottom: "2.5rem", maxWidth: 520, margin: "0 auto 2.5rem" }}>
            Nhận tư vấn miễn phí từ chuyên gia — không ràng buộc, không áp lực
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/lien-he/" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2.25rem" }}>
              🎯 Nhận tư vấn miễn phí
            </Link>
            <a
              href="tel:1900xxxx"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(255,255,255,0.1)",
                border: "2px solid rgba(255,255,255,0.35)",
                color: "white", padding: "1rem 2.25rem",
                borderRadius: 50, fontWeight: 700, fontSize: "1.0625rem",
                transition: "all 0.2s",
              }}
              className="hover:bg-white hover:text-[var(--primary)]"
            >
              📞 Gọi 1900 xxxx
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

