import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Tai nạn Con Người (24/24) - Mua Online chỉ từ 56k",
  description: "Trang bị lá chắn toàn diện chi trả quyền lợi khi bạn rủi ro gặp tai nạn giao thông, hoặc tai nạn sinh hoạt thường nhật. Các gói cá nhân và hợp đồng công nhân.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-tai-nan/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Tai nạn 24/24 (Cá nhân)",
    color: "#EAB308",
    href: "/bao-hiem-tai-nan/ca-nhan/",
    desc: "Ngay cả khi bạn có BHYT, bảo hiểm tai nạn vẫn chi trả thêm một cục tiền mặt khi tổn thương thân thể, nhằm san sẻ chi phí gãy xương, thương tật.",
    products: [
      { title: "Tai nạn Bảo Việt", href: "/bao-hiem-tai-nan/ca-nhan-bao-viet/", desc: "Giá rẻ, uy tín bồi thường tận nơi." },
      { title: "Tai nạn MIC", href: "/bao-hiem-tai-nan/ca-nhan-mic/", desc: "Quy trình online chụp hồ sơ qua ứng dụng." },
      { title: "Bảo Việt Tâm Bình (mở rộng tai nạn)", href: "/bao-hiem-suc-khoe/bao-viet-tam-binh/", desc: "Tích hợp cả ốm đau lẫn tai nạn chung 1 gói với 2k/ngày." }
    ],
  },
  {
    name: "Bảo hiểm Tai nạn Công trường / Doanh nghiệp",
    color: "#D97706",
    href: "/bao-hiem-tai-nan/cong-truong/",
    desc: "Gói bắt buộc khi làm thẻ ra vào các công trình thi công, xưởng sản xuất, bảo vệ người lao động chân tay khỏi các rủi ro máy móc.",
    products: [
      { title: "Tai nạn Nhóm PVI", href: "#", desc: "Được hầu hết các Chủ đầu tư lớn chấp thuận chứng chỉ bảo hiểm." },
      { title: "Tai nạn Nhóm VBI", href: "#", desc: "Xuất giấy tờ chứng nhận mộc đỏ nhanh theo danh sách Excel." }
    ],
  }
];

const benefitsData = [
  { icon: "🦴", title: "Trợ cấp thương tật gãy xương", desc: "Một tỷ lệ tiền mặt tương ứng (ví dụ 10% hạn mức = 10 Triệu) sẽ được thanh toán cho các bó bột, gãy chân tay." },
  { icon: "🚑", title: "Trả tiền xe cấp cứu", desc: "Bồi hoàn chi phí gọi xe cấp cứu và các dụng cụ y tế sơ cứu ngay tại hiện trường." },
  { icon: "☠️", title: "Sinh mạng do tai nạn", desc: "Hỗ trợ 100% hạn mức (vd 100 Triệu) cho tổ ấm gia đình nếu Trụ cột không may tử nạn." },
  { icon: "👷‍♂️", title: "Bảo vệ ngay trong lao động", desc: "Phù hợp để bảo vệ tính mạng và sức khỏe cho đội ngũ anh em công nhân làm việc năng nhọc rủi ro." }
];

export default function TaiNanPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
      accentColor="#D97706"
      icon="🚧"
      title="Bảo hiểm Tai Nạn 24/24"
      subtitle="Tai nạn là điều không báo trước. Gói bảo hiểm chi trả tiền bồi thường dựa theo tỷ lệ thương tật giúp giảm tải nỗi đau tài chính gia đình."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm tai nạn" }
      ]}
      brands={brandsData}
      benefits={benefitsData}
      ctaTitle="Chỉ từ chưa tới một bát phở phí tham gia"
      ctaDesc="Quyết định tham gia gói bảo hiểm Tai Nạn chưa bao giờ làm bạn tốn kém. Hãy tự bảo vệ bản thân khi bước ra đường!"
    />
  );
}
