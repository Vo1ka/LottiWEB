import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lotti - Lavandería Online Barcelona',
  description: 'Servicio de lavandería profesional con recogida y entrega a domicilio en Barcelona',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
