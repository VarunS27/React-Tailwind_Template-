import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  // Check for existing session on app load
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const savedUser = localStorage.getItem('mern_user')
        const token = localStorage.getItem('mern_token')
        
        if (savedUser && token) {
          const userData = JSON.parse(savedUser)
          // Verify token is still valid (you can add expiry check here)
          const tokenExpiry = localStorage.getItem('mern_token_expiry')
          
          if (tokenExpiry && new Date().getTime() < parseInt(tokenExpiry)) {
            setUser(userData)
          } else {
            // Token expired, clear storage
            localStorage.removeItem('mern_user')
            localStorage.removeItem('mern_token')
            localStorage.removeItem('mern_token_expiry')
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error)
        // Clear corrupted data
        localStorage.removeItem('mern_user')
        localStorage.removeItem('mern_token')
        localStorage.removeItem('mern_token_expiry')
      } finally {
        setLoading(false)
        setIsInitialized(true)
      }
    }

    initializeAuth()
  }, [])

  const login = async (email, password) => {
    setLoading(true)
    try {
      // Simulate API call - Replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Demo credentials
      if (email === 'admin@demo.com' && password === 'password') {
        const userData = {
          id: 1,
          name: 'John Doe',
          email: email,
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        }
        
        const token = 'demo_jwt_token_' + Date.now()
        const tokenExpiry = new Date().getTime() + (24 * 60 * 60 * 1000) // 24 hours
        
        // Save to localStorage for persistence
        localStorage.setItem('mern_user', JSON.stringify(userData))
        localStorage.setItem('mern_token', token)
        localStorage.setItem('mern_token_expiry', tokenExpiry.toString())
        
        setUser(userData)
        setLoading(false)
        return { success: true, message: 'Login successful' }
      } else {
        setLoading(false)
        return { success: false, message: 'Invalid email or password' }
      }
    } catch (error) {
      setLoading(false)
      return { success: false, message: 'Login failed. Please try again.' }
    }
  }

  const register = async (userData) => {
    setLoading(true)
    try {
      // Simulate API call - Replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        role: 'user',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
      }
      
      const token = 'demo_jwt_token_' + Date.now()
      const tokenExpiry = new Date().getTime() + (24 * 60 * 60 * 1000) // 24 hours
      
      // Save to localStorage for persistence
      localStorage.setItem('mern_user', JSON.stringify(newUser))
      localStorage.setItem('mern_token', token)
      localStorage.setItem('mern_token_expiry', tokenExpiry.toString())
      
      setUser(newUser)
      setLoading(false)
      return { success: true, message: 'Registration successful' }
    } catch (error) {
      setLoading(false)
      return { success: false, message: 'Registration failed. Please try again.' }
    }
  }

  const logout = () => {
    // Clear all auth data
    localStorage.removeItem('mern_user')
    localStorage.removeItem('mern_token')
    localStorage.removeItem('mern_token_expiry')
    setUser(null)
  }

  const value = {
    user,
    loading,
    isInitialized,
    login,
    register,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
