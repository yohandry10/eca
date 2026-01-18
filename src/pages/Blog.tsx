import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import serviceContable from "@/assets/service-contable.jpg";
import servicePlanillas from "@/assets/service-planillas.jpg";
import serviceTributario from "@/assets/service-tributario.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Consejos para optimizar tu gestión contable",
    excerpt: "Descubre las mejores prácticas para mantener tus finanzas empresariales en orden y cumplir con tus obligaciones tributarias.",
    image: serviceContable,
    date: "15 Ene 2026",
    author: "ECA Team",
    category: "Contabilidad",
  },
  {
    id: 2,
    title: "Novedades en la gestión de planillas 2026",
    excerpt: "Te explicamos los cambios más importantes en la normativa laboral y cómo afectan la gestión de planillas de tu empresa.",
    image: servicePlanillas,
    date: "10 Ene 2026",
    author: "ECA Team",
    category: "Planillas",
  },
  {
    id: 3,
    title: "Cómo prepararte para la fiscalización de SUNAT",
    excerpt: "Guía completa para que tu empresa esté preparada ante una eventual fiscalización tributaria.",
    image: serviceTributario,
    date: "5 Ene 2026",
    author: "ECA Team",
    category: "Tributario",
  },
];

const Blog = () => {
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
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
            >
              Artículos, noticias y consejos sobre contabilidad, tributación y gestión empresarial.
            </motion.p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-3xl overflow-hidden shadow-card card-hover h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                      <span className="absolute bottom-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>

                      <Button
                        variant="ghost"
                        className="text-secondary hover:text-secondary hover:bg-secondary/10 p-0 h-auto font-medium self-start group/btn"
                      >
                        Leer más
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load more */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full px-8"
              >
                Cargar más artículos
              </Button>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
