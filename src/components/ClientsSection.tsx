import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clientsLogos from "@/assets/clients-logos.png";

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-secondary">
            Más de 1,000 comercios
          </h2>
          <p className="text-secondary text-xl md:text-2xl font-display font-semibold">
            confían en nosotros
          </p>
        </motion.div>

        {/* Logos marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Logos container */}
          <div className="flex items-center justify-center py-8">
            <img
              src={clientsLogos}
              alt="Nuestros clientes"
              className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
