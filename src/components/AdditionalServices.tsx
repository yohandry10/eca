import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileCheck, 
  Building2, 
  Shield, 
  Receipt, 
  Coins, 
  ScrollText, 
  Briefcase, 
  FileSpreadsheet, 
  Scale 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const additionalServices = [
  {
    icon: FileCheck,
    title: "Restitución de Derechos y Arancelarios",
    description: "Nos encargamos de la revisión y preparación de la documentación necesaria para solicitar la devolución de Drawback.",
    category: "TRIBUTARIO",
  },
  {
    icon: Building2,
    title: "Trámites ante SUNAT",
    description: "Brindamos representación y soporte en procesos de fiscalización, gestionando trámites administrativos ante la SUNAT.",
    category: "TRIBUTARIO",
  },
  {
    icon: Shield,
    title: "Trámites ante SUNAFIL",
    description: "Ofrecemos representación y soporte en procesos de fiscalización ante SUNAFIL, gestionando trámites laborales.",
    category: "TRIBUTARIO",
  },
  {
    icon: Receipt,
    title: "Solicitud de Devolución de Impuestos",
    description: "Nos encargamos de preparar la información necesaria para solicitar la devolución de impuestos.",
    category: "TRIBUTARIO",
  },
  {
    icon: Coins,
    title: "Devolución de otros impuestos",
    description: "La devolución de tributos se produce por un pago indebido del contribuyente o por un pago exceso del mismo.",
    category: "TRIBUTARIO",
  },
  {
    icon: ScrollText,
    title: "Trámites en SUNARP",
    description: "Copia literal, vigencia de poder y más.",
    category: "TRIBUTARIO",
  },
  {
    icon: Briefcase,
    title: "Constitución de empresas",
    description: "Te ayudamos con todo el proceso de constitución legal de tu empresa de manera rápida y segura.",
    category: "TRIBUTARIO",
  },
  {
    icon: FileSpreadsheet,
    title: "Declara y Paga tu DDJJ Impuestos",
    description: "Brindamos representación y soporte en procesos de fiscalización, gestionando trámites administrativos ante la SUNAT.",
    category: "TRIBUTARIO",
  },
  {
    icon: Scale,
    title: "Atención a Fiscalizaciones y Reclamos",
    description: "Brindando apoyo en auditorías de IGV, Impuesto a la Renta y otras obligaciones tributarias.",
    category: "TRIBUTARIO",
  },
];

const AdditionalServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            Trabajamos en tus
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            objetivos empresariales
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card card-hover h-full border border-border/50 hover:border-secondary/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="text-secondary" size={24} />
                  </div>
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>

                <Button
                  variant="ghost"
                  className="text-secondary hover:text-secondary hover:bg-secondary/10 p-0 h-auto font-medium group/btn"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Recibir más información
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
