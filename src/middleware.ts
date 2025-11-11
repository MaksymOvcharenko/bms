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

export default createMiddleware({
  locales: ['pl', 'uk'],   // тільки ті, що реально є
  defaultLocale: 'pl',     // польська — головна
  localePrefix: 'as-needed' // ✅ без /pl для дефолтної мови, з /uk для української
});

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)', // не чіпає api, _next і статичні файли
  ],
};

