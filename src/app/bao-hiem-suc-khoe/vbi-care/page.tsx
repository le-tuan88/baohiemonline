import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe VBI Care - Vietinbank",
  description: "Trẻ dưới 3 tuổi có thể mua độc lập không kèm bố mẹ. Thời gian chờ điều trị thấp nhất thị trường. Hệ thống claim MyVBI hoàn tiền cực nhanh.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/vbi-care/" },
};

export default function VbiCarePage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #065F46 0%, #059669 100%)"
      accentColor="#10B981"
      badge="Hot cho Mẹ bé"
      icon="👶"
      title="Bảo hiểm VBI Care"
      subtitle="Ngôi sao sáng của thị trường dành cho trẻ sơ sinh và GenZ, cho phép độ tùy biến cực cao khi mua độc lập mà không cần ràng buộc điều kiện khắt khe."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "VBI (Vietinbank)", href: "/bao-hiem-suc-khoe/vbi/" },
        { label: "VBI Care" }
      ]}
      stats={[
        { icon: "👶", value: "Mua Độc Lập", label: "Cho bé dễ dàng" },
        { icon: "⚡", value: "30 Ngày", label: "TG chờ bệnh thường" },
        { icon: "📱", value: "MyVBI", label: "Xử lý Online" },
        { icon: "👑", value: "Top 1", label: "Phục vụ GenZ" }
      ]}
      benefits={[
        { icon: "👼", title: "Trẻ em mua độc lập 100%", desc: "VBI tạo nên cơn sốt khi là hãng hiếm hoi cho phép trẻ nhỏ dưới 6 tuổi (thậm chí sơ sinh) chỉ mua 1 mình mà bố mẹ không cần phải đóng tiền mua theo gây lãng phí." },
        { icon: "⏱️", title: "Thời gian chờ ngắn kỷ lục", desc: "Nếu các bệnh đặc biệt mất 365 ngày để được bảo vệ ở các hãng khác, VBI thường áp dụng mốc thời gian thoáng hơn rất nhiều (chỉ vài chục ngày)." },
        { icon: "💳", title: "Thẩm định điện tử Realtime", desc: "Bạn không phải chờ nhân viên in hợp đồng. Nhập đơn qua App, thanh toán VNPAY, 3 phút sau Hợp đồng đã có hiệu lực." },
        { icon: "🦷", title: "Không đồng chi trả Nha Khoa", desc: "Trồng răng/Chữa bệnh lý răng miệng được cover thẳng cánh tại mọi nha khoa hợp pháp." }
      ]}
      plans={[
        {
          name: "VBI Đồng",
          price: "Chưa tới 1tr/Năm",
          features: [
            "Giới hạn nội trú: 25 Triệu",
            "Tiền giường/ngày: 1.25 Triệu",
            "Tai nạn: 50 Triệu",
            "Trẻ em: Mua thoải mái"
          ]
        },
        {
          name: "VBI Bạc/Titan",
          price: "Phổ thông",
          highlight: true,
          features: [
            "Giới hạn nội trú: 50 -> 100 Triệu",
            "Tiền giường/ngày: Lên tới 3 Triệu",
            "Sử dụng cho Mẹ bầu, Trẻ nhỏ (ko ép đồng chi trả)",
            "Chữa ung thư: Trả phí thực tế"
          ]
        },
        {
          name: "VBI Kim Cương",
          price: "~10-15 Triệu/Năm",
          features: [
            "Giới hạn nội trú: Kịch trần tiền Tỷ",
            "Tiền giường/ngày: Phòng Tổng thống",
            "Bảo lãnh viện phí ở mảng Mắt, Tai mũi họng",
            "Thẻ vật lý làm bằng kim loại dập nổi (option)"
          ]
        }
      ]}
      steps={[
        { icon: "🗓️", title: "Lên kế hoạch", desc: "Xác định gói mong muốn qua bảng tham chiếu tuổi." },
        { icon: "📸", title: "Cung cấp CMND/GKS", desc: "Gửi ảnh cho chúng tôi để hỗ trợ nhập Data." },
        { icon: "📱", title: "Cài MyVBI", desc: "Nhận Certificate, trải nghiệm yêu cầu bồi thường 1 chạm trên đt." }
      ]}
      faqs={[
        {
          q: "Trẻ em mua một mình thì phí có bị phạt (tăng phí) không?",
          a: "VBI có một định chế phụ phí khoảng 30% cho trẻ dưới 3 tuổi nều mua độc lập. Tuy nhiên tính tổng tiền thì VẪN RẺ HƠN RẤT NHIỀU so với việc Bố & Mẹ phải è cổ mua kèm như các hãng khác."
        },
        {
          q: "Sinh mổ VBI có đền không?",
          a: "Chắc chắn có. VBI bảo vệ cả rủi ro thai sản (nếu bạn mua bổ sung), bao gồm khám thai định kỳ, sinh thường, sinh mổ, và điều trị biến chứng."
        }
      ]}
      ctaTitle="Ưu đãi giới hạn cho Nhóm gia đình GenZ"
      ctaDesc="Hãy tận hưởng phong cách mua bảo hiểm số hóa hoàn toàn của tương lai với VBI Care."
    />
  );
}
