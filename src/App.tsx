import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Servicio from "./pages/Servicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import EliminacionDatos from "./pages/EliminacionDatos";
import TerminosServicio from "./pages/TerminosServicio";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicio />} />
          <Route path="/servicios/:serviceId" element={<Servicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/eliminacion-datos" element={<EliminacionDatos />} />
          <Route path="/terminos" element={<TerminosServicio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
