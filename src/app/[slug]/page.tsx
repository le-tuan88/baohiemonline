import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllNodeUris, getNodeByUri, BASE_URL } from "@/lib/wp-api";

export const dynamicParams = true;
export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const nodes = await getAllNodeUris();
    return nodes.map((n: { slug: string }) => ({ slug: n.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const node = await getNodeByUri(slug);
  if (!node) return { title: "Không tìm thấy" };

  const seo = node.seo;
  const canonical = seo?.canonicalUrl || `${BASE_URL}/${slug}/`;
  const ogImage = seo?.openGraph?.image?.url || node.featuredImage?.node?.mediaItemUrl;

  return {
    title: seo?.title || node.title,
    description: seo?.description || "",
    alternates: { canonical },
    openGraph: {
      title: seo?.openGraph?.title || node.title,
      description: seo?.openGraph?.description || seo?.description || "",
      url: canonical,
      images: ogImage ? [{ url: ogImage }] : [],
    },
  };
}

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("vi-VN", { year: "numeric", month: "long", day: "numeric" });
  } catch { return d; }
}

// ===== CATEGORY PAGE =====
function CategoryLayout({ node }: { node: any }) {
  return (
    <div className="container" style={{ padding: "3rem 1.5rem", maxWidth: 860 }}>
      <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "#94A3B8", fontSize: "0.8125rem" }}>Trang chủ</Link>
        <span style={{ color: "#CBD5E1" }}>›</span>
        <span style={{ color: "#E05C1A", fontSize: "0.8125rem", fontWeight: 600 }}>{node.name}</span>
      </nav>
      <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", marginBottom: "1rem" }}>{node.name}</h1>
      {node.description && (
        <div className="wp-content" dangerouslySetInnerHTML={{ __html: node.description }} />
      )}
    </div>
  );
}

// ===== STATIC PAGE =====
function PageLayout({ node }: { node: any }) {
  return (
    <div style={{ background: "#F8FAFC", minHeight: "60vh", padding: "3rem 0" }}>
      <div className="container" style={{ maxWidth: 860 }}>
        <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "2rem", color: "#0F172A" }}>{node.title}</h1>
        {node.featuredImage?.node?.mediaItemUrl && (
          <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: "2.5rem", position: "relative", height: 420 }}>
            <Image src={node.featuredImage.node.mediaItemUrl} alt={node.featuredImage.node.altText || node.title} fill style={{ objectFit: "cover" }} priority />
          </div>
        )}
        <div className="wp-content" dangerouslySetInnerHTML={{ __html: node.content || "" }} />
      </div>
    </div>
  );
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const node = await getNodeByUri(slug);

  if (!node) return notFound();

  if (node.__typename === "Category") return <CategoryLayout node={node} />;
  if (node.__typename === "Page") return <PageLayout node={node} />;

  // ===== POST =====
  const post = node;
  const canonical = post.seo?.canonicalUrl || `${BASE_URL}/${slug}/`;

  return (
    <>
      <article>
        {/* ===== POST HERO ===== */}
        <header style={{
          background: "linear-gradient(160deg, #0F2044 0%, #1E3A8A 100%)",
          paddingTop: "3rem",
          paddingBottom: post.featuredImage?.node?.mediaItemUrl ? "5rem" : "3rem",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* decorative */}
          <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />

          <div className="container" style={{ maxWidth: 860, position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8125rem", textDecoration: "none" }}>Trang chủ</Link>
              <span style={{ color: "rgba(255,255,255,0.35)" }}>›</span>
              <Link href="/blog/" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8125rem", textDecoration: "none" }}>Blog</Link>
              {post.categories?.nodes?.[0] && (
                <>
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>›</span>
                  <Link href={`/danh-muc/${post.categories.nodes[0].slug}/`} style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
                    {post.categories.nodes[0].name}
                  </Link>
                </>
              )}
            </nav>

            {/* Category badge */}
            {post.categories?.nodes?.[0] && (
              <div style={{
                display: "inline-block",
                background: "rgba(224,92,26,0.2)",
                border: "1px solid rgba(224,92,26,0.4)",
                color: "#fca06a",
                fontSize: "0.8rem",
                fontWeight: 700,
                padding: "0.35rem 1rem",
                borderRadius: 50,
                marginBottom: "1.25rem",
                letterSpacing: "0.03em",
              }}>
                {post.categories.nodes[0].name}
              </div>
            )}

            <h1 style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "white",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}>
              {post.title}
            </h1>

            {/* Meta bar */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.875rem",
              flexWrap: "wrap",
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <span>📅</span> {formatDate(post.date)}
              </span>
              {post.author?.node?.name && (
                <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <span>✍️</span> {post.author.node.name}
                </span>
              )}
              <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <span>⏱️</span> 5 phút đọc
              </span>
            </div>
          </div>
        </header>

        {/* ===== FEATURED IMAGE (overlapping) ===== */}
        {post.featuredImage?.node?.mediaItemUrl ? (
          <div style={{ background: "#F8FAFC" }}>
            <div className="container" style={{ maxWidth: 860 }}>
              <div style={{
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                height: "clamp(240px, 45vw, 500px)",
                marginTop: "-3.5rem",
                boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
              }}>
                <Image
                  src={post.featuredImage.node.mediaItemUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, 860px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div style={{ height: 32, background: "#F8FAFC" }} />
        )}

        {/* ===== POST CONTENT ===== */}
        <div style={{ background: "#F8FAFC", paddingBottom: "4rem" }}>
          <div className="container" style={{ maxWidth: 860 }}>
            {/* Content card */}
            <div style={{
              background: "white",
              borderRadius: 20,
              padding: "clamp(1.5rem, 4vw, 3rem)",
              marginTop: "2rem",
              boxShadow: "0 2px 24px rgba(0,0,0,0.05)",
            }}>
              <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content || "" }} />
            </div>

            {/* Tags / categories */}
            {post.categories?.nodes && post.categories.nodes.length > 0 && (
              <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <span style={{ color: "#64748B", fontSize: "0.875rem", fontWeight: 600 }}>Chủ đề:</span>
                {post.categories.nodes.map((cat: { name: string; slug: string }) => (
                  <Link
                    key={cat.slug}
                    href={`/danh-muc/${cat.slug}/`}
                    style={{
                      background: "#F1F5F9",
                      color: "#475569",
                      padding: "0.35rem 1rem",
                      borderRadius: 50,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "background 0.2s, color 0.2s",
                    }}
                  >
                    # {cat.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Share / action bar */}
            <div style={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              padding: "1.25rem 1.75rem",
              background: "#F8FAFC",
              borderRadius: 14,
              border: "1.5px solid #E2E8F0",
            }}>
              <div style={{ color: "#64748B", fontSize: "0.875rem" }}>
                Bài viết hữu ích? <strong style={{ color: "#0F172A" }}>Chia sẻ với bạn bè!</strong>
              </div>
              <div style={{ display: "flex", gap: "0.625rem" }}>
                {[
                  { label: "Facebook", bg: "#1877F2", icon: "f" },
                  { label: "Zalo", bg: "#0068ff", icon: "Z" },
                ].map(s => (
                  <div
                    key={s.label}
                    style={{
                      background: s.bg,
                      color: "white",
                      padding: "0.5rem 1.25rem",
                      borderRadius: 50,
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    {s.label}
                  </div>
                ))}
              </div>
            </div>

            {/* ===== CTA BOX ===== */}
            <div style={{
              marginTop: "2.5rem",
              background: "linear-gradient(135deg, #0F2044 0%, #1E3A8A 100%)",
              borderRadius: 20,
              padding: "2.5rem 2rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🛡️</div>
              <h3 style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: 900,
                fontSize: "1.375rem",
                color: "white",
                marginBottom: "0.625rem",
              }}>
                Cần tư vấn bảo hiểm miễn phí?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem", marginBottom: "1.75rem", maxWidth: 480, margin: "0 auto 1.75rem" }}>
                Chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7 để chọn gói bảo hiểm phù hợp nhất với ngân sách và nhu cầu bảo vệ.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/lien-he/" style={{
                  background: "white",
                  color: "#0F2044",
                  padding: "0.875rem 2rem",
                  borderRadius: 50,
                  fontWeight: 800,
                  textDecoration: "none",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "0.9375rem",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}>
                  🎯 Nhận tư vấn miễn phí
                </Link>
                <a href="tel:1900xxxx" style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "white",
                  padding: "0.875rem 2rem",
                  borderRadius: 50,
                  fontWeight: 700,
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  fontSize: "0.9375rem",
                }}>
                  📞 Gọi ngay
                </a>
              </div>
            </div>

            {/* Back to blog */}
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <Link href="/blog/" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#64748B",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
              }}>
                ← Xem tất cả bài viết
              </Link>
            </div>
          </div>
        </div>
      </article>

      <link rel="canonical" href={canonical} />
    </>
  );
}
