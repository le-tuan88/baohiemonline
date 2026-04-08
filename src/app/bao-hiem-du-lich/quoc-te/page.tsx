import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Du lịch Quốc Tế - Bắt buộc khi xin Visa",
  description: "Bảo hiểm du lịch Quốc tế siêu tiết kiệm dành cho mọi lứa tuổi từ Bảo Việt, MIC, PVI. Bảo vệ y tế toàn cầu 24/7.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-du-lich/quoc-te/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Du lịch Toàn cầu",
    color: "#0369A1",
    desc: "Để cất cánh an toàn đến những nước phát triển nơi mà viện phí có thể tốn kém cả gia tài, đây là tấm bảo hiểm bắt buộc mà Đại sứ quán yêu cầu.",
    products: [
      { title: "Gói Phổ thông (Khối Châu Á)", href: "/bao-hiem-du-lich/quoc-te/bao-viet/", desc: "Thích hợp đi Thái Lan, Singapore, Hàn Quốc, Nhật..." },
      { title: "Gói Khối Schengen Châu Âu", href: "/bao-hiem-du-lich/quoc-te/pvi/", desc: "Đáp ứng chuẩn hạn mức trách nhiệm tối thiểu (thường 30.000 EUR hoặc 50.000 USD) kèm điều kiện hồi hương thi hài theo đúng chuẩn Đại Sứ Quán." },
      { title: "Gói Toàn Cầu siêu việt", href: "/bao-hiem-du-lich/quoc-te/liberty/", desc: "Bao gồm rủi ro cao tại khu vực Bắc Mỹ (Mỹ & Canada)." }
    ],
  }
];

export default function QuocTePage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #0284C7 0%, #0369A1 100%)"
      accentColor="#0284C7"
      icon="✈️"
      title="Bảo hiểm Du Lịch Quốc Tế"
      subtitle="Chìa khóa vàng giúp bạn đậu hồ sơ xin cấp thư thông hành (Visa) dễ dàng. Đền bù hàng ngàn USD cho các sự cố mất hộ chiếu, trễ chuyến bay."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm du lịch", href: "/bao-hiem-du-lich/" },
        { label: "Quốc tế" }
      ]}
      brands={brandsData}
    />
  );
}
