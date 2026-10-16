import type { ApiResponse } from "../interfaces/apiResponse";
import type { LoginData, Utilisateur } from "../interfaces/utilisateur";
import { authenticatedRequest } from "../libs/authUtils";

export const loginRequest = async (loginData: LoginData) => {
    const response = await authenticatedRequest<ApiResponse<Utilisateur>>({
        url: "/auth/web/login",
        method: "POST",
        data: loginData,
    })

    if (!response) {
        console.log("Erreur de connexion")
        return null
    }

    return response.data
}

export const logoutRequest = async () => {
    const response = await authenticatedRequest<ApiResponse<null>>({
        url: "/auth/web/logout",
        method: "POST",
    })

    if (!response) {
        console.log("Erreur de déconnexion")
        return null
    }

    return response.message
}