import type { Utilisateur } from "../../interfaces/utilisateur"
import { getUserInformations } from "../../libs/authUtils"
import { useQuery } from "@tanstack/react-query"
import { useCallback, useState, type ReactNode } from "react"
import AuthContext from "./authContext"
import { useNavigate } from "react-router-dom"

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [utilisateur, setUtilisateur] = useState<Utilisateur | null | undefined>(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const navigate = useNavigate();

    const { isLoading, refetch } = useQuery({
        queryKey: ['utilisateur'],
        queryFn:  async () => await getUserInformations(setUtilisateur, setIsAuthenticated, navigate),
        staleTime: 60 * 60 * 1000,
    })

    const saveSessionAfterLogin = useCallback(async (utilisatueurData: Utilisateur) => {        
        setUtilisateur(utilisatueurData);
        setIsAuthenticated(true);
    }, []);

    const clearSessionOnLogout = useCallback(async () => {        
        setUtilisateur(null);
        setIsAuthenticated(false);        
    }, []);

    return (
        <AuthContext.Provider 
            value={{
                utilisateur,
                isLoading,
                isAuthenticated,
                refetch,
                saveSessionAfterLogin,
                clearSessionOnLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider