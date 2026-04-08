import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const siteName = "Bảo Hiểm Online - Môi giới bảo hiểm uy tín số 1";
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://baohiem.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Bảo Hiểm Online",
  },
  description:
    "Baohiem.online - Nền tảng môi giới bảo hiểm trực tuyến uy tín. So sánh và mua bảo hiểm sức khỏe, xe cơ giới, du lịch, tai nạn, nhân thọ từ Bảo Việt, PVI, MIC, VBI...",
  keywords: [
    "bảo hiểm online",
    "mua bảo hiểm trực tuyến",
    "môi giới bảo hiểm",
    "bảo hiểm sức khỏe",
    "bảo hiểm xe ô tô",
    "bảo hiểm du lịch",
    "bảo hiểm tai nạn",
    "bảo hiểm nhân thọ",
  ],
  authors: [{ name: "Bảo Hiểm Online" }],
  creator: "Bảo Hiểm Online",
  publisher: "Bảo Hiểm Online",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description:
      "Nền tảng môi giới bảo hiểm trực tuyến - So sánh và mua bảo hiểm từ các công ty hàng đầu Việt Nam",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Môi giới bảo hiểm uy tín - So sánh giá tốt nhất",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0F2044" />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
