import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"
import type { ApiResponse } from "../../interfaces/apiResponse"
import type { PagedResponse } from "../../interfaces/pagedResponse"
import type { Employe } from "../../interfaces/Employe"
import { ajouterEmployeRequest, getEmployeRequest, getEmployesRequest, importerEmployeRequest } from "../../services/employes.service"
import { toast } from "react-toastify"
import { TOAST_OPTIONS_ERROR, TOAST_OPTIONS_SUCCESS } from "../../constants/toastOption"

export const useFetchEmployes = (search?: string, date?: string) => {
    const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery<ApiResponse<PagedResponse<Employe>> | null>({
        queryKey: ['employes', search, date],
        queryFn: async ({ pageParam }) => await getEmployesRequest(pageParam as number, 10, "nomEmploye", "asc", search, date),
        initialPageParam: 0,    
        getNextPageParam: (lastPage) => lastPage?.data.hasNext ? lastPage.data.page + 1 : undefined,
        staleTime: 5 * 60 * 1000,
    })  
    
    const employes: Employe[] = data?.pages.flatMap(page => page?.data.content).filter(employe => employe != undefined) ?? []

    const handleLoadMore = () => {
        if (!isFetchingNextPage && hasNextPage) {
            fetchNextPage()
        }
    }    

    return {
        employes,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        handleLoadMore,
        refetch,
    }
}

export const useFetchEmploye = (id: number) => {
    const { data, isLoading, refetch } = useQuery<ApiResponse<Employe> | null>({
        queryKey: ['employe', id],
        queryFn: async () => await getEmployeRequest(id),
        staleTime: 5 * 60 * 1000,
    })    
    
    return {
        employe: data?.data,
        isLoading,
        refetch,
    }
}

export const useAjouterEmploye = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: ajouterEmployeRequest,
        onSuccess: (data) => {
            toast.success(data?.message, TOAST_OPTIONS_SUCCESS)
        },
        onError: (error) => {
            toast.error(error.message ?? "Erreur lors de l'ajout de l'employé", TOAST_OPTIONS_ERROR)
        }
    })

    return {
        ajouterEmploye: mutate,
        isPending
    }
}

export const useImportEmploye = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: importerEmployeRequest,
        onSuccess: (data) => {
            toast.success(data?.message ?? "L'employé a été importé avec succès", TOAST_OPTIONS_SUCCESS)
        },
        onError: (error) => {
            toast.error(error.message ?? "Erreur lors de l'importation de l'employé", TOAST_OPTIONS_ERROR)
        }
    })

    return {
        importerEmploye: mutate,
        isPending
    }
}