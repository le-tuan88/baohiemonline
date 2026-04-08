import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div
        style={{
          minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center",
          padding: "4rem 1.5rem", textAlign: "center",
        }}
      >
        <div>
          <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>😔</div>
          <h1
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 900,
              fontSize: "3rem", color: "var(--primary)", marginBottom: "0.5rem",
            }}
          >
            404
          </h1>
          <h2 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, marginBottom: "1rem", fontSize: "1.375rem" }}>
            Trang không tìm thấy
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem", maxWidth: 440, margin: "0 auto 2rem" }}>
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn-primary">🏠 Về trang chủ</Link>
            <Link href="/lien-he/" className="btn-secondary">Liên hệ hỗ trợ</Link>
          </div>
        </div>
      </div>
    </>
  );
}

