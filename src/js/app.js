import '../css/modern.css';
import { loadPortfolioData, setCurrentLanguage } from './utils.js';
import { renderProjectDetailCard } from './ui.js';

// Templates for each page
const templates = {
  ar: {
    home: `
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>حلول عقارية موثوقة</h1>
            <p>خدمات عقارية متطورة وإدارة مشاريع احترافية منذ 1996</p>
            <a href="#/ar/portfolio" class="cta-button">استكشف أعمالنا</a>
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          <h2 class="section-title">خدماتنا المتخصصة</h2>
          <div class="grid grid-4" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem;">
            <div class="icon-card" style="flex: 1 1 calc(25% - 1.5rem); min-width: 250px; max-width: 350px;">
              <div class="icon"><i class="fas fa-tasks" style="display: inline-block; width: 100%; text-align: center;"></i></div>
              <h3>إدارة العقارات</h3>
              <p>خدمات إدارة عقارات متكاملة وشاملة</p>
            </div>
            <div class="icon-card" style="flex: 1 1 calc(25% - 1.5rem); min-width: 250px; max-width: 350px;">
              <div class="icon"><i class="fas fa-chart-line" style="display: inline-block; width: 100%; text-align: center;"></i></div>
              <h3>الاستثمار العقاري</h3>
              <p>فرص استثمارية موثوقة بعوائد عالية</p>
            </div>
            <div class="icon-card" style="flex: 1 1 calc(25% - 1.5rem); min-width: 250px; max-width: 350px;">
              <div class="icon"><i class="fas fa-bullhorn" style="display: inline-block; width: 100%; text-align: center;"></i></div>
              <h3>التسويق العقاري</h3>
              <p>تسويق احترافي للوصول لأفضل المشترين</p>
            </div>
            <div class="icon-card" style="flex: 1 1 calc(25% - 1.5rem); min-width: 250px; max-width: 350px;">
              <div class="icon"><i class="fas fa-lightbulb" style="display: inline-block; width: 100%; text-align: center;"></i></div>
              <h3>الاستشارات العقارية</h3>
              <p>استشارات متخصصة من خبرائنا</p>
            </div>
          </div>
        </div>
      </section>
    `,
    about: `
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>من نحن</h1>
            <p>تعرف على شركة PIVOT ورؤيتنا وقيمنا وفريقنا المتميز</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title">عن الشركة</h2>
          <div class="company-info" style="background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.5) 100%); border: 1px solid var(--border); border-radius: 12px; padding: 3rem;">
            <h2 style="color: var(--accent); margin-bottom: 1.5rem;">PIVOT International Real Estate</h2>
            <p style="font-size: 1rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 1.5rem;">
              منذ تأسيس شركة PIVOT عام 1996، تتمتع بخبرة عملاقة في مجال العقارات والاستثمار في الإمارات العربية المتحدة. نحن متخصصون في تقديم حلول عقارية شاملة ومتطورة، مع التركيز على الجودة والابتكار والرضا العميل.
            </p>
            <h3 style="color: var(--accent); margin-top: 2rem;">رؤيتنا</h3>
            <p style="color: var(--text-muted);">أن نكون الشركة الرائدة والمتميزة في مجال إدارة العقارات والاستثمار العقاري في منطقة الخليج</p>
            <h3 style="color: var(--accent); margin-top: 2rem;">رسالتنا</h3>
            <p style="color: var(--text-muted);">تقديم حلول عقارية مبتكرة وموثوقة تتجاوز توقعات عملائنا مع الالتزام بأعلى معايير الجودة والمهنية</p>
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          <h2 class="section-title">فريقنا المتميز</h2>
          <div id="teamGrid" class="grid grid-2"></div>
        </div>
      </section>
    `,
    portfolio: `
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>أعمالنا وإنجازاتنا</h1>
            <p>استكشف المشاريع العقارية الناجحة التي طورناها للعملاء حول العالم</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title">المشاريع المكتملة</h2>
          <div id="portfolioGrid" class="grid grid-2"></div>
        </div>
      </section>
    `
  },
  en: {
    home: `
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>Trusted Real Estate Solutions</h1>
            <p>Advanced real estate services and professional project management since 1996</p>
            <a href="#/en/portfolio" class="cta-button">Explore Our Work</a>
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          <h2 class="section-title">Our Specialized Services</h2>
          <div class="grid grid-4" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem;">
            <div class="icon-card" style="flex: 1 1 calc(25% - 1.5rem); min-width: 250px; max-width: 350px;">
              <div class="icon"><i class="fas fa-tasks" style="display: inline-block; width: 100%; text-align: center;"></i></div>
              <h3>Property Management</h3>
              <p>Integrated and comprehensive property management services</p>
            </div>
            <div class="icon-card" style="flex: 1 1 calc(25% - 1.5rem); min-width: 250px; max-width: 350px;">
              <div class="icon"><i class="fas fa-chart-line" style="display: inline-block; width: 100%; text-align: center;"></i></div>
              <h3>Real Estate Investment</h3>
              <p>Reliable investment opportunities with high returns</p>
            </div>
            <div class="icon-card" style="flex: 1 1 calc(25% - 1.5rem); min-width: 250px; max-width: 350px;">
              <div class="icon"><i class="fas fa-bullhorn" style="display: inline-block; width: 100%; text-align: center;"></i></div>
              <h3>Real Estate Marketing</h3>
              <p>Professional marketing to reach the best buyers</p>
            </div>
            <div class="icon-card" style="flex: 1 1 calc(25% - 1.5rem); min-width: 250px; max-width: 350px;">
              <div class="icon"><i class="fas fa-lightbulb" style="display: inline-block; width: 100%; text-align: center;"></i></div>
              <h3>Real Estate Consultation</h3>
              <p>Specialized consultations from our experts</p>
            </div>
          </div>
        </div>
      </section>
    `,
    about: `
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>About Us</h1>
            <p>Learn about PIVOT, our vision, values, and distinguished team</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title">About The Company</h2>
          <div class="company-info" style="background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.5) 100%); border: 1px solid var(--border); border-radius: 12px; padding: 3rem;">
            <h2 style="color: var(--accent); margin-bottom: 1.5rem;">PIVOT International Real Estate</h2>
            <p style="font-size: 1rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 1.5rem;">
              Since our establishment in 1996, PIVOT has enjoyed extensive experience in providing advanced real estate solutions and reliable services. Our team of expert professionals works with passion and professionalism to achieve our clients' objectives and exceed their expectations.
            </p>
            <h3 style="color: var(--accent); margin-top: 2rem;">Our Vision</h3>
            <p style="color: var(--text-muted);">To be the leading and distinguished company in real estate management and real estate investment in the Gulf region</p>
            <h3 style="color: var(--accent); margin-top: 2rem;">Our Mission</h3>
            <p style="color: var(--text-muted);">Providing innovative and reliable real estate solutions that exceed our clients' expectations with commitment to the highest quality standards</p>
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          <h2 class="section-title">Our Distinguished Team</h2>
          <div id="teamGrid" class="grid grid-2"></div>
        </div>
      </section>
    `,
    portfolio: `
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>Our Work & Achievements</h1>
            <p>Explore successful real estate projects we developed for clients worldwide</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title">Completed Projects</h2>
          <div id="portfolioGrid" class="grid grid-2"></div>
        </div>
      </section>
    `
  }
};

// Render team members
async function renderTeam(lang) {
  const teamGrid = document.getElementById('teamGrid');
  if (!teamGrid) return;

  const data = await loadPortfolioData();
  const team = data.company[lang]?.team || [];

  teamGrid.innerHTML = team.map(member => `
    <div class="team-card" style="background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.5) 100%); border: 1px solid var(--border); border-radius: 12px; padding: 2rem; text-align: center;">
      <div style="width: 200px; height: 200px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, var(--accent), rgba(212, 165, 116, 0.3)); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        <i class="${member.icon || 'fas fa-user'}" style="font-size: 4rem; color: white;"></i>
      </div>
      <h3 style="color: var(--text-light); margin: 1rem 0 0.5rem 0;">${member.name}</h3>
      <p style="color: var(--accent); font-weight: 600; margin: 0.5rem 0;">${member.role}</p>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0.5rem 0;">${member.description}</p>
    </div>
  `).join('');
}

// Render portfolio projects
async function renderPortfolio(lang) {
  const portfolioGrid = document.getElementById('portfolioGrid');
  if (!portfolioGrid) return;

  const data = await loadPortfolioData();
  portfolioGrid.innerHTML = '';

  data.projects?.forEach((project) => {
    const card = renderProjectDetailCard(project, lang);
    portfolioGrid.appendChild(card);
  });
}

// Router
async function router() {
  const hash = window.location.hash || '#/ar';
  const parts = hash.slice(2).split('/');
  let lang = parts[0] || 'ar';
  let page = parts[1] || 'home';

  // Validate lang
  if (!['ar', 'en'].includes(lang)) {
    lang = 'ar';
  }

  // Set language globally
  setCurrentLanguage(lang);

  // Update HTML lang attribute and direction
  const root = document.getElementById('root');
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update navigation links with correct language
  const navTexts = {
    ar: { home: 'الرئيسية', about: 'من نحن', portfolio: 'أعمالنا' },
    en: { home: 'Home', about: 'About Us', portfolio: 'Our Work' }
  };
  
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.classList.remove('active');
    const page_name = link.getAttribute('data-page');
    link.textContent = navTexts[lang][page_name] || navTexts[lang].home;
    if (page_name === 'home') {
      link.href = `#/${lang}`;
    } else {
      link.href = `#/${lang}/${page_name}`;
    }
  });
  
  // Set active link
  document.querySelector(`[data-page="${page}"]`)?.classList.add('active');

  // Update lang toggle
  const langToggle = document.querySelector('.lang-toggle');
  if (lang === 'ar') {
    langToggle.href = '#/en';
    langToggle.textContent = 'English';
  } else {
    langToggle.href = '#/ar';
    langToggle.textContent = 'العربية';
  }

  // Update footer text
  const footerText = {
    ar: '&copy; 2024 PIVOT International Real Estate. جميع الحقوق محفوظة.',
    en: '&copy; 2024 PIVOT International Real Estate. All rights reserved.'
  };
  const footerContent = document.querySelector('.footer-content');
  if (footerContent) {
    footerContent.innerHTML = `<p>${footerText[lang]}</p>`;
  }

  // Get template
  const template = templates[lang]?.[page] || templates[lang]?.home;
  const appContent = document.getElementById('app-content');
  appContent.innerHTML = template;

  // Update title
  const titles = {
    ar: { home: 'PIVOT - حلول عقارية', about: 'عن - PIVOT', portfolio: 'أعمالنا - PIVOT' },
    en: { home: 'PIVOT - Real Estate Solutions', about: 'About - PIVOT', portfolio: 'Our Work - PIVOT' }
  };
  document.title = titles[lang]?.[page] || titles[lang]?.home;

  // Load dynamic content
  if (page === 'about') {
    setTimeout(() => renderTeam(lang), 100);
  } else if (page === 'portfolio') {
    setTimeout(() => renderPortfolio(lang), 100);
  }
}

// Initialize
window.addEventListener('hashchange', router);

// Call router immediately when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', router);
} else {
  router();
}
