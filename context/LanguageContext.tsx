
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from '../translations';

// Define a type for keys that only point to string values in the translation object to avoid type errors with objects like 'links'
type StringTranslationKey = {
  [K in keyof typeof translations['en']]: typeof translations['en'][K] extends string ? K : never;
}[keyof typeof translations['en']];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: StringTranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Fix: use StringTranslationKey to ensure that the return value is always a string
  const t = (key: StringTranslationKey): string => {
    const val = translations[language][key];
    const fallback = translations['en'][key];
    // Cast to string as we've narrowed the key to only those mapping to strings
    return (val as string) || (fallback as string);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
