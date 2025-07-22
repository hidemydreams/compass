import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/shared/components/ui/toaster';
import { settings } from '@/settings';
import { PopupProvider } from '@/contexts/PopupContext';
import Script from 'next/script';
import { Roboto } from 'next/font/google';

const bokorFont = Roboto({ weight: '400', subsets: ['latin'] });

const { appName, appUrl } = settings;

export const metadata: Metadata = {
  title: `${appName} – Connect Everything in One Link`,
  description:
    'Create your personal bio page with links, social profiles, and more.',
  keywords: [
    'linktree alternative',
    'bio link',
    'profile page',
    'personal branding',
  ],
  metadataBase: new URL(appUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Add your external script */}
        <Script
          src='https://cloud.umami.is/script.js'
          data-website-id='5b42cb5b-d2ec-4c1d-8071-fdfb70b2a774'
          strategy='afterInteractive'
          data-domains='linkoo.app'
        />
      </head>
      <body className={bokorFont.className}>
        <PopupProvider>
          <Toaster />
          {children}
        </PopupProvider>
      </body>
    </html>
  );
}
