import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo Việt An Gia - Gói bảo hiểm sức khỏe quốc dân",
  description: "Trọn gói bảo vệ gia đình bạn với quyền lợi nội trú tới 454 triệu VNĐ. Không yêu cầu khám sức khỏe trước khi cấp đơn. Thủ tục bồi thường trực tuyến nhanh gọn.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/bao-viet-an-gia/" },
};

export default function BaoVietAnGiaPage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)"
      accentColor="#2563EB"
      badge="Bán chạy số 1"
      icon="👨‍👩‍👧‍👦"
      title="Bảo Việt An Gia"
      subtitle="Giải pháp tài chính bảo vệ toàn diện cho bản thân và những người thân yêu trước các rủi ro sức khỏe, ốm đau, thai sản."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "Bảo Việt", href: "/bao-hiem-suc-khoe/bao-viet/" },
        { label: "An Gia" }
      ]}
      stats={[
        { icon: "🛡️", value: "454 Trđ", label: "Quyền lợi tối đa" },
        { icon: "🌍", value: "200+", label: "BV bảo lãnh" },
        { icon: "👧", value: "15 Ngày", label: "Độ tuổi tối thiểu" },
        { icon: "⏱️", value: "3 Phút", label: "Cấp đơn online" }
      ]}
      benefits={[
        { icon: "💸", title: "Không yêu cầu khám sức khỏe", desc: "Tiết kiệm thời gian, khách hàng chỉ cần kê khai trung thực trên ứng dụng để được cấp đơn." },
        { icon: "🏥", title: "Bảo lãnh viện phí rông khắp", desc: "Sử dụng trực tiếp tại hơn 200 bệnh viện tư nhân và quốc tế hàng đầu (Vinmec, Thu Cúc...)" },
        { icon: "🩺", title: "Bao gồm thai sản & nha khoa", desc: "Cho phép tham gia hạn mức riêng biệt đối với các quyền lợi chăm sóc nha khoa và sinh con." },
        { icon: "👪", title: "Bảo vệ cho cả trẻ sinh non", desc: "Bảo Việt An Gia tiên phong chấp nhận trẻ điều trị bệnh lý thường gặp chỉ từ 15 ngày tuổi." }
      ]}
      plans={[
        {
          name: "Chương trình Bạc",
          price: "1.196.000đ",
          features: [
            "Giới hạn nội trú: 137 Triệu/Năm",
            "Tiền phòng: 1 Triệu/Ngày",
            "Chi phí phẫu thuật: 27 Triệu",
            "Trợ cấp nằm viện: Không"
          ]
        },
        {
          name: "Chương trình Vàng",
          price: "1.784.000đ",
          highlight: true,
          features: [
            "Giới hạn nội trú: 230 Triệu/Năm",
            "Tiền phòng: 2 Triệu/Ngày",
            "Chi phí phẫu thuật: 46 Triệu",
            "Trợ cấp nằm viện: 100k/Ngày"
          ]
        },
        {
          name: "Chương trình Kim Cương",
          price: "3.204.000đ",
          features: [
            "Giới hạn nội trú: 454 Triệu/Năm",
            "Tiền phòng: 4 Triệu/Ngày",
            "Chi phí phẫu thuật: 90 Triệu",
            "Trợ cấp nằm viện: Không"
          ]
        }
      ]}
      steps={[
        { icon: "📝", title: "Báo giá nhanh", desc: "Tư vấn viên sẽ giúp bạn thiết kế hạn mức phù hợp nhất." },
        { icon: "💳", title: "Điền form trực tuyến", desc: "Cam kết kê khai sức khỏe đơn giản, thanh toán qua QR code." },
        { icon: "📑", title: "Cấp giấy chứng nhận", desc: "GCN điện tử lập tức gửi qua Email và có thời hạn sử dụng ngay." }
      ]}
      faqs={[
        {
          q: "Trẻ em 1 tuổi có mua độc lập được không?",
          a: "Với gói Bảo Việt An Gia hiện hành, trẻ em dưới 6 tuổi BẮT BUỘC phải tham gia cùng Bố hoặc Mẹ để được hưởng mức trách nhiệm. Nếu bạn muốn mua độc lập cho bé, có thể tham khảo gói VBI Care."
        },
        {
          q: "Thời gian chờ thai sản là bao lâu?",
          a: "Bảo Việt quy định thời gian chờ đối với quyền lợi sinh đẻ/sinh mổ là 365 ngày (1 năm). Vì vậy nên lên kế hoạch mang thai sau khi đã đóng phí."
        },
        {
          q: "Đi viện khám (không nằm viện) có được trả tiền không?",
          a: "Được, nếu bạn mua thêm Quyền lợi Ngoại trú. Phí này độc lập với Quyền lợi chính (Nội trú)."
        }
      ]}
      related={[
        { title: "Bảo Việt Tâm Bình", href: "/bao-hiem-suc-khoe/bao-viet-tam-binh/", desc: "Khởi điểm thấp, bổ trợ cho người đã có BHYT.", icon: "🌱" },
        { title: "Bảo Việt Intercare", href: "/bao-hiem-suc-khoe/bao-viet-intercare/", desc: "Quyền lợi VIP lên tới hàng chục tỷ cho điều trị ung thư.", icon: "💎" },
        { title: "An tâm viện phí", href: "/bao-hiem-suc-khoe/an-tam-vien-phi/", desc: "Chuyên biệt trả phí viện hỗ trợ thu nhập.", icon: "🛌" }
      ]}
    />
  );
}
