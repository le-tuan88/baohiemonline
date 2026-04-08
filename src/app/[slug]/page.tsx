import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";
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

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const node = await getNodeByUri(slug);

  if (!node) return notFound();

  // Category page
  if (node.__typename === "Category") {
    return (
      <MainLayout>
        <div className="container" style={{ padding: "3rem 1.5rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Trang chủ</Link>
            <span style={{ color: "var(--text-muted)", margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "var(--accent)", fontSize: "0.875rem", fontWeight: 600 }}>{node.name}</span>
          </div>
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, marginBottom: "1rem" }}>{node.name}</h1>
          {node.description && (
            <div className="wp-content" dangerouslySetInnerHTML={{ __html: node.description }} />
          )}
        </div>
      </MainLayout>
    );
  }

  // Page
  if (node.__typename === "Page") {
    return (
      <MainLayout>
        <div className="container" style={{ padding: "3rem 1.5rem", maxWidth: 860 }}>
          <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, marginBottom: "2rem" }}>{node.title}</h1>
          {node.featuredImage?.node?.mediaItemUrl && (
            <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: "2rem", position: "relative", height: 400 }}>
              <Image src={node.featuredImage.node.mediaItemUrl} alt={node.featuredImage.node.altText || node.title} fill style={{ objectFit: "cover" }} />
            </div>
          )}
          <div className="wp-content" dangerouslySetInnerHTML={{ __html: node.content || "" }} />
        </div>
      </MainLayout>
    );
  }

  // Post (default)
  const post = node;
  const canonical = post.seo?.canonicalUrl || `${BASE_URL}/${slug}/`;

  return (
    <MainLayout>
      <article>
        {/* Post header */}
        <div style={{ background: "var(--bg-light)", padding: "3rem 0 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: 860 }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <Link href="/" style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>Trang chủ</Link>
              <span style={{ color: "var(--text-muted)" }}>›</span>
              <Link href="/blog/" style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>Blog</Link>
              {post.categories?.nodes?.[0] && (
                <>
                  <span style={{ color: "var(--text-muted)" }}>›</span>
                  <Link href={`/danh-muc/${post.categories.nodes[0].slug}/`} style={{ color: "var(--accent)", fontSize: "0.8125rem", fontWeight: 600 }}>
                    {post.categories.nodes[0].name}
                  </Link>
                </>
              )}
            </div>

            <h1
              style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                color: "var(--text-dark)", lineHeight: 1.2, marginBottom: "1rem",
              }}
            >
              {post.title}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2rem", color: "var(--text-muted)", fontSize: "0.875rem", flexWrap: "wrap" }}>
              <span>📅 {formatDate(post.date)}</span>
              {post.author?.node?.name && <span>✍️ {post.author.node.name}</span>}
              {post.categories?.nodes?.[0] && (
                <span style={{ background: "rgba(224,92,26,0.1)", color: "var(--accent)", padding: "0.2rem 0.75rem", borderRadius: 20, fontWeight: 600, fontSize: "0.8125rem" }}>
                  {post.categories.nodes[0].name}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Featured image */}
        {post.featuredImage?.node?.mediaItemUrl && (
          <div style={{ background: "var(--bg-light)", paddingBottom: "2rem" }}>
            <div className="container" style={{ maxWidth: 860 }}>
              <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", height: "min(480px, 55vw)", minHeight: 250 }}>
                <Image
                  src={post.featuredImage.node.mediaItemUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Post content */}
        <div className="container" style={{ maxWidth: 860, padding: "2.5rem 1.5rem" }}>
          <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content || "" }} />
        </div>

        {/* Canonical self-link (SEO) */}
        <link rel="canonical" href={canonical} />

        {/* CTA Box */}
        <div className="container" style={{ maxWidth: 860, paddingBottom: "3rem" }}>
          <div
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, #1e3a6e 100%)",
              borderRadius: 16, padding: "2rem", textAlign: "center", color: "white",
            }}
          >
            <h3 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, marginBottom: "0.75rem", fontSize: "1.25rem" }}>
              Cần tư vấn bảo hiểm?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.25rem", fontSize: "0.9375rem" }}>
              Chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn chọn gói bảo hiểm phù hợp nhất.
            </p>
            <Link href="/lien-he/" className="btn-primary">
              Nhận tư vấn miễn phí
            </Link>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
