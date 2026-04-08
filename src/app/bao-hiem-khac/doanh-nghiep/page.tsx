import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Doanh nghiệp - Trách nhiệm, Hàng hóa, Kỹ thuật",
  description: "Bảo hiểm cho doanh nghiệp: Trách nhiệm công cộng, hàng hóa xuất nhập khẩu, bảo hiểm kỹ thuật cho máy móc. Chuẩn FDI và VNR500.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-khac/doanh-nghiep/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Nghiệp vụ Đặc thù",
    color: "#0F766E",
    desc: "Các gói bảo hiểm B2B dành cho doanh nghiệp cần tuân thủ cam kết hợp đồng với đối tác nước ngoài.",
    products: [
      { title: "Bảo hiểm Trách nhiệm", href: "/bao-hiem-khac/trach-nhiem/", desc: "Trách nhiệm Công Cộng và Trách nhiệm Sản phẩm — bảo vệ doanh nghiệp trước kiện tụng dân sự." },
      { title: "Bảo hiểm Hàng hóa Xuất nhập khẩu", href: "/bao-hiem-khac/hang-hoa/", desc: "All-Risk cho chuỗi cung ứng đường biển, đường hàng không, đường bộ quốc tế." },
      { title: "Bảo hiểm Kỹ thuật & Máy móc", href: "/bao-hiem-khac/ky-thuat/", desc: "Đổ vỡ máy CNC, lò hơi, dây chuyền sản xuất do sự cố điện và lỗi vận hành." }
    ],
  }
];

export default function DoanhNghiepPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #022C22 0%, #0F766E 100%)"
      accentColor="#0F766E"
      icon="🏭"
      title="Bảo hiểm Doanh Nghiệp"
      subtitle="Quản trị rủi ro chuyên sâu giúp chuỗi cung ứng không bao giờ đứt gãy và doanh nghiệp luôn sẵn sàng đấu thầu quốc tế."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm Khác", href: "/bao-hiem-khac/" },
        { label: "Doanh nghiệp" }
      ]}
      brands={brandsData}
    />
  );
}
