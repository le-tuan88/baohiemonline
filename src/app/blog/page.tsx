export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/wp-api";

export const metadata: Metadata = {
  title: "Blog & Kiến thức Bảo hiểm",
  description: "Cập nhật kiến thức bảo hiểm, hướng dẫn mua bảo hiểm thông minh, so sánh sản phẩm từ Bảo Việt, MIC, VBI, PVI và nhiều công ty khác.",
  alternates: { canonical: "https://baohiem.online/blog/" },
};

function formatDate(d: string) {
  try { return new Date(d).toLocaleDateString("vi-VN", { year: "numeric", month: "long", day: "numeric" }); }
  catch { return d; }
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts(50);

  return (
    <>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, var(--primary) 0%, #1e3a6e 100%)", padding: "3.5rem 0", textAlign: "center" }}>
        <div className="container">
          <div className="section-badge" style={{ color: "#fbbf24", background: "rgba(251,191,36,0.15)", borderColor: "rgba(251,191,36,0.3)" }}>Kiến thức bảo hiểm</div>
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900, color: "white", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginTop: "0.5rem" }}>
            Blog & Tin tức
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "0.75rem", fontSize: "1rem" }}>
            Kiến thức bảo hiểm, kinh nghiệm mua bảo hiểm thông minh
          </p>
        </div>
      </div>

      {/* Posts grid */}
      <section style={{ padding: "3.5rem 0" }}>
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
              <p>Chưa có bài viết nào. Vui lòng quay lại sau.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {posts.map((post: {
                id: string; title: string; slug: string; date: string; excerpt?: string;
                categories?: { nodes: { name: string; slug: string }[] };
                featuredImage?: { node: { mediaItemUrl: string; altText: string } };
              }) => (
                <article key={post.id} className="card">
                  <div style={{ height: 220, position: "relative", overflow: "hidden", background: "var(--bg-section)" }}>
                    {post.featuredImage?.node?.mediaItemUrl ? (
                      <Image src={post.featuredImage.node.mediaItemUrl} alt={post.featuredImage.node.altText || post.title} fill style={{ objectFit: "cover", transition: "transform 0.4s" }} className="hover:scale-105" />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, var(--primary), var(--blue))", fontSize: "3rem" }}>🛡️</div>
                    )}
                    {post.categories?.nodes?.[0] && (
                      <span style={{ position: "absolute", top: 12, left: 12, background: "var(--accent)", color: "white", fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: 20 }}>
                        {post.categories.nodes[0].name}
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "1.25rem 1.375rem" }}>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>{formatDate(post.date)}</p>
                    <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "var(--text-dark)", marginBottom: "0.75rem", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                      <Link href={`/${post.slug}/`} className="hover:text-[var(--accent)]">{post.title}</Link>
                    </h2>
                    {post.excerpt && (
                      <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    )}
                    <Link href={`/${post.slug}/`} style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", marginTop: "1rem", color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem" }}>
                      Đọc thêm →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

