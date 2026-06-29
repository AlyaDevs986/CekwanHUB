import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Star,
  Coffee,
  ShoppingBag,
} from "lucide-react";
import { menuItems } from "../data/cafeData";

export default function MenuDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const menu = menuItems.find((item) => item.id === Number(id));

  if (!menu) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">
          Menu Tidak Ditemukan
        </h2>

        <button
          onClick={() => navigate("/menu")}
          className="px-6 py-3 bg-orange-500 text-white rounded-xl"
        >
          Kembali
        </button>
      </div>
    );
  }

  const recommendations = menuItems
    .filter(
      (item) =>
        item.category === menu.category &&
        item.id !== menu.id
    )
    .slice(0, 3);

  return (
    <>
      {/* PERBAIKAN: py-16 diubah menjadi pt-32 pb-16 agar konten turun dan tidak tertutup navbar */}
      <section className="pt-32 pb-16 min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-orange-600 font-semibold mb-10 hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} />
            Kembali
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </motion.div>

            {/* CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                {menu.category}
              </span>

              <h1 className="text-5xl font-bold mt-5 mb-4">
                {menu.name}
              </h1>

              <div className="flex items-center gap-6 mb-6">

                <div className="flex items-center gap-1 text-yellow-500">
                  <Star fill="currentColor" size={18} />
                  <span className="font-semibold">
                    4.9
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                  <Clock size={18} />
                  5 Menit
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                  <Coffee size={18} />
                  Fresh
                </div>

              </div>

              <h2 className="text-4xl font-bold text-orange-600 mb-6">
                Rp {menu.price.toLocaleString("id-ID")}
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                {menu.description}
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">

                <div className="bg-white rounded-2xl p-5 shadow">
                  <h3 className="font-bold mb-2">
                    Bahan Utama
                  </h3>

                  <ul className="space-y-2 text-gray-500">

                    <li>✔ Premium Ingredients</li>
                    <li>✔ Fresh Every Day</li>
                    <li>✔ Tanpa Pengawet</li>

                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow">
                  <h3 className="font-bold mb-2">
                    Informasi
                  </h3>

                  <ul className="space-y-2 text-gray-500">

                    <li>☕ Fresh Brew</li>

                    <li>⏱ 5 Menit Penyajian</li>

                    <li>⭐ Best Quality</li>

                  </ul>
                </div>

              </div>

              <div className="flex flex-wrap gap-4 mt-10">

                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-semibold flex items-center gap-3 hover:bg-orange-600"
                >
                  <ShoppingBag />
                  Reservasi Sekarang
                </button>

                <button
                  onClick={() => navigate("/menu")}
                  className="px-8 py-4 border rounded-2xl font-semibold hover:bg-gray-50"
                >
                  Lihat Semua Menu
                </button>

              </div>

            </motion.div>

          </div>

          {/* MENU LAINNYA */}

          <div className="mt-24">

            <h2 className="text-3xl font-bold mb-10">
              Menu Lainnya
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {recommendations.map((item) => (

                <Link
                  key={item.id}
                  to={`/menu/${item.id}`}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover"
                    />

                    <div className="p-5">

                      <h3 className="font-bold text-xl mb-2">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-sm line-clamp-2">
                        {item.description}
                      </p>

                      <div className="mt-5 flex justify-between items-center">

                        <span className="font-bold text-orange-600">
                          Rp {item.price.toLocaleString("id-ID")}
                        </span>

                        <span className="text-orange-500 font-semibold">
                          Detail →
                        </span>

                      </div>

                    </div>

                  </motion.div>
                </Link>

              ))}

            </div>

          </div>

        </div>
      </section>
    </>
  );
}