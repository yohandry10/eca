import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Jirón Cosme Bueno 222, Ate. Lima - Perú",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "(+51) 923 341 098",
    href: "tel:+51923341098",
  },
  {
    icon: Mail,
    title: "Email",
    content: "consultores.solucioneseca1@gmail.com",
    href: "mailto:consultores.solucioneseca1@gmail.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lunes a Viernes: 9:00 AM - 6:00 PM",
  },
];

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
    asunto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      celular: "",
      asunto: "",
      mensaje: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          
          <div className="relative z-10 container-custom text-center py-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
            >
              Contáctanos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
            >
              Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
                  PONTE EN CONTACTO
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                  ¿Tienes alguna pregunta?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nuestro equipo está listo para brindarte la asesoría que necesitas. 
                  No dudes en contactarnos a través de cualquiera de nuestros canales.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-secondary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-2xl overflow-hidden shadow-card h-64 bg-muted flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8392982647724!2d-76.97087782401836!3d-12.068291188138775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f2e21fb6b3%3A0x46e25f0c8e8c2c0c!2sJir%C3%B3n%20Cosme%20Bueno%20222%2C%20Ate%2015012!5e0!3m2!1ses!2spe!4v1705600000000!5m2!1ses!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card rounded-3xl p-8 shadow-strong">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Envíanos un mensaje
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Completa el formulario y te responderemos a la brevedad.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nombre
                        </label>
                        <Input
                          placeholder="Tu nombre"
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          required
                          className="bg-muted border-border/50 focus:border-secondary rounded-xl py-5"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Apellido
                        </label>
                        <Input
                          placeholder="Tu apellido"
                          value={formData.apellido}
                          onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                          required
                          className="bg-muted border-border/50 focus:border-secondary rounded-xl py-5"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Correo electrónico
                      </label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-muted border-border/50 focus:border-secondary rounded-xl py-5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Celular
                      </label>
                      <Input
                        type="tel"
                        placeholder="+51 999 999 999"
                        value={formData.celular}
                        onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                        required
                        className="bg-muted border-border/50 focus:border-secondary rounded-xl py-5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Asunto
                      </label>
                      <Input
                        placeholder="¿En qué podemos ayudarte?"
                        value={formData.asunto}
                        onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                        required
                        className="bg-muted border-border/50 focus:border-secondary rounded-xl py-5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mensaje
                      </label>
                      <Textarea
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        required
                        rows={4}
                        className="bg-muted border-border/50 focus:border-secondary rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 rounded-xl shadow-glow transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={18} />
                          Enviar mensaje
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
