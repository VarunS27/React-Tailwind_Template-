import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../pages/context/AuthContext'
import Loading from './Loading'

const ProtectedRoute = ({ children }) => {
  const { user, loading, isInitialized } = useAuth()
  const location = useLocation()

  // Show loading while initializing auth
  if (!isInitialized || loading) {
    return <Loading message="Checking authentication..." />
  }

  // If user is not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // User is authenticated, render the protected component
  return children
}

export default ProtectedRoute
