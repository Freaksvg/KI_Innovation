import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Innovation Lab – Diart Selmani',
  description:
    'Wie künstliche Intelligenz unsere digitale Welt verändert – ein interaktives Abschlussprojekt.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
