import type { Metadata } from "next";
import InsuranceProductPage from "@/components/InsuranceProductPage";

export const metadata: Metadata = {
  title: "An Tâm Viện Phí Bảo Việt - Trợ cấp thu nhập hàng ngày",
  description: "Trợ cấp tiền mặt lên tới 3 triệu đồng cho mỗi ngày nằm viện. Không cần hoá đơn đỏ. Thủ tục nhanh gọn, mua trực tuyến 100%.",
  alternates: { canonical: "https://baohiem.online/bao-hiem-suc-khoe/an-tam-vien-phi/" },
};

export default function AnTamVienPhiPage() {
  return (
    <InsuranceProductPage
      gradient="linear-gradient(135deg, #0284C7 0%, #0369A1 100%)"
      accentColor="#0284C7"
      badge="Khuyên dùng"
      icon="🛌"
      title="An Tâm Viện Phí"
      subtitle="Bạn lo lắng vì nghỉ việc đi nằm viện sẽ bị mất lương? Với An Tâm Viện Phí, Bảo Việt trợ cấp tiền mặt thẳng vào tài khoản của bạn cho mỗi ngày điều trị bệnh."
      breadcrumbs={[
        { label: "Trang chủ", href: "/" },
        { label: "Bảo hiểm sức khỏe", href: "/bao-hiem-suc-khoe/" },
        { label: "Bảo Việt", href: "/bao-hiem-suc-khoe/bao-viet/" },
        { label: "An Tâm Viện Phí" }
      ]}
      stats={[
        { icon: "💸", value: "3 Trđ", label: "Trợ cấp tối đa / ngày" },
        { icon: "📄", value: "0", label: "Cần Hóa Đơn Đỏ" },
        { icon: "🗓️", value: "100", label: "Ngày trợ cấp / năm" },
        { icon: "⚡", value: "10 Phút", label: "Thời gian claim online" }
      ]}
      benefits={[
        { icon: "💰", title: "Trả tiền mặt không phụ thuộc bill", desc: "Không giống bảo hiểm sức khỏe thông thường (hoàn trả theo hóa đơn), bảo hiểm trợ cấp trả MỘT SỐ TIỀN CỐ ĐỊNH NHẤT ĐỊNH / NGÀY, bạn nằm viện nhà nước 100k/ngày, Bảo Việt vẫn trả bạn 1 Triệu." },
        { icon: "📜", title: "Thủ tục siêu tinh gọn", desc: "Chỉ cần Giấy Ra Viện mộc đỏ là đủ điều kiện nhận tiền. Không cần gom nhặt hàng chục hóa đơn thuốc men lắt nhắt." },
        { icon: "➕", title: "Kết hợp cộng dồn", desc: "Sử dụng song song không hề ảnh hưởng đến BHYT nhà nước và cả các loại BH Sức khỏe (Bảo Việt An Gia) khác." },
        { icon: "✂️", title: "Chi trả phẫu thuật thêm", desc: "Nếu bạn nằm viện có trải qua bàn mổ, một khoản cố định (vd: 10 Triệu) sẽ được chuyển ngay vào tài khoản." }
      ]}
      plans={[
        {
          name: "Mức 1",
          price: "Từ ~200k/Năm",
          features: [
            "Trợ cấp nằm viện: 200.000đ/Ngày",
            "Nằm lồng ấp (trẻ sơ sinh): X2",
            "Hỗ trợ phẫu thuật: 1 Triệu",
            "Tối đa 100 ngày / năm"
          ]
        },
        {
          name: "Mức 3",
          price: "Từ ~800k/Năm",
          highlight: true,
          features: [
            "Trợ cấp nằm viện: 1.000.000đ/Ngày",
            "Nằm ICU cấp cứu: X2 (2 Triệu)",
            "Hỗ trợ phẫu thuật: 5 Triệu",
            "Hỗ trợ tử vong ốm đau: 20 Triệu"
          ]
        },
        {
          name: "Mức 5",
          price: "Từ ~2.400k/Năm",
          features: [
            "Trợ cấp nằm viện: 3.000.000đ/Ngày",
            "Nằm ICU cấp cứu: 6 Triệu/Ngày",
            "Hỗ trợ phẫu thuật: 15 Triệu",
            "Tối đa 300 Triệu hạn mức cộng dồn"
          ]
        }
      ]}
      steps={[
        { icon: "📝", title: "Điền ngày sinh", desc: "Biểu phí được tính toán chính xác tuyệt đối theo độ tuổi." },
        { icon: "💳", title: "Chốt gói & Đóng phí", desc: "Linh hoạt lựa chọn từ Mức 1 đến Mức 5 tùy thuộc thu nhập." },
        { icon: "🛌", title: "Nhận tiền khi có biến cố", desc: "Gửi ảnh Giấy ra viện qua App Baoviet Direct, tiền ting ting về Vietcombank." }
      ]}
      faqs={[
        {
          q: "Nằm viện do tai nạn có được nhận tiền không?",
          a: "Có ! An Tâm Viện Phí trợ cấp cho cả Nằm viện do Ốm đau bệnh tật LẪN Tai Nạn."
        },
        {
          q: "Tôi hưởng BHYT y tế nhà nước rồi, có bị trừ tiền đi không?",
          a: "Bảo Việt không quan tâm bạn hết bao nhiêu tiền viện phí thật. Bạn cứ ra viện, nằm viện 5 ngày, bạn nhận 5 x Mức trợ cấp (vd mức 1 triệu) = 5 Triệu ! Ngay cả khi bạn nằm viện Miễn Phí."
        }
      ]}
    />
  );
}
