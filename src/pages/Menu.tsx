import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Clock, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { menuItems } from '../data/cafeData';
import { MENU_CATEGORIES } from '../types';
import { Link } from 'react-router-dom';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        activeCategory === 'All' || item.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  const categories = ['All', ...MENU_CATEGORIES];

  return (
    <div>
      <PageBanner
        title="Menu Kami"
        subtitle="Pilihan kopi, minuman, makanan, dan dessert terbaik untuk menemani waktu Anda."
        image="/images/menu-coffee.jpg"
      />

      <section
        className="py-16 min-h-screen"
        style={{
          background:
            'linear-gradient(180deg,#fafafa 0%,#fff7ed 50%,#fafafa 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* SEARCH */}
          <div className="flex flex-col gap-6 mb-12">

            <div className="relative max-w-lg mx-auto w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type="text"
                placeholder="Cari menu favorit kamu..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
              />
            </div>

            {/* FILTER */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'text-white shadow-lg'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                  style={
                    activeCategory === cat
                      ? {
                          background:
                            'linear-gradient(135deg,#f97316,#ea580c)',
                        }
                      : {}
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* MENU */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-24">

              <div className="text-6xl mb-4">☕</div>

              <h2 className="text-2xl font-bold text-gray-700">
                Menu Tidak Ditemukan
              </h2>

              <p className="text-gray-400 mt-2">
                Coba gunakan kata kunci lain.
              </p>

            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

              {filteredItems.map((item, i) => (

                <Link
                  key={item.id}
                  to={`/menu/${item.id}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.05,
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    {/* IMAGE */}

                    <div className="relative h-56 overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
                        {item.category}
                      </span>

                      {item.featured && (
                        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">

                          <Star
                            className="w-4 h-4 text-white fill-white"
                          />

                        </div>
                      )}

                    </div>

                    {/* CONTENT */}

                    <div className="p-5">

                      <h3 className="font-bold text-lg text-gray-800 mb-2">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      <div className="flex justify-between items-center mb-5">

                        <span className="text-orange-600 font-bold text-xl">
                          Rp {item.price.toLocaleString('id-ID')}
                        </span>

                        <span className="flex items-center gap-1 text-gray-400 text-sm">
                          <Clock className="w-4 h-4" />
                          5 min
                        </span>

                      </div>

                      <button
                        className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                      >
                        Lihat Detail
                      </button>

                    </div>

                  </motion.div>
                </Link>

              ))}

            </div>
          )}

          {/* CTA */}

          {filteredItems.length > 0 && (
            <div className="mt-16 text-center">

              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Reservasi Sekarang

                <ArrowRight className="w-4 h-4" />

              </Link>

            </div>
          )}

        </div>
      </section>
    </div>
  );
}