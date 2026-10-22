import { useInfiniteQuery, useMutation } from "@tanstack/react-query"
import type { ApiResponse } from "../../interfaces/apiResponse"
import type { PagedResponse } from "../../interfaces/pagedResponse"
import { getNotificationsRequest, marquerCommeLuRequest, supprimerNotificationRequest } from "../../services/notification.service"
import type { Notification } from "../../interfaces/notification"
import { toast } from "react-toastify"
import { TOAST_OPTIONS_ERROR, TOAST_OPTIONS_SUCCESS } from "../../constants/toastOption"

export const useFetchListeNotification = () => {
    const { data, isLoading, refetch, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery<ApiResponse<PagedResponse<Notification>> | null>({
        queryKey: ["notifications"],        
        queryFn: async ({ pageParam }) => await getNotificationsRequest(pageParam as number, 10),
        initialPageParam: 0,    
        getNextPageParam: (lastPage) => lastPage?.data.hasNext ? lastPage.data.page + 1 : undefined,
        staleTime: 5 * 60 * 1000,
    })

    const notifications: Notification[] = data?.pages.flatMap(page => page?.data.content).filter(notification => notification != undefined) ?? []

    const handleLoadMore = () => {
        if (!isFetchingNextPage && hasNextPage) {
            fetchNextPage()
        }
    }

    const hasNoReadNotification = notifications.some(notif => !notif.estLu)

    return {
        notifications,
        isLoading,
        refetch,
        handleLoadMore,
        isFetchingNextPage,
        hasNextPage,
        hasNoReadNotification
    }
}

export const useMarquerCommeLu = () => {
    const { refetch } = useFetchListeNotification()
    const { mutateAsync, isPending } = useMutation({
        mutationFn: marquerCommeLuRequest,
        onSuccess: (data) => {
            toast(data?.message ?? "Notification marquée comme lue", TOAST_OPTIONS_SUCCESS)
            refetch()
        },
        onError: (error) => {toast(error?.message ?? "Une erreur est survenue", TOAST_OPTIONS_ERROR)},
    })

    return {
        isPending,
        marquerCommeLu: mutateAsync,
    }
}

export const useSupprimerNotification = () => {
    const { refetch } = useFetchListeNotification()
    const { mutateAsync, isPending } = useMutation({
        mutationFn: supprimerNotificationRequest,
        onSuccess: (data) => {
            toast(data?.message ?? "Notification suppri", TOAST_OPTIONS_SUCCESS)
            refetch()
        },
        onError: (error) => {toast(error?.message ?? "Une erreur est survenue", TOAST_OPTIONS_ERROR)},
    })

    return {
        isPending,
        supprimerNotification: mutateAsync,
    }
}