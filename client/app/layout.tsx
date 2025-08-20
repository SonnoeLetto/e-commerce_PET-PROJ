import { Header } from '@components/Header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { AppThemeProvider } from '@providers/ThemeProvider';



export const metadata = {
  title: 'My Next App',
  description: 'Created manually with TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppThemeProvider>
          <Header />
          {children}
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
