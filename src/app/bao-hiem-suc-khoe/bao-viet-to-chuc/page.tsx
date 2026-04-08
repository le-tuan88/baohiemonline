import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo hiểm Sức khỏe Tổ chức Bảo Việt - Giải pháp Phúc lợi",
  description: "Tăng cường phúc lợi, giữ chân nhân tài bằng gói bảo hiểm sức khỏe doanh nghiệp thiết kế riêng từ Bảo Việt.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/bao-viet-to-chuc/" },
};

export default function BaoVietToChucPage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #0F172A 0%, #1E293B 100%)"
      accentColor="#3B82F6"
      badge="Giải pháp Doanh nghiệp"
      icon="🏢"
      title="Bảo hiểm Sức khỏe Tổ chức Bảo Việt"
      subtitle="Chìa khóa giữ chân nhân viên ưu tú nhất: Gói phúc lợi bảo vệ y tế thiết kế riêng theo đặc thù ngân sách của từng doanh nghiệp."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "Bảo Việt", href: "/bao-hiem-suc-khoe/bao-viet/" },
        { label: "Tổ chức & Doanh nghiệp" }
      ]}
      stats={[
        { icon: "🛡️", value: "Thiết kế riêng", label: "Phí tham gia" },
        { icon: "👥", value: "> 5 Người", label: "Yêu cầu quy mô" },
        { icon: "💼", value: "Tối ưu Thuế", label: "Hạch toán phí" },
        { icon: "🌍", value: "Toàn quốc", label: "Mạng lưới bảo lãnh" }
      ]}
      benefits={[
        { icon: "🤝", title: "Giữ chân nhân tài (Talent Retention)", desc: "Trợ cấp y tế dồi dào, có bao gồm mở rộng quyền lợi thai sản hay răng hàm mặt cho gia đình nhân viên làm tăng sự trung thành với công ty." },
        { icon: "📊", title: "Linh hoạt ngân sách", desc: "Chủ doanh nghiệp được toàn quyền customize hạng mức (ví dụ: Staff 10 triệu/năm, Manager 50 triệu/năm, Director 1 tỷ/năm) để đáp ứng quỹ phúc lợi." },
        { icon: "📈", title: "Ưu đãi thuế TNDN", desc: "Theo quy định, khoản mua bảo hiểm sức khỏe tự nguyện cho người lao động được hạch toán vào chi phí được trừ khi tính Thuế TNDN." },
        { icon: "👩‍💻", title: "Dịch vụ bồi thường in-house", desc: "Bảo Việt cử riêng chuyên viên CSKH hỗ trợ trực tiếp pháp chế/HR của công ty trong mọi khâu làm hồ sơ bồi thường." }
      ]}
      plans={[
        {
          name: "Quy mô Startup (5 - 30 Nhân viên)",
          price: "Tùy chọn ngân sách",
          features: [
            "Linh hoạt chọn bảng chuẩn",
            "Mở rộng mạng lưới BV tư nhân",
            "Giám đốc có thể có gói riêng",
            "Tích hợp thêm quyền lợi nha khoa"
          ]
        },
        {
          name: "Quy mô SME (30 - 100 Nhân viên)",
          price: "Chiết khấu đặc biệt",
          highlight: true,
          features: [
            "Tailored Rules - Thiết kế tự do",
            "Cho phép đính kèm thêm gia đình",
            "Thai sản không áp dụng thời gian chờ",
            "Có tài khoản HR quản lý nhân sự"
          ]
        },
        {
          name: "Tập Đoàn (> 100 Nhân viên)",
          price: "VIP Account Management",
          features: [
            "Đội ngũ y tế xử lý bồi thường on-site",
            "Quyền lợi khám chữa bệnh toàn cầu",
            "Chế độ bảo mật HR tiêu chuẩn ISO",
            "Phí siêu tối ưu"
          ]
        }
      ]}
      steps={[
        { icon: "📞", title: "Khảo sát ngân sách", desc: "Tư vấn viên gặp gỡ doanh nghiệp xác định quỹ phúc lợi đang có." },
        { icon: "📑", title: "Thiết kế & Báo giá", desc: "Bảo Việt gửi Proposal từ 3-5 Options để ban Giám Đốc xét duyệt." },
        { icon: "✍️", title: "Ký hợp đồng Khung", desc: "Giao kết hợp đồng nhóm và tiến hành cấp thẻ cho toàn bộ nhân viên." }
      ]}
      faqs={[
        {
          q: "Nhân viên nghỉ việc hoặc tuyển mới thì quy trình ra sao?",
          a: "Phòng HR chỉ cần báo tăng/giảm nhân sự hàng tháng cho chuyên viên Bảo Việt. Công ty được hoàn quỹ hoặc đóng phí bổ sung tương ứng theo tỷ lệ thời gian còn lại."
        },
        {
          q: "Giám đốc muốn gói 1 Tỷ còn nhân viên gói 50 Triệu được không?",
          a: "Hoàn toàn được. Bảng tính sẽ được chia riêng thành Group A (BOD), Group B (Manager), và Group C (Staff) với các quyền hạn, mức đóng rạch ròi."
        }
      ]}
      ctaTitle="Vực dậy phúc lợi công ty bạn"
      ctaDesc="Liên hệ ngay với bộ phận phân phối khách hàng khối tổ chức của chúng tôi để nhận bảng chào giá Demo cho doanh nghiệp."
    />
  );
}
