import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['pl','uk'],
 
  // Used when no locale matches
  defaultLocale: 'pl'
});
 
export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'], // не чіпає _next, static, API тощо
};