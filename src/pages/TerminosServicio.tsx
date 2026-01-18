import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TerminosServicio = () => {
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
                            Términos y Condiciones del Servicio
                        </h1>

                        <div className="prose prose-lg text-muted-foreground max-w-none space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de los Términos</h2>
                                <p>
                                    Al acceder y utilizar el sitio web de ECA Soluciones Empresariales, usted acepta estar legalmente vinculado por estos términos y condiciones. Si no está de acuerdo con alguno de estos términos, por favor no utilice nuestro sitio web ni nuestros servicios.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">2. Servicios de Consultoría</h2>
                                <p>
                                    ECA Soluciones Empresariales proporciona servicios de asesoría contable, tributaria, laboral y financiera. La información proporcionada en este sitio web es solo para fines informativos generales y no constituye asesoramiento profesional legal, contable o fiscal específico para su situación particular sin una contratación formal.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">3. Propiedad Intelectual</h2>
                                <p>
                                    Todo el contenido presente en este sitio, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad de ECA Soluciones Empresariales o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual peruanas e internacionales.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitación de Responsabilidad</h2>
                                <p>
                                    ECA Soluciones Empresariales no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de nuestro sitio web o servicios.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">5. Modificaciones</h2>
                                <p>
                                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del sitio constituirá su aceptación de dichas modificaciones.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">6. Ley Aplicable</h2>
                                <p>
                                    Estos términos se regirán e interpretarán de acuerdo con las leyes de la República del Perú. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Lima, Perú.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TerminosServicio;
