import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid, LayoutGrid } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { galleryItems } from '../data/cafeData';
import { GALLERY_CATEGORIES } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', ...GALLERY_CATEGORIES];

  const filteredItems = useMemo(() => {
    return galleryItems.filter(
      (item) => activeCategory === 'All' || item.category === activeCategory
    );
  }, [activeCategory]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
  const prevImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));

  return (
    <div>
      <PageBanner
        title="Galeri Kami"
        subtitle="Jelajahi suasana, makanan, dan minuman terbaik di Cafe Cekwan."
        image="/images/gallery-interior.jpg"
      />

      <section className="py-16 min-h-screen" style={{ background: 'linear-gradient(180deg,#fafafa,#fff7ed 50%,#fafafa)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'text-white shadow-lg shadow-orange-500/30 -translate-y-0.5'
                    : 'bg-white text-gray-600 hover:text-orange-600 hover:bg-orange-50 border border-gray-200 hover:-translate-y-0.5'
                }`}
                style={activeCategory === cat ? { background: 'linear-gradient(135deg,#f97316,#ea580c)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onClick={() => openLightbox(i)}
                className="group relative rounded-3xl overflow-hidden shadow-md card-glow cursor-pointer break-inside-avoid"
              >
                <img src={item.image} alt={item.title} className="w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white font-bold text-base">{item.title}</h3>
                      <span
                        className="text-xs font-semibold text-orange-200 mt-0.5 inline-block px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(249,115,22,0.25)', border: '1px solid rgba(249,115,22,0.3)' }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
                    >
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(5,5,5,0.94)', backdropFilter: 'blur(16px)' }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-5 right-5 w-11 h-11 rounded-2xl flex items-center justify-center text-white transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[75vh] rounded-3xl object-contain mx-auto shadow-2xl"
              />
              <div className="text-center mt-5">
                <h3 className="text-white font-bold text-xl">{filteredItems[lightboxIndex].title}</h3>
                <span
                  className="text-sm font-semibold text-orange-300 mt-1 inline-block px-3 py-1 rounded-full"
                  style={{ background: 'rgba(249,115,22,0.2)' }}
                >
                  {filteredItems[lightboxIndex].category}
                </span>
                <p className="text-gray-500 text-sm mt-2">
                  {lightboxIndex + 1} / {filteredItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
