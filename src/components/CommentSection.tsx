import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Send, MessageSquarePlus } from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  date: string;
}

const STORAGE_KEY = 'cafecekwan_comments';

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const avatarColors = [
  'from-orange-500 to-orange-700',
  'from-rose-500 to-pink-600',
  'from-violet-500 to-purple-600',
  'from-blue-500 to-cyan-500',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-yellow-500',
];

function getColor(name: string) {
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) % avatarColors.length;
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [form, setForm] = useState({ name: '', role: '', text: '', rating: 5 });
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: form.name.trim(),
      role: form.role.trim() || 'Pelanggan',
      text: form.text.trim(),
      rating: form.rating,
      avatar: getInitials(form.name),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    };

    setComments((prev) => [newComment, ...prev]);
    setForm({ name: '', role: '', text: '', rating: 5 });
    setSubmitted(true);
    setShowForm(false);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="section-label">✦ Komentar Pelanggan ✦</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mt-5">
              Tulis <span className="gradient-text">Ulasan</span> Anda
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg text-lg">
              Bagikan pengalaman Anda. Komentar tersimpan otomatis dan tidak hilang saat refresh!
            </p>
          </div>
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className={`shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
              showForm
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'text-white shadow-lg shadow-orange-500/30 hover:-translate-y-0.5'
            }`}
            style={!showForm ? { background: 'linear-gradient(135deg,#f97316,#ea580c)' } : {}}
          >
            <MessageSquarePlus className="w-5 h-5" />
            {showForm ? 'Tutup Form' : 'Tulis Komentar'}
          </button>
        </div>

        {/* Toast */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              className="mb-8 p-4 rounded-2xl flex items-center gap-3 font-medium text-sm text-emerald-700"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">✅</div>
              <div>
                <p className="font-bold">Komentar berhasil dikirim!</p>
                <p className="text-xs text-emerald-600 font-normal mt-0.5">Terima kasih telah berbagi pengalaman Anda 🙏</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-14"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Bagikan Pengalaman Anda di Cafe Cekwan</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nama <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Pekerjaan / Peran</label>
                      <input
                        type="text"
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        placeholder="Mahasiswa, Pekerja, dll."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setForm({ ...form, rating: star })}
                          className="transition-all hover:scale-125 active:scale-95"
                        >
                          <Star className={`w-8 h-8 transition-colors ${star <= form.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Komentar <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.text}
                      onChange={(e) => setForm({ ...form, text: e.target.value })}
                      placeholder="Ceritakan pengalaman Anda di Cafe Cekwan..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-sm leading-relaxed"
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    <Send className="w-4 h-4" /> Kirim Komentar
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {comments.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 rounded-3xl bg-orange-50 flex items-center justify-center mx-auto mb-5"
              style={{ border: '2px dashed rgba(249,115,22,0.3)' }}>
              <MessageSquarePlus className="w-9 h-9 text-orange-300" />
            </div>
            <p className="text-xl font-bold text-gray-700 mb-2">Belum ada komentar</p>
            <p className="text-sm text-gray-400">Jadilah yang pertama memberi ulasan!</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {comments.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative p-6 rounded-3xl bg-white border border-gray-100 card-glow hover:-translate-y-1 transition-all duration-300"
                >
                  <Quote className="w-7 h-7 text-orange-200 absolute top-5 right-5" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-4 h-4 ${star <= c.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3">"{c.text}"</p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${getColor(c.name)} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                      style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                    >
                      {c.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-800 text-sm truncate">{c.name}</p>
                      <p className="text-xs text-gray-400 truncate">{c.role} · {c.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
