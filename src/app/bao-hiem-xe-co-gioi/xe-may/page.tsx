import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm TNDS Xe Máy - Online 100%",
  description: "Bảo hiểm xe máy bắt buộc giá chỉ từ 66k. Quét QR code không sợ Cảnh sát giao thông phạt. Mua ủng hộ PVI, Bảo Việt, MIC.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-xe-co-gioi/xe-may/" },
};

const brandsData = [
  {
    name: "Thông số chi tiết",
    color: "#DC2626",
    desc: "Mua bảo hiểm xe máy là để 'qua trạm' CSGT đúng luật. Giấy chứng nhận nay đã được số hóa hoàn toàn. Nếu rủi ro tông phải xe khác/người khác, công ty bảo hiểm sẽ đứng ra đền bù hộ bạn tối đa 150 Triệu VNĐ về người.",
    products: [
      { title: "Xe máy Dưới 50cc", href: "#", desc: "Dành cho xe moped, xe Cup nhỏ. Phí: 60.500đ/Năm" },
      { title: "Xe máy Trên 50cc (Hầu hết xe ga xe số)", href: "#", desc: "Xe Vision, SH, Wave... Phí quy chuẩn là 66.000đ/năm." }
    ],
  }
];

export default function XeMayPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #7F1D1D 0%, #DC2626 100%)"
      accentColor="#DC2626"
      icon="🛵"
      title="Bảo hiểm TNDS Xe Máy"
      subtitle="Chỉ 66.000đ để tự do lướt nẻo quanh co. Khỏi lo nộp phạt, 100% Điện tử, 3 phút nhận ngay qua Zalo."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Xe cơ giới", href: "/bao-hiem-xe-co-gioi/" },
        { label: "Xe Máy" }
      ]}
      brands={brandsData}
    />
  );
}
