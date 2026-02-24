
import "./globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import ContactInfo from "@/components/ui/contact-info";
import {routing} from '@/i18n/routing';
import NavMenu from "@/components/ui/nav-menu";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { GoogleAnalytics } from "@next/third-parties/google";
config.autoAddCss = false;

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;  
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <meta name="description" content="Cazare targu ocna, Pensiunea Amelia, Vila Gradina verde"/>
        <meta name="author" content="Pensiunea Amelia"/>
        <meta name="keywords" content="Cazare in targu ocna, Salina, Strand, Pensiunea, Pension"/>
        <link rel="icon" href="/img/favicon.ico"/>
        <GoogleAnalytics gaId="G-NCJ3B4Q53L" />
      </head>
      <body >
        <NextIntlClientProvider>
        <header className="header mainbanner">          
          <div className="md:flex md:items-start p-8 w-full pl-5 md:pl-12 pr-12">
            <div className="md:w-1/4 min-w-[200px] relative flex pl-10 md:pl-4 md:h-full">            
              <img style={{marginTop: "0px"}} className="align-middle" alt="Logo" src="/img/logo.png"/>
            </div>
            <ContactInfo/>
          </div>         
          </header>
        <NavMenu/>
   
        <main className="w-full h-full relative flex items-start page-content bg-porcelain">
          {children}
        </main>
        <footer className="bg-porcelain">&nbsp;</footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
