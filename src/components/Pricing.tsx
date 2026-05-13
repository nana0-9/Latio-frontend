import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Gói Cơ Bản',
    price: '15.000.000',
    description: 'Phù hợp cho cá nhân và startup nhỏ muốn ứng dụng AI cơ bản.',
    features: [
      'Tích hợp Chatbot AI cơ bản',
      'Tối ưu hóa nội dung tự động',
      'Báo cáo hiệu suất hàng tháng',
      'Hỗ trợ qua email'
    ],
    popular: false,
  },
  {
    name: 'Gói Chuyên Nghiệp',
    price: '25.000.000',
    description: 'Giải pháp toàn diện cho doanh nghiệp với hệ thống Automation.',
    features: [
      'Mọi tính năng của Gói Cơ Bản',
      'Hệ thống Automation thiết kế riêng',
      'Phân tích dữ liệu khách hàng sâu',
      'Tích hợp CRM đa kênh',
      'Hỗ trợ ưu tiên 24/7'
    ],
    popular: true,
  },
  {
    name: 'Gói Cao Cấp',
    price: '35.000.000',
    description: 'Hệ thống AI riêng biệt, tùy chỉnh tối đa cho doanh nghiệp lớn.',
    features: [
      'Mọi tính năng của Gói Chuyên Nghiệp',
      'Huấn luyện mô hình AI riêng (Custom LLM)',
      'Triển khai On-Premise/Private Cloud',
      'Chiến lược AI Marketing dài hạn',
      'Đội ngũ hỗ trợ chuyên biệt'
    ],
    popular: false,
  }
];

export function Pricing() {
  return (
    <section id="bảng-giá" className="w-full bg-transparent py-32 px-4 sm:px-6 lg:px-8 relative z-10 antialiased">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Các Gói Dịch Vụ Latio AI</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-xl font-medium">
            Chọn giải pháp phù hợp với quy mô và mục tiêu tăng trưởng của doanh nghiệp bạn.
            Chúng tôi cam kết mang lại hiệu quả vượt trội.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-transform hover:-translate-y-2 ${pkg.popular
                  ? 'bg-gradient-to-b from-gray-900 to-black border-2 border-[#64CEFB]/50 shadow-[0_0_40px_-10px_rgba(100,206,251,0.3)]'
                  : 'bg-black border border-gray-800'
                }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#64CEFB] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Phổ Biến Nhất
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl sm:text-4xl font-black text-white">{pkg.price}</span>
                  <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">VNĐ</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">{pkg.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${pkg.popular ? 'text-[#64CEFB]' : 'text-gray-500'}`} />
                    <span className="text-slate-200 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-medium transition-colors ${pkg.popular
                    ? 'bg-[#64CEFB] text-black hover:bg-[#64CEFB]/90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                Chọn Gói Này
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
