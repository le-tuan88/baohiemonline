import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Du lịch Trong Nước - Tiết kiệm, Linh hoạt",
  description: "Tham gia các tour dã ngoại, cắm trại, du lịch nội địa trọn vẹn hơn với rủi ro y tế luôn được khắc phục. Phí chỉ từ 1,500đ / ngày.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-du-lich/trong-nuoc/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Du lịch Nội địa",
    color: "#16A34A",
    desc: "Áp dụng trong phạm vi Việt Nam, phục vụ đa dạng nhu cầu từ chuyến du lịch gia đình đến teambuilding doanh nghiệp cường độ cao.",
    products: [
      { title: "Gói Dã ngoại / Cá nhân", href: "/bao-hiem-du-lich/trong-nuoc/mic/", desc: "Bảo trợ y tế và cấp cứu khi leo núi, thám hiểm hang động, du lịch phượt." },
      { title: "Gói Corporate đoàn thể", href: "/bao-hiem-du-lich/trong-nuoc/bao-viet/", desc: "Chủ xe du lịch bắt buộc phải mua cho số khách ngồi trên thân xe khách / xe biển vàng." }
    ],
  }
];

export default function TrongNuocPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #15803D 0%, #16A34A 100%)"
      accentColor="#16A34A"
      icon="🏕️"
      title="Bảo hiểm Du Lịch Trong Nước"
      subtitle="Chuyến đi là để xả stress, đừng lo lắng về chi phí sơ cứu hay tai nạn do ngộ độc thực phẩm ở điểm đến."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm du lịch", href: "/bao-hiem-du-lich/" },
        { label: "Trong nước" }
      ]}
      brands={brandsData}
    />
  );
}
