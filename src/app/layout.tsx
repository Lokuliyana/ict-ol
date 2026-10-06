import type { Metadata } from 'next';
import './globals.css';
import { ProgressProvider } from '@/context/ProgressContext';

export const metadata: Metadata = {
  title: 'O/L ICT Master Prep | Dual-Medium Sinhala & English Platform',
  description: 'Product-grade dual-medium learning platform for Sri Lankan G.C.E. O/L Grade 10 & 11 ICT curriculum with side-by-side synchronized notes, interactive widgets, and 2020-2025 past papers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Sinhala:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-indigo-500 selection:text-white">
        <ProgressProvider>
          {children}
        </ProgressProvider>
      </body>
    </html>
  );
}
