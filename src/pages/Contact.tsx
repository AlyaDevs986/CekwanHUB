import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const contactInfo = [
  { icon: MapPin, label: 'Alamat', value: 'Kompleks Medan Estate Bisnis, Jl. Kapten Batu Sihombing, Percut Sei Tuan, Deli Serdang, Sumatera Utara.', color: 'from-orange-500 to-orange-600', glow: 'rgba(249,115,22,0.3)', bg: 'bg-orange-50' },
  { icon: Phone, label: 'WhatsApp', value: '+62 821-8111-1251', color: 'from-green-500 to-emerald-600', glow: 'rgba(16,185,129,0.3)', bg: 'bg-green-50' },
  { icon: Mail, label: 'Email', value: 'cekwanofficial@gmail.com', color: 'from-blue-500 to-blue-600', glow: 'rgba(59,130,246,0.3)', bg: 'bg-blue-50' },
  { icon: Clock, label: 'Jam Buka', value: 'Senin – Minggu, 09:00 – 00:00', color: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.3)', bg: 'bg-violet-50' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <PageBanner
        title="Hubungi Kami"
        subtitle="Punya pertanyaan atau ingin reservasi? Kami siap membantu Anda dengan sepenuh hati."
        image="/images/gallery-ambience.jpg"
      />

      {/* ── Contact Info Cards ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">✦ Informasi Kontak ✦</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mt-5">Cara Menghubungi Kami</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-3xl bg-white border border-gray-100 card-glow hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-5`}
                  style={{ boxShadow: `0 8px 24px ${info.glow}` }}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{info.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map + Form ────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg,#fafafa,#fff7ed,#fafafa)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Map */}
           <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="rounded-3xl overflow-hidden shadow-2xl min-h-[480px] ring-1 ring-gray-100"
>
  <iframe
    title="Cafe Cekwan Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.6987113170194!2d98.72902675272374!3d3.6155192101563163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031311c254cd953%3A0x67152f0e7b3cf67!2sCekWan%20ID%20(Warkop%20%26%20Resto%20by.%20PanaLook)!5e0!3m2!1sen!2sus!4v1782722426804!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0, minHeight: "480px" }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">Kirim Pesan</h2>
              <p className="text-gray-400 text-sm mb-7">Isi formulir di bawah dan kami akan menghubungi Anda segera.</p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl flex items-center gap-3"
                  style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <p className="text-sm text-emerald-700 font-medium">Pesan berhasil dikirim! Kami akan segera membalas.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nama</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subjek</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pesan</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-sm leading-relaxed"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" className="btn-primary flex-1">
                    <Send className="w-4 h-4" /> Kirim Pesan
                  </button>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg,#22c55e,#16a34a)', boxShadow: '0 4px 20px rgba(34,197,94,0.35)' }}
                  >
                    <MessageCircle className="w-4 h-4" /> Chat WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
