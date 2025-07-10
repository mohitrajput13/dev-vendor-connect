
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/common/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminVendors from "./pages/admin/Vendors";
import AdminDevelopers from "./pages/admin/Developers";
import AdminApprovals from "./pages/admin/Approvals";
import AdminProfile from "./pages/admin/Profile";

// Vendor Pages
import VendorDashboard from "./pages/vendor/Dashboard";
import VendorDevelopers from "./pages/vendor/Developers";
import VendorProfile from "./pages/vendor/Profile";
import DeveloperDetail from "./pages/vendor/DeveloperDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/vendors" element={
              <ProtectedRoute role="admin">
                <AdminVendors />
              </ProtectedRoute>
            } />
            <Route path="/admin/developers" element={
              <ProtectedRoute role="admin">
                <AdminDevelopers />
              </ProtectedRoute>
            } />
            <Route path="/admin/approvals" element={
              <ProtectedRoute role="admin">
                <AdminApprovals />
              </ProtectedRoute>
            } />
            <Route path="/admin/profile" element={
              <ProtectedRoute role="admin">
                <AdminProfile />
              </ProtectedRoute>
            } />
            
            {/* Vendor Routes */}
            <Route path="/vendor/dashboard" element={
              <ProtectedRoute role="vendor">
                <VendorDashboard />
              </ProtectedRoute>
            } />
            <Route path="/vendor/developers" element={
              <ProtectedRoute role="vendor">
                <VendorDevelopers />
              </ProtectedRoute>
            } />
            <Route path="/vendor/developers/:id" element={
              <ProtectedRoute role="vendor">
                <DeveloperDetail />
              </ProtectedRoute>
            } />
            <Route path="/vendor/profile" element={
              <ProtectedRoute role="vendor">
                <VendorProfile />
              </ProtectedRoute>
            } />
            
            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
