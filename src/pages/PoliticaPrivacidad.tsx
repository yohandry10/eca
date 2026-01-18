import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-32 pb-16">
                <div className="container-custom max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-8">
                            Política de Privacidad
                        </h1>

                        <div className="prose prose-lg text-muted-foreground max-w-none space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introducción</h2>
                                <p>
                                    En ECA Soluciones Empresariales, valoramos su privacidad y estamos comprometidos a proteger su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">2. Información que Recopilamos</h2>
                                <p>
                                    Podemos recopilar información personal que usted nos proporciona voluntariamente cuando se registra en el sitio web, se suscribe a nuestro boletín, completa formularios o se pone en contacto con nosotros. Esta información puede incluir:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Nombre y apellidos</li>
                                    <li>Dirección de correo electrónico</li>
                                    <li>Número de teléfono</li>
                                    <li>Nombre de la empresa</li>
                                    <li>Información sobre sus necesidades empresariales</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso de su Información</h2>
                                <p>
                                    Podemos utilizar la información que recopilamos para:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Proporcionar, operar y mantener nuestro sitio web</li>
                                    <li>Mejorar, personalizar y expandir nuestro sitio web</li>
                                    <li>Comprender y analizar cómo utiliza nuestro sitio web</li>
                                    <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
                                    <li>Comunicarnos con usted, ya sea directamente o a través de uno de nuestros socios</li>
                                    <li>Enviarle correos electrónicos y actualizaciones</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">4. Seguridad de sus Datos</h2>
                                <p>
                                    La seguridad de su información personal es importante para nosotros, pero recuerde que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger su información personal, no podemos garantizar su seguridad absoluta.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">5. Contacto</h2>
                                <p>
                                    Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Por correo electrónico: consultores.solucioneseca1@gmail.com</li>
                                    <li>Por teléfono: (+51) 923 341 098</li>
                                </ul>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PoliticaPrivacidad;
