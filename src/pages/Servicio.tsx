import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import serviceContable from "@/assets/service-contable.jpg";
import servicePlanillas from "@/assets/service-planillas.jpg";
import serviceTributario from "@/assets/service-tributario.jpg";

const services = [
  {
    id: "gestion-contable",
    title: "Gestión Contable",
    description: "Brindamos soluciones contables personalizadas para empresas grandes, medianas, pequeñas, y emprendimientos.",
    fullDescription: "Nos comprometemos a ser más que un proveedor de servicios, a ser un aliado estratégico en el crecimiento y éxito de su negocio.",
    image: serviceContable,
    features: [
      "Registro de operaciones contables",
      "Elaboración de estados financieros",
      "Análisis de costos y gastos",
      "Reportes gerenciales personalizados",
      "Asesoría contable permanente",
    ],
  },
  {
    id: "gestion-planillas",
    title: "Gestión de Planillas",
    description: "Simplificamos y automatizamos la gestión de planillas de tu empresa, adaptándonos a las necesidades de cualquier negocio.",
    fullDescription: "Gestionamos de manera integral todos los aspectos relacionados con la nómina de tu empresa.",
    image: servicePlanillas,
    features: [
      "Cálculo y elaboración de planillas",
      "Gestión de beneficios sociales",
      "Trámites ante AFP y EsSalud",
      "Liquidaciones de beneficios",
      "Contratos de trabajo",
    ],
  },
  {
    id: "outsourcing-tributario",
    title: "Outsourcing Tributario",
    description: "Ofrecemos servicios en la gestión tributaria para empresas de cualquier tamaño, garantizando el cumplimiento de las normativas fiscales vigentes.",
    fullDescription: "Aseguramos que tu empresa cumpla con todas las obligaciones tributarias de manera oportuna.",
    image: serviceTributario,
    features: [
      "Declaraciones mensuales y anuales",
      "Planeamiento tributario",
      "Fiscalizaciones SUNAT",
      "Recuperación de impuestos",
      "Consultoría tributaria",
    ],
  },
  {
    id: "servicios-adicionales",
    title: "Servicios Adicionales",
    description: "Ofrecemos una gama completa de servicios adicionales para cubrir todas las necesidades de tu empresa.",
    fullDescription: "Complementamos nuestra oferta con servicios especializados para tu tranquilidad.",
    image: serviceContable,
    features: [
      "Constitución de empresas",
      "Trámites ante SUNAT y SUNAFIL",
      "Devolución de impuestos",
      "Drawback",
      "Trámites en SUNARP",
    ],
  },
];

const ServicioPage = () => {
  const location = useLocation();
  const currentServiceId = location.pathname.split("/").pop();
  const [activeService, setActiveService] = useState(
    services.find((s) => s.id === currentServiceId) || services[0]
  );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          
          <div className="relative z-10 container-custom py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-primary-foreground/70 mb-4"
            >
              <Link to="/" className="hover:text-secondary transition-colors">Inicio</Link>
              <ChevronRight size={16} />
              <Link to="/servicios" className="hover:text-secondary transition-colors">Servicios</Link>
              <ChevronRight size={16} />
              <span className="text-secondary">{activeService.title}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-primary-foreground"
            >
              {activeService.title}
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  {/* Services list */}
                  <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                    <div className="bg-secondary p-4">
                      <h3 className="text-lg font-display font-bold text-secondary-foreground">
                        Servicios
                      </h3>
                    </div>
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/servicios/${service.id}`}
                          onClick={() => setActiveService(service)}
                          className={`block px-4 py-3 rounded-xl transition-all ${
                            activeService.id === service.id
                              ? "bg-secondary/10 text-secondary font-medium"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Contact card */}
                  <div className="bg-gradient-to-br from-primary to-navy-light rounded-2xl p-6 text-primary-foreground">
                    <h3 className="text-lg font-display font-bold mb-4">
                      Optimiza tus finanzas con nosotros
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-secondary" />
                        <span className="text-primary-foreground/80">
                          Jirón Cosme y Bueno 222 Urb. Salamanca de Monterrico - Ate
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-secondary" />
                        <span className="text-primary-foreground/80">
                          consultores.solucioneseca1@gmail.com
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-secondary" />
                        <span className="text-primary-foreground/80">
                          (+51) 923 341 098
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="lg:col-span-2">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Main image */}
                  <div className="rounded-2xl overflow-hidden mb-8">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>

                  {/* Category badge */}
                  <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                    SERVICIO CONTABLE
                  </span>

                  <h2 className="text-3xl font-display font-bold text-secondary mb-4">
                    {activeService.title}
                  </h2>

                  <p className="text-lg text-foreground font-medium italic border-l-4 border-secondary pl-4 mb-6">
                    {activeService.fullDescription}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {activeService.description}
                  </p>

                  {/* Features */}
                  <div className="bg-muted rounded-2xl p-6 mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-4">
                      ¿Qué incluye este servicio?
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {activeService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="text-secondary flex-shrink-0" size={18} />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 rounded-full shadow-glow"
                  >
                    <a href="https://wa.me/51923341098" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Solicitar más información
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicioPage;
