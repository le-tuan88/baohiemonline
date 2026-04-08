"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "@/components/MainLayout";

interface Post {
  id: string; title: string; slug: string; date: string; excerpt?: string;
  featuredImage?: { node: { mediaItemUrl: string; altText: string } };
}

function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q.trim()) return;
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(q)}`)
      .then((r) => r.json())
      .then((data) => setResults(data.posts || []))
      .catch(() => setResults([]))
      .finally(() => setLoading(false));
  }, [q]);

  return (
    <div className="container" style={{ padding: "3rem 1.5rem" }}>
      <h1 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.75rem", marginBottom: "0.5rem" }}>
        Kết quả tìm kiếm
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        {q ? `Từ khóa: "${q}"` : "Vui lòng nhập từ khóa để tìm kiếm"}
        {!loading && results.length > 0 && ` — ${results.length} kết quả`}
      </p>

      {loading && (
        <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
          Đang tìm kiếm...
        </div>
      )}

      {!loading && q && results.length === 0 && (
        <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
          <p>Không tìm thấy kết quả cho &quot;{q}&quot;</p>
          <Link href="/blog/" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-flex" }}>Xem tất cả bài viết</Link>
        </div>
      )}

      {results.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {results.map((post) => (
            <article key={post.id} className="card">
              {post.featuredImage?.node?.mediaItemUrl && (
                <div style={{ height: 180, position: "relative", overflow: "hidden" }}>
                  <Image src={post.featuredImage.node.mediaItemUrl} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
              )}
              <div style={{ padding: "1.25rem" }}>
                <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", lineHeight: 1.4 }}>
                  <Link href={`/${post.slug}/`} className="hover:text-[var(--accent)]">{post.title}</Link>
                </h2>
                <Link href={`/${post.slug}/`} style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.875rem" }}>Đọc thêm →</Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <MainLayout>
      <Suspense fallback={<div className="container" style={{ padding: "3rem" }}>Đang tải...</div>}>
        <SearchResults />
      </Suspense>
    </MainLayout>
  );
}
