import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe Doanh nghiệp PVI - Cấp cho Tổ chức FDI",
  description: "Trang bị lá chắn y tế ưu việt cho doanh nghiệp/tổ chức từ PVI. Đáp ứng chuỗi tiêu chuẩn khắt khe nhất của các tập đoàn đa quốc gia và khối VNR500.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/pvi-to-chuc/" },
};

export default function PviToChucPage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #431407 0%, #7C2D12 100%)"
      accentColor="#EA580C"
      badge="Giải pháp cho FDI & VNR500"
      icon="🏢"
      title="Bảo hiểm Doanh nghiệp PVI"
      subtitle="Sự lựa chọn số 1 của các Tập đoàn đa quốc gia. PVI Corporate Healthcare cung cấp khung phúc lợi y tế chặt chẽ, được Re-Insurance (tái bảo hiểm) bởi các quỹ bảo hiểm thụy sĩ khổng lồ."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "PVI", href: "/bao-hiem-suc-khoe/pvi/" },
        { label: "Tổ chức PVI" }
      ]}
      stats={[
        { icon: "🛡️", value: "Tới 2 Tỷ", label: "Mức trách nhiệm BOD" },
        { icon: "🌐", value: "Chuẩn Quốc Tế", label: "Kiểm toán bồi thường" },
        { icon: "💸", value: "Tối ưu Thuế", label: "Doanh nghiệp lớn" },
        { icon: "👨‍👩‍👧‍👦", value: "Mở rộng", label: "Bảo hiểm cho Gia đình NLĐ" }
      ]}
      benefits={[
        { icon: "🤝", title: "Khẳng định văn hóa tập đoàn", desc: "Không có gì thể hiện sự quan tâm nhân tài của Ban Lãnh đạo tốt hơn việc phát hành Thẻ Khám Chữa bệnh VIP cho nhân viên. Thẻ PVI là một 'thẻ bài' tự hào trong ví nhân viên phòng Lab, IT, Bankers." },
        { icon: "⚖️", title: "Tính minh bạch chuẩn IFRS", desc: "Quy trình giải quyết Claim được làm sát rạt, có hệ thống đối soát theo IFRS, đáp ứng compliance của các doanh nghiệp đến từ Mỹ, Châu Âu, Nhật Bản đóng tại Việt Nam." },
        { icon: "👩‍🍼", title: "Quyền lợi thai sản không thời gian chờ", desc: "Với nhóm số lượng lớn, PVI áp dụng thẳng cánh luật Waiver (Xóa bỏ chờ) cho mang thai. Cấp thẻ hôm nay, tháng sau nhân sự đi đẻ vẫn được thanh toán 100%." },
        { icon: "💎", title: "Quản trị VIP riêng biệt", desc: "Giám đốc được cấp hạn mức riêng với chế độ Care tại phòng Suite 1 người, Khám chữa răng thẩm mỹ 100% và sơ tán khẩn cấp quốc tế." }
      ]}
      plans={[
        {
          name: "Plan A (Cho Staff/Công nhân)",
          price: "Phí nhóm",
          features: [
            "Giới hạn nội trú: 50 -> 100 Triệu",
            "Ngoại trú: Cấu thành cơ bản",
            "Mạng lưới: Hầu hết BV công, tư cấp 1",
            "Hỗ trợ rủi ro tai nạn lao động"
          ]
        },
        {
          name: "Plan B (Manager/Line Leader)",
          price: "Tùy chọn mở rộng",
          highlight: true,
          features: [
            "Giới hạn nội trú: ~300 Triệu",
            "Chia nhỏ theo đầu mục dễ kiểm soát ngân sách",
            "Bảo lãnh trực tiếp tại Việt Pháp, Vinmec",
            "Gia đình được mua kèm đồng phí"
          ]
        },
        {
          name: "Plan C (Board Of Directors)",
          price: "High-net-worth",
          features: [
            "Giới hạn nội trú: Lên tới Vài tỷ",
            "Ngoại trú: Khám linh hoạt hàng ngàn cơ sở",
            "Nha khoa định kỳ / Trồng răng",
            "Tái khám toàn cầu"
          ]
        }
      ]}
      steps={[
        { icon: "📞", title: "Đánh giá quỹ (RFP)", desc: "Phòng mua sắm (Procurement) gửi Yêu cầu Báo Giá (RFP)." },
        { icon: "📑", title: "Thiết kế & Đấu thầu", desc: "PVI phát hành bộ hồ sơ năng lực và Cấu trúc phí dự thầu." },
        { icon: "🚀", title: "Triển khai SLA", desc: "Sau khi trúng thầu, bắt đầu quy trình cấp thẻ dưới bộ tiêu chuẩn SLA cam kết thời gian bồi thường < 5 ngày làm việc." }
      ]}
      faqs={[
        {
          q: "PVI có cung cấp cổng theo dõi Loss Ratio (Tỷ lệ bồi thường) cho phòng Nhân sự không?",
          a: "Chắc chắn rồi. Là một sản phẩm định hình chuẩn Corporate, PVI có Dashboard Realtime để HRD đánh giá xem năm nay quỹ đã cạn hay dư để làm việc về phí tái tục năm sang."
        },
        {
          q: "Năm 2 tái bút (Renewal) phí có bị tăng vọt không?",
          a: "Với các nhóm bảo hiểm < 30 người, loss ratio cá biệt có thể ảnh hưởng. Tuy nhiên với nhóm tập đoàn, các rủi ro được Pool (cộng gộp) lại nên tỷ lệ đàm phán Renewal tại PVI vẫn cam kết cực kỳ bình ổn."
        }
      ]}
      ctaTitle="Xây dựng phúc lợi Y tế trường tồn cùng PVI"
      ctaDesc="Hãy yêu cầu Proposal (Bản đề xuất) dành riêng cho doanh nghiệp của bạn bằng cách liên hệ đội Corporate Sales của chúng tôi ngay hôm nay."
    />
  );
}
