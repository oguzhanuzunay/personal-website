import { useTranslation } from 'react-i18next';
import { socialImgs } from '../constants';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = {
    instagram: 'https://www.instagram.com/oguzhanzny/',
    facebook: 'https://www.facebook.com/oguzhanzny',
    linkedin: 'https://www.linkedin.com/in/oguzhanuzunay/',
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>{t('footer.terms')}</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialLinks[socialImg.name]}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label={t(`footer.social.${socialImg.name}`)}
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Oğuzhan Uzunay. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
