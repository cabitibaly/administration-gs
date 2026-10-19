import type { ApiResponse } from "../interfaces/apiResponse"
import type { Employe } from "../interfaces/Employe"
import type { PagedResponse } from "../interfaces/pagedResponse"
import { authenticatedRequest } from "../libs/authUtils"

export const getEmployesRequest = async (
    page: number, 
    size: number, 
    sortBy: string = "nomEmploye", 
    orderBy: string = "asc",
    search?: string,
    dateCreation?: string,
    
): Promise<ApiResponse<PagedResponse<Employe>> | null> => {
    return await authenticatedRequest({
        url: `/employes`,
        method: "GET",
        params: {            
            page,
            size,
            sortBy,
            orderBy,
            search,
            dateCreation
        }
    })
}

export const getEmployeRequest = async (id: number): Promise<ApiResponse<Employe> | null> => {
    return await authenticatedRequest({
        url: `/employes/${id}`,
        method: "GET",
    })
}