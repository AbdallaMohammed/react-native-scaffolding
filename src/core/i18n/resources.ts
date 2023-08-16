import en from '@/i18n/en.json';

export const resources = {
  en: {
    translation: en,
  },
};

export type Language = keyof typeof resources;
