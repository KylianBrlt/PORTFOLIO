const translations = {
  'en': enTranslations,
  'fr': frTranslations
};

// Get browser language or use stored preference
function getPreferredLanguage() {
  const storedLang = localStorage.getItem('preferred-language');
  if (storedLang) return storedLang;
  
  const browserLang = navigator.language.split('-')[0];
  return translations[browserLang] ? browserLang : 'fr';
}

// Set initial language
let currentLanguage = getPreferredLanguage();

// Apply translations to the page
function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const keys = element.getAttribute('data-i18n').split('.');
    let translation = translations[currentLanguage];
    
    // Navigate through nested keys
    for (const key of keys) {
      translation = translation[key];
      if (!translation) break;
    }
    
    if (translation) {
      // Check if element has specific attribute to translate
      const attr = element.getAttribute('data-i18n-attr');
      if (attr) {
        element.setAttribute(attr, translation);
      } else {
        element.innerHTML = translation;
      }
    }
  });
}

// Change language
function changeLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem('preferred-language', lang);
    applyTranslations();
  }
}

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  
  // Add event listeners to language switcher buttons
  const langButtons = document.querySelectorAll('.lang-switch');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      changeLanguage(btn.getAttribute('data-lang'));
    });
  });
});