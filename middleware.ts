import createMiddleware from 'next-intl/middleware';
import {defaultLocale, locales} from './src/config/i18n';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale,
  localePrefix: 'as-needed'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
