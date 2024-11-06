import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './reset.css';
import './globals.css';
import StoreProvider from '@/lib/StoreProvider';

const freesentation = localFont({
  src: './fonts/FreesentationVF.ttf',
  variable: '--font-freesentation',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Usability Analysis Dashboard',
  description: '사용성 통계 분석 대시보드',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${freesentation.variable}`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
