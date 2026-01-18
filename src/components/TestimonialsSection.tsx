import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Jhon",
    surname: "Dongo Cáceres",
    text: "Trabajo muy profesional en el manejo de la contabilidad, puntual y sobre todo soluciones inmediatas en temas tributarios. Lo recomiendo.",
    rating: 5,
  },
  {
    name: "Alberto",
    surname: "Gosselin",
    text: "Los servicios presentados son oportunos y de excelencia. Entregando soluciones de forma rápida y pensando siempre en la rentabilidad económica de mi empresa.",
    rating: 5,
  },
  {
    name: "Jose Carlos",
    surname: "Livia Ferrer",
    text: "Excelente atención, me ayudaron oportunamente y lo mejor, que fueron rápidos. 100% recomendados.",
    rating: 5,
  },
  {
    name: "Adolfo",
    surname: "León",
    text: "Trabajo muy profesional en el manejo de la contabilidad, puntual y sobre todo soluciones inmediatas en temas tributarios. Lo recomiendo.",
    rating: 5,
  },
  {
    name: "Davis",
    surname: "Alvarez",
    text: "Excelente servicio, bastante paciente para los nuevos usuarios. Recomendado.",
    rating: 5,
  },
  {
    name: "Shady Magaly",
    surname: "Hermitaño Casio",
    text: "Excelente trabajo contable, muy recomendado.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="section-padding bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-sky-pale/30 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
              NUESTROS CLIENTES
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
              Testimonios
            </h2>

            <p className="text-muted-foreground italic text-lg mb-8 border-l-4 border-secondary pl-4">
              Nuestro mayor orgullo es la satisfacción de nuestros clientes. 
              Nos enorgullece ser parte de su crecimiento y éxito financiero.
            </p>

            {/* Current testimonial */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 shadow-card relative"
            >
              <Quote className="absolute top-4 right-4 text-secondary/20" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-gold fill-gold" size={18} />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-teal flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].name[0]}
                </div>
                <div>
                  <p className="font-display font-bold text-secondary">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].surname}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-2 border-secondary/30 hover:bg-secondary hover:text-white"
              >
                <ChevronLeft size={20} />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? "bg-secondary w-8" 
                        : "bg-secondary/30 hover:bg-secondary/50"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-2 border-secondary/30 hover:bg-secondary hover:text-white"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </motion.div>

          {/* Right - Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-sky-pale to-white p-8 flex items-center justify-center">
                {/* Rating card */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-strong p-8 text-center max-w-xs"
                >
                  <div className="text-6xl font-display font-bold text-secondary mb-2">
                    4.7+
                  </div>
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`${i < 4 ? "text-gold fill-gold" : "text-gold/50 fill-gold/50"}`} 
                        size={20} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">50 testimonios</p>
                  <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    Excelente Puntaje
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-medium p-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Verificado</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
