import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Khác - Giải pháp toàn diện cho Cá nhân & Doanh nghiệp",
  description: "Bảo hiểm cháy nổ nhà tư nhân, bảo hiểm xây dựng, trách nhiệm nghề nghiệp và hàng hóa xuất nhập khẩu, đáp ứng mọi yêu cầu thẩm định tài chính khắt khe.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-khac/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Tài sản & Kỹ thuật",
    color: "#B45309",
    href: "/bao-hiem-khac/tai-san/",
    desc: "Lá chắn vững chắc cho cơ sở vật chất, máy móc và công trình xây dựng trước hiểm họa cháy nổ và thiên tai.",
    products: [
      { title: "Bảo hiểm Nhà tư nhân", href: "/bao-hiem-khac/nha-tu-nhan/", desc: "Giữ lửa tổ ấm an toàn tuyệt đối trước nguy cơ chập cháy lưới điện." },
      { title: "Bảo hiểm Cháy nổ", href: "/bao-hiem-khac/chay-no/", desc: "Thủ tục pháp lý tuân thủ Cảnh sát PCCC đối với hộ kinh doanh và chung cư." },
      { title: "Bảo hiểm Xây dựng", href: "/bao-hiem-khac/xay-dung/", desc: "Bao tiêu toàn bộ rủi ro giàn giáo, nguyên vật liệu trong suốt tiến độ thi công." }
    ],
  },
  {
    name: "Bảo hiểm Doanh nghiệp",
    color: "#0F766E",
    href: "/bao-hiem-khac/doanh-nghiep/",
    desc: "Giảm thiếu tác động tài chính từ các rủi ro vận tải và tranh chấp pháp lý đặc thù của khối sản xuất/thương mại.",
    products: [
      { title: "Bảo hiểm Trách nhiệm", href: "/bao-hiem-khac/trach-nhiem/", desc: "Trách nhiệm công cộng và Trách nhiệm sản phẩm khi xảy ra sự cố ngộ độc, tai nạn cho bên thứ 3." },
      { title: "Bảo hiểm Hàng hóa", href: "/bao-hiem-khac/hang-hoa/", desc: "Giảm rủi ro mất mát/tổn thất hàng hóa xuất nhập cảnh do chìm tàu, lốc xoáy." },
      { title: "Bảo hiểm Kỹ thuật", href: "/bao-hiem-khac/ky-thuat/", desc: "Bảo vệ hệ thống nồi hơi, máy móc hạng nặng trong các xưởng công nghiệp quy mô lớn." }
    ],
  }
];

const benefitsData = [
  { icon: "📜", title: "Đáp ứng quy định Nhà nước", desc: "Giấy chứng nhận hợp pháp giúp doanh nghiệp vượt qua thanh tra PCCC và cấp phép xây dựng." },
  { icon: "🧑‍⚖️", title: "Thẩm định bồi thường minh bạch", desc: "Quy trình đo bốc tách thiệt hại rõ ràng theo chuẩn quốc tế, không giam vốn thời gian dài." },
  { icon: "💸", title: "Linh hoạt ngân sách", desc: "Tỷ lệ phí được deal thương lượng trực tiếp dựa theo mức an toàn của công ty bạn." },
  { icon: "🌍", title: "Hỗ trợ chuỗi cung ứng", desc: "Gói hàng hóa (Cargo) cho phép phát hành theo Lô linh động qua file Excel chỉ trong nửa giờ." }
];

export default function KhacPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #1E293B 0%, #0F172A 100%)"
      accentColor="#64748B"
      icon="🏗️"
      title="Bảo hiểm Tài sản & Doanh nghiệp"
      subtitle="Danh mục bảo hiểm đặc thù chuyên sâu phục vụ hoạt động sản xuất kinh doanh và bảo vệ tư gia trước các thiệt hại hàng tỷ đồng do hỏa hoạn, trộm cướp."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm Khác" }
      ]}
      brands={brandsData}
      benefits={benefitsData}
      ctaTitle="Trao đổi nghiệp vụ chuyên sâu"
      ctaDesc="Loại hình bảo hiểm này phụ thuộc rất nhiều vào ngành hàng của bạn. Hãy gửi cho chúng tôi bảng khái toán mức đánh giá rủi ro."
    />
  );
}
