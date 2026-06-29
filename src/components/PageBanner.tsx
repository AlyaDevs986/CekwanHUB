import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <section className="relative h-[58vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/75 via-gray-900/65 to-gray-950/80" />
        {/* Decorative bokeh blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-orange-300"
            style={{ background: 'rgba(249,115,22,0.18)', border: '1px solid rgba(249,115,22,0.3)' }}>
            ✦ Cekwan Hub ✦
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-4 leading-tight"
          style={{ textShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 flex justify-center"
        >
          <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-orange-400 to-amber-400" />
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-gray-50" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
