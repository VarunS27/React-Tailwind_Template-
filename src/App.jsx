import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

// Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import LandingPage from './components/LandingPage'
import Loading from './components/Loading'
import ProtectedRoute from './components/ProtectedRoute'

// Pages
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Dashboard from './pages/dashboard/Dashboard'

// Context
import { AuthProvider, useAuth } from './pages/context/AuthContext'

// Layout for authenticated users
const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

// Layout for public pages (non-authenticated)
const PublicLayout = ({ children }) => {
  return <div className="min-h-screen">{children}</div>
}

function AppRoutes() {
  const { user, loading, isInitialized } = useAuth()

  // Show loading screen while initializing authentication
  if (!isInitialized || loading) {
    return <Loading message="Initializing application..." />
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes - Only accessible when NOT logged in */}
        <Route 
          path="/" 
          element={
            user ? <Navigate to="/dashboard" replace /> : 
            <PublicLayout><LandingPage /></PublicLayout>
          } 
        />
        <Route 
          path="/login" 
          element={
            user ? <Navigate to="/dashboard" replace /> :
            <PublicLayout><Login /></PublicLayout>
          } 
        />
        <Route 
          path="/register" 
          element={
            user ? <Navigate to="/dashboard" replace /> :
            <PublicLayout><Register /></PublicLayout>
          } 
        />

        {/* Protected Routes - Only accessible when logged in */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <Dashboard />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <Home />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <About />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <Contact />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />

        {/* Catch all route - 404 */}
        <Route 
          path="*" 
          element={
            user ? (
              <AuthenticatedLayout>
                <NotFound />
              </AuthenticatedLayout>
            ) : (
              <PublicLayout>
                <NotFound />
              </PublicLayout>
            )
          } 
        />
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
