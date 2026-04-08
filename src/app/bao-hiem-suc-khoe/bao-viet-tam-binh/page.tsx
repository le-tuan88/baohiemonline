import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo Việt Tâm Bình - Bảo hiểm sức khỏe cơ bản phí rẻ",
  description: "Tham gia Bảo Việt Tâm Bình chỉ từ vài trăm ngàn. Lựa chọn tuyệt vời bảo vệ bổ sung bên cạnh BHYT nhà nước. Thủ tục bồi thường trực tuyến.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/bao-viet-tam-binh/" },
};

export default function BaoVietTamBinhPage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #10B981 0%, #047857 100%)"
      accentColor="#059669"
      badge="Siêu tiết kiệm"
      icon="🌱"
      title="Bảo Việt Tâm Bình"
      subtitle="Chỉ từ chưa tới 2.000 VNĐ / ngày - Mang lại tấm thẻ bảo hiểm đắc lực bổ trợ cùng BHYT y tế Nhà nước, giảm nỗi lo viện phí lớn."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "Bảo Việt", href: "/bao-hiem-suc-khoe/bao-viet/" },
        { label: "Tâm Bình" }
      ]}
      stats={[
        { icon: "🛡️", value: "330 Trđ", label: "Quyền lợi tối đa" },
        { icon: "💵", value: "~2K VND", label: "Phí/ngày (thấp nhất)" },
        { icon: "👵", value: "Tới 65 Tuổi", label: "Độ tuổi tham gia" },
        { icon: "⚕️", value: "Ung thư", label: "Bao gồm chi trả" }
      ]}
      benefits={[
        { icon: "📉", title: "Phí tham gia 'kịch sàn'", desc: "Với người trẻ tuổi, mỗi ngày chỉ bỏ ra vài nghìn đồng là có hạn mức điều trị lên tới hơn ba trăm triệu." },
        { icon: "💳", title: "Thẻ bảo lãnh viện phí", desc: "Tương thích hoàn toàn với hệ thống quẹt thẻ Insmart cấp bảo lãnh viện phí trực tiếp ở trên 200 BV." },
        { icon: "🎗️", title: "Chi trả bệnh mạn tính / Ung thư", desc: "So với nhiều hãng cắt bỏ, Tâm Bình có bao gồm trợ cấp hoặc đền bù cho các căn bệnh y tế phức tạp kéo dài." },
        { icon: "🤱", title: "Quyền lợi Thai sản giá cực hời", desc: "Gói mở rộng mang lại trợ cấp lên tới 20 Triệu đồng khi đi sinh giúp mẹ bầu giải tỏa gánh nặng." }
      ]}
      plans={[
        {
          name: "Chương trình Cơ bản",
          price: "Từ 560.000đ",
          features: [
            "Giới hạn nội trú: 60 Triệu/Năm",
            "Tiền phòng: 300k/Ngày",
            "Bảo hiểm tai nạn: 50 Triệu",
            "Điều trị ngoài trú: Mua thêm"
          ]
        },
        {
          name: "Chương trình Nâng cao",
          price: "Từ 990.000đ",
          highlight: true,
          features: [
            "Giới hạn nội trú: 120 Triệu/Năm",
            "Tiền phòng: 600k/Ngày",
            "Bảo hiểm tử vong/TN: 100 Triệu",
            "Khám ngoại trú: 4 Triệu (Mua thêm)"
          ]
        },
        {
          name: "Chương trình Toàn diện",
          price: "Từ 2.050.000đ",
          features: [
            "Giới hạn nội trú: 330 Triệu/Năm",
            "Tiền phòng: 1 Triệu 6 /Ngày",
            "Chi phí phẫu thuật: 60 Triệu",
            "Mở rộng thai sản: Có (Mua thêm)"
          ]
        }
      ]}
      steps={[
        { icon: "📱", title: "Tải Zalo / Chụp CMND", desc: "100% hồ sơ tiếp nhận thông qua Zalo của tư vấn viên." },
        { icon: "🏦", title: "Đóng phí thẳng cho Bảo Việt", desc: "Bạn sẽ chuyển khoản trực tiếp vào tài khoản công ty Bảo Việt." },
        { icon: "📩", title: "Nhận Certificate PDF", desc: "Giấy chứng nhận có chứ ký điện tử được phát hành tức thì." }
      ]}
      faqs={[
        {
          q: "Vì sao phí Tâm Bình lại rẻ hơn An Gia?",
          a: "Bảo Việt Tâm Bình áp dụng tỷ lệ đồng chi trả ở các độ tuổi mẫn cảm, cũng như hạn mức phụ cho phòng bệnh thấp hơn một chút so với An Gia."
        },
        {
          q: "Có áp dụng bảo lãnh ở Vinmec không?",
          a: "Có, thẻ Bảo Việt Tâm Bình màu xanh bạc vẫn dùng được tại Vinmec nếu phòng khám chấp nhận hệ thống Insmart của Bảo Việt."
        }
      ]}
    />
  );
}
