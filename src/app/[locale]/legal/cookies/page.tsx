import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';
import { LocalePageProps } from '@/types/pages';

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: 'Política de Cookies - Lotti',
    en: 'Cookie Policy - Lotti',
    ru: 'Политика Cookies - Lotti',
  };

  return {
    title: titles[locale as keyof typeof titles],
  };
}

export default async function CookiesPage({ params }: LocalePageProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f5f5]">
        <article className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
              {/* Header */}
              <header className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                  Política de Cookies
                </h1>
                <p className="text-gray-600">
                  Última actualización: 4 de diciembre de 2024
                </p>
              </header>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    1. ¿Qué son las cookies?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    2. ¿Cómo utilizamos las cookies?
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Utilizamos cookies para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Permitir que el sitio web funcione correctamente</li>
                    <li>Recordar sus preferencias y configuraciones</li>
                    <li>Analizar cómo utiliza nuestro sitio web</li>
                    <li>Mejorar su experiencia de usuario</li>
                    <li>Mostrar publicidad relevante</li>
                    <li>Medir la efectividad de nuestras campañas de marketing</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    3. Tipos de cookies que utilizamos
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Necessary Cookies */}
                    <div className="bg-[#f5f5f5] rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Cookies estrictamente necesarias
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Estas cookies son esenciales para que pueda navegar por el sitio web y utilizar sus funciones. Sin estas cookies, los servicios que ha solicitado no pueden proporcionarse.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead className="bg-gray-200">
                            <tr>
                              <th className="px-4 py-2 text-left">Cookie</th>
                              <th className="px-4 py-2 text-left">Propósito</th>
                              <th className="px-4 py-2 text-left">Duración</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            <tr className="border-b">
                              <td className="px-4 py-2">NEXT_LOCALE</td>
                              <td className="px-4 py-2">Almacena preferencia de idioma</td>
                              <td className="px-4 py-2">1 año</td>
                            </tr>
                            <tr className="border-b">
                              <td className="px-4 py-2">cc_cookie</td>
                              <td className="px-4 py-2">Guarda preferencias de cookies</td>
                              <td className="px-4 py-2">6 meses</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">session_id</td>
                              <td className="px-4 py-2">Mantiene sesión de usuario</td>
                              <td className="px-4 py-2">Sesión</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-[#f5f5f5] rounded-lg p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Cookies de análisis
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, recopilando y reportando información de forma anónima.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead className="bg-gray-200">
                            <tr>
                              <th className="px-4 py-2 text-left">Cookie</th>
                              <th className="px-4 py-2 text-left">Propósito</th>
                              <th className="px-4 py-2 text-left">Duración</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            <tr className="border-b">
                              <td className="px-4 py-2">_ga</td>
                              <td className="px-4 py-2">Google Analytics - ID único</td>
                              <td className="px-4 py-2">2 años</td>
                            </tr>
                            <tr className="border-b">
                              <td className="px-4 py-2">_ga_*</td>
                              <td className="px-4 py-2">Google Analytics - Estado sesión</td>
                              <td className="px-4 py-2">2 años</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">_gid</td>
                              <td className="px-4 py-2">Google Analytics - Distinguir usuarios</td>
                              <td className="px-4 py-2">24 horas</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="bg-[#f5f5f5] rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Cookies de marketing
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Estas cookies se utilizan para rastrear a los visitantes en los sitios web con la intención de mostrar anuncios relevantes y atractivos.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead className="bg-gray-200">
                            <tr>
                              <th className="px-4 py-2 text-left">Cookie</th>
                              <th className="px-4 py-2 text-left">Propósito</th>
                              <th className="px-4 py-2 text-left">Duración</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            <tr className="border-b">
                              <td className="px-4 py-2">_fbp</td>
                              <td className="px-4 py-2">Facebook Pixel - Seguimiento</td>
                              <td className="px-4 py-2">3 meses</td>
                            </tr>
                            <tr className="border-b">
                              <td className="px-4 py-2">_gcl_au</td>
                              <td className="px-4 py-2">Google Ads - Conversiones</td>
                              <td className="px-4 py-2">3 meses</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">IDE</td>
                              <td className="px-4 py-2">Google DoubleClick - Publicidad</td>
                              <td className="px-4 py-2">1 año</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    4. Cookies de terceros
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Además de nuestras propias cookies, también utilizamos cookies de terceros para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Google Analytics:</strong> Para analizar el uso del sitio web</li>
                    <li><strong>Google Ads:</strong> Para medir la efectividad de nuestras campañas publicitarias</li>
                    <li><strong>Facebook Pixel:</strong> Para optimizar anuncios y medir conversiones</li>
                    <li><strong>Hotjar:</strong> Para entender el comportamiento del usuario mediante mapas de calor</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Estas empresas pueden utilizar la información recopilada de acuerdo con sus propias políticas de privacidad.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    5. Cómo gestionar las cookies
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Puede controlar y gestionar las cookies de varias formas:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        A través de nuestro banner de cookies
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Puede cambiar sus preferencias de cookies en cualquier momento haciendo clic en el botón "Configurar cookies" en la parte inferior de la página.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        A través de su navegador
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        La mayoría de los navegadores le permiten controlar las cookies a través de sus configuraciones. Para más información:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#5a9fb8] hover:underline">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-[#5a9fb8] hover:underline">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#5a9fb8] hover:underline">Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#5a9fb8] hover:underline">Microsoft Edge</a></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Herramientas de terceros
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        También puede optar por no participar en el seguimiento de terceros:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#5a9fb8] hover:underline">Google Analytics Opt-out</a></li>
                        <li><a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-[#5a9fb8] hover:underline">Facebook - Preferencias de anuncios</a></li>
                        <li><a href="http://www.youronlinechoices.com/es/" target="_blank" rel="noopener noreferrer" className="text-[#5a9fb8] hover:underline">Your Online Choices</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                    <p className="text-sm text-yellow-800">
                      <strong>Nota:</strong> Tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad de nuestro sitio web y limitar su experiencia de usuario.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    6. Cookies en dispositivos móviles
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Si accede a nuestro sitio web desde un dispositivo móvil, también utilizamos cookies. Puede gestionar las cookies en dispositivos móviles a través de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>iOS:</strong> Ajustes → Safari → Privacidad y seguridad</li>
                    <li><strong>Android:</strong> Configuración → Privacidad → Borrar datos de navegación</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    7. Actualizaciones de esta política
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Le recomendamos revisar esta página regularmente para estar informado sobre nuestro uso de cookies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    8. Más información
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para más información sobre cómo protegemos su privacidad, consulte nuestra <a href="/legal/privacidad" className="text-[#5a9fb8] hover:underline">Política de Privacidad</a>.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Si tiene preguntas sobre nuestra Política de Cookies, contáctenos:
                  </p>
                  <div className="bg-[#f5f5f5] rounded-lg p-6">
                    <p className="text-gray-900 font-semibold mb-2">Lotti Lavandería</p>
                    <p className="text-gray-700">Email: <a href="mailto:privacy@lotti.com" className="text-[#5a9fb8] hover:underline">privacy@lotti.com</a></p>
                    <p className="text-gray-700">Teléfono: +34 XXX XXX XXX</p>
                    <p className="text-gray-700">Dirección: Barcelona, España</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

