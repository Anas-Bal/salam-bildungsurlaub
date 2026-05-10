import de from '../i18n/de.json';
import ar from '../i18n/ar.json';

type Lang = 'de' | 'ar';

const translations: Record<Lang, Record<string, string>> = { de, ar };

export const LANGUAGES: Lang[] = ['de', 'ar'];

export function t(key: string, lang: Lang): string {
  return translations[lang]?.[key] ?? translations['de']?.[key] ?? key;
}

export function getLang(url: URL): Lang {
  const segment = url.pathname.split('/')[1];
  if (segment === 'ar') return 'ar';
  return 'de';
}

export function altLang(lang: Lang): Lang {
  return lang === 'de' ? 'ar' : 'de';
}

export function localizePath(path: string, lang: Lang): string {
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}

export function langPaths() {
  return LANGUAGES.map(lang => ({ params: { lang } }));
}
