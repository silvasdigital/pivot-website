// Language and internationalization utilities
let currentLanguage = localStorage.getItem('language') || 'ar';
let portfolioData = null;

export async function loadPortfolioData() {
  if (!portfolioData) {
    try {
      const response = await fetch('./data/portfolio.json');
      if (!response.ok) throw new Error(`Failed to load: ${response.status}`);
      portfolioData = await response.json();
      console.log(
        '✅ Portfolio data loaded:',
        portfolioData.properties?.length,
        'properties',
      );
    } catch (error) {
      console.error('❌ Error loading portfolio data:', error);
      portfolioData = {
        properties: [],
        categories: [],
        company: {},
        translations: {},
      };
    }
  }
  return portfolioData;
}

export function getCurrentLanguage() {
  return currentLanguage;
}

export function setCurrentLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
}

export function t(key, namespace = 'translations') {
  if (!portfolioData) return key;
  const keys = key.split('.');
  let value = portfolioData[namespace]?.[currentLanguage] || {};

  for (let k of keys) {
    value = value?.[k];
    if (!value) return key;
  }
  return value;
}

export function getText(obj) {
  if (typeof obj === 'string') return obj;
  if (typeof obj === 'object' && obj !== null) {
    return obj[currentLanguage] || obj['en'] || '';
  }
  return '';
}

export function getCompanyInfo() {
  return (
    portfolioData?.company?.[currentLanguage] || portfolioData?.company?.en
  );
}

export function getCategories(data = null) {
  return (data || portfolioData)?.services || [];
}

export function getProperties(data = null) {
  return (data || portfolioData)?.services || [];
}

export function getCategoryById(id, data = null) {
  return getCategories(data).find((c) => c.id === id);
}

export function filterPropertiesByCategory(categoryId, data = null) {
  return getProperties(data).filter((p) => p.id === categoryId);
}

export function filterProperties(filters = {}) {
  let properties = getProperties();

  if (filters.category) {
    properties = properties.filter((p) => p.categoryId === filters.category);
  }
  if (filters.type) {
    properties = properties.filter((p) => p.type === filters.type);
  }
  if (filters.city) {
    properties = properties.filter((p) => p.city === filters.city);
  }
  if (filters.minPrice !== undefined) {
    properties = properties.filter((p) => p.price >= filters.minPrice);
  }
  if (filters.maxPrice !== undefined) {
    properties = properties.filter((p) => p.price <= filters.maxPrice);
  }

  return properties;
}

export function initLanguageToggle() {
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    toggleBtn.addEventListener('click', () => {
      const newLang = currentLanguage === 'en' ? 'ar' : 'en';
      setCurrentLanguage(newLang);
    });
  }
}

export function formatPrice(price) {
  return new Intl.NumberFormat(currentLanguage === 'ar' ? 'ar-AE' : 'en-US', {
    style: 'currency',
    currency: 'AED',
  }).format(price);
}
