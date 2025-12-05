import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const quickLinks = [
    { name: tNav('home'), href: '/' },
    { name: tNav('services'), href: '/#servicios' },
    { name: tNav('washModes'), href: '/#modos' },
    { name: tNav('contacts'), href: '/contacto' },
  ];

  const legalLinks = [
    { name: 'Política de Privacidad', href: '/legal/privacidad' },
    { name: 'Términos y Condiciones', href: '/legal/terminos' },
    { name: 'Política de Cookies', href: '/legal/cookies' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-white">LOTTI</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              Servicio de lavandería profesional con recogida y entrega a domicilio en Barcelona.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Enlaces rápidos
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Contacto
            </h4>
            <ul className="space-y-4 text-base text-gray-400">
              <li>Barcelona, España</li>
              <li>
                <a
                  href="tel:+34XXXXXXXXX"
                  className="hover:text-white transition-colors"
                >
                  +34 XXX XXX XXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lotti.com"
                  className="hover:text-white transition-colors"
                >
                  info@lotti.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Lotti. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
