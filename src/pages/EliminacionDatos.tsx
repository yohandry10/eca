import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EliminacionDatos = () => {
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
                            Instrucciones para la Eliminación de Datos
                        </h1>

                        <div className="prose prose-lg text-muted-foreground max-w-none space-y-8">
                            <section>
                                <p>
                                    De acuerdo con las políticas de la plataforma de Facebook y otras regulaciones de privacidad, proporcionamos las siguientes instrucciones para que los usuarios puedan solicitar la eliminación de sus datos personales de nuestro sistema.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">¿Cómo solicitar la eliminación de sus datos?</h2>
                                <p>
                                    Si usted ha interactuado con nuestras aplicaciones o sitio web y desea que eliminemos sus datos personales almacenados, por favor siga estos pasos:
                                </p>
                                <ol className="list-decimal pl-6 mt-4 space-y-4">
                                    <li>
                                        Envíe un correo electrónico a nuestra dirección de soporte oficial:
                                        <a href="mailto:consultores.solucioneseca1@gmail.com" className="text-secondary font-semibold ml-1 hover:underline">
                                            consultores.solucioneseca1@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        En el "Asunto" del correo electrónico, por favor escriba:
                                        <strong className="text-foreground ml-1">"Solicitud de Eliminación de Datos de Usuario"</strong>.
                                    </li>
                                    <li>
                                        En el cuerpo del correo, por favor incluya la información necesaria para identificar su cuenta o registros (por ejemplo, su dirección de correo electrónico asociada o nombre de usuario).
                                    </li>
                                </ol>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Proceso de Eliminación</h2>
                                <p>
                                    Una vez recibida su solicitud:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Nuestro equipo de soporte revisará su solicitud en un plazo máximo de 7 días hábiles.</li>
                                    <li>Procederemos a eliminar permanentemente sus datos personales de nuestras bases de datos, salvo aquellos que estemos obligados a conservar por ley o fines administrativos legítimos.</li>
                                    <li>Le enviaremos un correo electrónico de confirmación una vez que el proceso de eliminación se haya completado.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Contacto</h2>
                                <p>
                                    Si tiene alguna duda sobre este proceso, no dude en contactarnos a través de nuestros canales oficiales.
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

export default EliminacionDatos;
