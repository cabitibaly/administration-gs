import { createContext } from "react"
import type { Utilisateur } from "../../interfaces/utilisateur"

interface AuthContextType {
    utilisateur: Utilisateur | null | undefined
    isLoading: boolean
    isAuthenticated: boolean
    refetch: () => void
    saveSessionAfterLogin: (utilisatueur: Utilisateur) => Promise<void>;
    clearSessionOnLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default AuthContext