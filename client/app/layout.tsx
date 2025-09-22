// import 'modern-normalize/modern-normalize.css';
// import './globals.css';
import { Header } from '@/components/layout/Header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { AppThemeProvider } from '@providers/ThemeProvider';
import { Inter } from 'next/font/google';
import { AppShell, Constrained, Main } from '@components/layout/containers';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'My Next App',
  description: 'Created manually with TypeScript',
};

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppThemeProvider>
            <AppShell>
              <Header />
              <Main>
                <Constrained>{children}</Constrained>
              </Main>
              <Footer />
            </AppShell>
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
