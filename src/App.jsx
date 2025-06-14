import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import FeatureCards from './sections/FeatureCards';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import LogoShowcase from './sections/LogoShowcase';
import ShowcaseSection from './sections/ShowcaseSection';
import TechStack from './sections/TechStack';
import Testimonials from './sections/Testimonials';

const MainContent = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/en"
            replace
          />
        }
      />
      <Route
        path="/:lang"
        element={<MainContent />}
      />
    </Routes>
  );
};

export default App;
