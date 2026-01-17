import 'bootstrap/dist/css/bootstrap.css';
import '../css/bootstrap-custom.css';
import '../css/styles.css';
import {
  loadPortfolioData,
  initLanguageToggle,
  getProperties,
  getCategories,
  getText,
  getCurrentLanguage,
  setCurrentLanguage,
} from './utils.js';
import {
  renderPropertyCard,
  renderCategoryCard,
  renderContactInfo,
  setPortfolioData,
} from './ui.js';

let portfolioData = null;

async function initializePage() {
  try {
    // Load data
    portfolioData = await loadPortfolioData();
    setPortfolioData(portfolioData);

    // Setup language toggle
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const newLang = getCurrentLanguage() === 'en' ? 'ar' : 'en';
        setCurrentLanguage(newLang);
      });
      // Set initial button text
      updateLanguageButton();
    }

    // Apply initial language direction
    document.documentElement.lang = getCurrentLanguage();
    document.documentElement.dir =
      getCurrentLanguage() === 'ar' ? 'rtl' : 'ltr';

    // Render featured properties (first 4 marked as featured)
    const featured = getProperties()
      .filter((p) => p.featured)
      .slice(0, 4);
    const featuredList = document.getElementById('featuredList');
    if (featuredList && featured.length > 0) {
      featuredList.innerHTML = featured
        .map((p) => renderPropertyCard(p))
        .join('');
    }

    // Render categories
    const categories = getCategories();
    const categoriesList = document.getElementById('categoriesList');
    if (categoriesList && categories.length > 0) {
      categoriesList.innerHTML = categories
        .map((c) => renderCategoryCard(c))
        .join('');
    }

    // Render contact info
    const contactInfo = document.getElementById('contactInfo');
    if (contactInfo) {
      contactInfo.innerHTML = renderContactInfo();
    }

    console.log('✅ Homepage initialized successfully');
  } catch (error) {
    console.error('Error initializing page:', error);
  }
}

function updateLanguageButton() {
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = getCurrentLanguage() === 'en' ? 'العربية' : 'English';
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePage);
} else {
  initializePage();
}
