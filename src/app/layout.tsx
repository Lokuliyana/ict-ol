import type { Metadata } from 'next';
import './globals.css';
import { ProgressProvider } from '@/context/ProgressContext';
import { AppShell } from '@/components/navigation/AppShell';

export const metadata: Metadata = {
  title: 'O/L ICT Master Prep | Gamified Sri Lankan O/L ICT Platform',
  description: 'Production-grade dual-medium gamified micro-learning web application for Sri Lankan G.C.E. O/L Grade 10 & 11 ICT curriculum with Duolingo quest progression and 2020-2025 past papers.',
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Sinhala:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased selection:bg-indigo-500 selection:text-white">
        <ProgressProvider>
          <AppShell>
            {children}
          </AppShell>
        </ProgressProvider>
      </body>
    </html>
  );
}
