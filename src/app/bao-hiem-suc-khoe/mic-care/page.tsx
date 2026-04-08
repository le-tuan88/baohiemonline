import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe MIC Care - Linh hoạt, toàn diện",
  description: "Trải nghiệm quyền lợi Bảo hiểm quân đội MIC ưu việt. Bảo vệ cả gia đình trên cùng 1 Hợp đồng. Tra cứu bồi thường nhanh qua hệ sinh thái số MIC.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/mic-care/" },
};

export default function MicCarePage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)"
      accentColor="#2563EB"
      badge="Bảo vệ cả gia đình"
      icon="👨‍👩‍👦‍👦"
      title="Bảo hiểm MIC Care"
      subtitle="Giải pháp chăm sóc y tế được đánh giá tốt nhất trong phân khúc gia đình. Công nghệ bồi thường không rườm rà qua App MIC nhận tiền siêu tốc."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "MIC", href: "/bao-hiem-suc-khoe/mic/" },
        { label: "Care" }
      ]}
      stats={[
        { icon: "🛡️", value: "Tới 1 Tỷ", label: "Giới hạn tối đa" },
        { icon: "📱", value: "100% App", label: "Thao tác ứng dụng" },
        { icon: "👪", value: "1 Hợp Đồng", label: "Cấp cho cả nhà" },
        { icon: "🕒", value: "5h", label: "Cam kết xử lý hs" }
      ]}
      benefits={[
        { icon: "🤝", title: "Cấp 1 đơn cho đại gia đình", desc: "Toàn bộ gia đình (Bố, mẹ, con cái) có thể tham gia chung lên 1 hợp đồng duy nhất, dễ dàng quản lý phí và nhắc hạn chót tái tục." },
        { icon: "🚀", title: "Bồi thường Siêu Tốc qua App", desc: "Khác với các hãng phải gửi giấy tờ cứng, MIC cho phép scan chụp hóa đơn up thẳng lên App, ứng dụng AI đọc dữ liệu và duyệt chi trả trong ngày." },
        { icon: "🦷", title: "Quyền lợi Nha khoa hời nhất", desc: "Trong khi các gói hãng khác bị bóp quyền lợi răng, MIC mở rộng bồi thường nhổ răng khôn, chữa tủy ở mức rất hào phóng." },
        { icon: "🍼", title: "Sinh đẻ / Thai sản trọn nét", desc: "Xóa bỏ rào cản chi phí đi đẻ tại Vinmec/Tâm Anh với mức hỗ trợ lên tới 30-50 triệu VNĐ, trả ngay phần chênh so với BHYT." }
      ]}
      plans={[
        {
          name: "MIC Đồng (Bronze)",
          price: "Dưới 1 Triệu đ/năm",
          features: [
            "Giới hạn nội trú: 60 Triệu/Năm",
            "Tiền giường nằm: 1.5M/Ngày",
            "Mở rộng ngoại trú: Bắt chọn kèm",
            "Quyền lợi thai sản: Không"
          ]
        },
        {
          name: "MIC Bạc (Silver)",
          price: "Từ 1.8 Triệu đ/năm",
          highlight: true,
          features: [
            "Giới hạn nội trú: 150 Triệu/Năm",
            "Tiền giường nằm: 3M/Ngày",
            "Chi phí Phẫu thuật: Lên tới 30M",
            "Quyền lợi thai sản: Tùy chọn"
          ]
        },
        {
          name: "MIC Kim Cương (Diamond)",
          price: "Từ 5 Triệu đ/năm",
          features: [
            "Giới hạn nội trú: Lên tới 1 Tỷ",
            "Tiền giường nằm: Phòng VIP",
            "Phẫu thuật: Cấu thành cao nhất",
            "Thai sản & Răng: Toàn diện"
          ]
        }
      ]}
      steps={[
        { icon: "📲", title: "Sử dụng App", desc: "Quét mã để check quyền lợi chi tiết qua ứng dụng." },
        { icon: "📋", title: "Sign Tuyên thệ y khoa", desc: "Không yêu cầu khám nếu dưới 50 tuổi. Chữ ký số hoàn tất chỉ định." },
        { icon: "💵", title: "Nhận tiền sau viện", desc: "Không cần ra bưu điện, có tính năng yêu cầu bồi thường trực tuyến." }
      ]}
      faqs={[
        {
          q: "Trẻ dưới 3 tuổi có bị đồng chi trả không?",
          a: "Chính sách MIC thay đổi theo từng năm. Hiện tại ở hầu hết các gói nâng cao, trẻ trên 1 tuổi bắt đầu được hỗ trợ không đồng chi trả nếu khám ở khối bênh viện tư."
        },
        {
          q: "Có loại trừ bệnh lý cụ thể nào không?",
          a: "MIC loại trừ những bệnh có sẵn hoặc đã tồn tại trước ngày mua (ví dụ bị tim bẩm sinh thì không được đền bệnh tim). Đặc biệt không loại trừ dịch bệnh như hãng khác."
        }
      ]}
      ctaTitle="Sức mạnh quân đội bảo vệ sức khỏe gia đình"
      ctaDesc="Cam kết thực thi bồi thường chính xác. Để lại thông tin để chúng tôi lên phương án tài chính dự phòng cho gia đình bạn với MIC."
    />
  );
}
