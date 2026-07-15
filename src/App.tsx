import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { PortfolioHub } from '@/pages/PortfolioHub';
import { CompetencyDetail } from '@/pages/CompetencyDetail';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';

// Route table — see assets/ARCHITECTURE.md §6 Site Map & Routing.
export function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-canvas">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<PortfolioHub />} />
            <Route path="/portfolio/:slug" element={<CompetencyDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
