import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Shield, Lightbulb, Users, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import aboutTeam from "@/assets/about-team.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  {
    icon: Heart,
    title: "Compromiso",
    description: "Nos dedicamos a ofrecer un servicio de alta calidad y confiabilidad a cada uno de nuestros clientes.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Incorporamos herramientas tecnológicas y mejores prácticas para mejorar la eficiencia en la gestión contable.",
  },
  {
    icon: Shield,
    title: "Ética",
    description: "Actuamos con integridad y transparencia en todos nuestros procesos.",
  },
  {
    icon: Users,
    title: "Responsabilidad",
    description: "Aseguramos el cumplimiento de las normativas legales vigentes para proteger los intereses de nuestros clientes.",
  },
];

const Nosotros = () => {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          
          <div className="relative z-10 container-custom text-center py-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-secondary font-semibold mb-4"
            >
              Conócenos
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              Sobre nosotros
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
            >
              Con una administración eficiente y un manejo adecuado de tus finanzas, 
              podrás dedicar más energía a tu empresa.
            </motion.p>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-strong">
                  <img
                    src={aboutTeam}
                    alt="Equipo ECA"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Experience badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-strong"
                >
                  <div className="text-center">
                    <span className="text-4xl font-display font-bold">15+</span>
                    <p className="text-sm mt-1">Años de experiencia</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
                  QUIENES SOMOS
                </span>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                  Trabajamos en tus objetivos empresariales
                </h2>

                <p className="text-lg text-foreground font-medium italic mb-4 border-l-4 border-secondary pl-4">
                  Somos un equipo de profesionales especializados en ofrecer soluciones contables, 
                  financieras y tributarias.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nos enfocamos en brindar asesoría personalizada en contabilidad, impuestos, 
                  gestión de planillas, finanzas, costos y auditoría. Además, gestionamos trámites 
                  relacionados con la devolución de impuestos, restitución de derechos arancelarios 
                  como Drawback, y representamos a nuestros clientes ante entidades como la SUNAT 
                  y SUNAFIL en procesos de fiscalización y auditoría.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Nuestro compromiso es proporcionar un servicio de alta calidad, asegurando 
                  el cumplimiento normativo y la optimización de los recursos financieros de 
                  nuestros clientes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={missionRef} className="section-padding bg-muted">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-3xl p-8 shadow-card"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Brindar soluciones contables integrales y personalizadas que permitan a las 
                  micro y pequeñas empresas en Perú gestionar de manera eficiente sus recursos 
                  financieros y cumplir con sus obligaciones fiscales, laborales y tributarias, 
                  contribuyendo así a su crecimiento y sostenibilidad.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-3xl p-8 shadow-card"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser el estudio contable de referencia para micro y pequeñas empresas en Perú, 
                  reconocido por nuestra calidad de servicio, innovación y compromiso con el 
                  desarrollo económico de nuestros clientes.
                </p>
              </motion.div>
            </div>

            {/* Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-gradient-to-r from-primary to-navy-light rounded-3xl p-8 text-primary-foreground"
            >
              <div className="max-w-3xl mx-auto text-center">
                <CheckCircle className="text-secondary mx-auto mb-4" size={40} />
                <h3 className="text-2xl font-display font-bold mb-4">Nuestro Propósito</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Apoyamos a micro y pequeñas empresas en Perú a optimizar sus procesos contables 
                  y financieros, garantizando el cumplimiento de sus obligaciones tributarias y 
                  laborales, a través de un servicio eficiente, confiable y adaptado a sus 
                  necesidades particulares.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Nuestros Valores
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card text-center card-hover"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Nosotros;
