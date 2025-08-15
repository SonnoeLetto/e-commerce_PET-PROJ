export const metadata = {
    title: 'My Next App',
    description: 'Created manually with TypeScript'
  }
  
  export default function RootLayout({
    children
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }