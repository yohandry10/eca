import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import logoEca from "@/assets/logo-eca.png";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Gestión Contable", href: "/servicios/gestion-contable" },
  { name: "Gestión de Planillas", href: "/servicios/gestion-planillas" },
  { name: "Outsourcing Tributario", href: "/servicios/outsourcing-tributario" },
  { name: "Servicios Adicionales", href: "/servicios/servicios-adicionales" },
];

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre ECA", href: "/nosotros" },
  { name: "Servicios", href: "/servicios", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Contáctanos", href: "/contacto" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="hidden lg:block bg-primary text-primary-foreground py-2"
      >
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+51923341098" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} />
              <span>(+51) 923 341 098</span>
            </a>
            <a href="mailto:consultores.solucioneseca1@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} />
              <span>consultores.solucioneseca1@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Jirón Cosme Bueno 222, Ate. Lima - Perú</span>
          </div>
        </div>
      </motion.div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-medium py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.img
              src={logoEca}
              alt="ECA Soluciones Empresariales"
              className="h-12 md:h-16 w-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 font-medium transition-colors link-underline ${
                      location.pathname.includes("/servicios")
                        ? "text-secondary"
                        : isScrolled
                        ? "text-foreground hover:text-secondary"
                        : "text-foreground hover:text-secondary"
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`font-medium transition-colors link-underline ${
                      location.pathname === link.href
                        ? "text-secondary"
                        : isScrolled
                        ? "text-foreground hover:text-secondary"
                        : "text-foreground hover:text-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown for Services */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-strong overflow-hidden"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {services.map((service, idx) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-5 py-3 text-foreground hover:bg-sky-pale hover:text-secondary transition-colors border-b border-border last:border-0"
                          >
                            <motion.span
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              {service.name}
                            </motion.span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 py-5 rounded-full shadow-glow transition-all duration-300 hover:shadow-strong"
            >
              <Link to="/contacto">
                <Phone size={18} className="mr-2" />
                CONTÁCTANOS
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-x-0 top-[72px] z-40 bg-white shadow-strong overflow-hidden"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full py-2 text-lg font-medium"
                      >
                        {link.name}
                        <ChevronDown
                          className={`transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="pl-4 space-y-2 overflow-hidden"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block py-2 text-muted-foreground hover:text-secondary transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="block py-2 text-lg font-medium hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Button asChild className="w-full bg-secondary text-secondary-foreground py-6 rounded-full">
                  <Link to="/contacto">CONTÁCTANOS</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
