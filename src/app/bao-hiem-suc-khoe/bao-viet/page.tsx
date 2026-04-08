import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe Bảo Việt - Đứng đầu thị trường 50 năm",
  description: "Các gói bảo hiểm sức khỏe nổi bật từ Bảo Việt: Bảo Việt An Gia, Intercare, KCare. Nhận bồi thường nhanh chóng, mạng lưới bảo lãnh lớn nhất toàn quốc.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/bao-viet/" },
};

const brandsData = [
  {
    name: "Bảo Việt Sức Khỏe",
    color: "#C62828",
    desc: "Tổng công ty Bảo hiểm Bảo Việt liên tục giữ vị trí số 1 thị trường bảo hiểm phi nhân thọ Việt Nam. Với hệ thống mạng lưới bảo lãnh viện phí rộng khắp và tiềm lực tài chính vững mạnh.",
    products: [
      { title: "Bảo Việt An Gia", href: "/bao-hiem-suc-khoe/bao-viet-an-gia/", desc: "Gói bảo hiểm quốc dân phù hợp với mọi gia đình Việt, chi trả quyền lợi nội trú tới vài trăm triệu đồng." },
      { title: "Bảo Việt Intercare", href: "/bao-hiem-suc-khoe/bao-viet-intercare/", desc: "Bảo vệ toàn cầu cho giới tinh hoa, mức trách nhiệm lên tới hơn 10 tỷ đồng đi kèm đặc quyền VIP." },
      { title: "Bảo hiểm tổ chức", href: "/bao-hiem-suc-khoe/bao-viet-to-chuc/", desc: "Phúc lợi hàng đầu thu hút nhân tài cho doanh nghiệp, từ start-up đến tập đoàn đa quốc gia." },
      { title: "Bảo Việt Tâm Bình", href: "/bao-hiem-suc-khoe/bao-viet-tam-binh/", desc: "Quyền lợi chi trả lớn nhưng phí đóng cực rẻ, tập trung vào các phẫu thuật và bệnh hiểm nghèo." },
      { title: "An tâm viện phí", href: "/bao-hiem-suc-khoe/an-tam-vien-phi/", desc: "Trợ cấp viện phí hàng ngày khi ốm đau tai nạn, bù đắp 100% thu nhập bị mất." },
      { title: "Bảo Việt KCare", href: "/bao-hiem-suc-khoe/bao-viet-kcare/", desc: "Giải pháp bảo hiểm chuyên biệt điều trị bệnh ung thư trên phạm vi khắc nghiệt." },
    ],
  }
];

const benefitsData = [
  { icon: "🏆", title: "Thương hiệu số 1", desc: "Giữ vị thế dẫn đầu trong hơn nửa thế kỷ trên thị trường Việt Nam." },
  { icon: "🏥", title: "Mạng lưới rộng nhất", desc: "Hơn 200 phòng khám và bệnh viện bảo lãnh trên toàn quốc." },
  { icon: "💸", title: "Bồi thường minh bạch", desc: "Áp dụng hệ thống Insmart chuyên nghiệp trong việc ra quyết định chi trả bồi thường nhanh nhất." },
  { icon: "⭐", title: "Phục vụ 24/7", desc: "Hỗ trợ khách hàng qua tổng đài và dịch vụ giải đáp trực tuyến xuyên suốt." }
];

export default function BaoVietBrandPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #7F1D1D 0%, #DC2626 100%)"
      accentColor="#DC2626"
      icon="🛡️"
      title="Bảo hiểm Sức khỏe Bảo Việt"
      subtitle="Từ các gói phổ thông quốc dân đến các gói bảo vệ toàn cầu cho tầng lớp tinh hoa. Bảo Việt cung cấp phổ sản phẩm rộng nhất thị trường hiện tại."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "Bảo Việt" }
      ]}
      brands={brandsData}
      benefits={benefitsData}
      ctaTitle="Cần tư vấn chọn gói Bảo Việt?"
      ctaDesc="Hãy để lại số điện thoại, tư vấn viên cao cấp chuyên hãng Bảo Việt sẽ giúp bạn đối chiếu từng quyền lợi."
    />
  );
}
