import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "Bảo hiểm sức khỏe Doanh nghiệp MIC - Giải pháp cho SME",
  description: "Trang bị lá chắn sức khỏe doanh nghiệp thiết kế riêng từ MIC (Bảo hiểm quân đội). Quy trình claim bồi thường số hoá loại bỏ hoàn toàn giấy tờ thủ công.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/mic-to-chuc/" },
};

export default function MicToChucPage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #1E3A8A 0%, #172554 100%)"
      accentColor="#2563EB"
      badge="Dành riêng Doanh nghiệp"
      icon="🏢"
      title="Bảo hiểm MIC dành cho Tổ Chức"
      subtitle="Quân đội MIC đem đến giải pháp bảo hiểm sức khỏe doanh nghiệp linh hoạt, áp dụng công nghệ để giải quyết điểm yếu gây phiền toái nhất: Hồ sơ bồi thường giấy."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "MIC", href: "/bao-hiem-suc-khoe/mic/" },
        { label: "Tổ chức & Doanh nghiệp" }
      ]}
      stats={[
        { icon: "🛡️", value: "May đo", label: "Gói quyền lợi" },
        { icon: "📉", value: "-20%", label: "Tối ưu phí so với bán lẻ" },
        { icon: "📱", value: "App MIC", label: "Quản lý HĐ Điện tử" },
        { icon: "✅", value: "Nhanh", label: "Phê duyệt bồi thường" }
      ]}
      benefits={[
        { icon: "🤝", title: "Khẳng định thương hiệu tuyển dụng", desc: "Giúp công ty ghi điểm với ứng viên bằng chế độ chăm sóc y tế tại các bệnh viện tư nhân như Thu Cúc, Vinmec... không giới hạn tuyến." },
        { icon: "✂️", title: "Cắt bỏ hoàn toàn chứng từ cứng", desc: "Đây là lợi thế số 1 của MIC. Nhân sự không cần gom hoá đơn gốc mộc đỏ gửi về HR. Mọi thứ được Scan qua điện thoại đẩy sang MIC AI phê duyệt." },
        { icon: "👩‍🍼", title: "Chế độ Thai sản vàng", desc: "Không áp dụng thời gian chờ đối với nhóm lớn. Nữ nhân viên có thai ngay sau khi cấp hợp đồng vẫn được hưởng 100% quyền lợi đi đẻ." },
        { icon: "📊", title: "Báo cáo HR Analytics", desc: "Cung cấp Dashboard cho phòng Nhân sự theo dõi Tỷ lệ sử dụng quỹ bồi thường của toàn cty để lên kế hoạch tái tục năm sau." }
      ]}
      plans={[
        {
          name: "Gói SME (Dưới 30 NLĐ)",
          price: "Mức phí siêu việt",
          features: [
            "Tùy chọn thiết kế cấu trúc quỹ",
            "Xử lý online hoàn toàn biên lai nhỏ",
            "Loại trừ linh động tùy profile",
            "Gia tăng chiết khấu nhóm"
          ]
        },
        {
          name: "Gói Corporate (Trên 100 NLĐ)",
          price: "Cá nhân hóa tột độ",
          highlight: true,
          features: [
            "Thiết kế Benefits cho Người phụ thuộc (Vợ/Chồng/Con)",
            "Chế độ đặc cách thời gian chờ thai sản",
            "Cung cấp Hotline ưu tiên cho VIP",
            "Quản lý theo dõi hạn mức Realtime"
          ]
        }
      ]}
      steps={[
        { icon: "📞", title: "Tư vấn & Lấy data", desc: "Tiếp nhận danh sách nhân sự (độ tuổi, giới tính) từ HR." },
        { icon: "📑", title: "Lên báo giá (Quote)", desc: "Trình diễn các kịch bản Benefit tương ứng với Budget công ty." },
        { icon: "🚀", title: "Onboarding", desc: "Tổ chức buổi huấn luyện kỹ năng claim App MIC cho toàn nhân sự." }
      ]}
      faqs={[
        {
          q: "Thủ tục khám không dùng thẻ cứng thì làm thế nào?",
          a: "Chỉ cần mở App MIC trên điện thoại có hiển thị Thẻ điện tử (E-card) kết hợp với CCCD quét tại quầy Dịch vụ của Bệnh viện."
        },
        {
          q: "Công ty có nhân viên đã nghỉ việc muốn rút ra?",
          a: "Phòng HR lập danh sách giảm gửi cho MIC, số ngày chưa sử dụng sẽ được hoàn lại hoặc cấn trừ vào đợt đóng phí bổ sung cho nhân viên mới vào."
        }
      ]}
      ctaTitle="Nâng tầm phúc lợi cho phòng sự kiện Doanh nghiệp"
      ctaDesc="Hãy để lại Contact Email Corporate, chúng tôi sẽ gửi Catalogue và Brochure kèm báo giá thô trong vòng 3 giờ làm việc."
    />
  );
}
