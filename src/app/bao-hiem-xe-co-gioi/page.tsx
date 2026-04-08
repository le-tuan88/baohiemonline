import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Xe cơ giới - Ô tô & Xe máy",
  description: "Bảo hiểm vật chất ô tô, TNDS bắt buộc từ các hãng Bảo Việt, MIC, PVI, PTI. Bồi thường nhanh, cứu hộ miễn phí 24/7.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-xe-co-gioi/" },
};

const brandsData = [
  {
    name: "Vật chất Ô tô (2 chiều)",
    color: "#2563EB",
    href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/",
    desc: "Bảo hiểm tự nguyện chi trả cho các hư hỏng, xước xát, tai nạn, thủy kích của chính chiếc xe của bạn.",
    products: [
      { title: "Vật chất Ô tô Bảo Việt", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to-bao-viet/", desc: "Giám định viên có mặt trong 30p. Có liên kết hầu hết Gara chính hãng (Toyota, Hyundai, Ford...)." },
      { title: "Vật chất Ô tô MIC", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to-mic/", desc: "Giá tốt nhất phân khúc, quy trình nhận hồ sơ qua app chụp hình ảnh biển số tự động." },
      { title: "Vật chất Ô tô PVI", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to-pvi/", desc: "Chuyên gia bồi thường ngập nước, thủy kích uy tín nhất cho xe xăng và xe điện VinFast." },
      { title: "Vật chất Ô tô Bảo Minh", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to-bao-minh/", desc: "Tặng kèm bảo hiểm tai nạn người ngồi trên xe. Phạm vi bảo lãnh rộng khắp 63 tỉnh thành." }
    ],
  },
  {
    name: "TNDS Ô tô (Trách nhiệm Dân sự bắt buộc)",
    color: "#059669",
    href: "/bao-hiem-xe-co-gioi/tnds-o-to/",
    desc: "Bảo hiểm bắt buộc theo luật định để đi đường không bị CSGT phạt. Đền bù cho BÊN THỨ BA khi xảy ra va chạm.",
    products: [
      { title: "TNDS Ô tô (Xe 4-5 chỗ)", href: "/bao-hiem-xe-co-gioi/tnds-o-to-4-cho/", desc: "Áp dụng cho xe gia đình, xe không kinh doanh vận tải. Phí từ ~480.000đ/năm." },
      { title: "TNDS Ô tô (Xe 7 chỗ)", href: "/bao-hiem-xe-co-gioi/tnds-o-to-7-cho/", desc: "Thuộc nhóm xe MPV, SUV không kinh doanh (Innova, Everest...)." },
      { title: "TNDS Ô tô (KD Vận Tải, Taxi)", href: "/bao-hiem-xe-co-gioi/tnds-o-to-kinh-doanh/", desc: "Bắt buộc đối với xe chạy Grab, Taxi, xe khách chuyên tuyến." }
    ],
  },
  {
    name: "Bảo hiểm Xe Máy",
    color: "#DC2626",
    href: "/bao-hiem-xe-co-gioi/xe-may/",
    desc: "Cấp giấy chứng nhận điện tử (Bản PDF) lưu trên điện thoại hợp lệ theo Nghị định 03/2021/NĐ-CP.",
    products: [
      { title: "TNDS Xe Máy Bắt Buộc", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/", desc: "Chỉ từ 66.000đ/Năm. Miễn lo phạt trạm kiểm soát giao thông." },
      { title: "Bảo hiểm Cháy nổ & Mất cắp", href: "/bao-hiem-xe-co-gioi/mat-cap-xe-may/", desc: "Được đền bù khi xe bị trộm cướp bẻ khóa hoặc không may chập cháy." },
    ],
  }
];

const benefitsData = [
  { icon: "🏎️", title: "Cấp ấn chỉ điện tử", desc: "100% Giấy chứng nhận gửi qua Zalo/Email. Rút điện thoại ra soát mã QR cho CSGT hoàn toàn hợp pháp." },
  { icon: "🛠️", title: "Cứu hộ miễn phí", desc: "Hỗ trợ xe cẩu kéo cứu hộ miễn phí 24/7 (phạm vi theo quy định) khi xe chết máy giữa đường." },
  { icon: "💸", title: "Phí cạnh tranh nhất", desc: "Hệ thống kết nối trực tiếp với 8 hãng bảo hiểm xe cơ giới giúp bạn có bảng so sánh giá rẻ nhất ngay trong 1 phút." },
  { icon: "🧑‍🔧", title: "Bảo lãnh Gara chính hãng", desc: "Tự do chọn gara sửa chữa chính hãng Toyota, Thaco, Honda... gần bạn nhất không bị ép buộc." }
];

export default function BaoHiemXeCoGioiPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #1F2937 0%, #0F172A 100%)"
      accentColor="#F59E0B"
      icon="🚗"
      title="Bảo hiểm Xe Cơ Giới"
      subtitle="Người bạn đồng hành vạn dặm bình an. Nhận chiết khấu đặc biệt khi mua bảo hiểm Vật Chất (Hai chiều) và TNDS trên nền tảng của chúng tôi."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Xe cơ giới" }
      ]}
      brands={brandsData}
      benefits={benefitsData}
      ctaTitle="Điền biển số - Nhận ngay báo phí 8 hãng"
      ctaDesc="Đừng vội mua bảo hiểm trước khi xem bảng so sánh giá độc quyền từ các chuyên viên của Baohiem.Online"
    />
  );
}
