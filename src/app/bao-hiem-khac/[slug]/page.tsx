import { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";
import { notFound } from "next/navigation";

const dataMap: Record<string, any> = {
  // --- GROUPS ---
  "tai-san": { 
    isBrand: true, 
    name: "Bảo hiểm Tài Sản & Xây Dựng", 
    color: "#B45309", 
    desc: "Khối bảo hiểm phi nhân thọ đóng vai trò như bức tường lửa bảo vệ các tài sản cố định khổng lồ trị giá hàng tỷ đồng khỏi nguy cơ mất trắng." 
  },
  "doanh-nghiep": { 
    isBrand: true, 
    name: "Bảo hiểm Doanh Nghiệp (Bảo Lãnh)", 
    color: "#0F766E", 
    desc: "Thiết kế riêng để quản trị rủi ro trách nhiệm cho đội ngũ lãnh đạo trước các vụ kiện tụng dân sự hoặc rủi ro vận tải chuỗi cung ứng." 
  },
  // --- PRODUCTS ---
  "nha-tu-nhan": {
    name: "Bảo Hiểm Nhà Tư Nhân",
    brand: "Gia Đình",
    color: "#4338CA",
    price: "0.1% / Giá trị",
    highlight: "Sản phẩm dành cho các hộ sống tại chung cư hoặc nhà đất. Đền bù nội thất và chi phí tổn thất do chập cháy tủ lạnh, bếp gas, sét đánh."
  },
  "chay-no": {
    name: "Bảo Hiểm Cháy Nổ Bắt Buộc",
    brand: "Luật PCCC",
    color: "#B91C1C",
    price: "Biểu phí Nhà nước",
    highlight: "Áp dụng bắt buộc cho các cơ sở kinh doanh, chợ, nhà kho, để tránh đi vào vi phạm quy định xử phạt an toàn phòng cháy."
  },
  "xay-dung": {
    name: "Mọi Rủi Ro Xây Dựng (CAR)",
    brand: "Công Trình",
    color: "#C2410C",
    price: "~ 0.15% - 0.2%",
    highlight: "Bao tiêu tổn thất nguyên vật liệu sắt thép, xi măng bị sập đổ do thiết kế, hoặc lũ quét tại công trường đang thi công."
  },
  "trach-nhiem": {
    name: "Bảo Hiểm Trách Nhiệm Sản Phẩm & Công Cộng",
    brand: "Doanh Nghiệp",
    color: "#1D4ED8",
    price: "Hạn mức cam kết",
    highlight: "Nếu khách hàng ăn phải thực phẩm cửa hàng phân phối bị ngộ độc, hoặc thang máy chung cư đứt cáp, gói này sẽ trả tiền đền bù kiện tụng."
  },
  "hang-hoa": {
    name: "Trách nhiệm Hàng Hóa Xuất Nhập Khẩu",
    brand: "Logistics",
    color: "#0369A1",
    price: "Tính theo chuyến",
    highlight: "Mất mát hoặc cướp biển, đâm va chìm tàu container trong quá trình vận tải biển, đường thủy nội địa hoặc hàng không."
  },
  "ky-thuat": {
    name: "Bảo Hiểm Đổ Vỡ Máy Móc Kỹ Thuật",
    brand: "Công Nghiệp",
    color: "#334155",
    price: "Báo giá Engineer",
    highlight: "Các thiết bị CNC, lò hơi, tủ điều khiển bị đoản mạch hoặc áp suất nổ bình do vận hành sai cách đều được thanh toán sửa chữa."
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = dataMap[slug];
  if (!item) return { title: "Không tìm thấy lỗi bảo hiểm" };
  
  if (item.isBrand) {
    return {
      title: `${item.name} - Giải pháp tổng thể`,
      description: `Khám phá các sản phẩm giảm thiểu rủi ro tài chính quy mô lớn ở khối ${item.name}.`,
    };
  }

  return {
    title: `${item.name} - Hồ sơ duyệt thầu`,
    description: `Chi tiết quyền lợi ${item.name}. Hồ sơ chuẩn pháp lý để tuân thủ mọi yêu cầu khắt khe từ đối tác nước ngoài.`,
  };
}

export default async function BaoHiemKhacDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = dataMap[slug];
  if (!item) notFound();

  // If it's just an overview group slug
  if (item.isBrand) {
    return (
      <InsuranceProductPage
        gradient={`linear-gradient(135deg, #020617 0%, ${item.color} 100%)`}
        accentColor={item.color}
        badge="Khối chuyên án"
        icon="🏭"
        title={item.name}
        subtitle={item.desc}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản Phẩm Khác", href: "/bao-hiem-khac/" },
          { label: item.name }
        ]}
        stats={[
          { icon: "🛡️", value: "Minh Bạch", label: "Pháp chứng bồi thường" },
          { icon: "📜", value: "Chuẩn Quốc Tế", label: "Phù hợp nhà đầu tư FDI" },
          { icon: "📈", value: "Tái Bảo Hiểm", label: "Có quỹ Re-insurance" },
          { icon: "🤝", value: "B2B", label: "Dành riêng cho đối tác" }
        ]}
        benefits={[
          { icon: "✅", title: "Chứng thư tín nhiệm", desc: "Giấy chứng nhận là một điều kiện đấu thầu giúp doanh nghiệp bạn uy tín hơn trong mắt chủ đầu tư." },
          { icon: "💰", title: "Chuyển giao rủi ro lớn", desc: "Các vụ cháy nổ hay sập đổ làm bốc hơi toàn bộ vốn doanh nghiệp. Bảo hiểm sẽ bơm vốn khôi phục nguyên trạng." },
          { icon: "⏱️", title: "Quy trình hỗ trợ thẩm định", desc: "Giám định viên quốc tế Independent Loss Adjuster can thiệp chuyên nghiệp." }
        ]}
        ctaTitle={`Thẩm định hồ sơ ${item.name}`}
        ctaDesc="Vui lòng để lại email của bộ phận Mua Sắm (Procurement) để chúng tôi gửi bản giới thiệu."
      />
    );
  }

  // Else, it's a specific product 
  return (
    <InsuranceProductPage
        gradient={`linear-gradient(135deg, #0F172A 0%, ${item.color} 100%)`}
        accentColor={item.color}
        badge={`Xếp loại: ${item.brand}`}
        icon="📑"
        title={item.name}
        subtitle={item.highlight}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm Khác", href: "/bao-hiem-khac/" },
          { label: item.name }
        ]}
        stats={[
          { icon: "💰", value: item.price, label: "Tỷ lệ phí tham khảo" },
          { icon: "🏦", value: "Mọi ngân hàng", label: "Có thể mang cầm cố" },
          { icon: "📝", value: "Cam kết", label: "Biên nhận hợp pháp" },
          { icon: "📊", value: "Linh động", label: "Miễn thường khấu trừ" }
        ]}
        benefits={[
          { icon: "🏗️", title: "Bảo vệ giá trị lớn", desc: "Tài sản lên tới trăm tỷ, ngàn tỷ đồng vượt quá quỹ dự phòng của công ty sẽ được sang tay cho bảo hiểm." },
          { icon: "⚖️", title: "Tuân thủ định chế luật", desc: "Cung cấp đầy đủ giấy chứng chỉ bảo hiểm để trình công an PCCC, chính quyền địa phương không bị rút lõi niêm phong." },
          { icon: "🤝", title: "Nâng chuẩn tín dụng", desc: "Mang hợp đồng của bảo hiểm ra thế chấp Ngân hàng dễ dàng tạo gói vay vì có tài sản phòng ngừa." }
        ]}
        plans={[
          {
            name: "Hợp đồng theo chuẩn Cơ bản",
            price: "Base Rate + Thuế",
            features: [
              "Khoanh vùng rủi ro hẹp",
              "Giá trị khai báo vừa đủ khung chuẩn",
              "Mức khấu trừ cao (doanh nghiệp tự chịu 1 phần)"
            ]
          },
          {
            name: "Bảo hiểm Toàn diện Mở Rộng",
            price: "Thương lượng sau Site Survey",
            highlight: true,
            features: [
              "Theo chuẩn hiệp hội Munich Re (Đức)",
              "Cộng thêm chi phí dọn dẹp hiện trường",
              "Bồi hoàn chi phí chữa cháy chuyên nghiệp",
              "Mức khấu trừ rất nhỏ, rủi ro hầu như bằng 0"
            ]
          }
        ]}
        steps={[
          { icon: "📧", title: "Bản khái toán", desc: "Nhập form danh sách thông tin tài sản / địa chỉ công trình cần bảo hiểm." },
          { icon: "🔎", title: "Survey (Khảo sát)", desc: "Giám định viên hoặc Kĩ sư đến xem trực tiếp nhà xưởng của bạn lấy số liệu an toàn." },
          { icon: "🖋️", title: "Phát hành ấn chỉ", desc: "Ký kết Mộc Đỏ qua hệ thống công văn, VAT được đẩy về phòng Kế Toán điện tử." }
        ]}
        faqs={[
          {
            q: "Nhà tôi ở chung cư đóng phí cháy nổ thế nào?",
            a: "Thường Ban Quản Trị đã đóng cục bộ bằng tiền Quỹ bảo trì. Tuy nhiên bạn có thể mua riêng gói Nhà Cửa Tư Nhân với phí cực rẻ đền tới 1 Tỷ/căn hộ để bảo vệ nội thất."
          },
          {
            q: "Khi tôi vận chuyển hàng đi Mỹ tàu chìm thì mất trắng?",
            a: "Kể cả tàu không chìm, nếu gặp bão phải vứt hàng xuống biển để cứu tàu (Tổn thất chung), hàng không mua bảo hiểm vẫn phải góp tiền đền bù. Việc mua Cargo Insurance là bắt buộc để thoát án cướp biển và chìm đắm tầu lớn."
          }
        ]}
        ctaTitle={`Liên hệ báo phí ${item.brand}`}
        ctaDesc={`Là loại hình cần đàm phán tỷ lệ phí (Underwriting). Hãy Email cho bộ phận kỹ thuật để thiết kế hợp đồng ngay.`}
      />
  );
}
