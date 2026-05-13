import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Camera, PlaySquare, Send, ArrowRight, ShieldCheck } from 'lucide-react';

export function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="relative w-full bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 lg:mb-20">

          {/* Column 1: Info */}
          <motion.div {...fadeInUp} className="lg:col-span-4">
            <h3 className="text-2xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 tracking-tight">
              LATIO CREATIVE & TECH AGENCY
            </h3>
            <div className="space-y-6 text-slate-400 font-medium">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold mb-1">Mã số thuế</p>
                  <p className="text-sm">0402199339</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold mb-1">Địa chỉ</p>
                  <p className="text-sm leading-relaxed">86 Đoàn Văn Cừ, Hòa Khánh Bắc, <br />Liên Chiểu, Đà Nẵng</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold mb-1">Hotline</p>
                  <p className="text-sm">0899 180086 - 0868 651 224</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold mb-1">Email</p>
                  <p className="text-sm">latiodigital@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:col-span-3">
            <h3 className="text-xl font-black mb-8 text-white tracking-tight uppercase border-l-4 border-blue-600 pl-4">Dịch Vụ</h3>
            <ul className="space-y-4">
              {[
                "Ứng dụng AI - Marketing",
                "Phòng marketing outsource",
                "Chạy quảng cáo Facebook, TikTok, GG",
                "Chăm sóc Fanpage, Website",
                "Thiết kế website chuyên nghiệp",
                "Bộ nhận diện thương hiệu",
                "Quay dựng Video TVC & Viral"
              ].map((item, i) => (
                <li key={i} className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors cursor-pointer">
                  <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Map & Social */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="lg:col-span-5">
            <h3 className="text-xl font-black mb-8 text-white tracking-tight uppercase border-l-4 border-cyan-600 pl-4">Bản Đồ</h3>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-2 mb-8 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4145008794335!2d108.1677706!3d16.043966300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219a785f38dcd:0xf42afe9e00149ca9!2sLATIO%20AGENCY!5e0!3m2!1sen!2s!4v1778033077263!5m2!1sen!2s"
                className="h-48 w-full rounded-[1.5rem]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: MessageCircle, color: "hover:bg-blue-600", link: "#" },
                { icon: Camera, color: "hover:bg-pink-600", link: "#" },
                { icon: PlaySquare, color: "hover:bg-red-600", link: "#" },
                { icon: Send, color: "hover:bg-cyan-500", link: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:border-transparent hover:-translate-y-1 hover:shadow-xl`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-8">
          <p className="text-slate-500 text-xs sm:text-sm font-medium text-center md:text-left">
            <span className="text-white font-black"></span>Công ty TNHH Truyền thông và Công nghệ LATIO.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs font-black uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Trang chủ</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Facebook ADS</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Chăm sóc page</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Thiết kế</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Quay dựng TVC</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
