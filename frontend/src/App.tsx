import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Explore } from './pages/Explore';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ProviderDashboard } from './pages/provider/ProviderDashboard';
import { UserDashboard } from './pages/user/UserDashboard';
import { useAuthStore } from './store/authStore';
import { useThemeStore } from './store/themeStore';
import { Toaster } from './components/ui/sonner';
import './utils/i18n';

// Protected Route Component
function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode; allowedRoles: string[] }) {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}

export default function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/explore"
          element={
            <MainLayout>
              <Explore />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout>
              <Register />
            </MainLayout>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center">
                  <h2 className="mb-2">Página en construcción</h2>
                  <p className="text-muted-foreground">
                    Esta sección estará disponible próximamente
                  </p>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Provider Routes */}
        <Route
          path="/provider"
          element={
            <ProtectedRoute allowedRoles={['provider']}>
              <ProviderDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/provider/*"
          element={
            <ProtectedRoute allowedRoles={['provider']}>
              <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center">
                  <h2 className="mb-2">Página en construcción</h2>
                  <p className="text-muted-foreground">
                    Esta sección estará disponible próximamente
                  </p>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* User Routes */}
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/*"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center">
                  <h2 className="mb-2">Página en construcción</h2>
                  <p className="text-muted-foreground">
                    Esta sección estará disponible próximamente
                  </p>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <MainLayout>
              <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center">
                  <h1 className="mb-2">404</h1>
                  <p className="text-muted-foreground">Página no encontrada</p>
                </div>
              </div>
            </MainLayout>
          }
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
