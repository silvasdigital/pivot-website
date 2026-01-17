import '../css/modern.css';
import {
  loadPortfolioData,
  getCurrentLanguage,
  setCurrentLanguage,
} from './utils.js';
import { renderProjectDetailCard, renderServiceCard } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await loadPortfolioData();
    const lang = getCurrentLanguage();

    // Apply language
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('lang', lang);

    // Update page title
    document.title = lang === 'ar' ? 'أعمالنا - PIVOT' : 'Our Work - PIVOT';

    // Update static text elements
    const staticTexts = {
      ar: {
        'hero-title': 'أعمالنا وإنجازاتنا',
        'hero-desc':
          'استكشف المشاريع العقارية الناجحة التي طورناها للعملاء حول العالم',
        'portfolio-title': 'المشاريع المكتملة',
        'services-title': 'خدماتنا المتخصصة',
        'services-desc':
          'نقدم خدمات عقارية متطورة وشاملة تغطي جميع جوانب العقارات والاستثمار',
        'nav-home': 'الرئيسية',
        'nav-about': 'من نحن',
        'nav-portfolio': 'أعمالنا',
        'stats-title': 'أرقام تتحدث عن نجاحنا',
        'stat-years': 'سنة من الخبرة',
        'stat-services': 'خدمات متخصصة',
        'stat-clients': 'عميل راضي',
        'stat-quality': 'جودة مضمونة',
        'cta-title': 'هل تريد معرفة المزيد؟',
        'cta-desc':
          'تواصل معنا للحصول على استشارة مجانية حول مشروعك العقاري القادم',
        'cta-button': 'اتصل بنا',
        footer: '© 2024 PIVOT International Real Estate. جميع الحقوق محفوظة.',
      },
      en: {
        'hero-title': 'Our Work & Achievements',
        'hero-desc':
          'Explore successful real estate projects we developed for clients worldwide',
        'portfolio-title': 'Completed Projects',
        'services-title': 'Our Specialized Services',
        'services-desc':
          'We provide advanced and comprehensive real estate services covering all aspects of real estate and investment',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-portfolio': 'Our Work',
        'stats-title': 'Numbers That Speak To Our Success',
        'stat-years': 'Years of Experience',
        'stat-services': 'Specialized Services',
        'stat-clients': 'Satisfied Clients',
        'stat-quality': 'Quality Guaranteed',
        'cta-title': 'Want to Know More?',
        'cta-desc':
          'Contact us for a free consultation about your upcoming real estate project',
        'cta-button': 'Contact Us',
        footer: '© 2024 PIVOT International Real Estate. All rights reserved.',
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
    if (navHome) navHome.textContent = texts['nav-home'];
    if (navAbout) navAbout.textContent = texts['nav-about'];

    // Update hero section
    const heroTitle = document.querySelector('.hero h1');
    const heroDesc = document.querySelector('.hero p');
    if (heroTitle) heroTitle.textContent = texts['hero-title'];
    if (heroDesc) heroDesc.textContent = texts['hero-desc'];

    // Update portfolio title
    const sectionTitles = document.querySelectorAll('.section-title');
    if (sectionTitles[0])
      sectionTitles[0].textContent = texts['portfolio-title'];

    // Update services title and description
    if (sectionTitles[1])
      sectionTitles[1].textContent = texts['services-title'];
    const serviceDesc = document.querySelector('.section.alt p');
    if (serviceDesc && !serviceDesc.style.textAlign) {
      const nextP = document.evaluate(
        "//h2[contains(text(), 'خدماتنا') or contains(text(), 'Services')]/following-sibling::p[1]",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null,
      ).singleNodeValue;
      if (nextP) nextP.textContent = texts['services-desc'];
    }

    // Update stats title
    if (sectionTitles[2]) sectionTitles[2].textContent = texts['stats-title'];

    // Update stat labels
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = texts['stat-years'];
    if (statLabels[1]) statLabels[1].textContent = texts['stat-services'];
    if (statLabels[2]) statLabels[2].textContent = texts['stat-clients'];
    if (statLabels[3]) statLabels[3].textContent = texts['stat-quality'];

    // Update CTA section
    if (sectionTitles[3]) sectionTitles[3].textContent = texts['cta-title'];
    const ctaDesc = document.querySelectorAll('.section.alt p');
    if (ctaDesc[1]) ctaDesc[1].textContent = texts['cta-desc'];
    const ctaButton = document.querySelector('.cta-button.secondary');
    if (ctaButton) {
      ctaButton.innerHTML = `<i class="fas fa-phone"></i> ${texts['cta-button']}`;
    }

    // Update footer
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = texts['footer'];

    // Render all projects
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (portfolioGrid && data.projects) {
      portfolioGrid.innerHTML = '';
      data.projects.forEach((project) => {
        const card = renderProjectDetailCard(project, lang);
        portfolioGrid.appendChild(card);
      });
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
      (currentPath === '/portfolio.html' && href === '/portfolio.html')
    ) {
      link.classList.add('active');
    }
  });
}
