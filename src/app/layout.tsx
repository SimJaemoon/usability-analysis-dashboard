import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './reset.css';
import './globals.css';
import StoreProvider from '@/lib/StoreProvider';
import { Suspense } from 'react';

const freesentation = localFont({
  src: './fonts/FreesentationVF.ttf',
  variable: '--font-freesentation',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Usability Analysis Dashboard',
  description: '사용성 통계 분석 대시보드',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <Suspense>
          <body className={`${freesentation.variable}`}>{children}</body>
        </Suspense>
      </StoreProvider>
    </html>
  );
}
