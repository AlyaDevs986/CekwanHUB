import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Menu as MenuIcon, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2 shadow-2xl shadow-black/10'
            : 'py-4'
        }`}
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.92)'
            : 'rgba(15,10,5,0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-orange-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-lg font-bold font-serif transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Cekwan Hub
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-orange-400 uppercase">
                Premium Coffee
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active
                      ? scrolled ? 'text-orange-600' : 'text-orange-400'
                      : scrolled
                        ? 'text-gray-600 hover:text-orange-600'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-500"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg,#f97316,#ea580c)',
                boxShadow: '0 4px 20px rgba(249,115,22,0.45)',
              }}
            >
              Order Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? 'text-orange-600 bg-orange-50 border border-orange-100'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="mt-2 btn-primary w-full"
              >
                <ArrowRight className="w-4 h-4" /> Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
