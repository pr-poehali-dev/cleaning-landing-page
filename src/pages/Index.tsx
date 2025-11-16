import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Building2',
      title: 'Limpieza de Oficinas',
      description: 'Espacios de trabajo impecables para máxima productividad'
    },
    {
      icon: 'Monitor',
      title: 'Áreas IT',
      description: 'Limpieza especializada de salas de servidores y equipos'
    },
    {
      icon: 'Coffee',
      title: 'Cocinas y Comedores',
      description: 'Zonas comunes higiénicas y acogedoras'
    },
    {
      icon: 'Users',
      title: 'Salas de Reuniones',
      description: 'Espacios profesionales para impresionar a clientes'
    },
    {
      icon: 'Wind',
      title: 'Desinfección Profunda',
      description: 'Protección sanitaria completa para tu equipo'
    },
    {
      icon: 'Calendar',
      title: 'Servicio Flexible',
      description: 'Horarios adaptados a tu operativa diaria'
    }
  ];

  const benefits = [
    {
      icon: 'Shield',
      title: 'Personal Certificado',
      description: 'Equipo profesional con formación especializada'
    },
    {
      icon: 'Leaf',
      title: 'Productos Ecológicos',
      description: 'Químicos seguros y respetuosos con el medio ambiente'
    },
    {
      icon: 'Clock',
      title: 'Disponibilidad 24/7',
      description: 'Servicio fuera de horario laboral sin interrupciones'
    },
    {
      icon: 'Award',
      title: '5 Años de Experiencia',
      description: 'Más de 200 empresas IT confían en nosotros'
    }
  ];

  const pricing = [
    {
      name: 'Básico',
      price: '€299',
      period: '/mes',
      features: [
        '2 limpiezas semanales',
        'Oficinas hasta 150m²',
        'Productos incluidos',
        'Limpieza superficial'
      ]
    },
    {
      name: 'Profesional',
      price: '€599',
      period: '/mes',
      features: [
        '3 limpiezas semanales',
        'Oficinas hasta 300m²',
        'Productos premium',
        'Limpieza profunda',
        'Desinfección equipos IT'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '€999',
      period: '/mes',
      features: [
        'Limpieza diaria',
        'Oficinas ilimitadas',
        'Productos ecológicos premium',
        'Limpieza profunda + desinfección',
        'Gestor dedicado',
        'Servicio 24/7'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias! Nos pondremos en contacto pronto.');
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">CleanTech BCN</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#ventajas" className="hover:text-primary transition-colors">Ventajas</a>
            <a href="#precios" className="hover:text-primary transition-colors">Precios</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>
          <Button size="sm" className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Llamar Ahora
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                🏢 Especialistas en IT Offices
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Tu Oficina IT,
                <span className="text-primary"> Siempre Impecable</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Limpieza profesional especializada para empresas tecnológicas en Barcelona. 
                Ambientes limpios = equipos productivos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Reservar Limpieza
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Ver Proceso
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Empresas IT</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Disponibilidad</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/a3e3efc0-e97a-403b-a936-ec23fbc477f4/files/e99cc091-420b-4635-b3e1-93a64b6bec2d.jpg" 
                alt="Equipo de limpieza profesional" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-secondary" size={32} />
                  <div>
                    <div className="font-semibold">Barcelona y alrededores</div>
                    <div className="text-sm text-muted-foreground">Cobertura completa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Para Quién es Este Servicio?</h2>
          <p className="text-lg mb-12 opacity-90 max-w-3xl mx-auto">
            Especialmente diseñado para empresas tecnológicas que valoran la limpieza, 
            la salud del equipo y un ambiente profesional
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Code2', text: 'Startups Tech' },
              { icon: 'Briefcase', text: 'Consultoras IT' },
              { icon: 'Rocket', text: 'Scale-ups' },
              { icon: 'Building', text: 'Hubs & Coworking' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="pt-6 text-center">
                  <Icon name={item.icon} size={48} className="mx-auto mb-4" />
                  <p className="font-semibold text-lg">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones completas de limpieza adaptadas a las necesidades de tu empresa tecnológica
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ventajas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Por Qué Elegirnos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiencia, profesionalidad y compromiso con la excelencia
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} className="text-secondary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-muted/50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Antes y Después</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desliza para ver la transformación de espacios reales
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[500px]">
                <img 
                  src="https://cdn.poehali.dev/projects/a3e3efc0-e97a-403b-a936-ec23fbc477f4/files/484968ef-ce6d-4a4e-8105-1293c123fae0.jpg"
                  alt="Antes de la limpieza" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img 
                    src="https://cdn.poehali.dev/projects/a3e3efc0-e97a-403b-a936-ec23fbc477f4/files/46364efb-fadb-4e30-a439-8bc5c1759b05.jpg"
                    alt="Después de la limpieza" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Icon name="ArrowLeftRight" className="text-primary" size={24} />
                  </div>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                  ANTES
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                  DESPUÉS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="precios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Precios Transparentes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a las necesidades de tu empresa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative ${plan.popular ? 'border-primary border-4 shadow-xl scale-105' : 'border-2'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-6 py-1 rounded-full text-sm font-semibold">
                    MÁS POPULAR
                  </div>
                )}
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-secondary shrink-0 mt-1" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Seleccionar Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Solicita tu Presupuesto</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Déjanos tus datos y te contactaremos en menos de 24 horas con una propuesta personalizada
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Nombre completo" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email corporativo" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Teléfono" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu oficina (m², número de personas, frecuencia deseada...)" 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Enviar Solicitud
                </Button>
              </form>
            </div>
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Teléfono</div>
                      <div className="text-muted-foreground">+34 123 456 789</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@cleantechbcn.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Oficina</div>
                      <div className="text-muted-foreground">Barcelona, España</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Horario</div>
                      <div className="text-muted-foreground">24/7 Disponibles</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 rounded-2xl overflow-hidden h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95777.50091408302!2d2.0787281835976847!3d41.39271493232799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Mapa de Barcelona"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={32} />
                <span className="text-2xl font-bold">CleanTech BCN</span>
              </div>
              <p className="text-white/70">
                Tu partner de confianza en limpieza profesional para empresas tecnológicas en Barcelona.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-white/70">
                <li>Limpieza de Oficinas</li>
                <li>Áreas IT</li>
                <li>Desinfección</li>
                <li>Mantenimiento</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white/70">
                <li>Sobre Nosotros</li>
                <li>Clientes</li>
                <li>Trabaja con Nosotros</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70">
                <li>Términos y Condiciones</li>
                <li>Política de Privacidad</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 CleanTech BCN. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
