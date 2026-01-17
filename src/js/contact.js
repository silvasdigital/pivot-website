import '../css/modern.css';
import {
  loadPortfolioData,
  getCompanyInfo,
  getCurrentLanguage,
  setCurrentLanguage,
  getText,
} from './utils.js';
import {
  setPortfolioData,
  renderContactInfo,
  renderContactForm,
} from './ui.js';

async function initContactPage() {
  try {
    console.log('🚀 Initializing contact page...');

    const data = await loadPortfolioData();
    setPortfolioData(data);

    if (!data || !data.company) {
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

    // Render contact info
    const contactInfo = document.getElementById('contactInfo');
    if (contactInfo) {
      contactInfo.innerHTML = renderContactInfo();
      console.log('✅ Rendered contact information');
    }

    // Render contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.innerHTML = renderContactForm();

      const company = getCompanyInfo();
      const whatsappNumber = company?.contact?.whatsapp?.replace(
        /[^0-9+]/g,
        ''
      );

      const formElement = document.getElementById('contactFormElement');
      if (formElement) {
        formElement.addEventListener('submit', (e) => {
          e.preventDefault();

          const formData = new FormData(formElement);
          const message = encodeURIComponent(
            `Name: ${formData.get('name')}\nEmail: ${formData.get(
              'email'
            )}\nPhone: ${formData.get('phone')}\n\nMessage:\n${formData.get(
              'message'
            )}`
          );

          window.open(
            `https://wa.me/${whatsappNumber}?text=${message}`,
            '_blank'
          );
          formElement.reset();
        });
      }
    }

    console.log('✅ Contact page initialized successfully!');
  } catch (error) {
    console.error('❌ Error initializing contact page:', error);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactPage);
} else {
  initContactPage();
}
