
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale } from 'next-intl/server';
import Header from "../../components/Header";

import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { GtmPageView } from "@/components/GtmPageView/GtmPageView";
import { Suspense } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { isLocale, Locale, locales, localizePath } from "@/config/i18n";
import type { Metadata } from "next";
import BranchWelcome from "@/components/BranchWelcome/BranchWelcome";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const metadataByLocale: Record<Locale, { title: string; description: string }> = {
  pl: {
    title: "BLS Service — niezależny serwis BMW, MINI i Rolls-Royce w Krakowie",
    description: "Profesjonalna diagnostyka, naprawa i serwis BMW, MINI oraz Rolls-Royce w Krakowie.",
  },
  uk: {
    title: "BLS Service — незалежний сервіс BMW, MINI та Rolls-Royce у Кракові",
    description: "Професійна діагностика, ремонт і обслуговування BMW, MINI та Rolls-Royce у Кракові.",
  },
  en: {
    title: "BLS Service — independent BMW, MINI and Rolls-Royce service in Kraków",
    description: "Professional diagnostics, repair and servicing for BMW, MINI and Rolls-Royce vehicles in Kraków.",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params: { locale } }: RootLayoutProps): Metadata {
  if (!isLocale(locale)) return {};
  const siteUrl = "https://www.blsservice.pl";

  return {
    ...metadataByLocale[locale],
    alternates: {
      canonical: `${siteUrl}${localizePath("/", locale)}`,
      languages: {
        pl: `${siteUrl}/`,
        uk: `${siteUrl}/uk`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/`,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
  
}: RootLayoutProps) {
    unstable_setRequestLocale(locale); // ← ДОДАЙ СЮДИ
  if (!isLocale(locale)) {
    notFound();
  }

  // ОТРИМУЄМО ПЕРЕКЛАДИ
  const messages = (await import(`../../../messages/${locale}.json`)).default;
const GTM_ID = "GTM-MTN9TZKH";
  return (
    <html lang={locale}>
      <head>
         {/* GTM script */}
        <Script
          id="gtm-base"
          strategy="afterInteractive"
        >{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
         <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
         <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <BranchWelcome />
                 <Suspense fallback={null}>
          <GtmPageView />
        </Suspense>
          <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
            <Header />
            <div className="flex-grow mt-20">{children}
               
            </div>
             
            <Footer />
            <ScrollToTop />
            <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
          </div>
      
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}
