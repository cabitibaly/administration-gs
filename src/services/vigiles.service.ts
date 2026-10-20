import type { ApiResponse } from "../interfaces/apiResponse"
import type { Employe } from "../interfaces/Employe"
import type { PagedResponse } from "../interfaces/pagedResponse"
import type { Vigile, VigileRequest, VigileWithUserInfo } from "../interfaces/vigile"
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

export const ajouterVigileRequest = async (data: VigileRequest): Promise<ApiResponse<VigileWithUserInfo> | null> => {
    return await authenticatedRequest({
        url: `/vigiles`,
        method: "POST",
        data
    })
}

export const importerVigileRequest = async (file: File): Promise<ApiResponse<null> | null> => {
    const formData = new FormData()
    formData.append("file", file)

    return await authenticatedRequest({
        url: `/vigiles/import`,
        method: "POST",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

type UpdateVigileVariables = {
    id: number;
    data: VigileRequest;
};

export const modifierVigileRequest = async ({id, data} : UpdateVigileVariables): Promise<ApiResponse<Vigile> | null> => {
    return await authenticatedRequest({
        url: `/vigiles/${id}`,
        method: "PUT",
        data
    })
}