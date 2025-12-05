import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';
import { LocalePageProps } from '@/types/pages';

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: 'Términos y Condiciones - Lotti',
    en: 'Terms and Conditions - Lotti',
    ru: 'Условия использования - Lotti',
  };

  return {
    title: titles[locale as keyof typeof titles],
  };
}

export default async function TermsPage({ params }: LocalePageProps) {
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
                  Términos y Condiciones
                </h1>
                <p className="text-gray-600">
                  Última actualización: 4 de diciembre de 2024
                </p>
              </header>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    1. Aceptación de los términos
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Al acceder y utilizar los servicios de Lotti (en adelante, "el Servicio"), usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro Servicio.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    2. Descripción del servicio
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Lotti ofrece un servicio de lavandería profesional con recogida y entrega a domicilio en Barcelona. Nuestros servicios incluyen:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Recogida de ropa en la dirección indicada</li>
                    <li>Lavado profesional según el tipo de tejido</li>
                    <li>Entrega de ropa limpia en la dirección especificada</li>
                    <li>Diferentes modos de lavado y opciones de servicio</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    3. Registro y cuenta de usuario
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para utilizar nuestro Servicio, debe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Ser mayor de 18 años</li>
                    <li>Proporcionar información precisa y completa durante el registro</li>
                    <li>Mantener la seguridad de su cuenta y contraseña</li>
                    <li>Notificarnos inmediatamente de cualquier uso no autorizado</li>
                    <li>Ser responsable de todas las actividades realizadas bajo su cuenta</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    4. Realización de pedidos
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Al realizar un pedido:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Debe proporcionar una dirección válida de recogida y entrega dentro de nuestra zona de servicio</li>
                    <li>Debe especificar el tipo de servicio y modo de lavado deseado</li>
                    <li>Acepta que los tiempos de servicio son estimados y pueden variar según la demanda</li>
                    <li>Confirma que la ropa entregada es de su propiedad o tiene autorización para lavarla</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    5. Precios y pago
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Nuestros precios:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Se calculan por kilogramo de ropa</li>
                    <li>Incluyen IVA y están expresados en euros (€)</li>
                    <li>Pueden variar según el tipo de servicio y modo de lavado</li>
                    <li>Están sujetos a cambios sin previo aviso</li>
                    <li>Se cobran al finalizar el servicio</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Aceptamos pagos mediante tarjeta de crédito/débito, Apple Pay, Google Pay y otros métodos especificados en la aplicación.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    6. Cancelaciones y reembolsos
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Cancelaciones:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Puede cancelar un pedido sin cargo hasta 15 minutos después de realizarlo</li>
                    <li>Después de este período, se aplicará un cargo del 50% si la ropa aún no ha sido recogida</li>
                    <li>Una vez recogida la ropa, no se aceptan cancelaciones</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Reembolsos:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Se procesarán en un plazo de 5-10 días hábiles</li>
                    <li>Se realizarán al método de pago original</li>
                    <li>Pueden estar sujetos a inspección y aprobación</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    7. Responsabilidad y garantías
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Nuestra responsabilidad:</strong>
                  </p>                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Tratamos todas las prendas con el máximo cuidado profesional</li>
                    <li>Utilizamos productos y métodos apropiados para cada tipo de tejido</li>
                    <li>En caso de daño o pérdida, la compensación máxima será de 10 veces el precio del servicio o el valor de mercado de la prenda (el menor de los dos)</li>
                    <li>No nos hacemos responsables de daños en prendas con instrucciones de lavado incorrectas o ausentes</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Limitaciones:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>No somos responsables de objetos dejados en los bolsillos</li>
                    <li>No garantizamos la eliminación completa de manchas difíciles o antiguas</li>
                    <li>No nos hacemos responsables de prendas de alto valor sin declaración previa</li>
                    <li>Debe reportar cualquier problema dentro de las 24 horas posteriores a la entrega</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    8. Propiedad intelectual
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Todo el contenido del Servicio, incluyendo textos, gráficos, logos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Lotti o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual españolas e internacionales.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    9. Uso aceptable
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Usted se compromete a NO:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Utilizar el Servicio para fines ilegales o no autorizados</li>
                    <li>Intentar obtener acceso no autorizado a nuestros sistemas</li>
                    <li>Interferir con el funcionamiento del Servicio</li>
                    <li>Transmitir virus, malware o código malicioso</li>
                    <li>Realizar ingeniería inversa del software</li>
                    <li>Recopilar información de otros usuarios sin su consentimiento</li>
                    <li>Hacerse pasar por otra persona o entidad</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    10. Suspensión y terminación
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Nos reservamos el derecho de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Suspender o terminar su cuenta en cualquier momento por violación de estos términos</li>
                    <li>Rechazar el servicio a cualquier persona por cualquier motivo</li>
                    <li>Modificar o discontinuar el Servicio sin previo aviso</li>
                    <li>Eliminar contenido que consideremos inapropiado</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Usted puede cancelar su cuenta en cualquier momento contactándonos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    11. Modificaciones de los términos
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación. Su uso continuado del Servicio después de cualquier modificación constituye su aceptación de los nuevos términos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    12. Ley aplicable y jurisdicción
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de España. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Barcelona, España.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    13. Resolución de disputas
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En caso de cualquier disputa:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Primero intente resolverla contactándonos directamente</li>
                    <li>Si no se resuelve, puede acudir a mediación</li>
                    <li>Como último recurso, puede presentar una reclamación ante los tribunales competentes</li>
                    <li>Los consumidores tienen derecho a utilizar la plataforma de resolución de disputas en línea de la UE</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    14. Divisibilidad
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Si alguna disposición de estos Términos y Condiciones se considera inválida o inaplicable, dicha disposición se eliminará o limitará en la medida mínima necesaria, y las disposiciones restantes continuarán en pleno vigor y efecto.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-serif text-gray-900 mb-4">
                    15. Contacto
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para cualquier pregunta sobre estos Términos y Condiciones, contáctenos:
                  </p>
                  <div className="bg-[#f5f5f5] rounded-lg p-6">
                    <p className="text-gray-900 font-semibold mb-2">Lotti Lavandería</p>
                    <p className="text-gray-700">Email: <a href="mailto:legal@lotti.com" className="text-[#5a9fb8] hover:underline">legal@lotti.com</a></p>
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
