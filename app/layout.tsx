import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import { metadata } from './metadata'

const inter = Inter({ subsets: ['latin'] });

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
