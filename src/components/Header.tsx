"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ===== MENU DATA (khớp với ảnh) =====
const navMenu = [
  {
    id: "suc-khoe",
    title: "Sức khỏe",
    megaMenu: [
      {
        group: "Bảo Việt",
        groupHref: "/bao-hiem-suc-khoe/bao-viet/",
        items: [
          { title: "Bảo Việt An Gia", href: "/bao-hiem-suc-khoe/bao-viet-an-gia/" },
          { title: "Bảo Việt Intercare", href: "/bao-hiem-suc-khoe/bao-viet-intercare/" },
          { title: "Bảo hiểm sức khoẻ tổ chức", href: "/bao-hiem-suc-khoe/bao-viet-to-chuc/" },
          { title: "Bảo Việt Tâm Bình", href: "/bao-hiem-suc-khoe/bao-viet-tam-binh/" },
          { title: "An tâm viện phí", href: "/bao-hiem-suc-khoe/an-tam-vien-phi/" },
          { title: "Bảo Việt KCare", href: "/bao-hiem-suc-khoe/bao-viet-kcare/" },
        ],
      },
      {
        group: "MIC",
        groupHref: "/bao-hiem-suc-khoe/mic/",
        items: [
          { title: "MIC Care", href: "/bao-hiem-suc-khoe/mic-care/" },
          { title: "Bảo hiểm sức khoẻ tổ chức", href: "/bao-hiem-suc-khoe/mic-to-chuc/" },
        ],
      },
      {
        group: "VBI",
        groupHref: "/bao-hiem-suc-khoe/vbi/",
        items: [
          { title: "VBI Care", href: "/bao-hiem-suc-khoe/vbi-care/" },
          { title: "Bảo hiểm sức khoẻ tổ chức", href: "/bao-hiem-suc-khoe/vbi-to-chuc/" },
        ],
      },
      {
        group: "PVI",
        groupHref: "/bao-hiem-suc-khoe/pvi/",
        items: [
          { title: "PVI Care", href: "/bao-hiem-suc-khoe/pvi-care/" },
          { title: "Bảo hiểm sức khoẻ tổ chức", href: "/bao-hiem-suc-khoe/pvi-to-chuc/" },
        ],
      },
    ],
  },
  {
    id: "xe-co-gioi",
    title: "Xe cơ giới",
    megaMenu: [
      {
        group: "Bảo hiểm vật chất ô tô",
        groupHref: "/bao-hiem-xe-co-gioi/vat-chat-o-to/",
        items: [
          { title: "Bảo Việt", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/bao-viet/" },
          { title: "PVI", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/pvi/" },
          { title: "MIC", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/mic/" },
          { title: "Bảo Minh", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/bao-minh/" },
          { title: "PJICO", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/pjico/" },
          { title: "DBV", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/dbv/" },
        ],
      },
      {
        group: "Bảo hiểm TNDS ô tô",
        groupHref: "/bao-hiem-xe-co-gioi/tnds-o-to/",
        items: [
          { title: "Bảo Việt", href: "/bao-hiem-xe-co-gioi/tnds-o-to/bao-viet/" },
          { title: "PVI", href: "/bao-hiem-xe-co-gioi/tnds-o-to/pvi/" },
          { title: "MIC", href: "/bao-hiem-xe-co-gioi/tnds-o-to/mic/" },
          { title: "Bảo Minh", href: "/bao-hiem-xe-co-gioi/tnds-o-to/bao-minh/" },
          { title: "PJICO", href: "/bao-hiem-xe-co-gioi/tnds-o-to/pjico/" },
          { title: "DBV", href: "/bao-hiem-xe-co-gioi/tnds-o-to/dbv/" },
        ],
      },
      {
        group: "Bảo hiểm TNDS xe máy",
        groupHref: "/bao-hiem-xe-co-gioi/tnds-xe-may/",
        items: [
          { title: "Bảo Việt", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/bao-viet/" },
          { title: "PVI", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/pvi/" },
          { title: "MIC", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/mic/" },
        ],
      },
    ],
  },
  {
    id: "du-lich",
    title: "Du lịch",
    megaMenu: [
      {
        group: "Bảo hiểm du lịch quốc tế",
        groupHref: "/bao-hiem-du-lich/quoc-te/",
        items: [
          { title: "Bảo Việt", href: "/bao-hiem-du-lich/quoc-te/bao-viet/" },
          { title: "Liberty", href: "/bao-hiem-du-lich/quoc-te/liberty/" },
          { title: "PVI", href: "/bao-hiem-du-lich/quoc-te/pvi/" },
          { title: "Bảo Minh", href: "/bao-hiem-du-lich/quoc-te/bao-minh/" },
          { title: "MIC", href: "/bao-hiem-du-lich/quoc-te/mic/" },
        ],
      },
      {
        group: "Bảo hiểm du lịch trong nước",
        groupHref: "/bao-hiem-du-lich/trong-nuoc/",
        items: [
          { title: "Bảo Việt", href: "/bao-hiem-du-lich/trong-nuoc/bao-viet/" },
          { title: "Liberty", href: "/bao-hiem-du-lich/trong-nuoc/liberty/" },
          { title: "PVI", href: "/bao-hiem-du-lich/trong-nuoc/pvi/" },
          { title: "Bảo Minh", href: "/bao-hiem-du-lich/trong-nuoc/bao-minh/" },
          { title: "MIC", href: "/bao-hiem-du-lich/trong-nuoc/mic/" },
        ],
      },
    ],
  },
  {
    id: "tai-nan",
    title: "Tai nạn",
    megaMenu: [
      {
        group: "Bảo Việt",
        groupHref: "/bao-hiem-tai-nan/bao-viet/",
        items: [
          { title: "Bảo hiểm tai nạn 247", href: "/bao-hiem-tai-nan/bao-viet-247/" },
          { title: "Bảo hiểm tai nạn trách nhiệm cao", href: "/bao-hiem-tai-nan/bao-viet-tnc/" },
          { title: "Cologne Re", href: "/bao-hiem-tai-nan/cologne-re/" },
        ],
      },
      {
        group: "MIC",
        groupHref: "/bao-hiem-tai-nan/mic/",
        items: [
          { title: "Bảo hiểm tai nạn MIC", href: "/bao-hiem-tai-nan/mic-tai-nan/" },
          { title: "Bảo hiểm vận động viên thể thao", href: "/bao-hiem-tai-nan/vdv-the-thao/" },
        ],
      },
      {
        group: "PVI",
        groupHref: "/bao-hiem-tai-nan/pvi/",
        items: [
          { title: "Bảo hiểm tai nạn PVI", href: "/bao-hiem-tai-nan/pvi-tai-nan/" },
        ],
      },
    ],
  },
  {
    id: "nhan-tho",
    title: "Nhân thọ",
    megaMenu: [
      {
        group: "Bảo Việt Nhân Thọ",
        groupHref: "/bao-hiem-nhan-tho/bao-viet/",
        items: [
          { title: "An Gia Phúc Lộc", href: "/bao-hiem-nhan-tho/an-gia-phuc-loc/" },
          { title: "An Gia Thịnh Vượng", href: "/bao-hiem-nhan-tho/an-gia-thinh-vuong/" },
          { title: "Tích lũy giáo dục", href: "/bao-hiem-nhan-tho/tich-luy-giao-duc/" },
        ],
      },
      {
        group: "Manulife",
        groupHref: "/bao-hiem-nhan-tho/manulife/",
        items: [
          { title: "Manulife Pro", href: "/bao-hiem-nhan-tho/manulife-pro/" },
          { title: "Manulife Sống Khỏe", href: "/bao-hiem-nhan-tho/manulife-song-khoe/" },
        ],
      },
    ],
  },
  {
    id: "bao-hiem-khac",
    title: "Bảo hiểm khác",
    megaMenu: [
      {
        group: "Bảo hiểm tài sản",
        groupHref: "/bao-hiem-khac/tai-san/",
        items: [
          { title: "Bảo hiểm nhà tư nhân", href: "/bao-hiem-khac/nha-tu-nhan/" },
          { title: "Bảo hiểm cháy nổ", href: "/bao-hiem-khac/chay-no/" },
          { title: "Bảo hiểm xây dựng", href: "/bao-hiem-khac/xay-dung/" },
        ],
      },
      {
        group: "Bảo hiểm doanh nghiệp",
        groupHref: "/bao-hiem-khac/doanh-nghiep/",
        items: [
          { title: "Bảo hiểm trách nhiệm", href: "/bao-hiem-khac/trach-nhiem/" },
          { title: "Bảo hiểm hàng hóa", href: "/bao-hiem-khac/hang-hoa/" },
          { title: "Bảo hiểm kỹ thuật", href: "/bao-hiem-khac/ky-thuat/" },
        ],
      },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQ.trim()) {
      router.push(`/search/?q=${encodeURIComponent(searchQ.trim())}`);
      setSearchOpen(false);
      setSearchQ("");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/10" : "bg-white"
        }`}
      >
        {/* Top bar */}
        <div
          style={{
            background: "var(--primary)",
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.85)",
          }}
          className="hidden lg:block"
        >
          <div className="container">
            <div className="flex justify-between items-center py-1.5">
              <div className="flex items-center gap-4">
                <span>📞 Hotline: <strong style={{ color: "#fbbf24" }}>1900 xxxx</strong></span>
                <span>✉️ hotro@baohiem.online</span>
              </div>
              <div className="flex items-center gap-4">
                <span>📍 TP. Hồ Chí Minh</span>
                <Link href="/gioi-thieu/" className="hover:text-white transition-colors">Về chúng tôi</Link>
                <Link href="/blog/" className="hover:text-white transition-colors">Tin tức</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--blue) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M13 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L13 2z" fill="white" opacity="0.25"/>
                  <path d="M13 4L5.5 7.5V13c0 4.8 3.3 9.3 7.5 10.5C17.2 22.3 20.5 17.8 20.5 13V7.5L13 4z" fill="white" opacity="0.5"/>
                  <path d="M9.5 13l2.5 2.5L16.5 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: "1.1875rem", color: "var(--primary)", lineHeight: 1.1 }}>
                  Bảo Hiểm
                </div>
                <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "var(--accent)", lineHeight: 1.1, letterSpacing: "0.02em" }}>
                  Online
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navMenu.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.id)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3.5 py-2.5 text-sm font-600 rounded-lg transition-all duration-200 font-semibold ${
                      activeMenu === item.id
                        ? "text-[var(--accent)] bg-orange-50"
                        : "text-slate-700 hover:text-[var(--accent)] hover:bg-orange-50"
                    }`}
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 600 }}
                  >
                    {item.title}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === item.id ? "rotate-180 text-[var(--accent)]" : "text-slate-400"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mega Menu Dropdown */}
                  {activeMenu === item.id && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 z-50"
                      style={{ minWidth: item.megaMenu.length > 2 ? 680 : 480 }}
                    >
                      <div style={{ height: 8 }} />
                      <div
                        style={{
                          background: "white",
                          borderRadius: 16,
                          boxShadow: "0 20px 60px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.07)",
                          border: "1px solid #e2e8f0",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${Math.min(item.megaMenu.length, 2)}, 1fr)`,
                            gap: 0,
                          }}
                        >
                          {item.megaMenu.map((group, gi) => (
                            <div
                              key={gi}
                              style={{
                                padding: "1.5rem 1.75rem",
                                borderRight: gi % 2 === 0 && gi < item.megaMenu.length - 1 ? "1px solid #f1f5f9" : "none",
                                borderBottom: gi < item.megaMenu.length - 2 ? "1px solid #f1f5f9" : "none",
                              }}
                            >
                              <Link
                                href={group.groupHref}
                                style={{
                                  display: "block",
                                  fontWeight: 700,
                                  color: "var(--accent)",
                                  fontSize: "0.9375rem",
                                  marginBottom: "0.875rem",
                                  fontFamily: "'Be Vietnam Pro', sans-serif",
                                }}
                                className="hover:opacity-80 transition-opacity"
                              >
                                {group.group}
                              </Link>
                              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                {group.items.map((sub, si) => (
                                  <li key={si}>
                                    <Link
                                      href={sub.href}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        fontSize: "0.875rem",
                                        color: "#374151",
                                        padding: "0.35rem 0",
                                        transition: "color 0.15s",
                                        fontFamily: "'Be Vietnam Pro', sans-serif",
                                      }}
                                      className="hover:text-[var(--accent)]"
                                    >
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, color: "#94a3b8" }}>
                                        <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-[var(--accent)] hover:bg-orange-50 transition-all"
                aria-label="Tìm kiếm"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </button>

              {/* CTA */}
              <a href="tel:1900xxxx" className="hidden sm:flex btn-primary text-sm py-2.5 px-5">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Tư vấn ngay
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-all"
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
            <div style={{ background: "white", borderRadius: 16, width: "100%", maxWidth: 640, boxShadow: "0 25px 60px rgba(0,0,0,0.2)", overflow: "hidden" }}>
              <form onSubmit={handleSearch} className="p-4 flex gap-3">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQ}
                  onChange={(e) => setSearchQ(e.target.value)}
                  placeholder="Tìm kiếm bảo hiểm, bài viết..."
                  style={{
                    flex: 1, border: "2px solid #e2e8f0", borderRadius: 10,
                    padding: "0.75rem 1rem", fontSize: "1rem", outline: "none",
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
                <button type="submit" className="btn-primary px-5 py-2.5">Tìm</button>
                <button type="button" onClick={() => setSearchOpen(false)} className="btn-secondary px-4 py-2.5">✕</button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="lg:hidden fixed inset-0 top-0 z-[90] bg-slate-900/50"
            onClick={() => setMobileOpen(false)}
          />
        )}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full z-[95] bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "min(340px, 90vw)" }}
        >
          <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontWeight: 800, fontSize: "1.125rem", color: "var(--primary)", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Danh mục
            </div>
            <button onClick={() => setMobileOpen(false)} style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: "1px solid #e2e8f0", cursor: "pointer", background: "none" }}>
              ✕
            </button>
          </div>
          <div style={{ padding: "1rem" }}>
            {navMenu.map((item) => (
              <div key={item.id} style={{ marginBottom: "0.25rem" }}>
                <button
                  onClick={() => setActiveMobile(activeMobile === item.id ? null : item.id)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "0.875rem 1rem", borderRadius: 10, border: "none", cursor: "pointer",
                    background: activeMobile === item.id ? "rgba(224,92,26,0.08)" : "transparent",
                    color: activeMobile === item.id ? "var(--accent)" : "#374151",
                    fontWeight: 600, fontSize: "0.9375rem", fontFamily: "'Be Vietnam Pro', sans-serif",
                    transition: "all 0.2s",
                  }}
                >
                  {item.title}
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    style={{ transform: activeMobile === item.id ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {activeMobile === item.id && (
                  <div style={{ padding: "0.5rem 1rem 0.75rem 1.5rem" }}>
                    {item.megaMenu.map((group, gi) => (
                      <div key={gi} style={{ marginBottom: "1rem" }}>
                        <div style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.5rem", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                          {group.group}
                        </div>
                        {group.items.map((sub, si) => (
                          <Link
                            key={si}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: "block", padding: "0.375rem 0", color: "#6b7280",
                              fontSize: "0.875rem", fontFamily: "'Be Vietnam Pro', sans-serif",
                              transition: "color 0.15s",
                            }}
                            className="hover:text-[var(--accent)]"
                          >
                            › {sub.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid #f1f5f9" }}>
            <a href="tel:1900xxxx" className="btn-primary w-full justify-center text-sm">
              📞 Tư vấn ngay - 1900 xxxx
            </a>
            <Link href="/lien-he/" onClick={() => setMobileOpen(false)} className="btn-secondary w-full justify-center text-sm mt-2">
              Liên hệ
            </Link>
          </div>
        </div>
      </header>

      {/* Header spacer */}
      <div style={{ height: scrolled ? 57 : 98 }} className="transition-all duration-300" />

      {/* Mobile FAB */}
      <a
        href="tel:1900xxxx"
        className="lg:hidden fixed bottom-6 right-4 z-[80] btn-primary shadow-2xl text-sm"
        style={{ borderRadius: 50, paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        Tư vấn ngay
      </a>
    </>
  );
}
