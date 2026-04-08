import { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";
import { notFound } from "next/navigation";

const brandsMap: Record<string, {name: string, color: string}> = {
  "bao-viet": { name: "Bảo Việt", color: "#C62828" },
  "pvi": { name: "PVI", color: "#E65100" },
  "mic": { name: "MIC", color: "#1565C0" }
};

export async function generateMetadata({ params }: { params: { brand: string } }): Promise<Metadata> {
  const brandData = brandsMap[params.brand];
  if (!brandData) return { title: "Không tìm thấy" };
  return {
    title: `Bảo hiểm Xe máy ${brandData.name} - Ấn chỉ điện tử 66k`,
    description: `Mua nhanh Bảo hiểm Trách nhiệm Dân sự bắt buộc cho Xe Máy từ ${brandData.name}. Giá siêu rẻ, gửi bản PDF qua điện thoại. Mua là có ngay.`,
  };
}

export default function TndsXeMayBrandPage({ params }: { params: { brand: string } }) {
  const brandData = brandsMap[params.brand];
  
  if (!brandData) {
    notFound();
  }

  return (
    <InsuranceProductPage
      gradient={`linear-gradient(135deg, #7F1D1D 0%, ${brandData.color} 100%)`}
      accentColor={brandData.color}
      badge="Bắt buộc mang theo"
      icon="🛵"
      title={`Bảo hiểm Xe Máy ${brandData.name}`}
      subtitle={`Cấp ấn chỉ điện tử bảo hiểm Trách Nhiệm Dân Sự lưu ngay trong thư viện ảnh. Thông hành mọi chốt kiểm tra Cảnh sát giao thông với giá cực rẻ.`}
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Xe cơ giới", href: "/bao-hiem-xe-co-gioi/" },
        { label: "TNDS Xe Máy", href: "/bao-hiem-xe-co-gioi/tnds-xe-may/" },
        { label: brandData.name }
      ]}
      stats={[
        { icon: "🛡️", value: "150 Trđ", label: "Cho Người/Vụ" },
        { icon: "💥", value: "50 Trđ", label: "Tài sản/Vụ" },
        { icon: "📱", value: "App QR", label: "Bản Ph mềm" },
        { icon: "💵", value: "66K", label: "Chỉ từ" }
      ]}
      benefits={[
        { icon: "🤳", title: "Nghị định 03/2021", desc: "Giấy chứng nhận điện tử được công nhận tương đương Thẻ vàng giấy. Không sợ bị quy lỗi không có bảo hiểm." },
        { icon: "🤝", title: "Chống rủi ro đâm va", desc: "Nếu vô tình tay lái yếu gây tai nạn làm thương tích cho một ai đó hoặc va quẹt móp cửa xe Ô tô đắt tiền, hãng sẽ gánh cho bạn thiệt hại đền bù lên đến 150 Triệu Đồng!" },
        { icon: "💸", title: "Khoản đầu tư siêu nhỏ", desc: "Số tiền 66 nghìn đồng một năm còn không bằng 2 bát phở nhưng bạn đi qua mọi cung đường mà không phải rón rén vặn ga." }
      ]}
      plans={[
        {
          name: "Xe < 50 Phân khối",
          price: "60.500 đ",
          features: [
            "Bảo hiểm bắt buộc TNDS",
            "Đền người tối đa 150 Triệu",
            "Đền tài sản xe người dùng 50 Triệu"
          ]
        },
        {
          name: "Xe > 50 Phân khối (Ga, Số)",
          price: "66.000 đ",
          highlight: true,
          features: [
            "Bảo hiểm bắt buộc TNDS",
            "Đền người tối đa 150 Triệu",
            "Đền tài sản người đâm: 50 Triệu"
          ]
        }
      ]}
      steps={[
        { icon: "📝", title: "Cung cấp Cà vẹt", desc: "Chụp ảnh giấy phép Đăng ký Xe (cà vẹt) xe máy." },
        { icon: "💳", title: "Bank tiền QR", desc: "Trả 66k nhanh gọn lẹ." },
        { icon: "📲", title: "Lưu E-Card", desc: "File tải về dưới dạng ảnh hoặc PDF là C/N Bảo hiểm của bạn." }
      ]}
      faqs={[
        {
          q: "Thẻ này là thẻ Giấy hay điện tử?",
          a: `Thẻ do ${brandData.name} phát hành cho bạn là thẻ ĐIỆN TỬ có mã QR quét ra thông tin hệ thống chuẩn 100%. Nếu bạn cứ thích thẻ giấy màu Vàng truyền thống thì Cty sẽ bắt Ship mất thêm tiền.`
        },
        {
          q: "Chạy quá tốc độ đâm người có được đền hộ không?",
          a: `Có! Bảo hiểm sẽ đại diện đền bù thay cho bạn cho dù bạn có đang chạy tốc độ bàn thờ hay kẹp 3, miễn là không uồng Rượu, ma túy và không bỏ trốn.`
        }
      ]}
      ctaTitle={`Chỉ với 66k để đi đường không lo nghĩ`}
      ctaDesc={`Nhắn ngay Zalo cho chúng tôi để làm thẻ ${brandData.name}.`}
    />
  );
}
