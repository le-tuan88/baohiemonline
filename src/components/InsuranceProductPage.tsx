"use client";
import React, { useState } from "react";
import Link from "next/link";

// ===== TYPES =====
export interface PlanFeature {
  label: string;
  basic?: string;
  standard?: string;
  premium?: string;
}

export interface InsurancePlan {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface RelatedProduct {
  title: string;
  href: string;
  desc: string;
  icon: string;
}

export interface InsuranceProductPageProps {
  // Hero
  gradient: string;           // CSS gradient string
  accentColor: string;        // Hex color for accents
  icon: string;               // Emoji or SVG string
  badge?: string;             // Small badge text (e.g. "Phổ biến nhất")
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];

  // Stats bar
  stats: { label: string; value: string; icon: string }[];

  // Key benefits
  benefits: { icon: string; title: string; desc: string }[];

  // Plans
  plans?: InsurancePlan[];

  // Coverage table (alternative to plans)
  coverageRows?: PlanFeature[];
  coverageHeaders?: string[];

  // Process
  steps: { icon: string; title: string; desc: string }[];

  // Why us
  whyUs?: { icon: string; title: string; desc: string }[];

  // FAQ
  faqs: FAQItem[];

  // Related
  related?: RelatedProduct[];

  // CTA
  ctaTitle?: string;
  ctaDesc?: string;
}

// ===== FAQ ACCORDION =====
function FAQAccordion({ items, accentColor }: { items: FAQItem[]; accentColor: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            border: `1px solid ${open === i ? accentColor + "40" : "#E2E8F0"}`,
            borderRadius: 14,
            overflow: "hidden",
            transition: "border-color 0.2s",
            background: open === i ? accentColor + "05" : "white",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              padding: "1.125rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#1E293B" }}>
              {item.q}
            </span>
            <span style={{
              flexShrink: 0,
              width: 28, height: 28,
              borderRadius: "50%",
              background: open === i ? accentColor : "#F1F5F9",
              color: open === i ? "white" : "#64748B",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
              fontSize: "1.125rem", lineHeight: 1,
            }}>
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div style={{ padding: "0 1.5rem 1.25rem", color: "#475569", fontSize: "0.9375rem", lineHeight: 1.7 }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ===== MAIN TEMPLATE =====
export default function InsuranceProductPage(props: InsuranceProductPageProps) {
  const {
    gradient, accentColor, icon, badge, title, subtitle, breadcrumbs,
    stats, benefits, plans, coverageRows, coverageHeaders,
    steps, whyUs, faqs, related,
    ctaTitle = "Nhận tư vấn miễn phí ngay hôm nay",
    ctaDesc = "Chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7 để chọn gói bảo hiểm phù hợp nhất.",
  } = props;

  return (
    <>
      {/* ===== HERO ===== */}
      <section style={{ background: gradient, position: "relative", overflow: "hidden", paddingBottom: "3rem" }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "2rem", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem" }}>›</span>}
                {crumb.href ? (
                  <Link href={crumb.href} style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.8125rem", textDecoration: "none", transition: "color 0.2s" }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8125rem", fontWeight: 600 }}>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", maxWidth: 660 }}>
            {badge && (
              <span style={{
                background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                color: "white", fontSize: "0.8125rem", fontWeight: 700,
                padding: "0.375rem 1rem", borderRadius: 50,
                marginBottom: "1rem", letterSpacing: "0.02em",
                border: "1px solid rgba(255,255,255,0.2)",
              }}>
                ⭐ {badge}
              </span>
            )}

            <div style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1, marginBottom: "1rem" }}>
              {icon}
            </div>

            <h1 style={{
              fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900,
              fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: "white",
              lineHeight: 1.15, marginBottom: "1rem",
            }}>
              {title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.0625rem", lineHeight: 1.65, marginBottom: "2rem" }}>
              {subtitle}
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/lien-he/" style={{
                background: "white", color: accentColor,
                padding: "0.875rem 2rem", borderRadius: 50,
                fontWeight: 800, fontSize: "0.9375rem",
                textDecoration: "none", display: "inline-block",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                transition: "transform 0.2s, box-shadow 0.2s",
                fontFamily: "'Be Vietnam Pro', sans-serif",
              }}>
                Nhận tư vấn miễn phí
              </Link>
              <a href="tel:1900xxxx" style={{
                background: "rgba(255,255,255,0.15)", color: "white",
                padding: "0.875rem 2rem", borderRadius: 50,
                fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.35)",
                backdropFilter: "blur(8px)",
                fontFamily: "'Be Vietnam Pro', sans-serif",
              }}>
                📞 Gọi ngay
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            background: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)",
            borderRadius: 20, padding: "1.25rem 2rem",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "grid",
            gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
            gap: "0",
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                textAlign: "center",
                padding: "0.5rem 1rem",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
              }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{s.icon}</div>
                <div style={{ color: "white", fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.375rem", lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8125rem", marginTop: "0.25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY BENEFITS ===== */}
      <section style={{ padding: "4.5rem 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: accentColor, fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Quyền lợi nổi bật</span>
            <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#0F2044", marginTop: "0.5rem" }}>
              Tại sao chọn gói bảo hiểm này?
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}>
            {benefits.map((b, i) => (
              <div key={i} style={{
                padding: "1.75rem",
                borderRadius: 20,
                border: "1.5px solid #F1F5F9",
                background: "white",
                transition: "all 0.25s",
                cursor: "default",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = accentColor + "50"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#F1F5F9"; (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{b.icon}</div>
                <h3 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#0F2044", marginBottom: "0.5rem" }}>{b.title}</h3>
                <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLANS ===== */}
      {plans && plans.length > 0 && (
        <section style={{ padding: "4rem 0", background: "#F8FAFC" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ color: accentColor, fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Bảng gói bảo hiểm</span>
              <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#0F2044", marginTop: "0.5rem" }}>
                Lựa chọn gói phù hợp
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {plans.map((plan, i) => (
                <div key={i} style={{
                  borderRadius: 24, overflow: "hidden",
                  border: plan.highlight ? `2px solid ${accentColor}` : "1.5px solid #E2E8F0",
                  background: "white",
                  boxShadow: plan.highlight ? `0 16px 40px ${accentColor}20` : "none",
                  position: "relative",
                }}>
                  {plan.highlight && (
                    <div style={{ background: accentColor, color: "white", textAlign: "center", padding: "0.5rem", fontSize: "0.8125rem", fontWeight: 700 }}>
                      ⭐ Được chọn nhiều nhất
                    </div>
                  )}
                  <div style={{ padding: "1.75rem" }}>
                    <h3 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.125rem", color: "#0F2044", marginBottom: "0.5rem" }}>{plan.name}</h3>
                    <div style={{ fontSize: "1.75rem", fontWeight: 900, color: accentColor, fontFamily: "'Be Vietnam Pro', sans-serif", marginBottom: "1.25rem" }}>{plan.price}</div>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
                      {plan.features.map((f, fi) => (
                        <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", padding: "0.5rem 0", borderBottom: fi < plan.features.length - 1 ? "1px solid #F1F5F9" : "none", fontSize: "0.9rem", color: "#475569" }}>
                          <span style={{ color: accentColor, fontWeight: 700, flexShrink: 0 }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/lien-he/" style={{
                      display: "block", textAlign: "center", padding: "0.875rem",
                      borderRadius: 50, fontWeight: 700, textDecoration: "none",
                      fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "0.9375rem",
                      background: plan.highlight ? accentColor : "transparent",
                      color: plan.highlight ? "white" : accentColor,
                      border: `2px solid ${accentColor}`,
                      transition: "all 0.2s",
                    }}>
                      Đăng ký ngay
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== HOW IT WORKS ===== */}
      <section style={{ padding: "4.5rem 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: accentColor, fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Quy trình</span>
            <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#0F2044", marginTop: "0.5rem" }}>
              Mua bảo hiểm chỉ trong 3 bước
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "2rem" }}>
            {steps.map((step, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}30)`,
                  border: `2px solid ${accentColor}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.75rem", margin: "0 auto 1.25rem",
                  position: "relative",
                }}>
                  {step.icon}
                  <span style={{
                    position: "absolute", top: -8, right: -8,
                    width: 24, height: 24, borderRadius: "50%",
                    background: accentColor, color: "white",
                    fontSize: "0.75rem", fontWeight: 800,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{i + 1}</span>
                </div>
                <h3 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#0F2044", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      {whyUs && whyUs.length > 0 && (
        <section style={{ padding: "4rem 0", background: `linear-gradient(135deg, ${accentColor}08, ${accentColor}03)` }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ color: accentColor, fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Cam kết của chúng tôi</span>
              <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#0F2044", marginTop: "0.5rem" }}>
                Tại sao chọn Bảo Hiểm Online?
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.5rem" }}>
              {whyUs.map((w, i) => (
                <div key={i} style={{ textAlign: "center", padding: "1.5rem" }}>
                  <div style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>{w.icon}</div>
                  <h3 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#0F2044", marginBottom: "0.5rem" }}>{w.title}</h3>
                  <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.65 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      <section style={{ padding: "4.5rem 0", background: "white" }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: accentColor, fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>FAQ</span>
            <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#0F2044", marginTop: "0.5rem" }}>
              Câu hỏi thường gặp
            </h2>
          </div>
          <FAQAccordion items={faqs} accentColor={accentColor} />
        </div>
      </section>

      {/* ===== RELATED ===== */}
      {related && related.length > 0 && (
        <section style={{ padding: "4rem 0", background: "#F8FAFC" }}>
          <div className="container">
            <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "#0F2044", marginBottom: "2rem", textAlign: "center" }}>
              Sản phẩm liên quan
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.25rem" }}>
              {related.map((r, i) => (
                <Link key={i} href={r.href} style={{
                  textDecoration: "none", display: "flex", flexDirection: "column", gap: "0.5rem",
                  background: "white", borderRadius: 16, padding: "1.25rem 1.5rem",
                  border: "1.5px solid #E2E8F0", transition: "all 0.2s",
                }}>
                  <div style={{ fontSize: "1.75rem" }}>{r.icon}</div>
                  <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#0F2044" }}>{r.title}</div>
                  <div style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.5 }}>{r.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{
            background: gradient,
            borderRadius: 28, padding: "3.5rem 2rem",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
            <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "white", marginBottom: "0.75rem" }}>
              {ctaTitle}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem", marginBottom: "2rem", maxWidth: 520, margin: "0 auto 2rem" }}>
              {ctaDesc}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/lien-he/" style={{
                background: "white", color: accentColor,
                padding: "0.9375rem 2.5rem", borderRadius: 50,
                fontWeight: 800, textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}>
                🎯 Tư vấn miễn phí
              </Link>
              <a href="tel:1900xxxx" style={{
                background: "rgba(255,255,255,0.15)", color: "white",
                padding: "0.9375rem 2.5rem", borderRadius: 50,
                fontWeight: 700, textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.4)",
                fontFamily: "'Be Vietnam Pro', sans-serif",
              }}>
                📞 1900 xxxx
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
