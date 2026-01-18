import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
    asunto: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/contador.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-teal/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ bottom: "20%", right: "10%" }}
        />
        
        {/* Geometric shapes */}
        <motion.div
          className="absolute w-4 h-4 bg-secondary/50 rotate-45"
          animate={{ y: [0, -20, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "30%", left: "15%" }}
        />
        <motion.div
          className="absolute w-6 h-6 border-2 border-secondary/30 rounded-full"
          animate={{ y: [0, 15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ top: "60%", left: "8%" }}
        />
        <motion.div
          className="absolute w-3 h-3 bg-teal/40"
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ top: "45%", right: "45%" }}
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 container-custom min-h-screen flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-foreground"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm font-medium">+15 años de experiencia</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              ¡Deja tu contabilidad en{" "}
              <span className="text-secondary">manos expertas!</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="w-1 h-16 bg-secondary rounded-full" />
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Ofrecemos asesoría personalizada y soluciones a medida para tu empresa. 
                Simplifica tu gestión contable y tributaria.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 rounded-full shadow-glow transition-all duration-300 hover:shadow-strong group"
              >
                <Link to="/contacto">
                  <Calendar className="mr-2" size={20} />
                  Agenda una cita
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-white/10 hover:border-primary-foreground/50 px-8 py-6 rounded-full transition-all duration-300"
              >
                <Link to="/nosotros">Conocer más</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { number: "1000+", label: "Clientes" },
                { number: "15+", label: "Años" },
                { number: "4.7", label: "Rating" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-secondary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-3xl p-8 shadow-strong">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2 text-center">
                Soluciones contables a la
              </h3>
              <p className="text-secondary font-display font-semibold text-xl mb-6 text-center">
                medida de tu negocio
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="bg-white/50 border-border/50 focus:border-secondary rounded-xl py-5"
                  />
                  <Input
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                    className="bg-white/50 border-border/50 focus:border-secondary rounded-xl py-5"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/50 border-border/50 focus:border-secondary rounded-xl py-5"
                />
                <Input
                  type="tel"
                  placeholder="Celular"
                  value={formData.celular}
                  onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                  className="bg-white/50 border-border/50 focus:border-secondary rounded-xl py-5"
                />
                <Textarea
                  placeholder="Asunto"
                  value={formData.asunto}
                  onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                  className="bg-white/50 border-border/50 focus:border-secondary rounded-xl resize-none"
                  rows={3}
                />
                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 rounded-xl shadow-glow transition-all duration-300"
                >
                  Enviar solicitud
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-primary-foreground/60"
        >
          <span className="text-sm mb-2">Descubre más</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
