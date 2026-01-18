import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, FileText, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import serviceContable from "@/assets/service-contable.jpg";
import servicePlanillas from "@/assets/service-planillas.jpg";
import serviceTributario from "@/assets/service-tributario.jpg";

const services = [
  {
    icon: FileText,
    title: "Gestión Contable",
    description: "Brindamos soluciones contables personalizadas para empresas grandes, medianas, pequeñas, y emprendimientos.",
    image: serviceContable,
    href: "/servicios/gestion-contable",
  },
  {
    icon: Users,
    title: "Gestión De Planillas",
    description: "Simplificamos y automatizamos la gestión de planillas de tu empresa, adaptándonos a las necesidades de cualquier negocio.",
    image: servicePlanillas,
    href: "/servicios/gestion-planillas",
  },
  {
    icon: BarChart3,
    title: "Outsourcing Tributario",
    description: "Ofrecemos servicios en la gestión tributaria para empresas de cualquier tamaño, garantizando el cumplimiento normativo.",
    image: serviceTributario,
    href: "/servicios/outsourcing-tributario",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Conoce nuestros servicios{" "}
            <span className="gradient-text-navy">para ayudar a tu empresa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluciones integrales diseñadas para optimizar tus procesos empresariales
          </p>
        </motion.div>

        {/* Services cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-card card-hover h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-5 -mt-14 relative z-10 shadow-medium bg-card">
                    <service.icon className="text-secondary" size={28} />
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-xl py-5 transition-all duration-300 group/btn"
                  >
                    <Link to={service.href}>
                      Más Información
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
