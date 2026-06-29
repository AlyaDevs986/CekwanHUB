import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Coffee, Sparkles, Users, Heart, CheckCircle } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { teamMembers } from '../data/cafeData';

const values = [
  { icon: Heart, title: 'Kenyamanan', desc: 'Menciptakan ruang yang nyaman dan hangat untuk semua pengunjung.', color: 'from-rose-500 to-pink-600', glow: 'rgba(244,63,94,0.3)' },
  { icon: Coffee, title: 'Kualitas Produk', desc: 'Menyajikan kopi dan makanan terbaik dari bahan pilihan.', color: 'from-orange-500 to-amber-500', glow: 'rgba(249,115,22,0.3)' },
  { icon: Sparkles, title: 'Pelayanan Terbaik', desc: 'Memberikan pelayanan ramah dan profesional kepada setiap tamu.', color: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.3)' },
  { icon: ShieldCheck, title: 'Suasana Modern', desc: 'Desain interior modern yang cocok untuk berbagai aktivitas.', color: 'from-teal-500 to-emerald-500', glow: 'rgba(20,184,166,0.3)' },
];

export default function About() {
  return (
    <div>
      <PageBanner
        title="Tentang Cekwan Hub"
        subtitle="Mengenal lebih dekat cerita dan filosofi di balik cafe favorit Anda."
        image="/images/about-exterior.jpg"
      />

      {/* ── About Story ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">✦ Cerita Kami ✦</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mt-5 mb-6">
                Cerita <span className="gradient-text">Cekwan Hub</span>
              </h2>
              <div className="space-y-5 text-gray-500 leading-relaxed text-base">
  <p>
    Cafe Cekwan hadir pada tahun 2026 sebagai tempat yang menyajikan berbagai pilihan makanan dan minuman berkualitas dalam suasana yang nyaman dan modern. Kami percaya bahwa setiap hidangan dan minuman yang disajikan dapat menciptakan momen kebersamaan yang berkesan.
  </p>

  <p>
    Nama <strong className="text-gray-700">"Cekwan"</strong> melambangkan kehangatan dan kebersamaan. Karena itu, kami menghadirkan tempat yang cocok untuk berkumpul bersama keluarga, teman, maupun rekan kerja, baik untuk menikmati waktu santai maupun merayakan momen spesial.
  </p>

  <p>
    Dengan menu yang beragam, mulai dari makanan ringan, hidangan utama, hingga aneka minuman segar dan kopi pilihan, Cekwan Hub selalu berkomitmen memberikan cita rasa terbaik, pelayanan yang ramah, serta pengalaman bersantap yang menyenangkan bagi setiap pelanggan.
  </p>
</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/about-barista.jpg" alt="Barista" className="rounded-3xl shadow-xl h-72 w-full object-cover" />
                <img src="/images/gallery-interior.jpg" alt="Interior" className="rounded-3xl shadow-xl h-72 w-full object-cover mt-10" />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl text-white text-sm font-bold shadow-2xl whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 8px 32px rgba(249,115,22,0.45)' }}
              >
                Hadir Sejak 2026
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ──────────────────────────────────── */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="section-label">✦ Visi & Misi ✦</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-5">Arah & Tujuan Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
  Icon: Eye,
  title: 'Visi',
  content: 'Menjadi cafe pilihan utama yang menghadirkan makanan dan minuman berkualitas, suasana yang nyaman, serta pelayanan terbaik untuk menciptakan pengalaman yang berkesan bagi setiap pelanggan.',
  list: null,
},
              {
  Icon: Target,
  title: 'Misi',
  content: null,
  list: [
    'Menyajikan makanan dan minuman berkualitas dengan cita rasa terbaik.',
    'Menciptakan suasana yang nyaman, bersih, dan hangat bagi setiap pelanggan.',
    'Memberikan pelayanan yang ramah, cepat, dan profesional.',
    'Menghadirkan menu yang beragam untuk memenuhi kebutuhan dan selera pelanggan.',
    'Menjadikan Cekwan Hub sebagai tempat favorit untuk berkumpul, bekerja, dan bersantai.',
  ],
},
            ].map(({ Icon, title, content, list }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center mb-6"
                  style={{ boxShadow: '0 8px 24px rgba(249,115,22,0.4)' }}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif mb-4">{title}</h3>
                {content && <p className="text-gray-400 leading-relaxed">{content}</p>}
                {list && (
                  <ul className="space-y-3">
                    {list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-400">
                        <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">✦ Nilai Kami ✦</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mt-5">
              Nilai & <span className="gradient-text">Keunggulan</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-7 rounded-3xl bg-white border border-gray-100 card-glow hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-5`}
                  style={{ boxShadow: `0 8px 24px ${v.glow}` }}
                >
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-base">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ─────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg,#fafafa,#fff7ed,#fafafa)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">✦ Galeri ✦</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mt-5">Interior & Eksterior</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: '/images/gallery-interior.jpg', label: 'Interior Modern' },
              { img: '/images/about-exterior.jpg', label: 'Tampak Depan' },
              { img: '/images/about-barista.jpg', label: 'Barista Station' },
            ].map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg h-80"
              >
                <img src={photo.img} alt={photo.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-white font-bold text-lg">{photo.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
