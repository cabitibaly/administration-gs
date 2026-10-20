import type { ApiResponse } from "../interfaces/apiResponse"
import type { Entreprise } from "../interfaces/entreprise"
import type { PagedResponse } from "../interfaces/pagedResponse"
import { authenticatedRequest } from "../libs/authUtils"

export const getEntreprisesRequest = async (
    page: number,
    size: number,
    sortBy: string = "nomEntreprise",
    orderBy: string = "asc",
    nom?: string,
): Promise<ApiResponse<PagedResponse<Entreprise>> | null> => {
    return await authenticatedRequest({
        url: `/entreprise`,
        method: "GET",
        params: {
            page,
            size,
            sortBy,
            orderBy,
            nom
        }
    })
}

export const getEntrepriseRequest = async (id: number): Promise<ApiResponse<Entreprise> | null> => {
    return await authenticatedRequest({
        url: `/entreprise/${id}`,
        method: "GET",
    })
}

export const ajouterEntrepriseRequest = async (data: Entreprise): Promise<ApiResponse<Entreprise> | null> => {
    return await authenticatedRequest({
        url: `/entreprise`,
        method: "POST",
        data
    })
}