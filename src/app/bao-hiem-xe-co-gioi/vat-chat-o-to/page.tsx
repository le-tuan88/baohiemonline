import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Vật chất Ô tô (2 chiều) - So sánh bảng phí rẻ nhất",
  description: "Trang bị lá chắn toàn diện cho xe hơi (đâm va, cháy nổ, thủy kích...). So sánh hãng Bảo Việt, MIC, PVI, PTI để chọn mức phí tốt nhất.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-xe-co-gioi/vat-chat-o-to/" },
};

const brandsData = [
  {
    name: "Bảo Việt",
    color: "#C62828",
    desc: "Giá cao nhưng đi liền với chất lượng. Luôn duyệt giá thay thế Gara chính hãng nhanh nhất.",
    products: [
      { title: "Gói Phổ thông Không miễn thường", href: "#", desc: "Không bị trừ 500k mỗi vụ, đâm đụng xước xát nhỏ vẫn được làm." },
      { title: "Gói Miễn thường có khấu trừ", href: "#", desc: "Phí mền hơn. Khách hàng cam kết chịu khoản X đầu tiên, Bảo Việt bù phần còn lại." }
    ],
  },
  {
    name: "PVI",
    color: "#E65100",
    desc: "Bồi thường uy tín, thủ tục nhanh nhẹn đối với cả xe xăng và xe điện.",
    products: [
      { title: "Tiêu chuẩn (Có Thủy kích)", href: "#", desc: "Sử dụng nhiều cho khu vực Hà Nội, TP.HCM hay bị ngập úng mùa mưa." }
    ],
  },
  {
    name: "MIC",
    color: "#1565C0",
    desc: "App giám định xe hư hỏng ưu việt, duyệt bồi thường trực tuyến không cần đợi Giám định viên đến hiện trường.",
    products: [
      { title: "Gói công nghệ số", href: "#", desc: "Tự chụp ảnh xước xát, đẩy lên App nhận phê duyệt đưa xe vào gara ngay lập tức." }
    ],
  }
];

export default function VatChatOToPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)"
      accentColor="#3B82F6"
      icon="🚘"
      title="Bảo hiểm Vật Chất Ô Tô"
      subtitle="Người Việt hay gọi là Bảo hiểm thân vỏ hoặc BH 2 chiều. Đây là loại hình tự nguyện bao tiêu toàn bộ thiệt hại vật chất của chiếc xe khi có biến cố tự thân đâm va, ngập nước."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Xe cơ giới", href: "/bao-hiem-xe-co-gioi/" },
        { label: "Vật chất 2 Chiều" }
      ]}
      brands={brandsData}
    />
  );
}
