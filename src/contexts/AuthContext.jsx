import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

const API_URL = (
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) ||
  (typeof process !== 'undefined' && process.env && process.env.REACT_APP_API_URL) ||
  'http://localhost:5000'
)

const parseBackendUser = (u) => {
  if (!u) return null
  const name = u.name || ''
  const parts = name.split(' ').filter(Boolean)
  const firstName = parts[0] || ''
  const lastName = parts.slice(1).join(' ') || ''
  return {
    id: u._id || u.id || '',
    email: u.email,
    role: u.role,
    firstName,
    lastName,
    profile: u.profile || {}
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const token = () => localStorage.getItem('healthRecordToken')

  useEffect(() => {
    const init = async () => {
      const t = token()
      if (!t) {
        setLoading(false)
        return
      }
      try {
        const res = await fetch(`${API_URL}/api/users/me`, { headers: { Authorization: `Bearer ${t}` } })
        if (res.ok) {
          const data = await res.json()
          setUser(parseBackendUser(data.user))
        } else {
          localStorage.removeItem('healthRecordToken')
          localStorage.removeItem('healthRecordUser')
        }
      } catch (e) {
        console.error('Failed to fetch user', e)
      }
      setLoading(false)
    }
    init()
  }, [])

  const login = async (email, password) => {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (!res.ok) {
        setLoading(false)
        return { success: false, error: data.error || 'Login failed' }
      }
      localStorage.setItem('healthRecordToken', data.token)
      const mapped = parseBackendUser(data.user)
      setUser(mapped)
      localStorage.setItem('healthRecordUser', JSON.stringify(mapped))
      setLoading(false)
      return { success: true, user: mapped }
    } catch (e) {
      setLoading(false)
      return { success: false, error: 'Network error' }
    }
  }

  const register = async (payload) => {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) {
        setLoading(false)
        return { success: false, error: data.error || 'Registration failed' }
      }
      // Registration returns success but no token. User should log in.
      setLoading(false)
      return { success: true }
    } catch (e) {
      setLoading(false)
      return { success: false, error: 'Network error' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('healthRecordToken')
    localStorage.removeItem('healthRecordUser')
  }

  const updateProfile = async (updatedData) => {
    setLoading(true)
    const t = token()
    if (!t) return { success: false, error: 'Not authenticated' }
    try {
      const res = await fetch(`${API_URL}/api/users/me`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${t}` },
        body: JSON.stringify(updatedData)
      })
      const data = await res.json()
      if (!res.ok) {
        setLoading(false)
        return { success: false, error: data.error || 'Update failed' }
      }
      const mapped = parseBackendUser(data.user)
      setUser(mapped)
      localStorage.setItem('healthRecordUser', JSON.stringify(mapped))
      setLoading(false)
      return { success: true }
    } catch (e) {
      setLoading(false)
      return { success: false, error: 'Network error' }
    }
  }

  const value = {
    user,
    login,
    register,
    logout,
    updateProfile,
    loading,
    apiBase: API_URL
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}