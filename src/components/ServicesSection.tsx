import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, FileText, Users, BarChart3, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FileText,
    title: "Gestión Contable",
    description: "Brindamos soluciones contables personalizadas para empresas grandes, medianas, pequeñas, y emprendimientos.",
    href: "/servicios/gestion-contable",
  },
  {
    icon: Users,
    title: "Gestión De Planillas",
    description: "Simplificamos y automatizamos la gestión de planillas de tu empresa, adaptándonos a las necesidades de cualquier negocio.",
    href: "/servicios/gestion-planillas",
  },
  {
    icon: BarChart3,
    title: "Outsourcing Tributario",
    description: "Ofrecemos servicios en la gestión tributaria para empresas de cualquier tamaño, garantizando el cumplimiento normativo.",
    href: "/servicios/outsourcing-tributario",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            Conoce nuestros servicios{" "}
            <span className="gradient-text-navy">para ayudar a tu empresa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluciones integrales diseñadas para optimizar tus procesos empresariales
          </p>
        </motion.div>

        {/* 3 Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-white border-2 border-secondary rounded-3xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 hover:bg-secondary"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/20">
                <service.icon className="text-secondary group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary mb-3 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-white/90">
                {service.description}
              </p>
              <Link
                to={service.href}
                className="inline-flex items-center text-secondary font-semibold hover:tracking-wide transition-all duration-300 group-hover:text-white"
              >
                Más Información
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
