import type { ApiResponse } from "../interfaces/apiResponse"
import type { PagedResponse } from "../interfaces/pagedResponse"
import type { Visiteur } from "../interfaces/visiteur"
import { authenticatedRequest } from "../libs/authUtils"

export const getVisiteursRequest = async (
    page: number,
    size: number,
    sortBy: string = "nomVisiteur",
    orderBy: string = "asc",
    search?: string,
    dateCreation?: string,
) => {    
    const res = await authenticatedRequest<ApiResponse<PagedResponse<Visiteur>> | null>({
        url: `/visiteurs`,
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
    return res
}

export const getVisiteurRequest = async (id: number) => {
    return await authenticatedRequest<ApiResponse<Visiteur> | null>({
        url: `/visiteurs/${id}`,
        method: "GET",
    })
}