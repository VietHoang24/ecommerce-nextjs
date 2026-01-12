"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  avatar: string
  balance: number
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: () => void
  loginWithGoogle: () => void
  logout: () => void
  updateBalance: (amount: number) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user for demo
const mockUser: User = {
  id: "1",
  name: "Nguyen Van A",
  email: "nguyenvana@gmail.com",
  avatar: "/diverse-user-avatars.png",
  balance: 500000,
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem("user")
    if (stored) {
      setUser(JSON.parse(stored))
    }
    setIsLoading(false)
  }, [])

  const login = () => {
    router.push("/login")
  }

  const loginWithGoogle = () => {
    // Simulate Google OAuth - in production, this would redirect to Google
    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
    router.push("/")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  const updateBalance = (amount: number) => {
    if (user) {
      const updated = { ...user, balance: user.balance + amount }
      setUser(updated)
      localStorage.setItem("user", JSON.stringify(updated))
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, loginWithGoogle, logout, updateBalance }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
