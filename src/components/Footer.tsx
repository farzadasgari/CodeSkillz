import { Link } from "react-router-dom";
import { Code2, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  siGithub,
  siGooglescholar,
  siResearchgate,
  siX,
  siLogmein,
  siOrcid,
} from 'simple-icons';

const Footer = () => {
  const { t } = useTranslation('common');
  const socialLinks = [
    {
      name: 'Google Scholar',
      icon: siGooglescholar,
      url: 'https://scholar.google.com/citations?hl=en&user=Rhue_kkAAAAJ',
    },
    {
      name: 'ResearchGate',
      icon: siResearchgate,
      url: 'https://www.researchgate.net/profile/Farzad-Asgari',
    },
    {
      name: 'X',
      icon: siX,
      url: 'https://x.com/farzad_asg',
    },
    {
      name: 'LinkedIn',
      icon: siLogmein,
      url: 'https://www.linkedin.com/in/farzad-asgari/',
    },
    {
      name: 'ORCID',
      icon: siOrcid,
      url: 'https://orcid.org/0009-0008-3800-0408',
    },
    {
      name: 'GitHub',
      icon: siGithub,
      url: 'https://github.com/farzadasgari',
    },
  ];

  return (
    <footer className="bg-primary-dark text-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/CodeSkillz/icon.webp" alt="CodeSkillz" className="w-7 h-7 hover:scale-125 duration-300"/>
              <span className="text-xl font-heading font-bold">
                Code<span className="text-secondary">Skillz</span>
              </span>
            </div>
            <p className="text-sm text-muted mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                  title={link.name}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-current"
                  >
                    <title>{link.name}</title>
                    <path d={link.icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-secondary">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.courses')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-secondary">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.documentation')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.tutorials')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.support')}
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-secondary">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.termsOfService')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-secondary transition-colors">
                  {t('footer.cookiePolicy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-muted">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <p className="text-sm text-muted flex items-center gap-2 flex-wrap justify-center">
              <span>{t('footer.madeWith')}</span>
              <Heart className="w-4 h-4 text-secondary fill-secondary" />
              <span>{t('footer.by')}</span>
              <span className="text-secondary font-semibold hover:text-secondary/70 duration-300"><a href="https://github.com/farzadasgari">Farzad</a></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
