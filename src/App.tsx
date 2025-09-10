import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MontessoriDashboard from "./pages/MontessoriDashboard";
import HighSchoolDashboard from "./pages/HighSchoolDashboard";
import BasicStudiesDashboard from "./pages/BasicStudiesDashboard";
import FoundationDashboard from "./pages/FoundationDashboard";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => {
  console.log("App.tsx: App component rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/montessori" element={<MontessoriDashboard />} />
              <Route path="/highschool" element={<HighSchoolDashboard />} />
              <Route path="/basicstudies" element={<BasicStudiesDashboard />} />
              <Route path="/foundation" element={<FoundationDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
