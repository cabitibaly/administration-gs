import type { ApiResponse } from "../interfaces/apiResponse"
import type { Employe } from "../interfaces/Employe"
import type { PagedResponse } from "../interfaces/pagedResponse"
import type { Vigile } from "../interfaces/vigile"
import { authenticatedRequest } from "../libs/authUtils"

export const getVigilesRequest = async (
    page: number, 
    size: number, 
    sortBy: string = "nomVigile",
    orderBy: string = "asc",
    fullname?: string,
    dateCreation?: string,
): Promise<ApiResponse<PagedResponse<Vigile>> | null> => {
    return await authenticatedRequest({
        url: `/vigiles`,
        method: "GET",
        params: {            
            page,
            size,
            sortBy,
            orderBy,
            fullname,
            dateCreation
        }
    })
}

export const getVigileRequest = async (id: number): Promise<ApiResponse<Vigile> | null> => {
    return await authenticatedRequest({
        url: `/vigiles/${id}`,
        method: "GET",
    })
}