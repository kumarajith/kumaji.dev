
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Hobbies from "./pages/Hobbies";
import BulkClipTrimmer from "./pages/BulkClipTrimmer";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MinimalIndex from "./pages/MinimalIndex";

const siteVersion = import.meta.env.VITE_SITE_VERSION || 'original';
const queryClient = new QueryClient();

const OriginalApp = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/bulk-clip-trimmer" element={<BulkClipTrimmer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => {
  if (siteVersion === 'minimal') {
    return <MinimalIndex />;
  }
  return <OriginalApp />;
};

export default App;
