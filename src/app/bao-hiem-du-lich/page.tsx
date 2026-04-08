import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Du lịch Quốc Tế & Trong Nước - Cấp đơn Online",
  description: "Tránh rủi ro mất hành lý, trễ chuyến bay hay chi phí y tế khổng lồ khi du lịch nước ngoài cùng các hãng Bảo Việt, MIC, PVI.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-du-lich/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Du lịch Quốc tế",
    color: "#0284C7",
    href: "/bao-hiem-du-lich/quoc-te/",
    desc: "Cần thiết khi có kế hoạch công tác hay du lịch ra nước ngoài. Đồng thời là hồ sơ bắt buộc khi xin Visa khối Schengen Châu Âu.",
    products: [
      { title: "Du lịch quốc tế Bảo Việt", href: "/bao-hiem-du-lich/quoc-te-bao-viet/", desc: "Thương hiệu mạnh được tất cả các đại sứ quán cấp Visa chấp nhận ngay." },
      { title: "Du lịch quốc tế MIC", href: "/bao-hiem-du-lich/quoc-te-mic/", desc: "Phí ưu đãi rẻ hơn từ 10-15%. Cấp chứng nhận song ngữ hợp pháp có chữ ký số." },
      { title: "Du lịch quốc tế PVI", href: "/bao-hiem-du-lich/quoc-te-pvi/", desc: "Bảo trợ bởi SOS quốc tế sẵn sàng thanh toán chi phí nằm viện ở các quốc gia đắt đỏ." }
    ],
  },
  {
    name: "Bảo hiểm Du lịch Trong nước",
    color: "#16A34A",
    href: "/bao-hiem-du-lich/trong-nuoc/",
    desc: "Bảo vệ bạn suốt chuyến đi dọc miền mảng đất hình chữ S, với chi phí cực thấp, dễ dàng cấp theo nhóm hoặc tour.",
    products: [
      { title: "Gói Nội Địa MIC", href: "#", desc: "Chỉ từ 1.500đ / Người / Ngày là đã được bồi thường tối đa 10 Triệu." },
      { title: "Gói Nội Địa Bảo Việt", href: "#", desc: "Phí dao động tùy số ngày. Đáp ứng thanh toán chi phí cấp cứu trên toàn quốc." }
    ],
  }
];

const benefitsData = [
  { icon: "✈️", title: "Trễ chuyến bay", desc: "Được hỗ trợ tiền khách sạn, ăn uống mỗi khi chuyến bay Delay ảnh hưởng kế hoạch." },
  { icon: "🧳", title: "Mất cắp hành lý", desc: "Chi trả đền bù cho các hành lý, vận dụng tư trang bị đánh cắp hoặc thất lạc." },
  { icon: "🏥", title: "Chi phí Y tế", desc: "Trả 100% tiền viện phí khổng lồ nếu chẳng may đau ốm tại Mỹ, Châu Âu, Singapore." },
  { icon: "🛂", title: "Đủ điều kiện xin VISA", desc: "Chứng nhận cấp bằng tiếng Anh/Việt tương thích thủ tục cấp Visa của Đại Sứ Quán." }
];

export default function DuLichPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)"
      accentColor="#0284C7"
      icon="🌍"
      title="Bảo hiểm Du Lịch"
      subtitle="Quẳng gánh lo âu và tận hưởng trọn vẹn chuyến đi. Dù là trong nước hay quốc tế, rủi ro y tế và thất lạc hành lý đều được chúng tôi bảo hộ."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm du lịch" }
      ]}
      brands={brandsData}
      benefits={benefitsData}
      ctaTitle="Điền thời gian bay - Chốt gói bảo hiểm"
      ctaDesc="Chỉ mất 2 phút có giấy chứng nhận điện tử đệ trình Visa ngay."
    />
  );
}
