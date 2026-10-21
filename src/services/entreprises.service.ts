import type { ApiResponse } from "../interfaces/apiResponse"
import type { Entreprise, EntrepriseRequest } from "../interfaces/entreprise"
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

export const ajouterEntrepriseRequest = async (data: EntrepriseRequest): Promise<ApiResponse<Entreprise> | null> => {
    return await authenticatedRequest({
        url: `/entreprise`,
        method: "POST",
        data
    })
}

interface UpdateEmployeVariables {
    id: number,
    data: EntrepriseRequest
}

export const modifierEntrepriseRequest = async ({id, data}: UpdateEmployeVariables): Promise<ApiResponse<Entreprise> | null> => {
    return await authenticatedRequest({
        url: `/entreprise/${id}`,
        method: "PUT",
        data
    })
}