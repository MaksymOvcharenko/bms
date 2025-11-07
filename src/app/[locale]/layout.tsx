
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

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
  
}: RootLayoutProps) {
    unstable_setRequestLocale(locale); // ← ДОДАЙ СЮДИ
  const availableLocales = ["en", "uk", "pl"];
  if (!availableLocales.includes(locale)) {
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rounded+Mplus+1c:wght@300;400;500;700&family=Inter:wght@300;400;500;700&family=Open+Sans:wght@300;400;600&display=swap"
        />
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
                  <GtmPageView />
          <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
            <Header />
            <div className="flex-grow mt-20">{children}</div>
            <Footer />
            <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
