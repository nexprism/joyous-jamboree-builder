import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BirthdayDecorations from "./pages/BirthdayDecorations";
import AnniversaryDecorations from "./pages/AnniversaryDecorations";
import BabyShower from "./pages/BabyShower";
import FirstNight from "./pages/FirstNight";
import CarDecorations from "./pages/CarDecorations";
import HaldiMehndi from "./pages/HaldiMehndi";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import About from "./pages/About";
import Decorations from "./pages/Decorations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/birthday-decorations" element={<BirthdayDecorations />} />
          <Route path="/anniversary-decorations" element={<AnniversaryDecorations />} />
          <Route path="/baby-shower" element={<BabyShower />} />
          <Route path="/first-night" element={<FirstNight />} />
          <Route path="/car-decorations" element={<CarDecorations />} />
          <Route path="/haldi-mehndi" element={<HaldiMehndi />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/decorations" element={<Decorations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
