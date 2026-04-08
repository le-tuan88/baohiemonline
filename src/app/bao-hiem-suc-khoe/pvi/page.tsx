import type { Metadata } from "next";
import InsuranceCategoryPage from "@/components/InsuranceCategoryPage";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe PVI - Đẳng cấp quốc tế",
  description: "Các gói bảo hiểm sức khỏe nổi bật từ PVI",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/pvi/" },
};

const brandsData = [
  {
    name: "Bảo hiểm Sức khỏe PVI",
    color: "#E65100",
    desc: "Bảo hiểm PVI sở hữu tiềm lực tài chính vững mạnh nhất thị trường, áp dụng chuẩn mực kiểm toán khắt khe quốc tế, đảm bảo quyền lợi bồi thường của khách hàng ở mức tuyệt đối.",
    products: [
      { title: "PVI Care", href: "/bao-hiem-suc-khoe/pvi-care/", desc: "Là điểm tựa sức khỏe uy tín của hàng triệu nhân viên công sở toàn quốc." },
      { title: "Bảo hiểm tổ chức PVI", href: "/bao-hiem-suc-khoe/pvi-to-chuc/", desc: "Lựa chọn hàng đầu của các tập đoàn đa quốc gia và doanh nghiệp lớn." },
    ],
  }
];

export default function PviBrandPage() {
  return (
    <InsuranceCategoryPage
      gradient="linear-gradient(135deg, #9A3412 0%, #EA580C 100%)"
      accentColor="#EA580C"
      icon="🛡️"
      title="Bảo hiểm Sức khỏe PVI"
      subtitle="Người bạn đồng hành sức khỏe tin cậy nhờ nền tảng dịch vụ chăm sóc chuẩn mực và phong cách làm việc dứt khoát của một doanh nghiệp năng lượng khối nhà nước."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "PVI" }
      ]}
      brands={brandsData}
    />
  );
}
