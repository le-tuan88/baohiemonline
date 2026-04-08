"use client";
import React from "react";
import Link from "next/link";
import { BreadcrumbItem } from "./InsuranceProductPage";

export interface InsuranceBrandData {
  name: string;
  logo?: string;
  color: string;
  desc?: string;
  href?: string;
  products: {
    title: string;
    href: string;
    desc: string;
  }[];
}

export interface InsuranceCategoryPageProps {
  gradient: string;
  accentColor: string;
  icon: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  brands: InsuranceBrandData[];
  benefits?: { icon: string; title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
  ctaTitle?: string;
  ctaDesc?: string;
}

export default function InsuranceCategoryPage(props: InsuranceCategoryPageProps) {
  const {
    gradient, accentColor, icon, title, subtitle, breadcrumbs,
    brands, benefits, faqs,
    ctaTitle = "Chưa biết chọn gói nào phù hợp?",
    ctaDesc = "Chuyên gia của chúng tôi sẽ tư vấn miễn phí gói phù hợp nhất với nhu cầu và khả năng tài chính của bạn."
  } = props;

  return (
    <>
      {/* ===== HERO ===== */}
      <section style={{ background: gradient, position: "relative", overflow: "hidden", paddingBottom: "3rem" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem", position: "relative", zIndex: 1, textAlign: "center" }}>
          {/* Breadcrumb */}
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
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

          <div style={{ fontSize: "clamp(3rem, 6vw, 4rem)", lineHeight: 1, marginBottom: "1rem" }}>
            {icon}
          </div>

          <h1 style={{
            fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white",
            lineHeight: 1.2, marginBottom: "1.25rem",
          }}>
            {title}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.125rem", lineHeight: 1.6, maxWidth: 640, margin: "0 auto 2.5rem" }}>
            {subtitle}
          </p>

          <Link href="/lien-he/" style={{
            background: "white", color: accentColor,
            padding: "1rem 2.5rem", borderRadius: 50,
            fontWeight: 800, fontSize: "1rem",
            textDecoration: "none", display: "inline-block",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            transition: "transform 0.2s, box-shadow 0.2s",
            fontFamily: "'Be Vietnam Pro', sans-serif",
          }}>
            Nhận tư vấn đa nền tảng
          </Link>
        </div>
      </section>

      {/* ===== BRANDS & PRODUCTS ===== */}
      <section style={{ padding: "5rem 0", background: "#F8FAFC" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
             <span style={{ color: accentColor, fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Danh mục sản phẩm</span>
             <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.25rem)", color: "#0F2044", marginTop: "0.5rem" }}>
               Các hãng bảo hiểm hàng đầu
             </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {brands.map((brand, bIndex) => (
              <div key={bIndex} style={{
                 background: "white", borderRadius: 24, padding: "2.5rem",
                 boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
                 border: "1px solid rgba(0,0,0,0.04)"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: 6, height: 40, background: brand.color, borderRadius: 3 }} />
                    <div>
                      <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#0F2044", margin: 0 }}>
                        {brand.name}
                      </h2>
                      {brand.desc && <p style={{ color: "#64748B", fontSize: "0.9375rem", margin: "0.25rem 0 0" }}>{brand.desc}</p>}
                    </div>
                  </div>
                  {brand.href && (
                    <Link href={brand.href} style={{ color: brand.color, fontWeight: 700, textDecoration: "none", fontSize: "0.9375rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      Xem tất cả <span style={{ fontSize: "1.2em" }}>→</span>
                    </Link>
                  )}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
                  {brand.products.map((prod, pIndex) => (
                    <Link key={pIndex} href={prod.href} style={{
                      padding: "1.5rem", borderRadius: 16, display: "block",
                      border: "1.5px solid #F1F5F9", textDecoration: "none",
                      transition: "all 0.25s", background: "#F8FAFC",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = brand.color + "50"; (e.currentTarget as HTMLAnchorElement).style.background = "white"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 24px rgba(0,0,0,0.06)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F1F5F9"; (e.currentTarget as HTMLAnchorElement).style.background = "#F8FAFC"; (e.currentTarget as HTMLAnchorElement).style.transform = "none"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem" }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: brand.color, marginTop: 7, flexShrink: 0 }} />
                        <h3 style={{ fontWeight: 800, color: "#0F2044", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "1.125rem", margin: 0 }}>
                          {prod.title}
                        </h3>
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.6, margin: 0, paddingLeft: "1.25rem" }}>{prod.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {benefits && benefits.length > 0 && (
         <section style={{ padding: "5rem 0", background: "white" }}>
            <div className="container">
               <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                  <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.25rem)", color: "#0F2044" }}>
                    Lý do chọn mua qua Bảo Hiểm Online
                  </h2>
               </div>
               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
                   {benefits.map((b, i) => (
                      <div key={i} style={{ textAlign: "center", padding: "1.5rem" }}>
                         <div style={{ fontSize: "2.5rem", marginBottom: "1.25rem" }}>{b.icon}</div>
                         <h3 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.125rem", color: "#0F2044", marginBottom: "0.75rem" }}>{b.title}</h3>
                         <p style={{ color: "#64748B", fontSize: "0.9375rem", lineHeight: 1.6 }}>{b.desc}</p>
                      </div>
                   ))}
               </div>
            </div>
         </section>
      )}

      {/* ===== CTA ===== */}
      <section style={{ padding: "4rem 0", background: "white" }}>
        <div className="container">
          <div style={{
            background: gradient,
            borderRadius: 28, padding: "4rem 2rem",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
            <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.25rem)", color: "white", marginBottom: "1rem" }}>
              {ctaTitle}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", marginBottom: "2.5rem", maxWidth: 600, margin: "0 auto 2.5rem" }}>
              {ctaDesc}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/lien-he/" style={{
                background: "white", color: accentColor,
                padding: "1rem 2.5rem", borderRadius: 50,
                fontWeight: 800, textDecoration: "none", fontSize: "1rem",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}>
                🎯 Nhận tư vấn chi tiết
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
