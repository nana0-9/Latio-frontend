import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Check, Globe, MessageCircle, Search, ShoppingBag, Zap, Rocket, Building2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.81-.73-3.95-1.68-.1.93-.1 1.86-.1 2.79 0 1.93-.5 3.84-1.5 5.48-1.5 2.5-4.12 4.16-7 4.39-2.88.23-5.83-.8-7.79-2.95C.13 15.93-.41 12.83.65 10c.84-2.22 2.72-3.92 4.97-4.63.1-.03.2-.06.3-.08V9.4c-.67.2-1.32.55-1.8 1.08-.76.84-1.07 1.99-.95 3.1.1 1.05.6 2.05 1.45 2.68 1.18.88 2.82.99 4.08.31 1.05-.56 1.76-1.66 1.87-2.85.08-2.61.03-5.22.04-7.83 0-1.8-.02-3.6 0-5.4 0-.1.02-.2.03-.3z"/>
  </svg>
);

const pricingData = {
  fanpage: {
    title: 'Fanpage Marketing',
    icon: <FacebookIcon />,
    description: 'Tối ưu hóa sự hiện diện thương hiệu trên Facebook với chiến lược nội dung và quảng cáo đột phá.',
    packages: [
      {
        name: 'BASIC',
        price: '7.000.000',
        originalPrice: '9.000.000',
        discount: '-30%',
        target: 'SHOP NHỎ, QUÁN ĂN, DỊCH VỤ ĐỊA PHƯƠNG',
        result: 'Kết quả: Tăng 10-20% engagement / tháng',
        color: 'purple',
        features: [
          '15 Bài viết / tháng (3-4 posts/tuần)',
          '5 Reels ngắn cơ bản (15-30s)',
          'Thiết kế đồ họa chuyên nghiệp',
          'Lên kế hoạch nội dung hàng tháng',
          'Quản lý Inbox & Comment (8AM-6PM)',
          'Báo cáo insight hàng tháng',
          'Hashtag & Caption SEO tối ưu',
          'Facebook Ads (Chạy quảng cáo)'
        ]
      },
      {
        name: 'GROWTH',
        price: '10.000.000',
        originalPrice: '13.000.000',
        discount: '-23%',
        popular: true,
        target: 'THƯƠNG HIỆU PHÁT TRIỂN, E-COMMERCE',
        result: 'Kết quả: Tăng 30-50% reach & engagement',
        color: 'blue',
        features: [
          '25 Bài viết / tháng (6-7 posts/tuần)',
          '10 Reels chuyên nghiệp (2-3/tuần)',
          'Kịch bản Reels sáng tạo theo trend',
          'Thiết kế đồ họa Premium + Motion Graphic',
          'Quản lý Inbox & Comment 24/7',
          'Facebook Ads cơ bản (Budget riêng)',
          'Lên chiến lược Content theo mục tiêu',
          'Báo cáo chi tiết hàng tuần',
          'A/B Testing bài viết & Reels',
          'Tương tác với Groups liên quan'
        ]
      },
      {
        name: 'ENTERPRISE',
        price: '14.000.000',
        originalPrice: '18.000.000',
        discount: '-28%',
        target: 'DOANH NGHIỆP LỚN, CHUỖI CỬA HÀNG',
        result: 'Kết quả: Tăng 100%+ ROI Brand Awareness',
        color: 'orange',
        features: [
          '30+ Bài viết / tháng (7-8 posts/tuần)',
          '15 Reels chuyên nghiệp (5 Reels/tuần)',
          '5 Reels dài format (60-90s, kịch bản)',
          'Sản xuất Video tại địa điểm khách hàng',
          'Quản lý đa kênh 24/7 (FB + IG + Threads)',
          'Facebook Ads nâng cao + Retargeting',
          'Influencer Marketing (1-2 KOLs/tháng)',
          'Livestream bán hàng (4 buổi/tháng)',
          'Crisis Management & Phản hồi khẩn cấp',
          'Dashboard Analytics Real-time',
          'Đào tạo team sản xuất Reels nội bộ',
          'Xu hướng Reels Weekly updates'
        ]
      }
    ]
  },
  website: {
    title: 'Website Marketing',
    icon: <Globe className="w-5 h-5" />,
    description: 'Xây dựng nền móng SEO vững chắc và tối ưu hóa trải nghiệm người dùng trên website.',
    packages: [
      {
        name: 'PHỔ THÔNG',
        price: '1.790.000',
        target: 'PHÙ HỢP VỚI DOANH NGHIỆP NHỎ MỚI BẮT ĐẦU',
        color: 'purple',
        features: [
          'Kiểm tra tổng thể Website',
          'Cập nhật Website cơ bản',
          'Tối ưu Onpage',
          '05 Bài viết SEO Web',
          'Hỗ trợ Backup',
          '30 Bài viết update về sản phẩm',
          '02 Banner Website',
          'Bảo mật cơ bản: SSL, Firewall',
          'Đề xuất từ khóa viết bài'
        ]
      },
      {
        name: 'TIÊU CHUẨN',
        price: '5.390.000',
        popular: true,
        target: 'PHÙ HỢP CHO DOANH NGHIỆP VỪA MUỐN TĂNG TRƯỞNG',
        color: 'blue',
        features: [
          'Gồm các dịch vụ gói Phổ thông',
          '15 Bài viết SEO Web',
          '20 Bài viết về sản phẩm update từ MXH',
          '01 Bài Guest Post',
          'Tối ưu tốc độ Website',
          'Đề xuất từ khóa viết bài'
        ]
      },
      {
        name: 'NÂNG CAO',
        price: '12.490.000',
        target: 'GIẢI PHÁP TOÀN DIỆN DOANH NGHIỆP LỚN',
        color: 'orange',
        features: [
          'Gồm các dịch vụ gói Tiêu chuẩn',
          '20 Bài viết SEO Web',
          '20 Bài viết sản phẩm update từ MXH',
          '02 Bài Guest Post',
          'Tư vấn chiến lược SEO',
          'Bảo mật nâng cao',
          'Tối ưu UX/UI',
          'Đề xuất từ khóa viết bài'
        ]
      }
    ]
  },
  zalo: {
    title: 'Zalo Marketing',
    icon: <MessageCircle className="w-5 h-5" />,
    description: 'Khai thác tối đa tiềm năng tệp khách hàng trên Zalo với OA và Ads chuyên sâu.',
    packages: [
      {
        name: 'KHỞI ĐỘNG',
        price: '2.000.000',
        target: 'PHÙ HỢP VỚI DOANH NGHIỆP NHỎ MỚI BẮT ĐẦU',
        color: 'purple',
        features: [
          'Thiết lập và tối ưu Zalo OA',
          '12 Bài viết / tháng',
          'Quản lý bình luận cơ bản',
          'Báo cáo hiệu quả hàng tháng',
          'Zalo Ads',
          'Zalo Mini App'
        ]
      },
      {
        name: 'PHÁT TRIỂN',
        price: '4.000.000',
        popular: true,
        target: 'PHÙ HỢP CHO DOANH NGHIỆP VỪA MUỐN TĂNG TRƯỞNG',
        color: 'blue',
        features: [
          'Thiết lập và tối ưu Zalo OA',
          '20 Bài viết / tháng',
          'Quản lý bình luận chuyên sâu',
          'Zalo Ads cơ bản',
          'Zalo Chatbot cơ bản',
          'Báo cáo chi tiết hàng tuần'
        ]
      },
      {
        name: 'DOANH NGHIỆP',
        price: '8.000.000',
        target: 'GIẢI PHÁP TOÀN DIỆN CHO DOANH NGHIỆP LỚN',
        color: 'orange',
        features: [
          'Thiết lập và tối ưu Zalo OA',
          '30 Bài viết / tháng',
          'Quản lý bình luận 24/7',
          'Zalo Ads',
          'Zalo Mini App',
          'Zalo Chatbot nâng cao'
        ]
      }
    ]
  },
  google: {
    title: 'Google Marketing',
    icon: <Search className="w-5 h-5" />,
    description: 'Tiếp cận khách hàng chủ động trên Google Ads, Search và Maps.',
    packages: [
      {
        name: 'KHỞI ĐỘNG',
        price: '4.500.000',
        target: 'PHÙ HỢP VỚI DOANH NGHIỆP NHỎ MỚI BẮT ĐẦU',
        color: 'purple',
        features: [
          'Thiết lập tài khoản Google Ads',
          'Nghiên cứu từ khóa cơ bản',
          'Quảng cáo tìm kiếm cơ bản',
          'Báo cáo hiệu quả hàng tháng',
          'Quảng cáo hiển thị',
          'Tối ưu Google Maps'
        ]
      },
      {
        name: 'PHÁT TRIỂN',
        price: '8.000.000',
        popular: true,
        target: 'PHÙ HỢP CHO DOANH NGHIỆP VỪA MUỐN TĂNG TRƯỞNG',
        color: 'blue',
        features: [
          'Thiết lập tài khoản Google Ads',
          'Nghiên cứu từ khóa chuyên sâu',
          'Quảng cáo tìm kiếm nâng cao',
          'Quảng cáo hiển thị',
          'Tối ưu Google Maps',
          'Báo cáo chi tiết hàng tuần'
        ]
      },
      {
        name: 'DOANH NGHIỆP',
        price: '12.000.000',
        target: 'GIẢI PHÁP TOÀN DIỆN CHO DOANH NGHIỆP LỚN',
        color: 'orange',
        features: [
          'Thiết lập tài khoản Google Ads',
          'Nghiên cứu từ khóa chuyên sâu',
          'Quảng cáo tìm kiếm cao cấp',
          'Quảng cáo hiển thị nâng cao',
          'Quảng cáo Youtube',
          'Tối ưu Google Business Profile'
        ]
      }
    ]
  },
  shopee: {
    title: 'Shopee Marketing',
    icon: <ShoppingBag className="w-5 h-5" />,
    description: 'Bùng nổ doanh số trên sàn TMĐT Shopee với hệ thống vận hành và quảng cáo tối ưu.',
    packages: [
      {
        name: 'KHỞI ĐỘNG',
        price: '3.000.000',
        target: 'PHÙ HỢP VỚI DOANH NGHIỆP NHỎ MỚI BẮT ĐẦU',
        color: 'purple',
        features: [
          'Thiết lập và tối ưu Shop',
          'Tối ưu hóa 20 sản phẩm / tháng',
          'Quản lý tin nhắn cơ bản',
          'Báo cáo hiệu quả hàng tháng'
        ]
      },
      {
        name: 'PHÁT TRIỂN',
        price: '6.000.000',
        popular: true,
        target: 'PHÙ HỢP CHO DOANH NGHIỆP VỪA MUỐN TĂNG TRƯỞNG',
        color: 'blue',
        features: [
          'Thiết lập và tối ưu Shop',
          'Tối ưu hóa 50 sản phẩm / tháng',
          'Quản lý tin nhắn chuyên sâu',
          'Shopee Ads cơ bản',
          'Tham gia 1 sự kiện Shopee / tháng',
          'Báo cáo chi tiết hàng tuần'
        ]
      },
      {
        name: 'DOANH NGHIỆP',
        price: '10.000.000',
        target: 'GIẢI PHÁP TOÀN DIỆN CHO DOANH NGHIỆP LỚN',
        color: 'orange',
        features: [
          'Thiết lập và tối ưu Shop',
          'Tối ưu hóa 100+ sản phẩm / tháng',
          'Quản lý bình luận 24/7',
          'Quản lý tin nhắn 24/7',
          'Tham gia tất cả sự kiện Shopee',
          'Phân tích đối thủ cạnh tranh'
        ]
      }
    ]
  },
  tiktok: {
    title: 'TikTok Marketing',
    icon: <TiktokIcon />,
    description: 'Xây dựng thương hiệu và bùng nổ viral trên nền tảng TikTok với video ngắn sáng tạo.',
    packages: [
      {
        name: 'KHỞI ĐỘNG',
        price: '4.500.000',
        originalPrice: '6.000.000',
        discount: '-25%',
        target: 'PHÙ HỢP VỚI DOANH NGHIỆP NHỎ MỚI BẮT ĐẦU',
        result: 'Kết quả: Tăng 500 - 1000 followers / tháng',
        color: 'purple',
        features: [
          'Thiết lập & tối ưu TikTok',
          '8 Video / tháng',
          'Quản lý tương tác & bình luận',
          'Báo cáo hiệu quả chi tiết hàng tháng'
        ]
      },
      {
        name: 'PHÁT TRIỂN',
        price: '8.900.000',
        originalPrice: '12.000.000',
        discount: '-26%',
        popular: true,
        target: 'PHÙ HỢP CHO DOANH NGHIỆP VỪA MUỐN TĂNG TRƯỞNG',
        result: 'Kết quả: Tăng 2000 - 5000 followers / tháng',
        color: 'blue',
        features: [
          'Thiết lập & tối ưu kênh TikTok',
          '16 Video / tháng',
          'Quản lý bình luận chuyên sâu 24/5',
          'TikTok Ads cơ bản + Tối ưu (Budget riêng)',
          'Hợp tác 1 Micro-KOLs / quý',
          'Báo cáo & phân tích hàng tuần'
        ]
      },
      {
        name: 'DOANH NGHIỆP',
        price: '16.900.000',
        originalPrice: '21.000.000',
        discount: '-20%',
        target: 'GIẢI PHÁP TOÀN DIỆN CHO DOANH NGHIỆP LỚN',
        result: 'Kết quả: Tăng 10.000+ followers / tháng',
        color: 'orange',
        features: [
          'Thiết lập & tối ưu kênh TikTok',
          '30 Video / tháng',
          'Quản lý bình luận 24/7',
          'TikTok Ads nâng cao + A/B Testing',
          'Hợp tác 1 KOL chuyên nghiệp / tháng',
          'Thiết lập & vận hành TikTok Shop'
        ]
      }
    ]
  }
};

export function Services() {
  const [activeTab, setActiveTab] = useState<keyof typeof pricingData>('fanpage');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      }
    }
  };

  const getColorStyles = (color: string, popular?: boolean) => {
    switch (color) {
      case 'purple':
        return {
          border: 'border-purple-500/20 hover:border-purple-500/50',
          bg: 'bg-purple-500/5',
          accent: 'text-purple-400',
          btn: 'bg-purple-600 hover:bg-purple-500',
          glow: 'shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]',
          popularBg: 'bg-purple-500'
        };
      case 'orange':
        return {
          border: 'border-orange-500/20 hover:border-orange-500/50',
          bg: 'bg-orange-500/5',
          accent: 'text-orange-400',
          btn: 'bg-orange-600 hover:bg-orange-500',
          glow: 'shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)]',
          popularBg: 'bg-orange-500'
        };
      default: // blue
        return {
          border: popular ? 'border-blue-500/50' : 'border-blue-500/20 hover:border-blue-500/50',
          bg: 'bg-blue-500/5',
          accent: 'text-blue-400',
          btn: 'bg-blue-600 hover:bg-blue-500',
          glow: 'shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]',
          popularBg: 'bg-blue-500'
        };
    }
  };

  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <section className="w-full bg-transparent py-32 px-4 sm:px-6 lg:px-8 relative z-10 antialiased overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-white/70 text-xs font-black uppercase tracking-[0.2em]">Bảng giá dịch vụ chuyên nghiệp</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              Giải pháp <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Marketing Toàn Diện</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              Chúng tôi cung cấp các gói dịch vụ đa nền tảng, được thiết kế riêng để tối ưu hóa sự tăng trưởng cho từng loại hình doanh nghiệp.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(pricingData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as keyof typeof pricingData)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 border ${
                  activeTab === key 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)]' 
                    : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                }`}
              >
                {data.icon}
                {data.title}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            >
              {pricingData[activeTab].packages.map((pkg, index) => {
                const styles = getColorStyles(pkg.color, pkg.popular);
                return (
                  <motion.div 
                    key={index}
                    variants={cardVariants}
                    whileHover={{ y: -10 }}
                    className={`relative flex flex-col rounded-[2.5rem] p-8 transition-all duration-500 bg-black/40 backdrop-blur-xl border ${styles.border} ${pkg.popular ? styles.glow : ''}`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <span className={`${styles.popularBg} text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg`}>
                          Phổ Biến Nhất
                        </span>
                      </div>
                    )}

                    {/* Card Header */}
                    <div className="mb-8 relative">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-col">
                          <span className={`text-xs font-black uppercase tracking-[0.2em] mb-2 ${styles.accent}`}>
                            {pkg.name === 'BASIC' || pkg.name === 'PHỔ THÔNG' || pkg.name === 'KHỞI ĐỘNG' ? <Rocket className="inline-block mr-1 w-3 h-3" /> : null}
                            {pkg.name === 'GROWTH' || pkg.name === 'TIÊU CHUẨN' || pkg.name === 'PHÁT TRIỂN' ? <Zap className="inline-block mr-1 w-3 h-3" /> : null}
                            {pkg.name === 'ENTERPRISE' || pkg.name === 'NÂNG CAO' || pkg.name === 'DOANH NGHIỆP' ? <Building2 className="inline-block mr-1 w-3 h-3" /> : null}
                            Gói {pkg.name}
                          </span>
                          <h3 className="text-3xl font-black text-white tracking-tighter">
                            {pkg.price}
                            <span className="text-sm font-bold text-slate-500 ml-2">VNĐ/Tháng</span>
                          </h3>
                        </div>
                        {(pkg as any).discount && (
                          <span className="bg-red-500/10 text-red-500 text-[10px] font-black px-2 py-1 rounded-lg border border-red-500/20">
                            {(pkg as any).discount}
                          </span>
                        )}
                      </div>
                      
                      {(pkg as any).originalPrice && (
                        <p className="text-slate-500 text-xs line-through mb-4 font-bold">
                          {(pkg as any).originalPrice} VNĐ/Tháng
                        </p>
                      )}

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-6">
                        <p className="text-white/80 text-[11px] font-bold uppercase leading-relaxed tracking-wide">
                          {pkg.target}
                        </p>
                      </div>

                      {(pkg as any).result && (
                        <div className={`text-[11px] font-black uppercase tracking-wider mb-4 px-3 py-2 rounded-lg bg-white/5 border-l-2 ${styles.accent.replace('text', 'border')}`}>
                          <Check className={`inline-block mr-2 w-3 h-3 ${styles.accent}`} />
                          {(pkg as any).result}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex-1 space-y-4 mb-10 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar">
                      {pkg.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3 group/item">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover/item:border-white/30 transition-colors ${pkg.popular ? styles.bg : ''}`}>
                            <Check className={`w-3 h-3 ${styles.accent}`} />
                          </div>
                          <span className="text-slate-300 text-xs font-medium leading-relaxed group-hover/item:text-white transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button 
                      className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-xl ${styles.btn} shadow-lg hover:scale-[1.02] active:scale-95`}
                    >
                      Tư vấn ngay
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Footer Info */}
          <div className="mt-20 text-center">
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20 border border-white/5">
              <div className="px-8 py-4 rounded-xl bg-black/40 backdrop-blur-md">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                  Ưu đãi đặc biệt: Giảm ngay <span className="text-white">23%—30%</span> khi đăng ký hôm nay!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
