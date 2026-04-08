import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe MIC - Tiên phong giải pháp số",
  description: "Các gói bảo hiểm sức khỏe nổi bật từ MIC",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/mic/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Sức khỏe MIC",
    color: "#1565C0",
    desc: "Tổng Công ty Cổ phần Bảo hiểm Quân đội (MIC) nằm trong Top các doanh nghiệp dẫn đầu về mức bồi thường sức khoẻ, chi trả nhanh gọn qua ứng dụng điện thoại.",
    products: [
      { title: "MIC Care", href: "/bao-hiem-suc-khoe/mic-care/", desc: "Quyền lợi nội trú lên đến vài trăm triệu, phí tham gia khởi điểm hỗ trợ mọi gia đình." },
      { title: "Bảo hiểm tổ chức MIC", href: "/bao-hiem-suc-khoe/mic-to-chuc/", desc: "Là thiết kế riêng cho các doanh nghiệp xây dựng quyền lợi phúc lợi nhóm chuyên sâu." },
    ],
  }
];

export default function MicBrandPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)"
      accentColor="#1D4ED8"
      icon="🛡️"
      title="Bảo hiểm Sức khỏe MIC"
      subtitle="Quản lý bồi thường và giấy tờ hoàn toàn số hoá trên ứng dụng MIC."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "MIC" }
      ]}
      brands={brandsData}
    />
  );
}
