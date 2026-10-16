import type { ApiResponse } from "../interfaces/apiResponse";
import type { PagedResponse } from "../interfaces/pagedResponse";
import type { Visite, VisiteWithPersons } from "../interfaces/visite";
import { authenticatedRequest } from "../libs/authUtils";


export const getVisitesRequest = async (
    page: number, 
    size: number, 
    sortBy: string = "idVisite", 
    orderBy: string = "desc",
    date?: string,
    etat?: string
): Promise<ApiResponse<PagedResponse<Visite>> | null> => {
    return await authenticatedRequest({
        url: `/visites`,
        method: "GET",
        params: {            
            page,
            size,
            sortBy,
            orderBy,
            date,
            etat
        }
    });
}

export const getVisiteRequest = async (id: number): Promise<ApiResponse<VisiteWithPersons> | null> => {
    return await authenticatedRequest({
        url: `/visites/${id}`,
        method: "GET",
    });
}

export const cloturerVisiteRequest = async (id: number) => {
    return await authenticatedRequest<ApiResponse<null>>({
        url: `/visites/${id}/cloture?type=NORMALE`,
        method: "PATCH",
        data: {}
    })
}