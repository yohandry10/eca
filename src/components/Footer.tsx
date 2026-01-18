import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Music2 } from "lucide-react";
import logoEca from "@/assets/logo-eca.png";

const footerLinks = {
  servicios: [
    { name: "Outsourcing contable", href: "/servicios/gestion-contable" },
    { name: "Gestión de Planillas", href: "/servicios/gestion-planillas" },
    { name: "Outsourcing Tributario", href: "/servicios/outsourcing-tributario" },
    { name: "Servicios Adicionales", href: "/servicios/servicios-adicionales" },
  ],
  soporte: [
    { name: "Preguntas Frecuentes", href: "/faq" },
    { name: "Contáctanos", href: "/contacto" },
  ],
  nosotros: [
    { name: "Sobre nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Blog", href: "/blog" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src={logoEca}
                alt="ECA Soluciones Empresariales"
                className="h-20 w-auto mb-6 brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Somos un equipo de profesionales, dedicados a brindar soluciones contables
              y financieras adaptadas a las necesidades de tu negocio.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Music2, href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold text-lg mb-4 mt-6">Nosotros</h4>
            <ul className="space-y-3">
              {footerLinks.nosotros.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary flex-shrink-0 mt-1" size={18} />
                <span className="text-primary-foreground/70 text-sm">
                  Jirón Cosme Bueno 222, Ate. Lima - Perú
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <a
                  href="mailto:consultores.solucioneseca1@gmail.com"
                  className="text-primary-foreground/70 text-sm hover:text-secondary transition-colors break-all"
                >
                  consultores.solucioneseca1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <a
                  href="tel:+51923341098"
                  className="text-primary-foreground/70 text-sm hover:text-secondary transition-colors"
                >
                  (+51) 923 341 098
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} ECA Soluciones Empresariales. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/politica-privacidad" className="text-primary-foreground/50 text-sm hover:text-secondary transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="text-primary-foreground/50 text-sm hover:text-secondary transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
