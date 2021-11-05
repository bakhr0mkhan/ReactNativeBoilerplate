import I18n from 'react-native-i18n';

// import languages

import uz from './locales/uz';
import en from './locales/en';
import ru from './locales/ru';

export const changeLanguage = val => {
  if (val) I18n.locale = val;
  return val;
};

I18n.defaultLocale = 'uz';
I18n.fallbacks = true;
I18n.translations = {
  uz,
  en,
  ru,
};

export default I18n;
