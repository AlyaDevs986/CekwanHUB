import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CustomerLayout from './components/CustomerLayout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import MenuDetail from "./pages/MenuDetail"; // Import yang benar ada di sini

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer Pages */}
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          {/* Ini bagian yang tadi salah, sudah diperbaiki menjadi Route: */}
          <Route path="/menu/:id" element={<MenuDetail />} /> 
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}