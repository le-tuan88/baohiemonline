import { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";
import { notFound } from "next/navigation";

const brandsMap: Record<string, {name: string, color: string}> = {
  "bao-viet": { name: "Bảo Việt", color: "#C62828" },
  "pvi": { name: "PVI", color: "#E65100" },
  "mic": { name: "MIC", color: "#1565C0" },
  "bao-minh": { name: "Bảo Minh", color: "#16A34A" },
  "pjico": { name: "PJICO", color: "#0284C7" },
  "dbv": { name: "VBI", color: "#065F46" } 
};

export async function generateMetadata({ params }: { params: { brand: string } }): Promise<Metadata> {
  const brandData = brandsMap[params.brand];
  if (!brandData) return { title: "Không tìm thấy" };
  return {
    title: `Bảo hiểm TNDS Ô tô Bắt buộc ${brandData.name} - Cấp nhanh`,
    description: `Bảo hiểm bắt buộc Trách nhiệm dân sự cho xe ô tô từ hãng ${brandData.name}. Ấn chỉ điện tử chuẩn Bộ Tài Chính.`,
  };
}

export default function TndsOToBrandPage({ params }: { params: { brand: string } }) {
  const brandData = brandsMap[params.brand];
  
  if (!brandData) {
    notFound();
  }

  return (
    <InsuranceProductPage
      gradient={`linear-gradient(135deg, #047857 0%, ${brandData.color} 100%)`}
      accentColor={brandData.color}
      badge="Giấy tờ Bắt buộc"
      icon="📑"
      title={`Bảo hiểm TNDS Ô tô ${brandData.name}`}
      subtitle={`Mua Bảo hiểm Trách nhiệm Dân sự Ô tô từ ${brandData.name} để không lo phạt và được chi trả tới 150.000.000đ/người khi có va chạm.`}
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Xe cơ giới", href: "/bao-hiem-xe-co-gioi/" },
        { label: "TNDS Ô tô", href: "/bao-hiem-xe-co-gioi/tnds-o-to/" },
        { label: brandData.name }
      ]}
      stats={[
        { icon: "🛡️", value: "150 Trđ", label: "Cho Người/Vụ" },
        { icon: "💥", value: "100 Trđ", label: "Tài sản/Vụ" },
        { icon: "📱", value: "App QR", label: "Kiểm tra điện tử" },
        { icon: "⏱️", value: "1 Phút", label: "Thời gian Cấp ấn chỉ" }
      ]}
      benefits={[
        { icon: "🚔", title: "Đối phó CSGT", desc: "Không cần cầm giấy tờ màu vàng nữa. QR code trên điện thoại được tích hợp đồng bộ dữ liệu quốc gia Cục CSGT." },
        { icon: "🤝", title: "Đền Bù Bên Nhỏ", desc: "Dùng để đền bù tổn hại sức khỏe và tài sản cho Người Bị Bạn Tông Trúng. Họ sẽ không làm khó dễ, bảo hiểm lo tiền." },
        { icon: "💰", title: "Mức phí quy định Bộ Tài Chính", desc: "Tất cả các hãng thu chung một mức phí cố định, mua online qua chúng tôi nhận chiết khấu trực tiếp tới 10% - 20% vào giá." }
      ]}
      plans={[
        {
          name: "Xe gia đình (4 - 5 chỗ)",
          price: "480.700 đ",
          features: [
            "Mục đích: Không kinh doanh",
            "Mức đền bù Người: 150 Triệu",
            "Mức đền bù Tài sản: 100 Triệu"
          ],
          highlight: true
        },
        {
          name: "Xe gia đình (7 chỗ)",
          price: "873.400 đ",
          features: [
            "Mục đích: Không kinh doanh",
            "Các xe SUV, MPV 7 chỗ ngồi",
            "Đầy đủ trách nhiệm dân sự"
          ]
        },
        {
          name: "Xe Chạy Grab/Dịch vụ",
          price: "Từ 831.600 đ",
          features: [
            "Mục đích: Có kinh doanh (Biển Vàng)",
            "Hợp lệ để chạy xe dịch vụ"
          ]
        }
      ]}
      steps={[
        { icon: "📷", title: "Mở Zalo chụp giấy tờ", desc: "Gửi Đăng kiểm (Mặt phụ lục) cho CSKH." },
        { icon: "💳", title: "Thanh toán giá cực rẻ", desc: "Chuyển khoản trực tiếp, được trừ luôn phần chiết khấu siêu hời." },
        { icon: "📱", title: "Nhận Giấy B/H QR", desc: "Lưu bản File PDF có mã QR vào máy đt, luôn mang theo người." }
      ]}
      faqs={[
        {
          q: "Làm sao để biết giấy chứng nhận điện tử có hiệu lực hay chưa?",
          a: "Chỉ cần mở Camera Zalo, quét mã QR trên ứng dụng, thông tin sẽ lập tức xác thực trên máy chủ Đăng Kiểm Quốc Gia."
        },
        {
          q: "TNDS có bồi thường cho tôi (chủ xe) không?",
          a: "KHÔNG! TNDS chỉ trả tiền cho NGƯỜI BỊ BẠN ĐÂM PHẢI. Nếu muốn đền bù cho xe bạn, bạn phải mua B/H Vật Chất (2 chiều)."
        }
      ]}
      ctaTitle={`Chốt Phí Cực Tốt ${brandData.name}`}
      ctaDesc="Hãy gửi mặt đăng kiểm cho chúng tôi để xuất hóa đơn ngay trong 5 phút."
    />
  );
}
