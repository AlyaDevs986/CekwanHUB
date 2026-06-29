import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Coffee,
  Wifi,
  Award,
  HeartHandshake,
  Star,
  MapPin,
  ArrowRight,
  Quote,
  Percent,
  Sparkles,
  Clock,
} from 'lucide-react';
import { menuItems, testimonials } from '../data/cafeData';
import CommentSection from '../components/CommentSection';

const features = [
  { icon: Coffee, title: 'Tempat Nyaman', desc: 'Suasana hangat dan cozy untuk bersantai, bekerja, atau berkumpul.', color: 'from-orange-500 to-orange-600', glow: 'rgba(249,115,22,0.3)' },
  { icon: Wifi, title: 'WiFi Gratis', desc: 'Internet cepat dan stabil untuk mahasiswa dan pekerja.', color: 'from-blue-500 to-blue-600', glow: 'rgba(59,130,246,0.3)' },
  { icon: Award, title: 'Menu Berkualitas', desc: 'Kopi premium dan makanan dibuat dari bahan terbaik.', color: 'from-amber-500 to-amber-600', glow: 'rgba(245,158,11,0.3)' },
  { icon: HeartHandshake, title: 'Pelayanan Ramah', desc: 'Staff yang ramah dan siap melayani dengan sepenuh hati.', color: 'from-rose-500 to-rose-600', glow: 'rgba(244,63,94,0.3)' },
];

const stats = [
 { value: '2026', label: 'Tahun Berdiri' },
  { value: '153', label: 'Menu Pilihan' },
  { value: '10K+', label: 'Pelanggan Puas' },
  { value: '4.9', label: 'Rating Bintang' },
];

export default function Home() {
  const featuredMenu = menuItems.filter((m) => m.featured).slice(0, 4);

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-cafe.jpg" alt="Cafe Cekwan" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/65 to-gray-950/90" />
          {/* Bokeh blobs */}
          <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-orange-600/15 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/6 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-7"
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-orange-200"
              style={{ background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.35)', backdropFilter: 'blur(8px)' }}
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              Premium Coffee Experience
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif mb-6 leading-tight"
            style={{ textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}
          >
            Selamat Datang di{' '}
            <span className="gradient-text">Cekwan Hub</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Nikmati Kopi dan Makanan Berkualitas dan Suasana Nyaman untuk Bersantai Bersama Teman dan Keluarga.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/menu" className="btn-primary text-base px-8 py-4">
              Lihat Menu <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">
              Hubungi Kami
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-4 text-center"
                style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="text-2xl font-bold gradient-text font-serif">{s.value}</div>
                <div className="text-xs text-gray-400 mt-0.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <p className="text-xs text-gray-400 tracking-widest uppercase">Scroll</p>
          <div className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-orange-400"
            />
          </div>
        </motion.div>
      </section>

      {/* ── Features ──────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.05),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="section-label">✦ Kenapa Kami ✦</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mt-5 mb-4">
              Mengapa Memilih <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Pengalaman bersantap terbaik dengan berbagai keunggulan yang kami tawarkan.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-7 rounded-3xl bg-white border border-gray-100 card-glow hover:border-orange-100 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 8px 24px ${f.glow}` }}
                >
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="relative text-lg font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="relative text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Menu ─────────────────────────────────────── */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg,#fafafa 0%,#fff7ed 50%,#fafafa 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="section-label">✦ Menu Favorit ✦</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mt-5">
                Menu <span className="gradient-text">Terpopuler</span>
              </h2>
            </div>
            <Link to="/menu" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all group">
              Lihat Semua Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMenu.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md card-glow hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg">
                    {item.category}
                  </span>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 mb-1 text-base">{item.name}</h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-bold text-lg">Rp {item.price.toLocaleString('id-ID')}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 5 min
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promo Banner ──────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#7c2d12 0%,#c2410c 40%,#ea580c 70%,#f97316 100%)' }}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/8 -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-black/10 translate-y-1/2 -translate-x-1/4" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/3 blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
              <div className="text-center md:text-left">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold text-orange-100 mb-5"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
                >
                  <Percent className="w-4 h-4" /> Promo Spesial Jumat
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4 leading-tight">
                  Diskon 20%<br />Setiap Hari Jumat!
                </h2>
                <p className="text-orange-100 max-w-md text-base leading-relaxed">
                  Nikmati semua menu coffee dan non-coffee dengan diskon spesial setiap hari Jumat. Berlaku untuk dine-in dan takeaway.
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-center gap-4">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-orange-600 font-bold text-base shadow-2xl hover:shadow-orange-900/30 hover:scale-105 transition-all"
                >
                  Pesan Sekarang <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-orange-200/70 text-xs">*Syarat & Ketentuan berlaku</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="section-label">✦ Testimoni ✦</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mt-5">
              Apa Kata <span className="gradient-text">Pelanggan</span> Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Quote className="w-7 h-7 text-orange-500/40 absolute top-5 right-5" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${idx < t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-700'}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ boxShadow: '0 4px 12px rgba(249,115,22,0.4)' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── User Comments ─────────────────────────────────────── */}
      <CommentSection />

      {/* ── Location ──────────────────────────────────────────── */}
      {/* ── Location ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">✦ Lokasi Kami ✦</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mt-5 mb-5">
                Temukan <span className="gradient-text">Cekwan Hub</span>
              </h2>
              <p className="text-gray-500 mb-7 text-lg leading-relaxed">
                 Kami hadir di lokasi yang strategis dan mudah dijangkau, sehingga Anda dapat menikmati berbagai pilihan makanan dan minuman favorit dalam suasana yang nyaman. Kunjungi Cafe Cekwan dan ciptakan momen istimewa bersama keluarga, teman, maupun rekan kerja.
              </p>
              <div className="flex items-start gap-3 mb-8 p-4 rounded-2xl bg-orange-50 border border-orange-100">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                {/* Teks alamat sudah disesuaikan dengan titik Google Maps kamu */}
                <span className="text-gray-700">Medan Estate Bisnis Point, Jl. Kapten Batu Sihombing, Kenangan Baru, Kec. Percut Sei Tuan, Kab. Deliserdang, Sumatera Utara, 20371</span>
              </div>
              <Link
                to="/contact"
                className="btn-primary"
              >
                Lihat Peta Lengkap <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl h-96 ring-1 ring-gray-100"
            >
              <iframe
                title="Cafe Cekwan Location"
                // Link src sudah diganti dengan milikmu
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1193.1507778142868!2d98.72848353077273!3d3.6158008684093246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031310039152e5d%3A0xa209f8001486e460!2sMedan%20Estate%20Bisnis%20Point!5e0!3m2!1sid!2sid!4v1782647874956!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
