'use client'

import { createContext, useContext, useState } from 'react'

type AuthContextType = {
  isLoggedin: boolean
  setIsLoggedin: (value: boolean) => void
}

const AuthContext = createContext<AuthContextType>({
  isLoggedin: false,
  setIsLoggedin: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedin, setIsLoggedin] = useState(false)

  return (
    <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
