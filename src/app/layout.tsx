import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lotti - Lavandería Online',
  description: 'Servicio de lavandería profesional con recogida y entrega a domicilio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
