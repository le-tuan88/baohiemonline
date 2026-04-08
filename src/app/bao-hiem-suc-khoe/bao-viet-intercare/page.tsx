import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo Việt Intercare - Bảo vệ sức khỏe toàn cầu",
  description: "Bảo hiểm chăm sóc sức khỏe cao cấp Bảo Việt Intercare. Quyền lợi lên tới 10.5 tỷ VNĐ, thẻ VIP khám chữa bệnh toàn cầu, dành cho khách hàng cao cấp.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/bao-viet-intercare/" },
};

export default function BaoVietIntercarePage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #111827 0%, #374151 100%)"
      accentColor="#F59E0B"
      badge="Dành cho VIP"
      icon="💎"
      title="Bảo Việt Intercare"
      subtitle="Chương trình bảo hiểm sức khỏe đẳng cấp quốc tế dành cho Ban lãnh đạo hoặc người có thu nhập cao muốn tận hưởng dịch vụ y tế 5 sao trên toàn thế giới."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "Bảo Việt", href: "/bao-hiem-suc-khoe/bao-viet/" },
        { label: "Intercare" }
      ]}
      stats={[
        { icon: "🛡️", value: "10.5 Tỷ", label: "Quyền lợi nội trú" },
        { icon: "🌍", value: "Toàn cầu", label: "Phạm vi bảo vệ" },
        { icon: "🚑", value: "100%", label: "Chi trả vận chuyển KL" },
        { icon: "⭐", value: "VIP", label: "Đặc quyền" }
      ]}
      benefits={[
        { icon: "✈️", title: "Phạm vi Toàn Cầu", desc: "Không giới hạn mảng y tế tại Việt Nam, thẻ VIP Intercare mở ra cánh cửa điều trị tại Nhật, Hàn, Singapore, Châu Âu và Mỹ." },
        { icon: "🏨", title: "Phòng bệnh VIP", desc: "Được chi trả chi phí phòng bệnh tiêu chuẩn cao nhất (phòng suite) tại các chuỗi bệnh viện như Vinmec, FV, Hạnh Phúc." },
        { icon: "🚁", title: "Vận chuyển Y tế khẩn cấp", desc: "Tài trợ 100% chi phí điều trực thăng/máy bay chuyên cơ cấp cứu chuyển viện trên toàn cầu qua hệ thống SOS." },
        { icon: "👶", title: "Thai sản cao cấp", desc: "Gói thai sản trả phí tới hơn 100 triệu, thoải mái tận hưởng trọn vẹn sự chăm sóc y tế cho Mẹ và Bé." }
      ]}
      plans={[
        {
          name: "Plan Select (Việt Nam)",
          price: "Từ 5.3 Triệu",
          features: [
            "Giới hạn nội trú: 1 Tỷ 050",
            "Phòng bệnh lý: 10.5 Triệu/Ngày",
            "SOS cấp cứu: Theo CP thực tế",
            "Phạm vi: Việt Nam"
          ]
        },
        {
          name: "Plan Essential (Châu Á)",
          price: "Từ 8.2 Triệu",
          highlight: true,
          features: [
            "Giới hạn nội trú: 2 Tỷ 100",
            "Phòng bệnh lý: 21 Triệu/Ngày",
            "SOS cấp cứu: Theo CP thực tế",
            "Phạm vi: Châu Á"
          ]
        },
        {
          name: "Plan Elite (Toàn cầu)",
          price: "Từ 26 Triệu",
          features: [
            "Giới hạn nội trú: 10 Tỷ 500",
            "Phòng bệnh lý: Dịch vụ VIP nhất",
            "Bảo hiểm sinh mạng: Tặng kèm",
            "Phạm vi: Toàn thế giới"
          ]
        }
      ]}
      steps={[
        { icon: "📞", title: "Liên hệ Hotline VIP", desc: "Tư vấn viên cung cấp bảng minh họa phí theo nhóm độ tuổi." },
        { icon: "📋", title: "Khai báo sức khỏe", desc: "Trả lời các câu hỏi y tế chi tiết theo quy định Bảo Việt." },
        { icon: "💳", title: "Nhận Thẻ Vàng", desc: "Card Cứng Intercare mang tính danh dự được gửi vận chuyển tận tay." }
      ]}
      faqs={[
        {
          q: "Thẻ Intercare có áp dụng khám Răng không?",
          a: "Chỉ khi bạn mua Kèm Quyền lợi Ngoại Trú (Khám chữa bệnh) hoặc Quyền Lợi Nha Khoa. Nội trú cơ bản không bao gồm mảng này."
        },
        {
          q: "Mức khấu trừ là gì?",
          a: "Intercare cung cấp quyền lựa chọn mức khấu trừ để giảm phí đóng. Nghĩa là bạn tự trả một khoản tiền X đầu tiên, và Bảo Việt trả toàn bộ phần còn lại."
        }
      ]}
    />
  );
}
