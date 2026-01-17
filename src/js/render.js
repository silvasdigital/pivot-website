import portfolioData from '../data/portfolio.json';
import {
  setPortfolioData,
  renderPropertyCard,
  renderCategoryCard,
  renderContactInfo,
  renderFilterPanel,
} from './ui.js';
import {
  loadPortfolioData,
  initLanguageToggle,
  getCurrentLanguage,
  t,
  getProperties,
  getCategories,
} from './utils.js';

setPortfolioData(portfolioData);

// Lazy load portfolio data
export const getPortfolioData = () => portfolioData;

// Render navbar
export function renderNavbar() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const data = getPortfolioData();
  nav.innerHTML = `
    <div class="navbar-container">
      <div class="navbar-logo">${data.company.name}</div>
      <ul class="nav-links">
        <li><a class="nav-link" onclick="scrollToSection('hero')">Home</a></li>
        <li><a class="nav-link" onclick="scrollToSection('about')">About</a></li>
        <li><a class="nav-link" onclick="scrollToSection('services')">Services</a></li>
        <li><a class="nav-link" onclick="scrollToSection('portfolio')">Portfolio</a></li>
        <li><a class="nav-link" onclick="scrollToSection('contact')">Contact</a></li>
      </ul>
    </div>
  `;
}

// Render hero section
export function renderHero() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const data = getPortfolioData();
  const { home } = data.sections;

  hero.innerHTML = `
    <div class="hero-content">
      <h1>Welcome to <span class="accent">${data.company.name}</span></h1>
      <p>${home.description}</p>
      <button class="cta-button" onclick="scrollToSection('portfolio')">
        ${home.cta}
      </button>
    </div>
  `;
}

// Render about section
export function renderAbout() {
  const about = document.querySelector('#about');
  if (!about) return;

  const data = getPortfolioData();
  const { about: aboutData } = data.sections;

  const highlightsHTML = aboutData.highlights
    .map((h) => `<div class="highlight-item"><strong>${h}</strong></div>`)
    .join('');

  about.innerHTML = `
    <div class="container">
      <h2 class="section-title">${aboutData.title}</h2>
      <div class="about-content">
        <div class="about-text">
          <p>${aboutData.description}</p>
        </div>
        <div class="highlights">
          ${highlightsHTML}
        </div>
      </div>
    </div>
  `;
}

// Render services section
export function renderServices() {
  const services = document.querySelector('#services');
  if (!services) return;

  const data = getPortfolioData();
  const { services: servicesData } = data.sections;

  const servicesHTML = servicesData.items
    .map(
      (service) => `
    <div class="service-card">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
    `
    )
    .join('');

  services.innerHTML = `
    <div class="container">
      <h2 class="section-title">${servicesData.title}</h2>
      <div class="services-grid">
        ${servicesHTML}
      </div>
    </div>
  `;
}

// Render portfolio section
export function renderPortfolio() {
  const portfolio = document.querySelector('#portfolio');
  if (!portfolio) return;

  const data = getPortfolioData();

  const portfolioHTML = data.portfolio
    .map(
      (item) => `
    <div class="portfolio-card">
      <div class="portfolio-image">🏢</div>
      <div class="portfolio-content">
        <div class="portfolio-type">${item.type}</div>
        <h3>${item.title}</h3>
        <p class="portfolio-location">📍 ${item.location}</p>
        <div class="portfolio-price">${item.price}</div>
        <p>${item.description}</p>
        ${
          item.amenities
            ? `<div class="amenities">
              ${item.amenities
                .map((a) => `<span class="amenity-tag">${a}</span>`)
                .join('')}
            </div>`
            : ''
        }
      </div>
    </div>
    `
    )
    .join('');

  portfolio.innerHTML = `
    <div class="container">
      <h2 class="section-title">Featured <span class="accent">Properties</span></h2>
      <div class="portfolio-grid">
        ${portfolioHTML}
      </div>
    </div>
  `;
}

// Render contact section
export function renderContact() {
  const contact = document.querySelector('#contact');
  if (!contact) return;

  const data = getPortfolioData();
  const { contact: contactData } = data.company;

  contact.innerHTML = `
    <div class="container">
      <h2 class="section-title">Get in <span class="accent">Touch</span></h2>
      <div class="contact-info">
        <div class="contact-item">
          <h3>📧 Email</h3>
          <p><a href="mailto:${contactData.email}">${contactData.email}</a></p>
        </div>
        <div class="contact-item">
          <h3>📞 Phone</h3>
          <p><a href="tel:${contactData.phone}">${contactData.phone}</a></p>
        </div>
        <div class="contact-item">
          <h3>💬 WhatsApp</h3>
          <p><a href="https://wa.me/${contactData.whatsapp.replace(
            /[+\-\s]/g,
            ''
          )}" target="_blank">${contactData.whatsapp}</a></p>
        </div>
      </div>
    </div>
  `;
}

// Render footer
export function renderFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const data = getPortfolioData();
  const { footer: footerData } = data;

  const quickLinksHTML = footerData.quickLinks
    .map((link) => `<li><a href="${link.href}">${link.text}</a></li>`)
    .join('');

  const socialsHTML = footerData.socials
    .map(
      (social) => `
    <a href="${social.url}" class="social-link" target="_blank" title="${
        social.name
      }">
      ${getIconForSocial(social.name)}
    </a>
    `
    )
    .join('');

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>${data.company.name}</h4>
          <p>${footerData.about}</p>
          <div class="social-links">
            ${socialsHTML}
          </div>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            ${quickLinksHTML}
          </ul>
        </div>
        <div class="footer-section">
          <h4>Company Info</h4>
          <ul>
            <li><strong>Address:</strong> ${data.company.contact.address}</li>
            <li><strong>Phone:</strong> ${data.company.contact.phone}</li>
            <li><strong>Email:</strong> ${data.company.contact.email}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 ${data.company.name}. All rights reserved.</p>
      </div>
    </div>
  `;
}

// Helper function for social icons
function getIconForSocial(name) {
  const icons = {
    WhatsApp: '💬',
    Phone: '📞',
    Email: '✉️',
  };
  return icons[name] || '🔗';
}

// Global scroll function
window.scrollToSection = function (sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Render all sections
export function renderAll() {
  renderNavbar();
  renderHero();
  renderAbout();
  renderServices();
  renderPortfolio();
  renderContact();
  renderFooter();
}
