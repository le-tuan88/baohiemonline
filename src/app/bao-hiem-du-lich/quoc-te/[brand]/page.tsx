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

export async function generateMetadata({ params }: { params: { brand: string } }): Promise<Metadata> {
  const brandData = brandsMap[params.brand];
  if (!brandData) return { title: "Không tìm thấy" };
  return {
    title: `Bảo hiểm Du lịch Quốc Tế ${brandData.name} - Mua Online`,
    description: `Bảo hiểm du lịch quốc tế xin Visa từ ${brandData.name}. Chi phí y tế tới hàng tỷ đồng, bồi thường mất hành lý, chậm hủy chuyến. Đăng ký online nhanh nhất.`,
  };
}

export default function DuLichQuocTeBrandPage({ params }: { params: { brand: string } }) {
  const brandData = brandsMap[params.brand];
  
  if (!brandData) {
    notFound();
  }

  return (
    <InsuranceProductPage
      gradient={`linear-gradient(135deg, #0284C7 0%, ${brandData.color} 100%)`}
      accentColor={brandData.color}
      badge="Hợp lệ mọi Đại sứ quán"
      icon="✈️"
      title={`Bảo hiểm Du Lịch Quốc Tế ${brandData.name}`}
      subtitle={`Lá chắn tài chính khổng lồ khi ra Bắc Mỹ, Châu Âu hay Châu Á. Xin Visa đậu ngay không lo từ chối vì không đạt chuẩn đền bù.`}
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm du lịch", href: "/bao-hiem-du-lich/" },
        { label: "Quốc tế", href: "/bao-hiem-du-lich/quoc-te/" },
        { label: brandData.name }
      ]}
      stats={[
        { icon: "🛡️", value: "Tới Tỷ", label: "Quyền lợi y tế" },
        { icon: "🌍", value: "Mọi quốc gia", label: "Phạm vi Địa lý" },
        { icon: "🧳", value: "Bao gồm", label: "Mất hành lý" },
        { icon: "⏰", value: "DELAY", label: "Có bồi hoàn hãng bay" }
      ]}
      benefits={[
        { icon: "🏥", title: "Bảo hiểm y tế ngoại quốc đắt đỏ", desc: "Không giống Việt Nam, nằm viện ở Mỹ hay Châu Âu tốn hàng ngàn USD / đêm. B/H sẽ thanh toán toàn bộ chi phí y tế và phẫu thuật lên đến hàng tỷ VNĐ." },
        { icon: "👮‍♂️", title: "Đủ chuẩn vào khối Schengen", desc: "Bảo hiểm này có bao gồm quyền lợi Vận chuyển y tế khẩn cấp và Hồi hương di hài (Schengen bắt buộc phải có)." },
        { icon: "📅", title: "Delay / Hủy chuyến an ủi", desc: "Nếu chuyến bay của bị delay > 8 tiếng, bạn sẽ được trả tiền mặt bù lại chi phí thuê khách sạn/ăn uống trong khi chờ." }
      ]}
      plans={[
        {
          name: "Chương trình Châu Á",
          price: "~ 120.000 đ",
          features: [
            "Đi: Thái, Sing, Hàn, Nhật...",
            "Thời điểm: Dưới 5 ngày",
            "Trách nhiệm y tế: Lên Tới 1 Tỷ",
            "Mất sổ hộ chiếu: Hỗ trợ 10 Triệu"
          ]
        },
        {
          name: "Chương trình Schengen/Mỹ",
          price: "~ 400.000 đ",
          highlight: true,
          features: [
            "Hợp lệ Visa khối Châu Âu",
            "Trách nhiệm Y tế siêu cao: >2 Tỷ",
            "Vận chuyển chuyên cơ y tế",
            "Chi phí thăm bệnh viện"
          ]
        }
      ]}
      steps={[
        { icon: "🛂", title: "Chụp Hộ Chiếu", desc: "Chúng tôi dùng OCR để bóc tách thông tin Hộ Chiếu không sai 1 chữ." },
        { icon: "📅", title: "Nhập Lịch Trình Bay", desc: "Ngày đi và ngày về dự kiến để tính đúng số ngày lưu trú." },
        { icon: "🖨️", title: "In ấn song ngữ", desc: "GCN có mặt song ngữ tiếng Anh + chữ ký số, chỉ việc in ra kẹp vào hồ sơ Đại Sứ Quán." }
      ]}
      faqs={[
        {
          q: "Vì sao tôi trượt Visa Schengen do bảo hiểm sai?",
          a: `Có 2 lý do cực hay gặp: Mua bảo hiểm du lịch nhưng Hãng đó không có quyền lợi 'Hồi hương di hài' (Repatriation), hoặc Mức bồi thường dưới 30,000 EUR. Với ${brandData.name}, gói tiêu chuẩn của chúng tôi mặc định loại bỏ yếu điểm này.`
        },
        {
          q: "Đại lý bán vé máy bay hỏi mua BH kèm luôn lúc xuất vé rẻ hơn?",
          a: "Chưa chắc! Bảo hiểm dính kèm vé máy bay thường là dạng 'co-branded' rút gọn rất nhiều quyền lợi Y TẾ và bị hãng hàng không ăn hoa hồng rất cao."
        }
      ]}
      ctaTitle={`Chuẩn bị cất cánh cực chất với ${brandData.name}`}
      ctaDesc={`Nhắn Zalo hộ chiếu của bạn để được cấp ngay trong 2 phút.`}
    />
  );
}
