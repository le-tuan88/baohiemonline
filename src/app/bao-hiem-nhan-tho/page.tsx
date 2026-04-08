import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Nhân thọ - Tích lũy & Bảo vệ",
  description: "Bảo hiểm nhân thọ từ Bảo Việt Nhân Thọ và Dai-ichi Life. Đầu tư tương lai, bảo vệ gia đình với các gói tích lũy dài hạn.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-nhan-tho/" },
};

const brandsData = [
  {
    name: "Dai-ichi Life",
    color: "#E31837",
    desc: "Thương hiệu bảo hiểm Nhật Bản hàng đầu với dịch vụ tài chính tận tâm, đem đến sự bình an và tương lai thịnh vượng.",
    products: [
      { title: "An Tâm Song Hành", href: "/bao-hiem-nhan-tho/an-tam-song-hanh/", desc: "Bảo vệ sinh mạng và tài sản lên tới hàng chục tỷ, là một trong những sản phẩm chủ đạo bán chạy nhất của Dai-ichi." },
      { title: "An Thịnh Đầu Tư", href: "/bao-hiem-nhan-tho/an-thinh-dau-tu/", desc: "Quyền lợi bảo vệ trọn đời kết hợp tích lũy đầu tư chia lãi dựa trên kết quả phát triển của công ty." }
    ],
  },
  {
    name: "Bảo Việt Nhân Thọ",
    color: "#C62828",
    desc: "Doanh nghiệp nhân thọ thuộc tổng công ty nhà nước có lịch sử lâu đời và vững chắc nhất Việt Nam.",
    products: [
      { title: "An Gia Phúc Lộc", href: "/bao-hiem-nhan-tho/an-gia-phuc-loc/", desc: "Tích lũy tiết kiệm kết hợp bảo vệ toàn diện, phù hợp cho nhóm tuổi ổn định sự nghiệp." },
      { title: "An Phát Cát Tường", href: "/bao-hiem-nhan-tho/an-phat-cat-tuong/", desc: "Đầu tư linh hoạt, hưởng lợi tức hấp dẫn kết hợp quyền lợi bảo vệ ung thư cực mạnh." }
    ],
  }
];

const benefitsData = [
  { icon: "🛡️", title: "Bảo vệ sinh mạng", desc: "Đảm bảo nguồn tài chính lớn cho người thân khi rủi ro cao nhất ập đến." },
  { icon: "📈", title: "Tích lũy tài sản", desc: "Giống như hình thức bỏ heo đất có lãi suất và bảo vệ trượt giá." },
  { icon: "🏥", title: "Đính kèm thẻ y tế", desc: "Các dòng sản phẩm nhân thọ cho phép đính kèm thẻ chăm sóc sức khỏe VIP cho cả gia đình." },
  { icon: "👴", title: "Hưu trí an nhàn", desc: "Tiền tiết kiệm đến độ tuổi hưu trí có thể đáo hạn hưởng số tiền lãi kép khổng lồ." }
];

export default function NhanThoPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)"
      accentColor="#8B5CF6"
      icon="💎"
      title="Bảo hiểm Nhân Thọ"
      subtitle="Thiết lập di sản tài sản an toàn cho thế hệ sau và tận hưởng lãi suất đầu tư sinh lời kỷ luật với cam kết từ các cường quốc tài chính."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm Nhân thọ" }
      ]}
      brands={brandsData}
      benefits={benefitsData}
      ctaTitle="Lên kết hoạch di sản tài chính"
      ctaDesc="Chuyên viên Tư Vấn Tài Chính (FC) cấp cao của chúng tôi sẽ thiết kế bảng minh họa trực quan."
    />
  );
}
