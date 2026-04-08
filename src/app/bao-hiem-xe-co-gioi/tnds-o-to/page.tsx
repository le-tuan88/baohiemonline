import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm TNDS Ô tô Bắt buộc - Cấp điện tử Online",
  description: "Tránh phạt từ CSGT. Mua ngay bảo hiểm Trách Nhiệm Dân Sự ô tô giá gốc 480k, đăng ký 3 phút, nhận ấn chỉ PDF hợp pháp qua Zalo.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-xe-co-gioi/tnds-o-to/" },
};

const brandsData = [
  {
    name: "Các hãng bảo hiểm đồng giá",
    color: "#059669",
    desc: "Vì TNDS là biểu phí quy định của BỘ TÀI CHÍNH, nên mua của hãng nào cũng có mức phí SÀN quy định giống nhau tuyệt đối. Bạn rảnh rỗi hãng nào thì cài App hãng đó, hoặc chốt đại 1 hãng uy tín là được.",
    products: [
      { title: "TNDS Ô tô (Không Kinh doanh)", href: "#", desc: "Xe gia đình 4-5 chỗ phí chuẩn: 480.700đ. Xe 7 chỗ: 873.400đ" },
      { title: "TNDS Ô tô (Có Kinh doanh vận tải)", href: "#", desc: "Xe chạy Grab, Taxi, 4-5 chỗ: 831.600đ. Xe 7 chỗ KD: 1.188.000đ" },
      { title: "TNDS Xe tải", href: "#", desc: "Mức phí dao động từ 900.000đ đến vài triệu tùy theo Tải trọng (tưới 3 tấn, đến 8 tấn, hay trên 15 tấn)." }
    ],
  }
];

export default function TndsOToPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #047857 0%, #059669 100%)"
      accentColor="#10B981"
      icon="📑"
      title="Bảo hiểm TNDS Ô tô Bắt buộc"
      subtitle="Bùa hộ mệnh pháp lý. Cấp ngay ấn chỉ điện tử QR Code quét là ra dữ liệu liên thông với hệ thống Cảnh Sát Giao Thông."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Xe cơ giới", href: "/bao-hiem-xe-co-gioi/" },
        { label: "TNDS Ô tô" }
      ]}
      brands={brandsData}
    />
  );
}
