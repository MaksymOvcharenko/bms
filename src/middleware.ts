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
import {NextRequest} from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

function addWarsawSuffix(pathname: string) {
  const cleanPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  return cleanPath === '/' ? '/w' : `${cleanPath}/w`;
}

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (!/\/w\/?$/.test(pathname)) return intlMiddleware(request);

  const cleanUrl = request.nextUrl.clone();
  cleanUrl.pathname = pathname.replace(/\/w\/?$/, '') || '/';
  const cleanRequest = new NextRequest(cleanUrl, {
    headers: request.headers,
    method: request.method,
  });
  const response = intlMiddleware(cleanRequest);

  const location = response.headers.get('location');
  if (location) {
    const redirectUrl = new URL(location, request.url);
    redirectUrl.pathname = addWarsawSuffix(redirectUrl.pathname);
    response.headers.set('location', redirectUrl.toString());
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)', // не чіпає api, _next і статичні файли
  ],
};

