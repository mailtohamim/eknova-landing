import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eknova | Premium Botanical Wellness from Bangladesh',
  description: 'Nature-powered solutions backed by science. Discover premium herbal supplements from Bangladesh.',
  icons: {
    icon: '/SVG/Eknova New Favicon.svg',
  },
};

import { inter, lora } from './fonts';
import PromoRibbon from '@/components/layout/PromoRibbon';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="antialiased">
        <PromoRibbon />
        <Header />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
