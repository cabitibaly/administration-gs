import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"
import { ajouterDepartementRequest, getDepartementRequest, getDepartementsRequest, modifierDepartementRequest } from "../../services/departements.service"
import type { ApiResponse } from "../../interfaces/apiResponse"
import type { Departement, DepartementRequest } from "../../interfaces/departement"
import type { PagedResponse } from "../../interfaces/pagedResponse"
import { toast } from "react-toastify"
import { TOAST_OPTIONS_SUCCESS } from "../../constants/toastOption"

export const useFetchDepartements = (search?: string) => {
    const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery<ApiResponse<PagedResponse<Departement>> | null>({
        queryKey: ['departements', search],
        queryFn: async ({ pageParam }) => await getDepartementsRequest(pageParam as number, 10, "nomDepartement", "asc", search),
        initialPageParam: 0,    
        getNextPageParam: (lastPage) => lastPage?.data.hasNext ? lastPage.data.page + 1 : undefined,
        staleTime: 5 * 60 * 1000,
    })

    const departements: Departement[] = data?.pages.flatMap(page => page?.data.content).filter(departement => departement != undefined) ?? []

    const handleLoadMore = () => {
        if (!isFetchingNextPage && hasNextPage) {
            fetchNextPage()
        }
    }

    return {
        departements,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        handleLoadMore,
        fetchNextPage,
        refetch,
    }
}

export const useFetchDepartement = (id: number) => {
    const { data, isLoading, refetch } = useQuery<ApiResponse<Departement> | null>({
        queryKey: ['departement', id],
        queryFn: async () => await getDepartementRequest(id),
        staleTime: 5 * 60 * 1000,
    })

    return {
        departement: data?.data,
        isLoading,
        refetch,
    }
}

export const useAjouterDepartement = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: ajouterDepartementRequest,
        onSuccess: (data) => {toast.success(data?.message, TOAST_OPTIONS_SUCCESS)},
        onError: (error) => {toast.error(error.message ?? "Erreur lors de l'ajout du département", TOAST_OPTIONS_SUCCESS)}
    })

    return {
        ajouterDepartement: mutateAsync,
        isPending
    }
}

export const useModifierDepartement = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: modifierDepartementRequest,
        onSuccess: (data) => {toast.success(data?.message, TOAST_OPTIONS_SUCCESS)},
        onError: (error) => {toast.error(error.message ?? "Erreur lors de la modification du département", TOAST_OPTIONS_SUCCESS)}
    })

    return {
        modifierDepartement: mutateAsync,
        isPending
    }
}