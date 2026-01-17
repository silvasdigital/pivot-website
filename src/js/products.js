import '../css/modern.css';
import {
  loadPortfolioData,
  getProperties,
  getCurrentLanguage,
  setCurrentLanguage,
  filterProperties,
} from './utils.js';
import { renderPropertyCard, setPortfolioData } from './ui.js';

async function initProductsPage() {
  try {
    console.log('🚀 Initializing products page...');

    const data = await loadPortfolioData();
    setPortfolioData(data);

    if (!data || !data.properties) {
      console.error('❌ No data loaded');
      return;
    }

    // Set up language toggle button
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      const updateLangBtn = () => {
        langBtn.textContent =
          getCurrentLanguage() === 'en' ? 'العربية' : 'English';
      };
      updateLangBtn();
      langBtn.addEventListener('click', () => {
        const newLang = getCurrentLanguage() === 'en' ? 'ar' : 'en';
        setCurrentLanguage(newLang);
      });
    }

    // Apply language direction
    document.documentElement.lang = getCurrentLanguage();
    document.documentElement.dir =
      getCurrentLanguage() === 'ar' ? 'rtl' : 'ltr';

    // Get query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('category');

    // Get all properties or filter by category
    let properties = getProperties();
    if (categoryFilter) {
      properties = properties.filter(
        (p) => p.categoryId === parseInt(categoryFilter)
      );
      console.log(
        `✅ Filtered ${properties.length} properties by category ${categoryFilter}`
      );
    } else {
      console.log(`✅ Showing all ${properties.length} properties`);
    }

    // Render properties
    const propertiesList = document.getElementById('propertiesList');
    if (propertiesList && properties.length > 0) {
      propertiesList.innerHTML = properties
        .map((p) => renderPropertyCard(p))
        .join('');
      console.log(`✅ Rendered ${properties.length} properties`);
    } else {
      propertiesList.innerHTML =
        '<div class="col-12 text-center text-muted py-5">No properties found</div>';
    }
  } catch (error) {
    console.error('❌ Error initializing products page:', error);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductsPage);
} else {
  initProductsPage();
}
