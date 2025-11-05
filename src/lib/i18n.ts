// Configuration pour l'internationalisation future
export const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇲🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

export const defaultLanguage = 'fr';

export const getLanguageName = (code: string) => {
  return languages.find(lang => lang.code === code)?.name || 'Français';
};

export const getLanguageFlag = (code: string) => {
  return languages.find(lang => lang.code === code)?.flag || '🇫🇷';
};
