import { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";
import { notFound } from "next/navigation";

const brandsMap: Record<string, {name: string, color: string}> = {
  "bao-viet": { name: "Bảo Việt", color: "#C62828" },
  "pvi": { name: "PVI", color: "#E65100" },
  "mic": { name: "MIC", color: "#1565C0" },
  "liberty": { name: "Liberty", color: "#FBBF24" },
  "bao-minh": { name: "Bảo Minh", color: "#16A34A" }
};

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand } = await params;
  const brandData = brandsMap[brand];
  if (!brandData) return { title: "Không tìm thấy" };
  return {
    title: `Bảo hiểm Du lịch Trong Nước ${brandData.name} - Mua Nhóm Phượt`,
    description: `Bảo hiểm dã ngoại, cắm trại, team-building nội địa từ ${brandData.name}. Giảm chi phí nằm viện do sự cố sức khỏe đột xuất dọc đường đi.`,
  };
}

export default async function DuLichTrongNuocBrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const brandData = brandsMap[brand];
  
  if (!brandData) {
    notFound();
  }

  return (
    <InsuranceProductPage
      gradient={`linear-gradient(135deg, #16A34A 0%, ${brandData.color} 100%)`}
      accentColor={brandData.color}
      badge="An toàn phượt & cắm trại"
      icon="🏕️"
      title={`Bảo hiểm Du Lịch Domestic ${brandData.name}`}
      subtitle={`Nội địa vi vu, không lo sự cố sức khỏe dọc đường. Thích hợp mua đi Tour, mua cho cả nhóm Team-Building của Công Ty.`}
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm du lịch", href: "/bao-hiem-du-lich/" },
        { label: "Trong nước", href: "/bao-hiem-du-lich/trong-nuoc/" },
        { label: brandData.name }
      ]}
      stats={[
        { icon: "🛡️", value: "Bồi hoàn YT", label: "Tới Hàng chục Triệu" },
        { icon: "👥", value: "Cấp Group", label: "Hỗ trợ 500 mạng" },
        { icon: "💵", value: "Từ 1500đ", label: "Biểu phí rẻ nhất" },
        { icon: "🚌", value: "Tour", label: "Bắt buộc với nhà xe" }
      ]}
      benefits={[
        { icon: "🏔️", title: "Thể thao Mạo hiểm nhẹ", desc: "Không ít hành khách gặp tai nạn khi leo núi Trekking, cắm trại lội suối. Rủi ro này không còn bị từ chối bồi thường bới hãng." },
        { icon: "🤮", title: "Ngộ độc thực phẩm", desc: "Ăn đồ ăn bản địa dẫn đến vấn đề tiêu hóa cấp cứu là điều hay gặp và luôn được thanh toán sòng phẳng." },
        { icon: "📝", title: "Cấu trúc dễ gom nhóm", desc: "Rất phù hợp để HR công ty làm công tác tổ chức Team Building mua cho hàng trăm người chỉ qua 1 file excel." }
      ]}
      plans={[
        {
          name: "Mức trách nhiệm: 10 Triệu",
          price: "1.500 vnđ / Ngày",
          features: [
            "Trả cho Tai nạn: Tối đa 10 Tr đ",
            "Trả tiền Y tế: Tối thiểu đáp ứng",
            "Chết do mọi nguyên nhân: Có trợ cấp"
          ]
        },
        {
          name: "Mức trách nhiệm: 50 Triệu",
          price: "~ 5.000 vnđ / Ngày",
          highlight: true,
          features: [
            "Bảo vệ toàn diện, phù hợp gia đình",
            "Hỗ trợ di chuyển nội địa",
            "Chết do mọi nguyên nhân: Phê duyệt theo thực tế"
          ]
        }
      ]}
      steps={[
        { icon: "📋", title: "Gửi Exell", desc: "Họ và Tên, Năm Sinh của các thành viên tham gia chuyến đi." },
        { icon: "📅", title: "Liệt kê lịch trình", desc: "Bay từ Hà Nội vào Phú Quốc chơi 4 ngày." },
        { icon: "💸", title: "Tổng biểu phí siêu nhỏ", desc: "Nhóm 10 người đi du lịch 3 ngày phí tổn chỉ cỡ 1 Bát phở." }
      ]}
      faqs={[
        {
          q: "Phượt thủ có mua được không?",
          a: `Có, ${brandData.name} vẫn bao tiêu cho Phượt Cá nhân. Mua cho cả nhóm chạy xe máy vào Tây Bắc qua hệ thống của chúng tôi vô cùng dễ.`
        },
        {
          q: "Nếu tôi mua cả BHYT rồi thì tính sao?",
          a: "Bảo hiểm Du lịch sẽ trợ cấp khoản đền bù bổ sung. VD: Mức T/N là 10 Triệu, bạn bị tai nạn nằm viện BHYT lo chi phí Y tế. B/H sẽ đền bù cố định một khoản tiền mặt cho bạn."
        }
      ]}
      ctaTitle={`Chỉ với giá 1 cốc trà đá`}
      ctaDesc={`Nhắn Zalo danh sách tên số người để chốt đơn ngay lập tức.`}
    />
  );
}
