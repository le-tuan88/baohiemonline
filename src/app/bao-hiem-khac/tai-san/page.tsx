import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Tài Sản - Nhà ở, Cháy nổ, Xây dựng",
  description: "Bảo hiểm nhà tư nhân, cháy nổ bắt buộc và mọi rủi ro xây dựng từ các hãng uy tín Bảo Việt, PVI, MIC.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-khac/tai-san/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Tài sản Cá nhân",
    color: "#4338CA",
    desc: "Bảo vệ căn nhà và nội thất bên trong trước hoả hoạn, trộm cắp, thiên tai.",
    products: [
      { title: "Nhà Tư Nhân (Hộ gia đình)", href: "/bao-hiem-khac/nha-tu-nhan/", desc: "Từ chung cư, biệt thự đến nhà phố — bảo vệ kết cấu và toàn bộ đồ nội thất." },
      { title: "Cháy nổ Bắt buộc (PCCC)", href: "/bao-hiem-khac/chay-no/", desc: "Nghĩa vụ pháp lý cho cơ sở kinh doanh, chung cư mini theo Nghị định 23/2018." }
    ],
  },
  {
    name: "Bảo hiểm Công trình Xây dựng",
    color: "#C2410C",
    desc: "Bảo vệ vật tư, máy móc thiết bị trên công trường và trách nhiệm bên thứ ba.",
    products: [
      { title: "Mọi rủi ro Xây dựng (CAR)", href: "/bao-hiem-khac/xay-dung/", desc: "Bao tiêu thiệt hại vật tư bị đổ nát, ngập lụt, lửa trong suốt tiến độ thi công." }
    ],
  }
];

export default function TaiSanPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #1E1B4B 0%, #4338CA 100%)"
      accentColor="#4338CA"
      icon="🏠"
      title="Bảo hiểm Tài Sản & Công Trình"
      subtitle="Bảo vệ những gì bạn tạo dựng. Giải pháp bảo hiểm tài sản giúp đền bù mọi tổn thất bất ngờ mà không cần xin cứu viện từ ngân hàng hay người thân."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm Khác", href: "/bao-hiem-khac/" },
        { label: "Tài sản" }
      ]}
      brands={brandsData}
    />
  );
}
