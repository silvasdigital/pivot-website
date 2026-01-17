import '../css/modern.css';
import {
  loadPortfolioData,
  getCurrentLanguage,
  setCurrentLanguage,
} from './utils.js';
import { renderServiceCard, renderProjectCard } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await loadPortfolioData();
    const lang = getCurrentLanguage();

    // Apply language
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('lang', lang);

    // Update page title
    document.title =
      lang === 'ar'
        ? 'PIVOT - حلول عقارية موثوقة'
        : 'PIVOT - Trusted Real Estate Solutions';

    // Static text translations
    const staticTexts = {
      ar: {
        'hero-title': 'PIVOT - حلول عقارية وإدارة مشاريع موثوقة',
        'hero-desc':
          'نحن متخصصون في تقديم حلول عقارية شاملة وإدارة مشاريع احترافية منذ عام 1996',
        'nav-home': 'الرئيسية',
        'nav-about': 'من نحن',
        'nav-portfolio': 'أعمالنا',
        'services-title': 'خدماتنا المتخصصة',
        'projects-title': 'المشاريع المميزة',
      },
      en: {
        'hero-title': 'PIVOT - Trusted Real Estate Solutions',
        'hero-desc':
          'We specialize in providing comprehensive real estate solutions and professional project management since 1996',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-portfolio': 'Our Work',
        'services-title': 'Our Specialized Services',
        'projects-title': 'Featured Projects',
      },
    };

    const texts = staticTexts[lang] || staticTexts.en;

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link:not(.active)');
    const navHome = Array.from(navLinks).find(
      (link) => link.getAttribute('href') === '/',
    );
    const navAbout = Array.from(navLinks).find(
      (link) => link.getAttribute('href') === '/about.html',
    );
    const navPortfolio = Array.from(navLinks).find(
      (link) => link.getAttribute('href') === '/portfolio.html',
    );
    if (navHome) navHome.textContent = texts['nav-home'];
    if (navAbout) navAbout.textContent = texts['nav-about'];
    if (navPortfolio) navPortfolio.textContent = texts['nav-portfolio'];

    // Update hero section
    const heroTitle = document.querySelector('.hero h1');
    const heroDesc = document.querySelector('.hero p');
    if (heroTitle) heroTitle.textContent = texts['hero-title'];
    if (heroDesc) heroDesc.textContent = texts['hero-desc'];

    // Update section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles[0])
      sectionTitles[0].textContent = texts['services-title'];
    if (sectionTitles[1])
      sectionTitles[1].textContent = texts['projects-title'];

    // Update company description
    const descElement = document.getElementById('companyDescription');
    if (descElement && data.company) {
      const company = data.company[lang] || data.company.en;
      descElement.textContent = company.aboutContent || company.description;
    }

    // Render services
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid && data.services) {
      servicesGrid.innerHTML = '';
      data.services.forEach((service) => {
        const card = renderServiceCard(service, lang);
        servicesGrid.appendChild(card);
      });
    }

    // Render featured projects (first 2)
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid && data.projects) {
      projectsGrid.innerHTML = '';
      data.projects.slice(0, 2).forEach((project) => {
        const card = renderProjectCard(project, lang);
        projectsGrid.appendChild(card);
      });
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
    console.error('Error loading portfolio:', error);
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
      (currentPath === '/' && href === '/') ||
      (currentPath === '/index.html' && href === '/')
    ) {
      link.classList.add('active');
    }
  });
}
