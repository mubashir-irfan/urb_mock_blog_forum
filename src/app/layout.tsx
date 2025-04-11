import { GTProvider } from 'gt-next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Simple Blog',
  description: 'A simple app for Blogging',
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <QueryClientProvider client={queryClient}>
        <GTProvider>
          <ThemeProvider theme={theme}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
              {children}
            </body>
          </ThemeProvider>
        </GTProvider>
      </QueryClientProvider>
    </html>
  );
}
