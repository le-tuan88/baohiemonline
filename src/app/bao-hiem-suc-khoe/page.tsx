import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Sức khỏe - So sánh & Mua Online",
  description: "So sánh và mua bảo hiểm sức khỏe từ Bảo Việt, MIC, VBI, PVI. Bảo vệ toàn diện cho cá nhân và gia đình với chi phí hợp lý nhất.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/" },
};

const brandsData = [
  {
    name: "Bảo Việt",
    color: "#C62828",
    href: "/bao-hiem-suc-khoe/bao-viet/",
    desc: "Tập đoàn bảo hiểm số 1 Việt Nam với hơn 50 năm kinh nghiệm, hệ thống bảo lãnh viện phí lớn nhất toàn quốc.",
    products: [
      { title: "Bảo Việt An Gia", href: "/bao-hiem-suc-khoe/bao-viet-an-gia/", desc: "Gói bảo hiểm quốc dân phù hợp với mọi gia đình Việt, trẻ em từ 15 ngày tuổi." },
      { title: "Bảo Việt Intercare", href: "/bao-hiem-suc-khoe/bao-viet-intercare/", desc: "Quyền lợi VIP lên tới 10 tỷ đồng, bảo lãnh toàn cầu dành cho doanh nhân và khách hàng cao cấp." },
      { title: "Bảo hiểm tổ chức", href: "/bao-hiem-suc-khoe/bao-viet-to-chuc/", desc: "Thiết kế riêng cho nhân viên công ty, tiết kiệm thuế, phúc lợi tốt nhất." },
      { title: "Bảo Việt Tâm Bình", href: "/bao-hiem-suc-khoe/bao-viet-tam-binh/", desc: "Quyền lợi chi trả ung thư và bệnh hiểm nghèo nhanh chóng." },
      { title: "An tâm viện phí", href: "/bao-hiem-suc-khoe/an-tam-vien-phi/", desc: "Chỉ từ vài nghìn đồng/ngày, hỗ trợ 100% thu nhập khi nằm viện." },
      { title: "Bảo Việt KCare", href: "/bao-hiem-suc-khoe/bao-viet-kcare/", desc: "Giải pháp chuyên sâu đề phòng rủi ro ung thư chuyên tâm." },
    ],
  },
  {
    name: "MIC (Bảo hiểm Quân Đội)",
    color: "#1565C0",
    href: "/bao-hiem-suc-khoe/mic/",
    desc: "Uy tín, bồi thường nhanh chóng ứng dụng 100% công nghệ số vào giải quyết quyền lợi.",
    products: [
      { title: "MIC Care", href: "/bao-hiem-suc-khoe/mic-care/", desc: "Mua linh hoạt theo hạn mức, bảo vệ toàn diện tai nạn, ốm đau, thai sản." },
      { title: "Bảo hiểm tổ chức MIC", href: "/bao-hiem-suc-khoe/mic-to-chuc/", desc: "Gói bảo vệ cho doanh nghiệp vừa và nhỏ, quyền lợi đa dạng theo ngân sách." },
    ],
  },
  {
    name: "VBI (Bảo hiểm Vietinbank)",
    color: "#00695C",
    href: "/bao-hiem-suc-khoe/vbi/",
    desc: "Bảo hiểm của người dùng Gen Z, mua nhanh qua App, chi trả nhận bồi thường siêu tốc trong 5 phút.",
    products: [
      { title: "VBI Care", href: "/bao-hiem-suc-khoe/vbi-care/", desc: "Trẻ em có thể mua độc lập không cần kèm bố mẹ. Thời gian chờ cực thấp." },
      { title: "Bảo hiểm tổ chức VBI", href: "/bao-hiem-suc-khoe/vbi-to-chuc/", desc: "Giải pháp cho hàng nghìn doanh nghiệp toàn quốc." },
    ],
  },
  {
    name: "PVI",
    color: "#E65100",
    href: "/bao-hiem-suc-khoe/pvi/",
    desc: "Nhà bảo hiểm công nghiệp hàng đầu, mang chuẩn mực quốc tế vào chăm sóc sức khỏe.",
    products: [
      { title: "PVI Care", href: "/bao-hiem-suc-khoe/pvi-care/", desc: "Chi trả 100% khám chữa bệnh tại các bệnh viện quốc tế hàng đầu (Vinmec, Việt Pháp)." },
      { title: "Bảo hiểm tổ chức PVI", href: "/bao-hiem-suc-khoe/pvi-to-chuc/", desc: "Đáp ứng chuẩn mực kiểm toán khắt khe nhất của các FDI." },
    ],
  },
];

const benefitsData = [
  { icon: "⚡", title: "So sánh trực quan", desc: "Không cần tự loay hoay tìm kiếm. Bảng so sánh tự động giúp bạn nhận diện tức thì gói bảo hiểm tối ưu." },
  { icon: "🛡️", title: "Phí ưu đãi độc quyền", desc: "Chính sách chiết khấu sâu nhất thị trường. Mua qua Baohiem.online luôn rẻ hơn đến 25%." },
  { icon: "🚑", title: "Hỗ trợ bồi thường 24/7", desc: "Chúng tôi đứng về phía bạn. Đội ngũ chuyên gia pháp lý sẽ thay bạn xử lý hồ sơ claim viện phí." },
  { icon: "📱", title: "100% Cấp đơn Online", desc: "Không giấy tờ rườm rà. Chỉ mất 3 phút điền thông tin, nhận Giấy chứng nhận điện tử ngay qua Email." }
];

export default function BaoHiemSucKhoePage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)"
      accentColor="#3B82F6"
      icon="🏥"
      title="Bảo hiểm Sức khỏe"
      subtitle="So sánh và chọn gói bảo hiểm sức khỏe phù hợp nhất từ 4 công ty bảo hiểm uy tín hàng đầu Việt Nam. Điểm tựa vững chắc cho sức khỏe gia đình bạn."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe" }
      ]}
      brands={brandsData}
      benefits={benefitsData}
    />
  );
}
