import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe VBI dành cho Doanh nghiệp & Tổ chức",
  description: "Trang bị lá chắn y tế VBI cho đội ngũ cán bộ công nhân viên. Chỉ từ vài người đã lên được gói Hợp đồng doanh nghiệp riêng biệt.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/vbi-to-chuc/" },
};

export default function VbiToChucPage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #022C22 0%, #064E3B 100%)"
      accentColor="#10B981"
      badge="Giải pháp nhân sự"
      icon="🤝"
      title="Bảo hiểm Doanh nghiệp VBI"
      subtitle="Giải pháp chăm lo sức khỏe CBNV ưu việt. Không đòi hỏi số lượng phải lên tới hàng trăm người. VBI đón nhận và cung cấp quyền lợi nhóm chỉ từ một tập thể nhỏ."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "VBI (Vietinbank)", href: "/bao-hiem-suc-khoe/vbi/" },
        { label: "Tổ chức VBI" }
      ]}
      stats={[
        { icon: "🛡️", value: "Tùy chọn", label: "Mức trách nhiệm" },
        { icon: "🏢", value: "Cả Start-up", label: "Quy mô hỗ trợ" },
        { icon: "💸", value: "Rẻ hơn", label: "So với gói cá nhân" },
        { icon: "⚡", value: "Digital", label: "Quản lý nhân sự" }
      ]}
      benefits={[
        { icon: "👼", title: "Phúc lợi tới từng chiếc răng", desc: "Doanh nghiệp có thể nhúng quyền lợi Nha Khoa toàn diện để tặng cho nhân viên. Điều trị tủy, nhổ răng, lấy cao răng đều được VBI thanh toán." },
        { icon: "👨‍👩‍👧‍👦", title: "Mua kèm gia đình nhân viên", desc: "Không chỉ giữ chân cán bộ cốt cán, gói Corporate VBI cho phép NLĐ đăng ký cover luôn cho Bố/Mẹ/Vợ Ck/Con cái với biểu phí siêu rẻ." },
        { icon: "📈", title: "Chống chênh lệch lạm phát y tế", desc: "Quỹ bồi thường được cố định ở năm đầu, cam kết đảm bảo tỷ lệ tái tục ổn định vào năm 2 mà không tăng phí đột biến." },
        { icon: "🤖", title: "CSKH Doanh nghiệp VIP", desc: "Vietinbank bố trí bộ phận nghiệp vụ riêng chỉ để theo sát các vướng mắc hồ sơ của các công ty ký kết hợp đồng nhóm." }
      ]}
      plans={[
        {
          name: "Plan A (Tập thể nhỏ)",
          price: "Phí chiết khấu nhóm",
          features: [
            "Giám đốc: Gói 200 Triệu",
            "Nhân viên: Gói 50 Triệu",
            "Yêu cầu cấp thẻ App VBI",
            "Trợ cấp thai sản cơ bản"
          ]
        },
        {
          name: "Plan B (Đại doanh nghiệp)",
          price: "Tối ưu hóa tổng ngân sách",
          highlight: true,
          features: [
            "Lên tới hàng ngàn nhân sự",
            "Khám ngoại trú không giới hạn số lần",
            "Quyền lợi VIP toàn cầu cho BOD",
            "Setup luồng bồi thường nội bộ"
          ]
        }
      ]}
      steps={[
        { icon: "📧", title: "Gửi Email Request", desc: "Phòng Hành chính gửi nhu cầu chi tiết, số lượng N.Sự hiện hữu." },
        { icon: "💬", title: "Meeting & Quote", desc: "Chúng tôi cử chuyên viên VBI đến tận văn phòng thuyết trình Demo gói." },
        { icon: "🖋️", title: "Ký kết", desc: "Hợp đồng được ký điện tử / mộc đỏ, hóa đơn VAT trả về phòng Kế Toán." }
      ]}
      faqs={[
        {
          q: "Công ty tôi chỉ mới có 4 nhân viên có mua nhóm được không?",
          a: "Chính sách của VBI rất linh hoạt. 4 người hoàn toàn có thể chạy biểu phí bán lẻ nhưng sẽ áp dụng thêm một vài quyền lợi/discount ở dạng 'Micro-SME'."
        },
        {
          q: "Nhân viên tự đi khám có cần công ty xác nhận giấy tờ không?",
          a: "Không. Quyền lợi được gắn vào cá nhân. Họ chỉ cần xuất trình App ở viện. Khi cần Claim thì app VBI của nhân viên sẽ xử lý, Kế toán không cần ôm đồm làm giấy tờ."
        }
      ]}
      ctaTitle="Vượt tầm mong đợi của ứng viên"
      ctaDesc="Trang bị Bảo hiểm VBI Group để biến chế độ đãi ngộ công ty thành vũ khí cạnh tranh với các đối thủ trên thị trường lao động."
    />
  );
}
