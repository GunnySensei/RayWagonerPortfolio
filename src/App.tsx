import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { PortfolioHub } from '@/pages/PortfolioHub';
import { CompetencyDetail } from '@/pages/CompetencyDetail';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';

// Client-side navigation doesn't reload the page, so neither the scroll
// position nor assistive-tech focus moves on its own — this does both,
// same job a real page load does for free.
function ScrollAndFocusOnNavigate() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById('main-content')?.focus();
  }, [location.pathname]);
  return null;
}

// Route table — see assets/ARCHITECTURE.md §6 Site Map & Routing.
export function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-forest focus:bg-canvas focus:px-6 focus:py-3 focus:font-sans focus:text-[16px] focus:text-forest"
      >
        Skip to main content
      </a>
      <ScrollAndFocusOnNavigate />
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
