import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { 
  MountainIcon, 
  UserIcon, 
  StarIcon, 
  BarChartIcon, 
  ShieldCheckIcon, 
  GraduationCapIcon, 
  HeadphonesIcon 
} from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">FreelanceFlow</span>
          <span className="sr-only">FreelanceFlow by Jagoqui</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Buscar Freelancers
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Publicar Proyecto
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Planes
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Iniciar Sesión
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bienvenido a FreelanceFlow
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  La plataforma de Jagoqui que conecta talento freelance con oportunidades globales.
                  Gestiona proyectos, construye tu carrera y haz crecer tu negocio.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Busca freelancers o proyectos" type="text" />
                  <Button type="submit">Buscar</Button>
                </form>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg">Soy Freelancer</Button>
                <Button size="lg" variant="outline">Soy Cliente</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              ¿Por qué elegir FreelanceFlow?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <UserIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Portafolios Destacados</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Muestra tu mejor trabajo y destaca entre la multitud con portafolios personalizados.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <StarIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Sistema de Calificaciones</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Construye tu reputación con calificaciones y reseñas detalladas de clientes satisfechos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <BarChartIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Gestión de Proyectos</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Seguimiento en tiempo real de costos, avances y entregables del proyecto.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <ShieldCheckIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Pagos Seguros</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Sistema de pagos protegido y liberación de fondos por hitos completados.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <GraduationCapIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Desarrollo Profesional</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Acceso a cursos, webinars y recursos para mejorar tus habilidades.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <HeadphonesIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Soporte 24/7</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Asistencia continua para resolver dudas y problemas en cualquier momento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Freelancers Destacados
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Ana García", role: "Diseñadora UX/UI", rating: 5 },
                { name: "Carlos Ruiz", role: "Desarrollador Full Stack", rating: 4 },
                { name: "Laura Méndez", role: "Redactora de Contenidos", rating: 5 },
                { name: "Miguel Ángel", role: "Especialista en Marketing Digital", rating: 4 }
              ].map((freelancer, i) => (
                <Card key={i}>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <Avatar className="w-20 h-20">
                      <AvatarImage alt={freelancer.name} src={`/placeholder.svg?height=80&width=80`} />
                      <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">{freelancer.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{freelancer.role}</p>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className={`w-4 h-4 ${star <= freelancer.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Lo que dicen nuestros usuarios
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "María Rodríguez", role: "Emprendedora", comment: "FreelanceFlow ha transformado la manera en que gestiono mis proyectos. La calidad de los freelancers es excepcional." },
                { name: "Juan Pérez", role: "Freelancer Diseñador", comment: "Gracias a FreelanceFlow, he podido expandir mi cartera de clientes y mejorar mis habilidades con sus recursos de aprendizaje." },
                { name: "Sofía Martínez", role: "Gerente de Proyecto", comment: "La plataforma es intuitiva y el soporte al cliente es excelente. Ha simplificado enormemente nuestro proceso de contratación." }
              ].map((testimonial, i) => (
                <Card key={i}>
                  <CardContent className="flex flex-col space-y-2 p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                    <div className="flex items-center space-x-2 mt-4">
                      <Avatar>
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Únete a FreelanceFlow hoy
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Comienza tu viaje en el mundo del freelancing o encuentra el talento perfecto para tu próximo proyecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">Registrarse Gratis</Button>
                <Button size="lg" variant="outline">Explorar Proyectos</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 FreelanceFlow by Jagoqui. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Acerca de Jagoqui
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de Privacidad
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contacto
          </Link>
        </nav>
      </footer>
    </div>
  );
}
