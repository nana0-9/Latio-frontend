import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { AgencyContent } from './components/AgencyContent';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';
import { Blog } from './components/Blog';
import { BlogDetail } from './components/BlogDetail';
import { Contact } from './components/Contact';
import { Services } from './components/Services';
import { FloatingContact } from './components/FloatingContact';
import ScrollToTop from './components/ScrollToTop';
import { Solutions } from './components/Solutions';

function HomePage() {
  return (
    <div className="w-full min-h-screen bg-transparent">
      <Hero />
      <AgencyContent />
      <Pricing />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <FloatingContact />
    </Router>
  );
}

export default App;
