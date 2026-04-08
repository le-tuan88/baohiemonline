import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe VBI - Vietinbank",
  description: "Các gói bảo hiểm sức khỏe nổi bật từ VBI",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/vbi/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Sức khỏe VBI",
    color: "#00695C",
    desc: "Bảo hiểm Vietinbank (VBI) đặc biệt hỗ trợ trẻ nhỏ mua bảo hiểm độc lập mà không bắt buộc mua kèm với bố/mẹ.",
    products: [
      { title: "VBI Care", href: "/bao-hiem-suc-khoe/vbi-care/", desc: "Là điểm tựa sức khỏe uy tín với hệ thống bảo lãnh nhanh chóng." },
      { title: "Bảo hiểm tổ chức VBI", href: "/bao-hiem-suc-khoe/vbi-to-chuc/", desc: "Áp dụng được cho công ty quy mô rất nhỏ (từ vài người)." },
    ],
  }
];

export default function VbiBrandPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #064E3B 0%, #059669 100%)"
      accentColor="#059669"
      icon="🛡️"
      title="Bảo hiểm Sức khỏe VBI"
      subtitle="Định hình lại phong cách bảo vệ với ứng dụng khai báo bồi thường online trong tích tắc."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "VBI" }
      ]}
      brands={brandsData}
    />
  );
}
