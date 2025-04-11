import { Geist, Geist_Mono } from 'next/font/google';

import Providers from '@/app/providers';

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
      <Providers>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className='w-screen h-screen'>
            <main>
              {children}
            </main>
          </div>
        </body>
      </Providers>
    </html>
  );
}
