import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {isLocale} from './config/i18n';
 
// Can be imported from a shared config
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!isLocale(locale)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
