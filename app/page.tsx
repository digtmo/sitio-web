import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle, Target, Eye, Shield, Lightbulb, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GeoExLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="h-12 relative">
              <div className="h-12 w-32 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GeoEx</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#inicio" className="text-slate-800 hover:text-red-600 transition-colors">
                Inicio
              </Link>
              <Link href="#nosotros" className="text-slate-800 hover:text-red-600 transition-colors">
                Nosotros
              </Link>
              <Link href="#servicios" className="text-slate-800 hover:text-red-600 transition-colors">
                Servicios
              </Link>
              <Link href="#contacto" className="text-slate-800 hover:text-red-600 transition-colors">
                Contacto
              </Link>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700">Solicitar Cotización</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-slate-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Ingeniería geotécnica de alto nivel técnico
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Estudios de suelos, prospección sísmica y soluciones con geosintéticos para obras seguras y
                  eficientes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8">
                  Solicitar cotización
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-slate-300 text-slate-800 hover:text-red-600 hover:border-red-600"
                >
                  Ver nuestros servicios
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Panorámica de obra civil con el equipo GeoEx en terreno"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Close-up de sondaje SPT en ejecución"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Quiénes somos</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  GeoEx es una consultora chilena especializada en ingeniería geotécnica y exploración del terreno.
                  Nuestro equipo está formado por ingenieros con sólida formación académica y experiencia en proyectos
                  de infraestructura, minería y edificación.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-red-600">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Target className="h-6 w-6 text-red-600 mr-2" />
                      <h3 className="text-xl font-semibold text-slate-800">Misión</h3>
                    </div>
                    <p className="text-slate-600">
                      Entregar soluciones geotécnicas confiables que optimicen la seguridad y la economía de cada obra.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-slate-800">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Eye className="h-6 w-6 text-slate-800 mr-2" />
                      <h3 className="text-xl font-semibold text-slate-800">Visión</h3>
                    </div>
                    <p className="text-slate-600">
                      Ser el socio de referencia en estudios de suelos y geofísica aplicada en Chile y LATAM.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Image
                src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Profesionales trabajando en laboratorio y terreno"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Precisión</h4>
                    <p className="text-sm text-slate-600">Datos de calidad para decisiones seguras</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-slate-800" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Innovación</h4>
                    <p className="text-sm text-slate-600">Tecnologías de punta en terreno y laboratorio</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                  <Clock className="h-6 w-6 text-slate-800" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Compromiso</h4>
                    <p className="text-sm text-slate-600">Plazos cumplidos y acompañamiento integral</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                  <Shield className="h-6 w-6 text-red-600" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Seguridad</h4>
                    <p className="text-sm text-slate-600">Protección de personas y entorno en cada faena</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales en ingeniería geotécnica con tecnología de vanguardia y expertise técnico
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Servicio 1 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-red-600">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Image
                    src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=120"
                    alt="Campañas de Mecánica de Suelos"
                    width={120}
                    height={120}
                    className="rounded-lg flex-shrink-0"
                  />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-800">
                      Campañas de Mecánica de Suelos e Informes de Caracterización Geotécnica
                    </h3>
                    <p className="text-slate-600">
                      Caracterización geotécnica: sondajes geotécnicos (SPT, CPT) y ensayos de laboratorio/in-situ
                      (triaxial, corte directo, densidad). Informes según normativa chilena NCh3206 y guías
                      internacionales ASTM.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Servicio 2 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-slate-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Image
                    src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=120"
                    alt="Prospección Geofísica"
                    width={120}
                    height={120}
                    className="rounded-lg flex-shrink-0"
                  />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-800">
                      Prospección Geofísica para Clasificación Sísmica – DS61 y NCh2369:2025
                    </h3>
                    <ul className="text-slate-600 space-y-1">
                      <li>• MASW (Análisis de ondas superficiales multicanal)</li>
                      <li>• HVSR (Nakamura) para periodo fundamental</li>
                      <li>• ReMi (Refraction Microtremor) para Vs30</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Servicio 3 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-red-600">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Image
                    src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=120"
                    alt="Análisis de Estabilidad Geotécnica"
                    width={120}
                    height={120}
                    className="rounded-lg flex-shrink-0"
                  />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-800">Análisis de Estabilidad Geotécnica</h3>
                    <ul className="text-slate-600 space-y-1">
                      <li>• Taludes y excavaciones</li>
                      <li>• Evaluación de licuación y asentamientos</li>
                      <li>• Back-analysis y recomendaciones de mitigación</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Servicio 4 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-slate-800">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Image
                    src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=120"
                    alt="Diseño Geotécnico de Ingeniería"
                    width={120}
                    height={120}
                    className="rounded-lg flex-shrink-0"
                  />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-800">Diseño Geotécnico de Ingeniería</h3>
                    <ul className="text-slate-600 space-y-1">
                      <li>• Pilotes y micropilotes</li>
                      <li>• Muros de contención</li>
                      <li>• Fundaciones superficiales y profundas</li>
                      <li>• Mejoramiento de suelos (compaction grouting, columnas de grava)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Servicio 5 - Full width */}
          <Card className="mt-8 hover:shadow-lg transition-shadow border-t-4 border-t-red-600">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <Image
                  src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Revestimientos con Geosintéticos"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-800">Revestimientos con Geosintéticos</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Control de erosión</h4>
                      <p className="text-sm text-slate-600">Protección de taludes y superficies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Impermeabilización</h4>
                      <p className="text-sm text-slate-600">Drenaje y filtración especializada</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Refuerzo mecánico</h4>
                      <p className="text-sm text-slate-600">Separación de estratos</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Contacto</h2>
            <p className="text-xl text-slate-600">¿Tienes un proyecto? Conversemos.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Dirección</h3>
                    <p className="text-slate-600">Santiago, Chile</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-slate-200 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Teléfono</h3>
                    <p className="text-slate-600">+56 9 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Correo</h3>
                    <p className="text-slate-600">contacto@geoex.cl</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-slate-200 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">WhatsApp Business</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-slate-300 hover:border-red-600 hover:text-red-600"
                    >
                      Contactar por WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Plano de ubicación o mapa"
                  width={400}
                  height={200}
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            <Card className="border border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Formulario de Contacto</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
                      <Input placeholder="Nombre de la empresa" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                      <Input placeholder="+56 9 xxxx xxxx" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Proyecto</label>
                    <Input placeholder="Ej: Estudio de suelos para edificación" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                    <Textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} />
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">Enviar Mensaje</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="h-12 w-32 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">GeoEx</span>
              </div>
              <p className="text-slate-300">
                Ingeniería geotécnica de alto nivel técnico para obras seguras y eficientes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Mecánica de Suelos</li>
                <li>Prospección Geofísica</li>
                <li>Análisis de Estabilidad</li>
                <li>Diseño Geotécnico</li>
                <li>Geosintéticos</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-slate-300">
                <p>contacto@geoex.cl</p>
                <p>+56 9 1234 5678</p>
                <p>Santiago, Chile</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} GeoEx. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* CTA Flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="bg-red-600 hover:bg-red-700 shadow-lg">
          <MessageCircle className="h-5 w-5 mr-2" />
          Cotizar Ahora
        </Button>
      </div>
    </div>
  )
}