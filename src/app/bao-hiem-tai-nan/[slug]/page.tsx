import { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";
import { notFound } from "next/navigation";

const dataMap: Record<string, any> = {
  // --- BRANDS ---
  "bao-viet": { 
    isBrand: true, 
    name: "Bảo Việt", 
    color: "#C62828", 
    desc: "Cung cấp các dòng sản phẩm tai nạn từ cơ bản đến nâng cao (trách nhiệm cao) cho cá nhân và xưởng sản xuất." 
  },
  "mic": { 
    isBrand: true, 
    name: "MIC", 
    color: "#1565C0", 
    desc: "Gói bảo hiểm tai nạn có tỷ lệ bồi thường vô cùng có lợi cho người mua." 
  },
  "pvi": { 
    isBrand: true, 
    name: "PVI", 
    color: "#E65100", 
    desc: "Nhà cung cấp bảo hiểm tai nạn công trình lớn nhất Việt Nam." 
  },
  // --- PRODUCTS ---
  "bao-viet-247": {
    name: "Tai Nạn 24/7 Bảo Việt",
    brand: "Bảo Việt",
    color: "#C62828",
    price: "Từ 56.000đ",
    highlight: "Sản phẩm quốc dân cho người lao động, sinh viên, người đi làm. Hỗ trợ tai nạn ở sinh hoạt hàng ngày."
  },
  "bao-viet-tnc": {
    name: "Tai Nạn Trách Nhiệm Cao",
    brand: "Bảo Việt",
    color: "#991B1B",
    price: "Theo hạn mức",
    highlight: "Sản phẩm mở rộng cho cấp Quản lý hoặc đối tượng cần bảo vệ lên tới >1 Tỷ đồng mức sinh mạng."
  },
  "cologne-re": {
    name: "Cologne Re (Bảo Việt)",
    brand: "Bảo Việt",
    color: "#7F1D1D",
    price: "Từ 1 Triệu",
    highlight: "Mức bảo vệ đẳng cấp quốc tế, bồi thường chi tiết tới từng khớp đốt ngón tay theo chuẩn Re-Insurance."
  },
  "mic-tai-nan": {
    name: "Tai Nạn MIC Cơ bản",
    brand: "MIC",
    color: "#1D4ED8",
    price: "Chỉ từ 45.000đ",
    highlight: "Cúp bảo hiểm điện tử bồi thường tự động qua thiết bị di động."
  },
  "vdv-the-thao": {
    name: "Bảo hiểm VĐV Thể Thao MIC",
    brand: "MIC",
    color: "#1E3A8A",
    price: "Có phụ phí",
    highlight: "Chấp nhận bảo vệ ngay cả trong các bộ môn nguy hiểm như Đá Bóng, Đua Xe, Leo Núi (có áp dụng điều khoản riêng)."
  },
  "pvi-tai-nan": {
    name: "Bảo hiểm Tai Nạn PVI",
    brand: "PVI",
    color: "#C2410C",
    price: "Chiết khấu cao",
    highlight: "Được tất cả Chủ Đầu Tư (Vingroup, Sun, Ricons, Coteccons) chấp nhận kiểm duyệt an toàn lao động."
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = dataMap[slug];
  if (!item) return { title: "Không tìm thấy lỗi bảo hiểm" };
  
  if (item.isBrand) {
    return {
      title: `Bảo hiểm Tai Nạn ${item.name} - Chiết khấu từ 30%`,
      description: `Tổng hợp các gói bảo hiểm tai nạn rủi ro 24/24 từ ${item.name}.`,
    };
  }

  return {
    title: `${item.name} - Mua Bảo hiểm Tai nạn Online`,
    description: `Khám phá ngay sản phẩm ${item.name}. Chỉ từ hàng chục nghìn đồng để bảo vệ 100% tài chính gia đình.`,
  };
}

export default async function TaiNanDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = dataMap[slug];
  if (!item) notFound();

  // If it's just a brand overview slug (like /bao-hiem-tai-nan/bao-viet/)
  if (item.isBrand) {
    return (
      <InsuranceProductPage
        gradient={`linear-gradient(135deg, #450A0A 0%, ${item.color} 100%)`}
        accentColor={item.color}
        badge="Thương hiệu Uy Tín"
        icon="🚧"
        title={`Bảo hiểm Tai Nạn ${item.name}`}
        subtitle={item.desc}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tai Nạn", href: "/bao-hiem-tai-nan/" },
          { label: item.name }
        ]}
        stats={[
          { icon: "🛡️", value: "Lên Tới 1 Tỷ", label: "Quyền lợi đền bù" },
          { icon: "🧑‍🔧", value: "Mọi rủi ro", label: "Sinh hoạt / Nghề nghiệp" },
          { icon: "🏥", value: "200+", label: "Bệnh viện bảo lãnh" },
          { icon: "💯", value: "1 Phút", label: "Cấp đơn Online" }
        ]}
        benefits={[
          { icon: "🆘", title: "Tai nạn giao thông", desc: "Đền bù cho mọi tỷ lệ thương tật khi bị va quệt xe cộ lưu thông." },
          { icon: "⚒️", title: "Tai nạn lao động", desc: "Trả tiền cho rủi ro ngã giáo, tai nạn máy móc công trường sản xuất." },
          { icon: "🛌", title: "Tai nạn sinh hoạt", desc: "Việc đứt tay do dao, bỏng bếp ga hay ngã cầu thang ở nhà đều được bồi hoàn." }
        ]}
        ctaTitle={`Xem phí bảo hiểm ${item.name}`}
        ctaDesc="Vui lòng để lại ngân sách hoặc số lượng công nhân viên, chúng tôi sẽ lập báo giá."
      />
    );
  }

  // Else, it's a specific product (like /bao-hiem-tai-nan/vdv-the-thao/)
  return (
    <InsuranceProductPage
        gradient={`linear-gradient(135deg, #172554 0%, ${item.color} 100%)`}
        accentColor={item.color}
        badge={`Thuộc hãng ${item.brand}`}
        icon="🛡️"
        title={item.name}
        subtitle={item.highlight}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tai Nạn", href: "/bao-hiem-tai-nan/" },
          { label: item.name }
        ]}
        stats={[
          { icon: "💰", value: item.price, label: "Phí khởi điểm" },
          { icon: "🏥", value: "Thực tế", label: "Chi trả Y Tế" },
          { icon: "🚑", value: "Tỉ lệ %", label: "Quy định thương tật" },
          { icon: "📲", value: "Zalo/App", label: "Tiếp nhận hồ sơ" }
        ]}
        benefits={[
          { icon: "🩺", title: "Chi trả Y Tế do Tai Nạn", desc: "Bồi thường các hóa đơn nằm viện điều trị vết thương do tại nạn." },
          { icon: "🦴", title: "Chi trả thương tật", desc: "Trả theo tỷ lệ Bảng tỷ lệ thương tật chuẩn của BTC. Ví dụ cụt 1 ngón tay trả 15% của 100 Triệu = 15 Triệu." },
          { icon: "☠️", title: "Tử vong / Thương tật toàn bộ vĩnh viễn", desc: "Trả 100% số tiền bảo hiểm để gia đình nạn nhân trang trải nợ nần, cuộc sống." }
        ]}
        plans={[
          {
            name: "Mức trách nhiệm 30 - 50 Triệu",
            price: "Từ 56.000 vnđ",
            features: [
              "Tai nạn thường nhật",
              "Chi trả theo tỷ lệ chung"
            ]
          },
          {
            name: "Mức trách nhiệm 100 - 300 Triệu",
            price: "Từ 280.000 vnđ",
            highlight: true,
            features: [
              "Gói chuyên sâu mở rộng",
              "Bảo lãnh viện phí đâm ca nặng",
              "Có trợ cấp nằm viện theo ngày"
            ]
          }
        ]}
        steps={[
          { icon: "📝", title: "Khai báo CMND", desc: "Bạn chỉ việc gửi 2 mặt CMND." },
          { icon: "📋", title: "Khảo sát nghề nghiệp", desc: "Người làm văn phòng (Loại 1) sẽ rẻ hơn Công nhân hầm mỏ (Loại 4)." },
          { icon: "📩", title: "Nhận Certificate", desc: "Cấp ấn chỉ điện tử bản gốc ngay lập tức." }
        ]}
        faqs={[
          {
            q: "Nhân viên văn phòng đi làm từ nhà có phải mua không?",
            a: "Rất nên mua. Tai nạn rình rập ở trong bếp lúc nấu ăn, trượt ngã nhà tắm, và tai nạn khi đi trên đường. Phí chỉ hơn 50k là quá rẻ cho mức đền bù khổng lồ."
          },
          {
            q: "Có loại trừ rủi ro gì không?",
            a: "Bảo hiểm tự nguyện sẽ MIỄN TRỪ chi trả nếu bạn: Uống bia rượu vượt quy định, Đánh nhau (nhưng lại không phải tự vệ), Tự tử, hoặc dính tới pháp luật."
          }
        ]}
        ctaTitle={`Đầu tư cho ${item.name} ngay`}
        ctaDesc={`Phí siêu rẻ. Chat với CSKH để có thẻ gửi luôn trong 5 phút.`}
      />
  );
}
