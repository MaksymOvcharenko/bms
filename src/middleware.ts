// import createMiddleware from 'next-intl/middleware';
 
// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['pl','uk'],
 
//   // Used when no locale matches
//   defaultLocale: 'pl'
// });
 
// export const config = {
//   matcher: ['/((?!_next|.*\\..*).*)'], // не чіпає _next, static, API тощо
// };
import createMiddleware from 'next-intl/middleware';
import {defaultLocale, locales} from './config/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)', // не чіпає api, _next і статичні файли
  ],
};

