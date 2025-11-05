import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: SITE.NAME,
    template: `%s | ${SITE.NAME}`,
  },
  description: SITE.DESCRIPTION,
  keywords: [
    'nettoyage professionnel',
    'nettoyage mauritanie',
    'services entreprise mauritanie',
    'communication événementiel',
    'impression numérique',
    'manutention aéroportuaire',
    'lutte antiparasitaire',
    'gestion faune',
    'assistance PMR',
    'Nouakchott',
    'EPS Mauritanie',
  ],
  authors: [{ name: 'EPS - El Baraka Prestations de Service' }],
  creator: 'EPS - El Baraka Prestations de Service',
  publisher: 'EPS - El Baraka Prestations de Service',
  metadataBase: new URL(SITE.URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE.LOCALE,
    url: SITE.URL,
    title: SITE.NAME,
    description: SITE.DESCRIPTION,
    siteName: SITE.NAME,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE.NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.NAME,
    description: SITE.DESCRIPTION,
    images: ['/images/og-image.jpg'],
    creator: '@eps_mauritanie',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'business',
  classification: 'Business Services',
  other: {
    'contact:email': CONTACT.EMAIL,
    'contact:phone_number': CONTACT.PHONE,
    'business:contact_data:locality': 'Nouakchott',
    'business:contact_data:country_name': 'Mauritanie',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}