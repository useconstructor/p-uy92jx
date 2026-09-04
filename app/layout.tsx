import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788564008901',
  description: 'Bloom & Stem is a refined boutique florist ecommerce website for browsing seasonal arrangements, purchasing same-day gifts, and subscribing to recurring flower deliveries. The experience emphasizes artisanal quality, local sourcing, sustainability, and effortless gifting.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#FAF8F5', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
