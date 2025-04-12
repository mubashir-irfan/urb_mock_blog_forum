import { Geist, Geist_Mono } from 'next/font/google';
import Providers from '@/app/providers';
import { Analytics } from "@vercel/analytics/react"

import { Toaster } from 'react-hot-toast';
import Header from './Header';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <Toaster />
      <Providers>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className='w-screen h-screen flex flex-col'>
            <Header />
            <main className='flex-grow'>
              {children}
            </main>
          </div>
        </body>
      </Providers>
    </html>
  );
}
