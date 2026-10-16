import type { ApiResponse } from "../interfaces/apiResponse"
import type { commonType, DepartementsLePlusVisites, EmployeLePlusVisite, NombreVisiteParJour } from "../interfaces/stats"
import { authenticatedRequest } from "../libs/authUtils"

export const nombreVisiteParJourRequest = async () => {
    const response = await authenticatedRequest<ApiResponse<NombreVisiteParJour[]>>({
        url: "/statistique/nombre-visite-par-jour",
        method: "GET",
    })

    if (!response) {
        console.log("Erreur de récupération des nombres de visites par jour")
        return null
    }
    
    return response
}

export const visitesParEmployeRequest = async () => {
    const response = await authenticatedRequest<ApiResponse<EmployeLePlusVisite[]>>({
        url: "/statistique/visites-par-employe-sur-7-jours",
        method: "GET",
    })

    if (!response) {
        console.log("Erreur de récupération des visites par employe")
        return null
    }

    return response
}

export const totalVisiteRequest = async (etat?: string) => {
    const response = await authenticatedRequest<ApiResponse<commonType>>({
        url: `/statistique/total-visites`,
        method: "GET",
        params: {
            today: true,
            etat
        }
    })

    if (!response) {
        console.log("Erreur de récupération du nombre total de visites")
        return null
    }

    return response
}

export const departementLePlusVisiteRequest = async () => {
    const response = await authenticatedRequest<ApiResponse<DepartementsLePlusVisites[]>>({
        url: "/statistique/departements-le-plus-visites",
        method: "GET",
    })

    if (!response) {
        console.log("Erreur de récupération du departement le plus visité")
        return null
    }

    return response
}