import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutTeam from "@/assets/about-team.jpg";

const features = [
  "Asesoría personalizada en contabilidad",
  "Gestión de impuestos y planillas",
  "Auditoría y finanzas empresariales",
  "Trámites ante SUNAT y SUNAFIL",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-pale/50 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              className="absolute -top-4 -left-4 z-20 bg-white rounded-full p-6 shadow-strong"
            >
              <div className="text-center">
                <span className="text-4xl font-display font-bold text-secondary">15+</span>
                <p className="text-xs text-muted-foreground mt-1">Años de<br />experiencia</p>
              </div>
            </motion.div>

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src="/contador3.png"
                alt="Equipo ECA"
                className="w-full h-auto object-cover"
              />
              {/* Overlay removed as per request */}
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-strong max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Trabajo profesional</p>
                  <p className="text-sm text-muted-foreground">Soluciones inmediatas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
              QUIENES SOMOS
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
              Trabajamos en tus{" "}
              <span className="gradient-text-navy">objetivos empresariales</span>
            </h2>

            <div className="w-20 h-1 bg-secondary rounded-full mb-6" />

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="text-foreground font-medium italic">
                Somos un equipo de profesionales especializados en ofrecer soluciones contables,
                financieras y tributarias.
              </span>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Nos enfocamos en brindar asesoría personalizada en contabilidad, impuestos,
              gestión de planillas, finanzas, costos y auditoría. Además, gestionamos trámites
              relacionados con la devolución de impuestos, restitución de derechos arancelarios
              como Drawback, y representamos a nuestros clientes ante entidades como la SUNAT
              y SUNAFIL en procesos de fiscalización y auditoría.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-secondary" size={14} />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 rounded-full shadow-glow group"
            >
              <Link to="/nosotros">
                Conocer más
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
