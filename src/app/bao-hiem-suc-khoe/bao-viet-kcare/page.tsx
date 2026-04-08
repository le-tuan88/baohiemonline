import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo hiểm ung thư K-Care Bảo Việt - Chi trả tới 1.2 Tỷ đồng",
  description: "Giải pháp bảo vệ tài chính toàn diện trước rủi ro tử vong và ung thư. Trả tiền trọn gói ngay khi có chẩn đoán để khách hàng chủ động điều trị.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/bao-viet-kcare/" },
};

export default function BaoVietKCarePage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #991B1B 0%, #DC2626 100%)"
      accentColor="#DC2626"
      badge="Bảo vệ chuyên sâu"
      icon="🎗️"
      title="Bảo Việt K-Care"
      subtitle="Bảo hiểm chuyên biệt Bệnh Ung Thư (K-Care) cam kết đồng hành cùng bạn chống lại hắc ín ung thư với khoản trợ cấp viện phí khổng lồ thanh toán ngay lập tức."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "Bảo Việt", href: "/bao-hiem-suc-khoe/bao-viet/" },
        { label: "K-Care Ung Thư" }
      ]}
      stats={[
        { icon: "🛡️", value: "1.2 Tỷ", label: "Tối đa đền bù" },
        { icon: "⚡", value: "Tức thì", label: "Cách thức chi trả" },
        { icon: "👵", value: "74 tuổi", label: "Gia hạn tối đa" },
        { icon: "📄", value: "0", label: "Hóa đơn viện phí" }
      ]}
      benefits={[
        { icon: "💰", title: "Thanh toán trọn gói 1 lần", desc: "Sau khi xuất trình Giấy chẩn đoán bệnh, Bảo Việt sẽ lập tức chuyển khoản số tiền bảo hiểm (lên tới 1.2 tỷ) để bạn an tâm trị liệu." },
        { icon: "🏥", title: "Trợ cấp nằm viện cao", desc: "Thêm khoản trợ cấp 2 Triệu VNĐ / Ngày giúp thay thế thu nhập bị hao hụt trong quá trình hóa xạ trị." },
        { icon: "👨‍👩‍👧", title: "Áp dụng cả ung thư giai đoạn đầu", desc: "Một trong số ít sản phẩm chi trả quyền lợi ngay cả khi khối u ác tính được phát hiện ở giai đoạn mầm mống (giai đoạn sớm)." },
        { icon: "📉", title: "Phí cực rẻ so với quyền lợi", desc: "Khởi điểm từ ~300.000đ/Năm. Số tiền quá rẻ để chuyển giao mọi rủi ro hàng trăm triệu đồng." }
      ]}
      plans={[
        {
          name: "Chương trình 1",
          price: "Từ 368.000đ",
          features: [
            "Ung thư giai đoạn sớm: 50 Triệu",
            "Ung thư giai đoạn trễ: 250 Triệu",
            "Trợ cấp nằm viện: 500k/Ngày",
            "Trợ cấp tử vong: 100 Triệu"
          ]
        },
        {
          name: "Chương trình 2",
          price: "Từ 700.000đ",
          highlight: true,
          features: [
            "Ung thư giai đoạn sớm: 100 Triệu",
            "Ung thư giai đoạn trễ: 500 Triệu",
            "Trợ cấp nằm viện: 1 Triệu/Ngày",
            "Trợ cấp tử vong: 200 Triệu"
          ]
        },
        {
          name: "Chương trình 3",
          price: "Từ 1.500.000đ",
          features: [
            "Ung thư giai đoạn sớm: 250 Triệu",
            "Ung thư giai đoạn trễ: 1 Tỷ 200 Triệu",
            "Trợ cấp nằm viện: 2 Triệu/Ngày",
            "Trợ cấp tử vong: 500 Triệu"
          ]
        }
      ]}
      steps={[
        { icon: "📝", title: "Chọn hạn mức", desc: "Xác định gói K-Care tương ứng với ngân sách và mong muốn." },
        { icon: "🩺", title: "Kê khai lịch sử y tế", desc: "Điền trung thực vào đơn đăng ký Online trên hệ thống." },
        { icon: "📧", title: "Cấp chứng nhận điện tử", desc: "Từ lúc duyệt đơn tới khi nhận giấy chứng nhận qua mail dưới 5 phút." }
      ]}
      faqs={[
        {
          q: "Chưa từng đi khám sức khỏe, tham gia K-Care có được không?",
          a: "Hoàn toàn được. Bạn không bị bắt buộc phải khám sức khỏe thẩm định, chỉ cần cam kết tuân thủ trung thực khi điền Form lúc mua bảo hiểm."
        },
        {
          q: "K-Care khác gì An Tâm Viện Phí?",
          a: "An Tâm Viện Phí trả tiền theo mỗi ngày nằm viện cho MỌI BỆNH. Còn K-Care thì Trả LUÔN 1 CỤC TIỀN TỶ ngay lập tức khi phát hiện ra bị bệnh Ung thư, bạn cầm số tiền đó mang đi nước ngoài chữa cũng được."
        }
      ]}
      related={[
        { title: "Bảo Việt An Gia", href: "/bao-hiem-suc-khoe/bao-viet-an-gia/", desc: "Bảo hiểm sức khỏe bù đắp mọi rủi ro y tế phổ thông.", icon: "👨‍👩‍👧‍👦" }
      ]}
      ctaTitle="Chủ động bảo vệ - Chống lại bệnh K"
      ctaDesc="Phát hiện ung thư là lúc cần rất nhiều tài chính. Hãy để chúng tôi lập bảng minh họa phí K-Care riêng biệt theo độ tuổi của bạn."
    />
  );
}
