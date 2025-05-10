import "../global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "../components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/footer";
import { ThemeProvider } from "../components/theme-switch";
import { metaData } from "../config";
import {LayoutProps} from "../lib/types";
import ClientSideSetUp from "./ClientSideSetUp";

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      ko: '/ko',
    }
  },
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "ko",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function LocaleLayout({ children, params
}: LayoutProps) {
  const { locale } = params

  return (
    <html lang={locale} className={cx(GeistSans.variable, GeistMono.variable)}>
    <head>
      <title>{metadata.title?.toString()}</title>
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/rss.xml"
        title="RSS Feed"
      />
      <link
        rel="alternate"
        type="application/atom+xml"
        href="/atom.xml"
        title="Atom Feed"
      />
      <link
        rel="alternate"
        type="application/feed+json"
        href="/feed.json"
        title="JSON Feed"
      />
    </head>
    <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClientSideSetUp locale={locale} >
        <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
          <Navbar locale={locale} />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </ClientSideSetUp>
    </ThemeProvider>
    </body>
    </html>
  )
}
