import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '@/lib/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import SiteLayout from '@/components/layout/SiteLayout';
import PageNotFound from './lib/PageNotFound';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import CustomerSupport from '@/pages/CustomerSupport';
import Contact from '@/pages/Contact';
import ThankYou from '@/pages/ThankYou';
import Privacy from '@/pages/Privacy';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/o-nama" element={<About />} />
            <Route path="/usluge" element={<Services />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/hvala" element={<ThankYou />} />
            <Route path="/politika-privatnosti" element={<Privacy />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
