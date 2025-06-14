import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { navLinks } from '../constants';

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener('scroll', handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const handleLanguageChange = (newLang) => {
    navigate(`/${newLang}`);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a
          href="#hero"
          className="logo"
        >
          OĞUZHAN UZUNAY
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ link, name }) => (
              <li
                key={name}
                className="group"
              >
                <a href={link}>
                  <span>{t(`nav.${name.toLowerCase()}`)}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
            <li className="group">
              <div className="language-selector">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                >
                  EN
                </button>
                <span className="divider">|</span>
                <button
                  onClick={() => handleLanguageChange('tr')}
                  className={`lang-btn ${lang === 'tr' ? 'active' : ''}`}
                >
                  TR
                </button>
              </div>
            </li>
          </ul>
        </nav>

        {/* Contact Button - Desktop */}
        <a
          href="#contact"
          className="contact-btn group hidden md:block"
        >
          <div className="inner">
            <span>{t('contactMe')}</span>
          </div>
        </a>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } p-6 bg-gradient-to-b from-[#151030]/95 to-[#050816]/95 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <a
                href="#hero"
                className="logo text-2xl"
                onClick={handleNavClick}
              >
                OĞUZHAN UZUNAY
              </a>
              <button
                className="p-2"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <span className="text-3xl text-white">&times;</span>
              </button>
            </div>
            <nav className="flex-1">
              <ul className="flex flex-col gap-6">
                {navLinks.map(({ link, name }) => (
                  <li
                    key={name}
                    className="text-xl"
                  >
                    <a
                      href={link}
                      onClick={handleNavClick}
                    >
                      <span>{t(`nav.${name.toLowerCase()}`)}</span>
                    </a>
                  </li>
                ))}
                <li className="mt-4">
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`px-4 py-2 rounded ${
                        lang === 'en' ? 'bg-white text-black' : 'text-white'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageChange('tr')}
                      className={`px-4 py-2 rounded ${
                        lang === 'tr' ? 'bg-white text-black' : 'text-white'
                      }`}
                    >
                      TR
                    </button>
                  </div>
                </li>
                <li className="mt-4">
                  <a
                    href="#contact"
                    className="inline-block px-6 py-3 bg-white text-black rounded"
                    onClick={handleNavClick}
                  >
                    {t('contactMe')}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
