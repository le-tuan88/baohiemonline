import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm TNDS Xe Máy - Cấp điện tử 66.000đ",
  description: "Mua ngay bảo hiểm TNDS xe máy bắt buộc từ Bảo Việt, PVI, MIC. Nhận ấn chỉ điện tử hợp pháp qua Zalo trong 3 phút.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-xe-co-gioi/tnds-xe-may/" },
};

const brandsData = [
  {
    name: "Bảo hiểm TNDS Xe Máy theo Hãng",
    color: "#DC2626",
    desc: "Tất cả các hãng đều áp mức phí theo biểu của Bộ Tài Chính. Bạn chọn hãng nào thì mức phí vẫn như nhau — chỉ khác nhau ở chất lượng dịch vụ và App quản lý.",
    products: [
      { title: "TNDS Xe Máy Bảo Việt", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/bao-viet/", desc: "Phát hành mã QR chuẩn Cục ĐKVN, kiểm tra online cực nhanh trên cổng Bộ CA." },
      { title: "TNDS Xe Máy PVI", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/pvi/", desc: "Ứng dụng PVI Care quản lý ấn chỉ và gửi nhắc nhở tự động trước ngày hết hạn." },
      { title: "TNDS Xe Máy MIC", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/mic/", desc: "Giao diện App thân thiện nhất, nạp tiền bằng QR banking — 2 phút là xong." }
    ],
  }
];

const benefitsData = [
  { icon: "👮", title: "Không sợ Cảnh Sát Giao Thông", desc: "Quét QR cùng CCCD, liền thông tra hệ thống đăng kiểm ngay tại chỗ là xong." },
  { icon: "💸", title: "Siêu rẻ — Chỉ 66.000đ/năm", desc: "Khoản đầu tư nhỏ nhất nhưng bảo vệ bạn khỏi tiền bồi thường lên tới 150 Triệu." },
  { icon: "📱", title: "Chỉ cần điện thoại", desc: "Không cần in giấy tờ. Giấy chứng nhận điện tử lưu trong app là đủ hợp lệ." },
  { icon: "⚡", title: "Cấp trong 3 phút", desc: "Gửi cà vẹt xe qua Zalo, thanh toán online — bảo hiểm có hiệu lực ngay lập tức." }
];

export default function TndsXeMayPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #7F1D1D 0%, #DC2626 100%)"
      accentColor="#DC2626"
      icon="🛵"
      title="Bảo hiểm TNDS Xe Máy Bắt Buộc"
      subtitle="Chỉ 66.000đ/năm để đi đường bình an, không lo CSGT dừng xe vì thiếu giấy tờ. Cấp ấn chỉ điện tử tức thì qua Zalo."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Xe cơ giới", href: "/bao-hiem-xe-co-gioi/" },
        { label: "TNDS Xe Máy" }
      ]}
      brands={brandsData}
      benefits={benefitsData}
      ctaTitle="Mua ngay — Nhận ấn chỉ trong 3 phút"
      ctaDesc="Chụp ảnh cà vẹt xe máy gửi Zalo cho chúng tôi để xuất bảo hiểm ngay lập tức với giá 66k."
    />
  );
}
