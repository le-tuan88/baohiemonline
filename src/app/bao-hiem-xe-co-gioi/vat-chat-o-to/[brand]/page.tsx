import { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";
import { notFound } from "next/navigation";

const brandsMap: Record<string, {name: string, color: string, badge: string}> = {
  "bao-viet": { name: "Bảo Việt", color: "#C62828", badge: "Cao cấp" },
  "pvi": { name: "PVI", color: "#E65100", badge: "Uy tín" },
  "mic": { name: "MIC", color: "#1565C0", badge: "Bồi thường nhanh" },
  "bao-minh": { name: "Bảo Minh", color: "#16A34A", badge: "Lâu đời" },
  "pjico": { name: "PJICO", color: "#0284C7", badge: "Tiết kiệm" },
  "dbv": { name: "VBI", color: "#065F46", badge: "Online" } 
};

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand } = await params;
  const brandData = brandsMap[brand];
  if (!brandData) return { title: "Không tìm thấy" };
  return {
    title: `Bảo hiểm Vật chất Ô tô ${brandData.name} - Mua Online`,
    description: `Tham gia Bảo hiểm Vật chất Ô tô (2 Chiều) từ hãng ${brandData.name}. Chi trả bồi thường nhanh chóng khi xe gặp tại nạn, đâm va, thủy kích.`,
  };
}

export default async function VatChatOToBrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const brandData = brandsMap[brand];
  
  if (!brandData) {
    notFound();
  }

  return (
    <InsuranceProductPage
      gradient={`linear-gradient(135deg, #1E40AF 0%, ${brandData.color} 100%)`}
      accentColor={brandData.color}
      badge={`Tùy chọn ${brandData.badge}`}
      icon="🚙"
      title={`Bảo hiểm Vật chất Ô tô ${brandData.name}`}
      subtitle={`Lựa chọn hàng đầu cho bảo hiểm thân vỏ xe cơ giới. ${brandData.name} cam kết đền bù nhanh chóng cho các rủi ro đâm va, mất cắp, thủy kích, cháy nổ.`}
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Xe cơ giới", href: "/bao-hiem-xe-co-gioi/" },
        { label: "Vật chất ô tô", href: "/bao-hiem-xe-co-gioi/vat-chat-o-to/" },
        { label: brandData.name }
      ]}
      stats={[
        { icon: "🛡️", value: "Toàn bộ", label: "Phạm vi bảo vệ" },
        { icon: "🚘", value: "Chính hãng", label: "Gara liên kết" },
        { icon: "💧", value: "Có", label: "Quyền lợi ngập nước" },
        { icon: "⚡", value: "24/7", label: "Hotline cứu hộ" }
      ]}
      benefits={[
        { icon: "💥", title: "Tai nạn, Đâm va tự thân", desc: "Được bồi thường chi phí sửa chữa thay thế phụ tùng do các va chạm không lường trước ngẫu nhiên kể cả do lỗi bản thân đi không cẩn thận." },
        { icon: "🌧️", title: "Thiên tai, Lụt bão", desc: "Chi trả cho thiệt hại do cây đổ, đất đá sạt lở hoặc các yếu tố thiên nhiên. Hỗ trợ kèm điều khoản thủy kích nếu bị ngập xe." },
        { icon: "🔥", title: "Cháy nổ, hỏa hoạn", desc: "Xe bị chập cháy do lỗi hệ thống điện hoặc lan truyền từ khu vực nguy hiểm." },
        { icon: "🚨", title: "Mất cắp toàn bộ", desc: "Được đền bù nguyên xe theo bảng định giá nếu chẳng may bị kẻ gian đánh cắp hoặc cướp xe." }
      ]}
      plans={[
        {
          name: "Plan A (Tiêu biểu)",
          price: "1.5% Giá trị xe",
          features: [
            "Bảo hiểm Thân Vỏ",
            "Sửa tại Gara tự chọn",
            "Không khấu hao thay mới",
            "Có thủy kích ngập nước"
          ],
          highlight: true
        }
      ]}
      steps={[
        { icon: "📷", title: "Chụp ảnh kiểm tra", desc: `Gửi ảnh đăng kiểm và 4 mặt xe để AI của ${brandData.name} xác định mức nguyên trạng.` },
        { icon: "💳", title: "Đóng phí", desc: "Thanh toán bằng chuyển khoản và số hợp đồng được hiển thị." },
        { icon: "📝", title: "Cấp giấy ĐT", desc: "Nhận Certificate bảo hiểm điện tử có chữ ký số xác thực hợp pháp gốc." }
      ]}
      faqs={[
        {
          q: `Vì sao nên mua của ${brandData.name}?`,
          a: "Đây là một trong những hãng uy tín nhất với quy trình duyệt thay thế phụ tùng rất nhanh. Họ không hay kỳ kèo trừ hao các mục xước xát nhỏ."
        },
        {
          q: "Thủy kích có bị trừ tiền không?",
          a: "Hầu hết các hãng đều tính đồng chi trả 10-20% cho hạng mục ngập nước / thủy kích vì đây là rủi ro rất nặng. Do đó bạn sẽ phải trả một phần và công ty bảo hiểm gánh phần lớn (80%)."
        }
      ]}
      ctaTitle={`Nhận báo giá ${brandData.name} trong 1 Phút`}
      ctaDesc={`Nhập loại xe và đời xe, hệ thống sẽ báo giá gói mở rộng toàn diện nhất của ${brandData.name}.`}
    />
  );
}
