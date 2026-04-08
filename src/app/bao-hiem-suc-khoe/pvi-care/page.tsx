import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe PVI Care - Dịch vụ chuẩn Quốc tế",
  description: "Trải nghiệm quyền lợi Bảo hiểm chăm sóc sức khỏe PVI. Bồi thường uy tín, bảo lãnh viện phí VIP tại mạng lưới các bệnh viện quốc tế hàng đầu.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/pvi-care/" },
};

export default function PviCarePage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #7C2D12 0%, #C2410C 100%)"
      accentColor="#EA580C"
      badge="Top uy tín bồi thường"
      icon="🥇"
      title="Bảo hiểm PVI Care"
      subtitle="Bảo hiểm chăm sóc sức khỏe từ Tập đoàn Dầu khí PVI - Ông lớn ngành năng lượng mang tới một lá chắn y tế vững chắc, uy tín và chuẩn mực bồi thường khắt khe nhất."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "PVI", href: "/bao-hiem-suc-khoe/pvi/" },
        { label: "PVI Care" }
      ]}
      stats={[
        { icon: "🛡️", value: "Tới 1 Tỷ", label: "Giới hạn tối đa" },
        { icon: "🏥", value: "VIP", label: "Hỗ trợ chuẩn 5 Sao" },
        { icon: "📝", value: "Mở rộng", label: "Chấp nhận bệnh có sẵn (năm 2)" },
        { icon: "🏆", value: "Top", label: "Tài chính mạnh nhất" }
      ]}
      benefits={[
        { icon: "💰", title: "Quỹ Bồi thường khổng lồ", desc: "PVI là công ty có vốn điều lệ và tiềm lực tài chính lớn hàng đầu. Cảm giác e ngại 'Công ty bảo hiểm bùng tiền' là điều không bao giờ tồn tại ở PVI." },
        { icon: "🌐", title: "Mạng lưới VIP thực thụ", desc: "Thẻ PVI Care quyền lực vượt trội khi đến quẹt bảo lãnh tại Vinmec, Việt Pháp, Hồng Ngọc. Luôn có hàng chờ ưu tiên dành cho khách thẻ PVI." },
        { icon: "👶", title: "Trẻ nhỏ bảo vệ toàn diện", desc: "Bao gồm thanh toán các bệnh về hô hấp, sốt xuất huyết, và các bệnh phổ biến mà trẻ mầm non dễ mắc phải với hạn mức bao tiêu chi trả 100%." },
        { icon: "✈️", title: "Hỗ trợ y tế toàn cầu 24/7", desc: "Dịch vụ SOS quốc tế luôn sẵn sàng tổ chức chuyến bay nghiệp vụ cứu trợ y tế cho các gói cao cấp." }
      ]}
      plans={[
        {
          name: "Chương trình 1 (Phổ thông)",
          price: "Cực kỳ hợp lý",
          features: [
            "Giới hạn nội trú: ~115 Triệu/Năm",
            "Tiền phòng/giường: 2.5 Triệu/Ngày",
            "Chi phí tiểu phẫu: Bao gồm",
            "Độ tuổi tham gia: Từ 1 tuổi"
          ]
        },
        {
          name: "Chương trình 2 (Nâng cao)",
          price: "Được chọn nhiều nhất",
          highlight: true,
          features: [
            "Giới hạn nội trú: ~300 Triệu/Năm",
            "Tiền phòng/giường: 5 Triệu/Ngày",
            "Chi trả cấy ghép nội tạng: Có",
            "Không áp dụng đồng chi trả bé 3t"
          ]
        },
        {
          name: "Chương trình VIP",
          price: "Dành cho cấp Quản lý",
          features: [
            "Giới hạn nội trú: Gần 1 Tỷ/Năm",
            "Dịch vụ phòng Suite, 1 người",
            "Trả 100% hóa đơn Nha Khoa thẩm mỹ (tuỳ chọn)",
            "Chăm sóc thai sản VIP"
          ]
        }
      ]}
      steps={[
        { icon: "📲", title: "Chọn hạn mức", desc: "Chuyên viên PVI sẽ tư vấn gói cân bằng tỷ lệ phí/đền bù hoàn hảo." },
        { icon: "📋", title: "Nhập form điện tử", desc: "Cam kết kê khai sức khỏe không cần khám y tế bắt buộc." },
        { icon: "📇", title: "Nhận Giấy CN & Thẻ Tích hợp", desc: "Thẻ PVI cứng hoặc E-card qua Email sẵn sàng quẹt Bảo Lãnh." }
      ]}
      faqs={[
        {
          q: "PVI khác gì Bảo Việt An Gia?",
          a: "Hai gói này được xếp làm đối thủ trực tiếp. PVI có mức đánh giá tín nhiệm quốc tế cao hơn một chút, biểu phí thường rẻ hơn/tương đương nhưng thiết kế các hạn mức chi tiết cho Viện phí thì Bảo Việt có thể làm 'mịn' hơn tùy biểu bì tuổi."
        },
        {
          q: "Trẻ em có bị tăng phí khi mua kèm không?",
          a: "Khác với một số hãng, PVI khi yêu cầu Cha/Mẹ bắt buộc mua kèm không áp dụng penalty giá cho người mua chính, giúp tổng giỏ hàng vẫn rất hợp lý."
        }
      ]}
      ctaTitle="Điểm tựa Dầu khí, vững chắc chuẩn Thế giới"
      ctaDesc="Quyết định nâng cấp bảo vệ y tế hôm nay để sống an tâm tột độ cùng PVI Care."
    />
  );
}
