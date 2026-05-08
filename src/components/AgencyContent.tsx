import { motion } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, ArrowRight, MessageSquare, Globe, Target, Zap, TrendingUp, BarChart3, Users, Cpu, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AgencyContent() {
  const containerRef = useRef(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div ref={containerRef} className="w-full bg-transparent text-white font-sans overflow-hidden relative antialiased">
      {/* The global fixed video background from Hero is already visible behind this transparent container */}

      {/* SECTION 1: INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em]">Sứ mệnh tối ưu doanh nghiệp</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
              Marketing nhiều, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Khách hàng vẫn không tăng?</span>
            </h2>
            <p className="text-slate-200 text-xl leading-relaxed mb-12 max-w-2xl font-medium">
              Hầu hết doanh nghiệp đang lãng phí <span className="text-white font-bold">40-60% ngân sách</span> marketing vì dùng công cụ cũ. LATIO là agency đầu tiên ứng dụng AI vào toàn bộ quy trình để tối ưu từng đồng vốn đầu tư.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14"
            >
              {[
                "Giảm 30% chi phí sản xuất",
                "Tăng 2x lead chất lượng",
                "Quảng cáo tối ưu real-time",
                "Tư vấn ứng dụng AI chuyên sâu"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="font-bold text-slate-100 text-sm tracking-wide">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            {/* <Link to="/contact" className="group relative inline-flex items-center bg-blue-600 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-500 transition-all shadow-[0_20px_50px_-10px_rgba(37,99,235,0.5)]">
              Nhận tư vấn miễn phí ngay
              <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="relative group perspective-1000">
              <motion.div
                whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 preserve-3d"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                <img
                  src="/ai_agency_hero_office_1777883503597.png"
                  className="relative rounded-[3rem] shadow-2xl border border-white/10"
                  alt="Latio Office"
                />

                {/* Refined Glass Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white/[0.05] backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/20 shadow-2xl z-20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                      <Zap className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-blue-400 font-black text-[10px] uppercase tracking-widest leading-none mb-1">LATIO AGENCY</p>
                      <p className="text-white text-xs font-bold">Top 1 AI Marketing VN</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: COMPARISON - ASYMMETRIC */}
      <section className="py-10 px-6 bg-white/[0.02] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-24 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 uppercase tracking-tighter leading-tight">
              AGENCY KHÁC BÁN DỊCH VỤ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">LATIO XÂY HỆ THỐNG</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
          </motion.div>

          <div className="space-y-40">
            {/* Block 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-[55%] relative group"
              >
                <div className="absolute inset-0 bg-blue-600 rounded-[3.5rem] rotate-3 scale-[1.02] -z-10 opacity-10 group-hover:rotate-6 transition-transform duration-700" />
                <img src="/marketing_diagnosis_tech_1777883422869.png" className="rounded-[3.5rem] shadow-2xl border border-white/5 object-cover h-[550px] w-full" alt="Diagnosis" />
              </motion.div>
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" className="w-full lg:w-[45%]">
                <div className="w-20 h-20 rounded-3xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-10">
                  <Target className="text-blue-400 w-10 h-10" />
                </div>
                <h3 className="text-4xl font-black text-white mb-8 leading-tight tracking-tight">Chẩn đoán đúng bệnh <br /> ngay buổi đầu</h3>
                <p className="text-slate-300 text-xl leading-relaxed mb-10 font-medium">Bạn nhận được bản chẩn đoán funnel marketing thực tế — tìm đúng điểm rò rỉ ngân sách và tệp khách hàng tiềm năng bị bỏ lỡ. Không phải bản báo giá dịch vụ vô cảm.</p>
                <Link to="/contact" className="flex items-center gap-4 font-black text-blue-400 hover:text-blue-300 hover:gap-6 transition-all uppercase tracking-[0.2em] text-xs">
                  Đặt lịch chẩn đoán miễn phí <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Block 2 - Reverse */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-[55%] relative group"
              >
                <div className="absolute inset-0 bg-cyan-600 rounded-[3.5rem] -rotate-3 scale-[1.02] -z-10 opacity-10 group-hover:-rotate-6 transition-transform duration-700" />
                <img src="/customer_journey_map_3d_1777883447042.png" className="rounded-[3.5rem] shadow-2xl border border-white/5 object-cover h-[550px] w-full" alt="Journey Map" />
              </motion.div>
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" className="w-full lg:w-[45%]">
                <div className="w-20 h-20 rounded-3xl bg-cyan-600/10 border border-cyan-600/20 flex items-center justify-center mb-10">
                  <Globe className="text-cyan-400 w-10 h-10" />
                </div>
                <h3 className="text-4xl font-black text-white mb-8 leading-tight tracking-tight">Kế hoạch marketing <br /> theo hành trình thực tế</h3>
                <p className="text-slate-300 text-xl leading-relaxed mb-10 font-medium">Xây dựng Customer Journey Map dựa trên data thực tế của ngành. Xác định đúng điểm chạm, đúng kênh và đúng thời điểm để tối đa hóa tỷ lệ chuyển đổi.</p>
                <Link to="/contact" className="flex items-center gap-4 font-black text-cyan-400 hover:text-cyan-300 hover:gap-6 transition-all uppercase tracking-[0.2em] text-xs">
                  Xem mẫu kế hoạch <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-[55%] relative group"
              >
                <div className="absolute inset-0 bg-purple-600 rounded-[3.5rem] rotate-3 scale-[1.02] -z-10 opacity-10 group-hover:rotate-6 transition-transform duration-700" />
                <img src="/marketing_audit_visualization_1777883404259.png" className="rounded-[3.5rem] shadow-2xl border border-white/5 object-cover object-top h-[550px] w-full" alt="Audit" />
              </motion.div>
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" className="w-full lg:w-[45%]">
                <div className="w-20 h-20 rounded-3xl bg-purple-600/10 border border-purple-600/20 flex items-center justify-center mb-10">
                  <BarChart3 className="text-purple-400 w-10 h-10" />
                </div>
                <h3 className="text-4xl font-black text-white mb-8 leading-tight tracking-tight">Audit toàn diện <br /> Lỗ hổng chuyển đổi</h3>
                <p className="text-slate-300 text-xl leading-relaxed mb-10 font-medium">Chúng tôi audit từ Ad Creative, Landing Page đến tin nhắn đầu tiên. Ứng dụng AI phân tích hành vi người dùng thời gian thực để bịt mọi lỗ hổng doanh thu.</p>
                <Link to="/contact" className="flex items-center gap-4 font-black text-purple-400 hover:text-purple-300 hover:gap-6 transition-all uppercase tracking-[0.2em] text-xs">
                  Xem thêm giải pháp <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES - DARK STAGGERED GRID */}
      <section className="py-10 px-6 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-17 gap-10">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate">
            <p className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-6">Hệ sinh thái AI Marketing</p>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">DỊCH VỤ CỐT LÕI</h2>
          </motion.div>
          <motion.p variants={fadeInUp} initial="initial" whileInView="animate" className="text-slate-300 max-w-sm text-right text-lg font-medium border-r-2 border-blue-600 pr-6">
            Sức mạnh AI tối ưu hóa từng điểm chạm trên hành trình khách hàng.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-7 max-w-7xl mx-auto px-4"
        >
          {[
            { title: "AI Content Social", icon: MessageSquare, desc: "Nghiên cứu Insight bằng AI, sáng tạo nội dung đa kênh chuẩn chuyển đổi chuyên sâu.", color: "from-blue-600", border: "hover:border-blue-500" },
            { title: "SEO, GEO & AEO", icon: Globe, desc: "Lên top Google và các hệ máy tìm kiếm AI bằng nội dung chiến lược bền vững.", color: "from-cyan-600", border: "hover:border-cyan-500" },
            { title: "Chiến lược Marketing", icon: Target, desc: "Phân tích đối thủ, định vị thương hiệu và lập kế hoạch tấn công thị trường bằng dữ liệu.", color: "from-purple-600", border: "hover:border-purple-500" },
            { title: "Google Ads — AI", icon: Zap, desc: "Tối ưu hóa đấu thầu và mẫu quảng cáo tự động bằng thuật toán học máy tiên tiến.", color: "from-blue-600", border: "hover:border-blue-500" },
            { title: "TikTok Ads", icon: TrendingUp, desc: "Xây dựng hệ thống quảng cáo TikTok chuyển đổi, bứt phá mọi giới hạn Viral.", color: "from-cyan-600", border: "hover:border-cyan-500" },
            { title: "Facebook Ads", icon: BarChart3, desc: "Hệ thống tiếp thị lại thông minh, mở rộng tệp khách hàng tiềm năng liên tục.", color: "from-purple-600", border: "hover:border-purple-500" }
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              whileHover={{ x: 12, backgroundColor: "rgba(255,255,255,0.05)" }}
              className={`relative group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 transition-all duration-500 flex items-center gap-10 ${s.border} overflow-hidden shadow-2xl`}
            >
              {/* Left Side: Icon Container */}
              <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${s.color} to-transparent p-[1px] shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                <div className="w-full h-full rounded-[23px] bg-[#0A0F1C] flex items-center justify-center">
                  <s.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="flex-1">
                <h4 className="text-2xl font-black mb-3 text-white tracking-tight leading-none group-hover:text-blue-400 transition-colors uppercase">
                  {s.title}
                </h4>
                <p className="text-slate-400 leading-relaxed font-medium text-base group-hover:text-slate-200 transition-colors line-clamp-2">
                  {s.desc}
                </p>
              </div>

              {/* Decorative Corner Light */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${s.color} to-transparent blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity`} />

              {/* Horizontal Border Beam */}
              <motion.div
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 4: 4 SOLUTIONS - DARK PREMIUM CARDS */}
      <section className="bg-white/5 py-10 px-6 rounded-[5rem] mx-4 mb-10 relative border border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(37,99,235,0.1),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter leading-none opacity-80">GIẢI PHÁP CHIẾN LƯỢC</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-xl font-medium tracking-wide">Ứng dụng AI đột phá cho 100+ doanh nghiệp hàng đầu.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "Phòng Marketing Thuê Ngoài", img: "/marketing_outsourcing_team_1777883533068.png" },
              { title: "AI & Automation", img: "/ai_automation_marketing_1777883553649.png" },
              { title: "Quảng cáo đa nền tảng", img: "/multiplatform_ads_tech_1777883572690.png" },
              { title: "Video & Hình ảnh AI", img: "/video_image_conversion_ai_1777883590395.png" }
            ].map((sol, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -20 }}
                className="bg-[#030712] rounded-[3.5rem] overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all group"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent z-10 opacity-60" />
                  <img src={sol.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt={sol.title} />
                </div>
                <div className="p-10">
                  <h4 className="font-black text-xl mb-10 min-h-[4rem] flex items-center leading-tight tracking-tight">{sol.title}</h4>
                  <Link to="/contact" className="w-full bg-blue-600 text-white py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/40 flex justify-center items-center">TƯ VẤN NGAY</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: STATS - CINEMATIC DARK */}
      <section className="py-10 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-none">
              VÌ SAO LẠI CHỌN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">LATIO AGENCY ?</span>
            </h2>
            <p className="text-slate-300 text-xl leading-relaxed font-medium mb-10 border-l-4 border-blue-600 pl-8">
              Chúng tôi không chỉ làm Marketing. Chúng tôi tái cấu trúc sự tăng trưởng của bạn bằng dữ liệu và trí tuệ nhân tạo.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 sm:gap-10"
          >
            {[
              { n: "10.000+", t: "Chiến dịch thành công" },
              { n: "50+", t: "Chuyên gia AI & Marketing" },
              { n: "10+", t: "Năm kinh nghiệm thực chiến" },
              { n: "100+", t: "Doanh nghiệp tin tưởng" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 text-center hover:bg-white/[0.08] hover:border-blue-500/30 transition-all shadow-2xl">
                <p className="text-4xl md:text-5xl font-black text-blue-500 mb-4 tracking-tighter">{stat.n}</p>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] leading-relaxed">{stat.t}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
