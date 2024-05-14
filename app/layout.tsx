import './ui/global.css'
import { montserrat } from './ui/myExampleFonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
