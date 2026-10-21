import type { ApiResponse } from "../interfaces/apiResponse";
import type { Departement, DepartementRequest } from "../interfaces/departement";
import type { PagedResponse } from "../interfaces/pagedResponse";
import { authenticatedRequest } from "../libs/authUtils";

export const getDepartementsRequest = async (
    page: number,
    size: number,
    sortBy: string = "nomDepartement",
    orderBy: string = "asc",
    nom?: string,
): Promise<ApiResponse<PagedResponse<Departement>> | null> => {
    return await authenticatedRequest({
        url: `/departement`,
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

export const getDepartementRequest = async (id: number): Promise<ApiResponse<Departement> | null> => {
    return await authenticatedRequest({
        url: `/departement/${id}`,
        method: "GET",
    })
}

export const ajouterDepartementRequest = async (data: DepartementRequest): Promise<ApiResponse<null> | null> => {
    return await authenticatedRequest({
        url: `/departement`,
        method: "POST",
        data
    })
}

interface UpdateEmployeVariables {
    id: number,
    data: DepartementRequest
}

export const modifierDepartementRequest = async ({id, data}: UpdateEmployeVariables): Promise<ApiResponse<Departement> | null> => {
    return await authenticatedRequest({
        url: `/departement/${id}`,
        method: "PUT",
        data
    })
}
