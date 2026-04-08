import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Tai nạn Công trường & Nhóm Doanh nghiệp",
  description: "Mua bảo hiểm tai nạn nhóm cho công nhân công trường, nhà máy, xưởng sản xuất. Cấp chứng nhận đúng chuẩn an toàn lao động.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-tai-nan/cong-truong/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Tai nạn Nhóm doanh nghiệp",
    color: "#B45309",
    desc: "Cấp theo danh sách Excel. Phù hợp cho xưởng sản xuất, văn phòng Building, chuỗi cửa hàng bán lẻ.",
    products: [
      { title: "Tai nạn Nhóm PVI", href: "/bao-hiem-tai-nan/pvi-tai-nan/", desc: "Chứng nhận được chủ đầu tư lớn như Vingroup, Sun Group chấp thuận." },
      { title: "Tai nạn Nhóm MIC", href: "/bao-hiem-tai-nan/mic-tai-nan/", desc: "Cấp nhanh theo danh sách, phù hợp khu công nghiệp có hàng ngàn công nhân." },
      { title: "Tai nạn VĐV Thể thao MIC", href: "/bao-hiem-tai-nan/vdv-the-thao/", desc: "Gói đặc thù cho các bộ môn nguy hiểm: bóng đá, đua xe, leo núi, lướt ván." }
    ],
  }
];

export default function CongTruongPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #431407 0%, #B45309 100%)"
      accentColor="#B45309"
      icon="👷"
      title="Bảo hiểm Tai nạn Công trường & Nhóm"
      subtitle="Bảo vệ cả đội ngũ lao động chỉ bằng một tờ danh sách Excel. Tuân thủ chuẩn an toàn lao động, tránh bị xử phạt thanh tra."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Tai nạn", href: "/bao-hiem-tai-nan/" },
        { label: "Công trường & Nhóm" }
      ]}
      brands={brandsData}
    />
  );
}
