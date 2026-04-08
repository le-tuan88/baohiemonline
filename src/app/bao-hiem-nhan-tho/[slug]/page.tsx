import { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";
import { notFound } from "next/navigation";

const dataMap: Record<string, any> = {
  // --- BRANDS ---
  "bao-viet": { 
    isBrand: true, 
    name: "Bảo Việt Nhân Thọ", 
    color: "#C62828", 
    desc: "Thương hiệu quốc gia Việt Nam tiên phong bảo vệ tương lai hàng triệu gia đình với tiềm lực vững chắc nhất." 
  },
  "dai-ichi": { 
    isBrand: true, 
    name: "Dai-ichi Life", 
    color: "#E31837", 
    desc: "Chất lượng dịch vụ chuẩn Nhật Bản, mang đến các quỹ phòng phòng rủi ro vững chãi và lãi suất sinh lời hấp dẫn." 
  },
  // --- PRODUCTS ---
  "an-gia-phuc-loc": {
    name: "An Gia Phúc Lộc (Bảo Việt)",
    brand: "Bảo Việt Nhân Thọ",
    color: "#B91C1C",
    price: "Tùy chọn đa dạng",
    highlight: "Sự kết hợp hoàn hảo giữa đóng gói tích lũy đường dài và khoản đền bù sinh mạng cao để bạn vững tâm gây dựng tương lai."
  },
  "an-gia-thinh-vuong": {
    name: "An Gia Thịnh Vượng (Bảo Việt)",
    brand: "Bảo Việt Nhân Thọ",
    color: "#991B1B",
    price: "Thiết kế riêng",
    highlight: "Sản phẩm thế mạnh chia lãi hàng năm giúp chống lạm phát tối đa, đáo hạn nhận 150% số tiền đã đóng."
  },
  "tich-luy-giao-duc": {
    name: "Tích lũy Tài Quản Giáo Dục",
    brand: "Bảo Việt",
    color: "#7F1D1D",
    price: "Quỹ Giáo Dục 18t",
    highlight: "Quỹ chuẩn bị hành trang học phí cho bé yêu từ khi lọt lòng đến lúc đặt chân qua ngạch cửa Đại học."
  },
  "an-tam-song-hanh": {
    name: "An Tâm Song Hành (Dai-ichi Life)",
    brand: "Dai-ichi Life",
    color: "#BE123C",
    price: "Từ 15 Triệu/Năm",
    highlight: "Chi trả bệnh lý nghiêm trọng, nằm viện đa tầng và đền bù sinh mạng cho 2 người trong gia đình cùng lúc trong 1 Hợp đồng duy nhất!"
  },
  "an-thinh-dau-tu": {
    name: "An Thịnh Đầu Tư (Dai-ichi Life)",
    brand: "Dai-ichi Life",
    color: "#9F1239",
    price: "Gói Lãi Kép",
    highlight: "Tham gia đầu tư vào các chứng chỉ quỹ tín thác của Dai-ichi. Lãi suất vượt mốc ngân hàng đi kèm bảo hiểm tử cung cao."
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = dataMap[params.slug];
  if (!item) return { title: "Không tìm thấy chương trình" };
  
  if (item.isBrand) {
    return {
      title: `Bảo hiểm Nhân thọ ${item.name} - Cam kết Sinh lời & Bảo vệ`,
      description: `Khám phá các sản phẩm nhân thọ đình đám từ hệ sinh thái ${item.name}.`,
    };
  }

  return {
    title: `Gói Nhân thọ ${item.name} - Giải pháp Đầu tư An toàn`,
    description: `Chi tiết quyền lợi gói ${item.name}. Nhận bảng minh họa biểu phí và lãi kỳ vọng tùy theo độ tuổi của bạn.`,
  };
}

export default function NhanThoDynamicPage({ params }: { params: { slug: string } }) {
  const item = dataMap[params.slug];
  if (!item) notFound();

  // If it's a brand 
  if (item.isBrand) {
    return (
      <InsuranceProductPage
        gradient={`linear-gradient(135deg, #4C0519 0%, ${item.color} 100%)`}
        accentColor={item.color}
        badge="Thương hiệu Tỷ Đô"
        icon="💎"
        title={item.name}
        subtitle={item.desc}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Nhân Thọ", href: "/bao-hiem-nhan-tho/" },
          { label: item.name }
        ]}
        stats={[
          { icon: "🛡️", value: "Tới Cả Tờ", label: "Mức bảo vệ sinh mạng" },
          { icon: "📈", value: "~7.5%", label: "Lợi suất đầu tư" },
          { icon: "🏥", value: "Quyền lợi gốc", label: "Thẻ chăm sóc sức khỏe kèm" },
          { icon: "👴", value: "Trọn đời", label: "Cam kết đồng hành" }
        ]}
        benefits={[
          { icon: "💰", title: "Thay bạn hoàn thành trách nhiệm", desc: "Đảm bảo gia đình bạn không bao giờ rơi vào cùng cực nếu bạn không may gặp đại biến cố mất sức lao động." },
          { icon: "⚖️", title: "Giá trị hoàn lại", desc: "Khác với bảo hiểm rơi (mua là mất), Nhân Thọ là 1 cái két sắt bạn nhét tiền vào và nó đẻ lãi lớn khi đáo hạn rút về." },
          { icon: "👶", title: "Gói Quỹ học vấn cho con", desc: "Giáo dục yêu thương cho tương lai bằng các hợp đồng chạy lúc bé, lúc con 18 tuổi rút về hàng trăm triệu khởi nghiệp." }
        ]}
        ctaTitle={`Xem phí bảo hiểm ${item.name}`}
        ctaDesc="Liên hệ hotline Tư Vấn Viên Hãng để minh họa kỹ càng từng con số lãi suất và đóng phí."
      />
    );
  }

  // Else, it's a specific product 
  return (
    <InsuranceProductPage
        gradient={`linear-gradient(135deg, #4A044E 0%, ${item.color} 100%)`}
        accentColor={item.color}
        badge={`Thuộc hãng ${item.brand}`}
        icon="📈"
        title={item.name}
        subtitle={item.highlight}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Nhân Thọ", href: "/bao-hiem-nhan-tho/" },
          { label: item.name }
        ]}
        stats={[
          { icon: "💰", value: item.price, label: "Tùy chọn linh hoạt" },
          { icon: "🏥", value: "Mua Kèm", label: "Gắn thẻ viện phí Tỷ đồng" },
          { icon: "📈", value: "Có lãi suất", label: "Hiệu ứng lãi kép" },
          { icon: "📝", value: "Minh họa", label: "Luôn có file thiết kế riêng" }
        ]}
        benefits={[
          { icon: "🛡️", title: "Chi trả Tử vong và Thương tật", desc: "Mức đền bù khổng lồ lớn hơn rất nhiều so với phí bạn đóng." },
          { icon: "🎗️", title: "Bảo vệ Bệnh lý nghiêm trọng", desc: "Trợ cấp viện phí Ung Thư, Đột quỵ trong danh sách lên tới số tiền Tỷ (tùy gói đính kèm)." },
          { icon: "⏰", title: "Thời gian đóng linh hoạt", desc: "Bạn có quyền lợi đóng linh hoạt sau 3 năm đầu, không bắt buộc đóng duy trì nếu năm đó kinh tế đi xuống." }
        ]}
        plans={[
          {
            name: "Hợp đồng Vừa Nhỏ",
            price: "12 - 20 Triệu / Năm",
            features: [
              "Quyền lợi tử vong: 500Tr - 1 Tỷ",
              "Bệnh hiểm nghèo đi kèm",
              "Lãi suất đảm bảo tối thiểu"
            ]
          },
          {
            name: "Hợp đồng Thiết Kế Khá",
            price: "> 30 Triệu / Năm",
            highlight: true,
            features: [
              "Quyền lợi tử vong: 2 Tỷ vnđ",
              "Có quyền lợi trợ cấp nằm viện cao",
              "Bảo lãnh viện phí đắt đỏ như Vinmec",
              "Lợi tức sinh lời kép bù đắp mọi lạm phát"
            ]
          }
        ]}
        steps={[
          { icon: "📞", title: "Xác nhận Lương / Nhu cầu", desc: "FC hỏi bạn bạn muốn sau 15 năm rút bao tiền và mong muốn mức bảo vệ tối thiểu bao nhiêu." },
          { icon: "📊", title: "Phát hành Bản Minh Họa", desc: "Trình diễn trên file PDF bảng tính 10 trang của cty bảo hiểm." },
          { icon: "📝", title: "Khám y tế (nếu cần)", desc: "Điền hồ sơ. Nếu Công ty yêu cầu đi khám, họ sẽ tài trợ chi phí bạn đi viện khám để làm xác thực." }
        ]}
        faqs={[
          {
            q: "Nhân thọ có bị lừa tiền lấy lại không được không?",
            a: "Bảo hiểm là kênh CỰC KỲ MINH BẠCH, hoạt động dưới bộ luật do Chính Phủ ban hành. Bạn chỉ mất tiền nếu tự chủ ý xé bỏ hợp đồng trong Bốn năm đầu, do đó phải đóng phí đầy đủ các mốc đầu tiên."
          },
          {
            q: "Mua Nhân thọ có được đền ốm vặt sổ mũi không?",
            a: `Có! Nếu trong Hợp đồng ${item.brand} bạn có chọn Đính kèm Thẻ 'Sản Phẩm Bổ Trợ' Y tế. Thẻ bổ trợ này đóng thêm vài triệu/năm bạn ốm đi viện trả sòng phẳng như bảo hiểm An Gia, Intecrare...`
          }
        ]}
        ctaTitle={`Yêu cầu thiết kế Bản minh họa ${item.brand} cho Bạn`}
        ctaDesc={`Vui lòng điền Tuổi và Nghề nghiệp. Chuyên gia tư vấn của chúng tôi sẽ gọi lại ngay.`}
      />
  );
}
