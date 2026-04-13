import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Provides language state and a switcher function.
 * Also syncs the HTML `dir` and `lang` attributes for RTL support.
 */
export function useLanguage() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isRTL]);

  const changeLanguage = (lang: 'en' | 'ar') => {
    i18n.changeLanguage(lang);
  };

  return { language: i18n.language, isRTL, changeLanguage };
}
