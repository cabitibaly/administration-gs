import type { ApiResponse } from "../interfaces/apiResponse"
import type { Notification } from "../interfaces/notification"
import type { PagedResponse } from "../interfaces/pagedResponse"
import { authenticatedRequest } from "../libs/authUtils"


export const getNotificationsRequest = async (
    page: number,
    size: number,
    sortBy: string = "idNotification", 
    orderBy: string = "desc",
): Promise<ApiResponse<PagedResponse<Notification>> | null> => {
    return await authenticatedRequest<ApiResponse<PagedResponse<Notification>>>({
        url: `notifications`,
        method: "GET",
        params: {            
            page,
            size,
            sortBy,
            orderBy,
        }
    })
}

export const marquerCommeLuRequest = async (id: number): Promise<ApiResponse<null> | null> => {
    return await authenticatedRequest<ApiResponse<null> | null>({
        url: `notifications/${id}`,
        method: "PATCH",
        data: {}
    })
}

export const supprimerNotificationRequest = async (id: number): Promise<ApiResponse<null> | null> => {
    return await authenticatedRequest<ApiResponse<null> | null>({
        url: `/notifications/${id}`,
        method: "DELETE",
        data: {}
    })
}