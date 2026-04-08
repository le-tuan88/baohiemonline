export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/wp-api";

export const metadata: Metadata = {
  title: "Blog & Kiến thức Bảo hiểm | Baohiem.Online",
  description: "Cập nhật kiến thức bảo hiểm, hướng dẫn mua bảo hiểm thông minh, so sánh sản phẩm từ Bảo Việt, MIC, VBI, PVI và nhiều công ty khác.",
  alternates: { canonical: "https://baohiem.online/blog/" },
};

function formatDate(d: string) {
  try { return new Date(d).toLocaleDateString("vi-VN", { year: "numeric", month: "long", day: "numeric" }); }
  catch { return d; }
}

type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  categories?: { nodes: { name: string; slug: string }[] };
  featuredImage?: { node: { mediaItemUrl: string; altText: string } };
};

// Category color map
const catColors: Record<string, string> = {
  default:         "#E05C1A",
  "sức-khỏe":     "#10B981",
  "xe-cơ-giới":   "#3B82F6",
  "du-lịch":      "#0EA5E9",
  "tai-nạn":      "#F59E0B",
  "nhân-thọ":     "#8B5CF6",
};
function catColor(slug?: string) {
  if (!slug) return catColors.default;
  return catColors[slug] || catColors.default;
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts(50) as Post[];

  const featured = posts.slice(0, 1)[0] || null;
  const secondary = posts.slice(1, 3);
  const rest = posts.slice(3);

  return (
    <>
      {/* ===== HERO HEADER ===== */}
      <section style={{
        background: "linear-gradient(135deg, #0F2044 0%, #1E3A8A 100%)",
        padding: "4rem 0 3rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", top: -100, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(251,191,36,0.15)",
            border: "1px solid rgba(251,191,36,0.35)",
            color: "#fbbf24",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.375rem 1.25rem",
            borderRadius: 50,
            marginBottom: "1.25rem",
          }}>
            📰 Kiến thức Bảo hiểm
          </div>
          <h1 style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "white",
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}>
            Blog &amp; Tin Tức Bảo Hiểm
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.0625rem", maxWidth: 540, margin: "0 auto" }}>
            Kinh nghiệm mua bảo hiểm thông minh, so sánh gói và hướng dẫn claim bồi thường từ chuyên gia.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section style={{ padding: "3.5rem 0 5rem", background: "#F8FAFC" }}>
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 0", color: "#6B7280" }}>
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📝</div>
              <p style={{ fontSize: "1.125rem" }}>Chưa có bài viết nào. Vui lòng quay lại sau.</p>
            </div>
          ) : (
            <>
              {/* ===== FEATURED POST ===== */}
              {featured && (
                <div style={{ marginBottom: "3rem" }}>
                  <Link href={`/${featured.slug}/`} style={{ textDecoration: "none", display: "block" }}>
                    <article style={{
                      borderRadius: 24,
                      overflow: "hidden",
                      background: "white",
                      boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      minHeight: 420,
                      transition: "box-shadow 0.3s, transform 0.3s",
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(0,0,0,0.14)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 32px rgba(0,0,0,0.08)";
                        (e.currentTarget as HTMLElement).style.transform = "none";
                      }}
                    >
                      {/* Image side */}
                      <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #0F2044, #1D4ED8)" }}>
                        {featured.featuredImage?.node?.mediaItemUrl ? (
                          <Image
                            src={featured.featuredImage.node.mediaItemUrl}
                            alt={featured.featuredImage.node.altText || featured.title}
                            fill
                            style={{ objectFit: "cover", transition: "transform 0.4s" }}
                            priority
                          />
                        ) : (
                          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem" }}>🛡️</div>
                        )}
                        {/* Overlay */}
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent, rgba(0,0,0,0.15))" }} />
                        {featured.categories?.nodes?.[0] && (
                          <div style={{
                            position: "absolute", top: 20, left: 20,
                            background: catColor(featured.categories.nodes[0].slug),
                            color: "white", fontSize: "0.75rem", fontWeight: 700,
                            padding: "0.3rem 0.875rem", borderRadius: 50,
                          }}>
                            {featured.categories.nodes[0].name}
                          </div>
                        )}
                      </div>
                      {/* Text side */}
                      <div style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ display: "inline-block", background: "#FFF7ED", color: "#E05C1A", fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: 50, marginBottom: "1rem", alignSelf: "flex-start" }}>
                          ⭐ Bài viết nổi bật
                        </div>
                        <h2 style={{
                          fontFamily: "'Be Vietnam Pro', sans-serif",
                          fontWeight: 900,
                          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                          color: "#0F172A",
                          lineHeight: 1.3,
                          marginBottom: "1rem",
                        }}>
                          {featured.title}
                        </h2>
                        {featured.excerpt && (
                          <div
                            style={{
                              color: "#64748B",
                              fontSize: "0.9375rem",
                              lineHeight: 1.65,
                              marginBottom: "1.5rem",
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical" as const,
                              overflow: "hidden",
                            }}
                            dangerouslySetInnerHTML={{ __html: featured.excerpt }}
                          />
                        )}
                        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", color: "#94A3B8", fontSize: "0.8125rem", marginBottom: "1.5rem" }}>
                          <span>📅 {formatDate(featured.date)}</span>
                        </div>
                        <div style={{
                          display: "inline-flex", alignItems: "center", gap: "0.5rem",
                          background: "#0F2044", color: "white",
                          padding: "0.75rem 1.75rem", borderRadius: 50,
                          fontWeight: 700, fontSize: "0.9375rem",
                          alignSelf: "flex-start",
                          fontFamily: "'Be Vietnam Pro', sans-serif",
                        }}>
                          Đọc bài viết →
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              )}

              {/* ===== SECONDARY 2 POSTS ===== */}
              {secondary.length > 0 && (
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "3rem",
                }}>
                  {secondary.map(post => (
                    <Link key={post.id} href={`/${post.slug}/`} style={{ textDecoration: "none" }}>
                      <article style={{
                        borderRadius: 20,
                        overflow: "hidden",
                        background: "white",
                        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                        height: "100%",
                        transition: "box-shadow 0.3s, transform 0.3s",
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
                          (e.currentTarget as HTMLElement).style.transform = "none";
                        }}
                      >
                        <div style={{ height: 220, position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #0F2044, #1D4ED8)" }}>
                          {post.featuredImage?.node?.mediaItemUrl ? (
                            <Image src={post.featuredImage.node.mediaItemUrl} alt={post.featuredImage.node.altText || post.title} fill style={{ objectFit: "cover" }} />
                          ) : (
                            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem" }}>🛡️</div>
                          )}
                          {post.categories?.nodes?.[0] && (
                            <div style={{
                              position: "absolute", top: 14, left: 14,
                              background: catColor(post.categories.nodes[0].slug),
                              color: "white", fontSize: "0.73rem", fontWeight: 700,
                              padding: "0.25rem 0.75rem", borderRadius: 50,
                            }}>
                              {post.categories.nodes[0].name}
                            </div>
                          )}
                        </div>
                        <div style={{ padding: "1.5rem" }}>
                          <p style={{ fontSize: "0.8rem", color: "#94A3B8", marginBottom: "0.625rem" }}>📅 {formatDate(post.date)}</p>
                          <h2 style={{
                            fontFamily: "'Be Vietnam Pro', sans-serif",
                            fontWeight: 800,
                            fontSize: "1.0625rem",
                            color: "#0F172A",
                            lineHeight: 1.4,
                            marginBottom: "0.75rem",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical" as const,
                            overflow: "hidden",
                          }}>
                            {post.title}
                          </h2>
                          {post.excerpt && (
                            <div
                              style={{
                                fontSize: "0.875rem",
                                color: "#64748B",
                                lineHeight: 1.6,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical" as const,
                                overflow: "hidden",
                                marginBottom: "1rem",
                              }}
                              dangerouslySetInnerHTML={{ __html: post.excerpt }}
                            />
                          )}
                          <span style={{ color: "#E05C1A", fontWeight: 700, fontSize: "0.875rem" }}>Đọc thêm →</span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}

              {/* ===== SECTION LABEL ===== */}
              {rest.length > 0 && (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
                    <div style={{ height: 3, flex: 1, background: "#E2E8F0", borderRadius: 99 }} />
                    <span style={{ color: "#64748B", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                      Tất cả bài viết
                    </span>
                    <div style={{ height: 3, flex: 1, background: "#E2E8F0", borderRadius: 99 }} />
                  </div>

                  {/* ===== REST POSTS — COMPACT LIST STYLE ===== */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1rem" }}>
                    {rest.map(post => (
                      <Link key={post.id} href={`/${post.slug}/`} style={{ textDecoration: "none" }}>
                        <article style={{
                          background: "white",
                          borderRadius: 16,
                          padding: "1.25rem",
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                          border: "1.5px solid #F1F5F9",
                          transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = "#E05C1A40";
                            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(224,92,26,0.1)";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = "#F1F5F9";
                            (e.currentTarget as HTMLElement).style.boxShadow = "none";
                            (e.currentTarget as HTMLElement).style.transform = "none";
                          }}
                        >
                          {/* Thumbnail */}
                          <div style={{ width: 80, height: 80, borderRadius: 12, overflow: "hidden", flexShrink: 0, background: "linear-gradient(135deg, #0F2044, #1D4ED8)", position: "relative" }}>
                            {post.featuredImage?.node?.mediaItemUrl ? (
                              <Image src={post.featuredImage.node.mediaItemUrl} alt={post.title} fill style={{ objectFit: "cover" }} />
                            ) : (
                              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>🛡️</div>
                            )}
                          </div>
                          {/* Meta */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            {post.categories?.nodes?.[0] && (
                              <div style={{
                                display: "inline-block",
                                background: catColor(post.categories.nodes[0].slug) + "18",
                                color: catColor(post.categories.nodes[0].slug),
                                fontSize: "0.7rem", fontWeight: 700,
                                padding: "0.15rem 0.6rem", borderRadius: 50,
                                marginBottom: "0.4rem",
                              }}>
                                {post.categories.nodes[0].name}
                              </div>
                            )}
                            <h3 style={{
                              fontFamily: "'Be Vietnam Pro', sans-serif",
                              fontWeight: 700,
                              fontSize: "0.9375rem",
                              color: "#0F172A",
                              lineHeight: 1.4,
                              marginBottom: "0.25rem",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical" as const,
                              overflow: "hidden",
                            }}>
                              {post.title}
                            </h3>
                            <p style={{ fontSize: "0.75rem", color: "#94A3B8" }}>📅 {formatDate(post.date)}</p>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
