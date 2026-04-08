import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Tai nạn Cá nhân 24/24 - Từ 56.000đ",
  description: "Mua bảo hiểm tai nạn cá nhân 24/24 từ Bảo Việt, MIC, PVI. Bảo vệ toàn diện khi di chuyển, sinh hoạt, cả khi nằm ngủ.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-tai-nan/ca-nhan/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Tai nạn Cá nhân",
    color: "#D97706",
    desc: "Gói bảo hiểm phổ biến nhất cho mọi đối tượng: học sinh, sinh viên, nhân viên văn phòng, người lao động.",
    products: [
      { title: "Tai nạn Cá nhân Bảo Việt", href: "/bao-hiem-tai-nan/bao-viet-247/", desc: "Đền bù tai nạn 24/24 cả trong và ngoài nơi làm việc. Phí chỉ từ 56.000đ/năm." },
      { title: "Tai nạn Cá nhân MIC", href: "/bao-hiem-tai-nan/mic-tai-nan/", desc: "Quy trình claim nhanh qua App MIC. Không cần nộp hồ sơ giấy về văn phòng." },
      { title: "Tai nạn Cá nhân PVI", href: "/bao-hiem-tai-nan/pvi-tai-nan/", desc: "Được chọn nhiều bởi chủ đầu tư và doanh nghiệp FDI làm gói phúc lợi cho nhân viên." }
    ],
  }
];

export default function CaNhanPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #78350F 0%, #D97706 100%)"
      accentColor="#D97706"
      icon="🛡️"
      title="Bảo hiểm Tai nạn Cá nhân 24/24"
      subtitle="66.000đ một năm — nhỏ hơn một bữa ăn nhưng bảo vệ bạn cả ngày lẫn đêm, trên đường đi và tại nhà."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Tai nạn", href: "/bao-hiem-tai-nan/" },
        { label: "Cá nhân 24/24" }
      ]}
      brands={brandsData}
    />
  );
}
