import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const socials = [
  { Icon: Instagram, href: 'https://www.instagram.com/cekwan.hub?utm_source=qr&igsh=czNrYzUxNmhwcXlh', label: 'Instagram' },
  { Icon: Facebook, href: 'https://www.facebook.com/61584867676457', label: 'Facebook' },

];

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-orange-600/6 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-500/6 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-serif leading-none">Cekwan Hub</div>
                <div className="text-[9px] tracking-[0.2em] text-orange-400 uppercase font-bold">Premium Coffee</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Tempat nongkrong nyaman dengan kopi berkualitas dan suasana hangat untuk mahasiswa, pekerja, dan keluarga.
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all hover:-translate-y-1 duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg,#f97316,#ea580c)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Navigasi</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Kontak</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-orange-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                </div>
                <span className="text-gray-400 leading-relaxed">Kompleks Medan Estate Bisnis, Jl. Kapten Batu Sihombing, Kenangan Baru, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara 20371, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-green-500/15 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-green-400" />
                </div>
                <span className="text-gray-400">+62 821-8111-1251</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="text-gray-400">cekwanofficial@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Jam Buka</h3>
            <ul className="space-y-3 text-sm">
              {[
                { day: 'Senin – Minggu', time: '09:00 – 00:00' },
              ].map(({ day, time }) => (
                <li key={day} className="flex justify-between items-center gap-4">
                  <span className="text-gray-400">{day}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-orange-300"
                    style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.2)' }}>
                    {time}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-2xl" style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <p className="text-xs text-orange-200 font-medium">🎉 Promo Jumat</p>
              <p className="text-xs text-gray-400 mt-1">Diskon 20% semua menu setiap hari Jumat!</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p className="flex items-center gap-1">
            © 2026 Cekwan Hub. Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Medan
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
