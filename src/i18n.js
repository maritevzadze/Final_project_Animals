import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome": "Welcome",
        "Loading...": "Loading..."
      }
    },
    ka: { // Assuming "ka" is the code for Georgian
      translation: {
        "Welcome": "კეთილი იყოს თქვენი მობრძანება",
        "Loading...": "იტვირთება..."
      }
    }
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language in case the key is missing
  interpolation: {
    escapeValue: false // React already does escaping
  }
});

export default i18n;
