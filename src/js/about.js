import '../css/modern.css';
import {
  loadPortfolioData,
  getCurrentLanguage,
  setCurrentLanguage,
} from './utils.js';
import { renderTeamMember, renderContactInfo, getText } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await loadPortfolioData();
    const lang = getCurrentLanguage();

    // Apply language
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('lang', lang);

    // Update page title
    document.title = lang === 'ar' ? 'من نحن - PIVOT' : 'About Us - PIVOT';

    // Static text translations
    const staticTexts = {
      ar: {
        'hero-title': 'من نحن',
        'hero-desc': 'تعرف على شركة PIVOT ورؤيتنا وقيمنا وفريقنا المتميز',
        'nav-home': 'الرئيسية',
        'nav-portfolio': 'أعمالنا',
        'about-title': 'عن الشركة',
        'vision-title': 'رؤيتنا',
        'mission-title': 'رسالتنا',
        'values-title': 'قيمنا الأساسية',
        'team-title': 'فريقنا المتميز',
      },
      en: {
        'hero-title': 'About Us',
        'hero-desc':
          'Learn about PIVOT, our vision, values, and distinguished team',
        'nav-home': 'Home',
        'nav-portfolio': 'Our Work',
        'about-title': 'About The Company',
        'vision-title': 'Our Vision',
        'mission-title': 'Our Mission',
        'values-title': 'Our Core Values',
        'team-title': 'Our Distinguished Team',
      },
    };

    const texts = staticTexts[lang] || staticTexts.en;

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link:not(.active)');
    const navHome = Array.from(navLinks).find(
      (link) => link.getAttribute('href') === '/',
    );
    const navPortfolio = Array.from(navLinks).find(
      (link) => link.getAttribute('href') === '/portfolio.html',
    );
    if (navHome) navHome.textContent = texts['nav-home'];
    if (navPortfolio) navPortfolio.textContent = texts['nav-portfolio'];

    // Update hero section
    const heroTitle = document.querySelector('.hero h1');
    const heroDesc = document.querySelector('.hero p');
    if (heroTitle) heroTitle.textContent = texts['hero-title'];
    if (heroDesc) heroDesc.textContent = texts['hero-desc'];

    // Update company info
    const company = data.company[lang] || data.company.en;

    // Update section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles[0]) sectionTitles[0].textContent = texts['about-title'];
    if (sectionTitles[1]) sectionTitles[1].textContent = texts['team-title'];

    // Update vision and mission
    const visionElements = document.querySelectorAll(
      '.company-info h3, .company-info h4',
    );
    Array.from(visionElements).forEach((el) => {
      if (
        el.textContent.includes('vision') ||
        el.textContent.includes('رؤية')
      ) {
        el.textContent = texts['vision-title'];
      }
      if (
        el.textContent.includes('mission') ||
        el.textContent.includes('رسالة')
      ) {
        el.textContent = texts['mission-title'];
      }
      if (el.textContent.includes('values') || el.textContent.includes('قيم')) {
        el.textContent = texts['values-title'];
      }
    });

    const aboutEl = document.getElementById('companyAbout');
    if (aboutEl) {
      aboutEl.textContent = company.aboutContent;
    }

    const missionEl = document.getElementById('companyMission');
    if (missionEl) {
      missionEl.textContent =
        (lang === 'ar' ? 'رسالتنا: ' : 'Our Mission: ') + company.mission;
    }

    const visionEl = document.getElementById('companyVision');
    if (visionEl) {
      visionEl.textContent =
        (lang === 'ar' ? 'رؤيتنا: ' : 'Our Vision: ') + company.vision;
    }

    // Render team members
    const teamGrid = document.getElementById('teamGrid');
    if (teamGrid && company.team) {
      teamGrid.innerHTML = '';
      company.team.forEach((member) => {
        const card = renderTeamMember(member, lang);
        teamGrid.appendChild(card);
      });
    }

    // Render contact section
    const contactSection = document.getElementById('contactSection');
    if (contactSection && company.contact) {
      const contactCard = renderContactInfo(company, lang);
      contactSection.appendChild(contactCard);
    }

    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.textContent = lang === 'ar' ? 'English' : 'العربية';
      langToggle.addEventListener('click', () => {
        const newLang = lang === 'ar' ? 'en' : 'ar';
        setCurrentLanguage(newLang);
        window.location.reload();
      });
    }

    updateNavActiveState();
  } catch (error) {
    console.error('Error loading about page:', error);
  }
});

function updateNavActiveState() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (
      href === currentPath ||
      (currentPath === '/about.html' && href === '/about.html')
    ) {
      link.classList.add('active');
    }
  });
}
