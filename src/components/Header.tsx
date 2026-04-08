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
  const [activeMobile, setActiveMobile] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
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
      {/* Search Overlay */}
      {searchOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex justify-center transition-all animate-fadeInUp" 
          style={{ alignItems: "flex-start", paddingTop: "80px", paddingLeft: "1rem", paddingRight: "1rem", animationDuration: "0.2s" }}
          onClick={() => setSearchOpen(false)}
        >
          <div 
            style={{ background: "white", borderRadius: 20, width: "100%", maxWidth: 680, boxShadow: "0 25px 60px rgba(0,0,0,0.2)", overflow: "hidden" }}
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.75rem", padding: "1.25rem" }}>
              <input
                ref={searchRef}
                type="text"
                value={searchQ}
                onChange={(e) => setSearchQ(e.target.value)}
                placeholder="Tìm kiếm bảo hiểm, bài viết..."
                style={{
                  flex: 1, border: "2px solid #f1f5f9", borderRadius: 12,
                  padding: "0.875rem 1.25rem", fontSize: "1.0625rem", outline: "none",
                  fontFamily: "'Be Vietnam Pro', sans-serif", background: "#f8fafc",
                  transition: "all 0.2s"
                }}
                onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.background = "white"; }}
                onBlur={(e) => { e.target.style.borderColor = "#f1f5f9"; e.target.style.background = "#f8fafc"; }}
              />
              <button type="submit" className="btn-primary" style={{ padding: "0 1.5rem", borderRadius: 12 }}>Tìm kiếm</button>
              <button type="button" onClick={() => setSearchOpen(false)} className="btn-secondary" style={{ padding: "0 1.25rem", borderRadius: 12, border: "none", background: "#f1f5f9" }}>✕</button>
            </form>
          </div>
        </div>
      )}

      {/* Tùy biến CSS inline cho animation underline */}
      <style>{`
        .nav-link { position: relative; }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 50%; height: 3px; width: 0;
          background: var(--accent); transition: all 0.3s ease; border-radius: 3px 3px 0 0;
          transform: translateX(-50%);
        }
        .nav-link.active::after, .nav-link:hover::after { width: 100%; }
        
        .header-floating {
          top: 15px; left: 50%; transform: translateX(-50%);
          width: calc(100% - 30px); max-width: 1200px;
          border-radius: 60px;
          background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(20px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,255,255,0.4);
        }
        .header-top {
          top: 0; left: 0; width: 100%;
          border-radius: 0; background: white;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          box-shadow: none;
        }
        
        /* Dropdown fade in */
        @keyframes menuFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mega-dropdown {
          animation: menuFade 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <header className={`fixed z-[80] transition-all duration-500 flex flex-col justify-center ${scrolled ? "header-floating" : "header-top"}`}>
        {/* Top bar - chỉ hiện khi ở trên cùng */}
        <div 
          className={`hidden lg:block transition-all duration-300 overflow-hidden ${scrolled ? "h-0 opacity-0" : "h-[36px] opacity-100"}`}
          style={{ background: "#f8fafc", fontSize: "0.8125rem", color: "var(--text-muted)", borderBottom: "1px solid #f1f5f9" }}
        >
          <div className="container h-full">
            <div className="flex justify-between items-center h-full">
              <div className="flex items-center gap-5">
                <span className="flex items-center gap-1.5"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> Hotline tư vấn: <strong style={{ color: "var(--accent)" }}>1900 xxxx</strong></span>
                <span className="flex items-center gap-1.5"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> hotro@baohiem.online</span>
              </div>
              <div className="flex items-center gap-5">
                <Link href="/gioi-thieu/" className="hover:text-[var(--primary)] transition-colors">Về chúng tôi</Link>
                <Link href="/blog/" className="hover:text-[var(--primary)] transition-colors">Tin tức & Blog</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="w-full px-4 lg:px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[70px]" : "h-[80px]"}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div
                style={{
                  width: scrolled ? 38 : 44,
                  height: scrolled ? 38 : 44,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, var(--primary) 0%, #1e3a8a 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "all 0.3s ease"
                }}
                className="group-hover:rotate-6 group-hover:scale-105 shadow-md shadow-blue-900/20"
              >
                <svg width={scrolled ? "22" : "26"} height={scrolled ? "22" : "26"} viewBox="0 0 26 26" fill="none">
                  <path d="M13 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L13 2z" fill="white" opacity="0.15"/>
                  <path d="M13 4L5.5 7.5V13c0 4.8 3.3 9.3 7.5 10.5C17.2 22.3 20.5 17.8 20.5 13V7.5L13 4z" fill="white" opacity="0.8"/>
                  <path d="M9.5 13l2.5 2.5L16.5 11" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 800, fontSize: scrolled ? "1.125rem" : "1.25rem", color: "var(--primary)", lineHeight: 1.1, letterSpacing: "-0.02em", transition: "all 0.3s" }}>
                  Bảo Hiểm
                </div>
                <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700, fontSize: scrolled ? "0.8125rem" : "0.875rem", color: "var(--accent)", lineHeight: 1.1, letterSpacing: "0.03em", textTransform: "uppercase", transition: "all 0.3s" }}>
                  Online
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center h-full lg:gap-2 xl:gap-5">
              {navMenu.map((item) => (
                <div
                  key={item.id}
                  className="h-full font-600 flex items-center relative group"
                >
                  <button
                    className="nav-link h-full flex items-center gap-2 px-2 xl:px-3 font-semibold text-[0.9375rem] transition-colors duration-200 text-slate-600 group-hover:text-slate-900 group-hover:after:w-full"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {item.title}
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 text-slate-400 group-hover:rotate-180 group-hover:text-slate-800"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div 
                    className="absolute top-[calc(100%-8px)] pt-3 z-50 pointer-events-none opacity-0 invisible group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible transition-all duration-300" 
                    style={{ 
                      left: (item.id === 'suc-khoe' || item.id === 'xe-co-gioi') ? '0' : (item.id === 'bao-hiem-khac' ? 'auto' : '50%'),
                      right: item.id === 'bao-hiem-khac' ? '0' : 'auto',
                      transform: (item.id === 'suc-khoe' || item.id === 'xe-co-gioi' || item.id === 'bao-hiem-khac') ? 'none' : 'translateX(-50%)' 
                    }}
                  >
                    <div
                      className="mega-dropdown group-hover:animate-fadeInUp"
                        style={{
                          background: "rgba(255, 255, 255, 0.98)", backdropFilter: "blur(20px)",
                          borderRadius: 24, padding: "0.5rem",
                          boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)",
                          minWidth: item.megaMenu.length > 2 ? 720 : 500,
                        }}
                      >
                        <div
                          style={{
                            display: "grid", gridTemplateColumns: `repeat(${Math.min(item.megaMenu.length, 3)}, 1fr)`,
                            background: "white", borderRadius: 20, overflow: "hidden"
                          }}
                        >
                          {item.megaMenu.map((group, gi) => (
                            <div key={gi} style={{ padding: "2rem 2.5rem", background: gi % 2 !== 0 ? "#f8fafc" : "white" }}>
                              <Link
                                href={group.groupHref}
                                className="inline-block group/title"
                                style={{ marginBottom: "1.25rem" }}
                              >
                                <span className="flex items-center gap-2 font-bold text-[0.9375rem] text-slate-800 font-['Be_Vietnam_Pro'] group-hover/title:text-[var(--accent)] transition-colors">
                                  {group.group}
                                  <svg className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover/title:opacity-100 group-hover/title:translate-x-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                  </svg>
                                </span>
                              </Link>
                              
                              <ul className="flex flex-col gap-1.5">
                                {group.items.map((sub, si) => (
                                  <li key={si}>
                                    <Link
                                      href={sub.href}
                                      className="group/link flex items-center gap-2 text-sm text-slate-600 hover:text-[var(--accent)] py-1.5 transition-colors font-['Be_Vietnam_Pro']"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/link:bg-[var(--accent)] transition-colors" />
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
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${scrolled ? "bg-slate-100 hover:bg-slate-200 text-slate-600" : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"}`}
                aria-label="Tìm kiếm"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </button>

              {/* Get advice btn */}
              <a href="tel:1900xxxx" className="hidden lg:flex items-center justify-center btn-primary" style={{ padding: "0.625rem 1.5rem", borderRadius: 50, fontSize: "0.9375rem", background: scrolled ? "var(--primary)" : "linear-gradient(135deg, var(--accent) 0%, #c94c10 100%)", boxShadow: scrolled ? "0 4px 15px rgba(15,32,68,0.2)" : "0 4px 15px rgba(224, 92, 26, 0.3)" }}>
                Tư vấn ngay
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all ${scrolled ? "bg-slate-100 text-slate-800" : "bg-slate-50 text-slate-600"}`}
                aria-label="Menu"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content Spacer to prevent content jump */}
      <div className="lg:h-[116px] h-[80px]" />

      {/* --- PREMIUM MOBILE MENU --- */}
      <div
        className={`lg:hidden fixed inset-0 z-[110] bg-[#0A1128] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Decorative ambient light */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[80px] opacity-20 pointer-events-none" />
        
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10" style={{ padding: "1.25rem 1.5rem" }}>
          <div className="font-['Be_Vietnam_Pro'] font-black text-xl text-white tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--accent)] to-orange-400 text-white flex items-center justify-center">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            Khám phá
          </div>
          <button 
            onClick={() => setMobileOpen(false)} 
            className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-md"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        {/* Navigation List */}
        <div className="relative z-10 flex-1 overflow-y-auto" style={{ padding: "1rem 1.5rem 8rem 1.5rem" }}>
          {navMenu.map((item) => (
            <div key={item.id} className="border-b border-white/5">
              <button
                onClick={() => setActiveMobile(activeMobile === item.id ? null : item.id)}
                className="w-full py-5 flex items-center justify-between text-left transition-colors"
              >
                <span className={`font-['Be_Vietnam_Pro'] font-bold text-2xl transition-colors duration-300 ${activeMobile === item.id ? "text-[var(--accent)]" : "text-white"}`}>
                  {item.title}
                </span>
                <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${activeMobile === item.id ? "bg-[var(--accent)]/10 text-[var(--accent)] rotate-180" : "bg-white/5 text-white/50"}`}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeMobile === item.id ? "opacity-100 mb-5" : "max-h-0 opacity-0"}`}
                style={{ maxHeight: activeMobile === item.id ? "1000px" : "0px" }}
              >
                <div className="flex flex-col gap-6 pl-2 border-l border-white/10 ml-2">
                  {item.megaMenu.map((group, gi) => (
                    <div key={gi} className="pl-4">
                      <Link href={group.groupHref} onClick={() => setMobileOpen(false)} className="inline-block text-white/90 font-bold text-[1.0625rem] mb-3 font-['Be_Vietnam_Pro'] tracking-wide">
                        {group.group}
                      </Link>
                      <div className="flex flex-col gap-3">
                        {group.items.map((sub, si) => (
                          <Link
                            key={si}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 text-base text-white/60 hover:text-white transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="py-8">
            <Link 
              href="/blog/" 
              onClick={() => setMobileOpen(false)}
              className="font-['Be_Vietnam_Pro'] font-bold text-xl text-white/80 hover:text-white flex items-center justify-between"
            >
              Tin tức & Bài viết
            </Link>
          </div>
        </div>
        
        {/* Bottom Actions Fixed */}
        <div className="relative z-10 border-t border-white/10 bg-[#0A1128]/90 backdrop-blur-xl space-y-3" style={{ padding: "1.5rem" }}>
          <a href="tel:1900xxxx" className="btn-primary w-full justify-center flex py-4 rounded-xl text-[1.0625rem] shadow-[0_10px_30px_rgba(224,92,26,0.3)] border-none">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Gọi hỗ trợ: 1900 xxxx
          </a>
          <Link href="/lien-he/" onClick={() => setMobileOpen(false)} className="w-full justify-center flex items-center py-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 font-bold transition-all text-[0.9375rem]">
            Để lại thông tin
          </Link>
        </div>
      </div>
    </>
  );
}
