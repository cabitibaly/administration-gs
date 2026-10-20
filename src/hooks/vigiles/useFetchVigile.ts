import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"
import { ajouterVigileRequest, getVigileRequest, getVigilesRequest, importerVigileRequest, modifierVigileRequest } from "../../services/vigiles.service"
import { TOAST_OPTIONS_ERROR, TOAST_OPTIONS_SUCCESS } from "../../constants/toastOption"
import { toast } from "react-toastify"

export const useFetchVigiles = (search?: string, date?: string) => {
    const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery({
        queryKey: ['vigiles', search, date],
        queryFn: async ({ pageParam }) => await getVigilesRequest(pageParam as number, 10, "nomVigile", "asc", search, date),
        initialPageParam: 0,    
        getNextPageParam: (lastPage) => lastPage?.data.hasNext ? lastPage.data.page + 1 : undefined,
        staleTime: 5 * 60 * 1000,
    }) 
    
    const vigiles = data?.pages.flatMap(page => page?.data.content).filter(vigile => vigile != undefined) ?? []

    const handleLoadMore = () => {
        if (!isFetchingNextPage && hasNextPage) {
            fetchNextPage()
        }
    }

    return {
        vigiles,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        handleLoadMore,
        refetch
    }    
}

export const useFetchVigile = (id: number | null) => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['vigile', id],
        queryFn: async () => await getVigileRequest(id!),
        staleTime: 5 * 60 * 1000,
        enabled: id !== null
    })    
    
    return {
        vigile: data?.data,
        isLoading,
        refetch
    }
}

export const useAjouterVigile = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: ajouterVigileRequest,
        onSuccess: (data) => {
            toast.success(data?.message, TOAST_OPTIONS_SUCCESS)
        },
        onError: (error) => {
            toast.error(error.message ?? "Erreur lors de l'ajout du vigile", TOAST_OPTIONS_ERROR)
        }
    })

    return {
        ajouterVigile: mutateAsync,
        isPending
    }
}

export const useImporterVigile = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: importerVigileRequest,
        onSuccess: (data) => {
            toast.success(data?.message ?? "Les vigiles ont été importés avec succès", TOAST_OPTIONS_SUCCESS)
        },
        onError: (error) => {
            toast.error(error.message ?? "Erreur lors de l'importation des vigiles", TOAST_OPTIONS_ERROR)
        }
    })

    return {
        importerVigile: mutate,
        isPending
    }
}

export const useModifierVigile = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: modifierVigileRequest,
        onSuccess: (data) => {
            toast.success(data?.message ?? "Le vigile a été modifié avec succès", TOAST_OPTIONS_SUCCESS)
        },
        onError: (error) => {
            toast.error(error.message ?? "Erreur lors de la modification du vigile", TOAST_OPTIONS_ERROR)
        }
    })

    return {
        modifierVigile: mutateAsync,
        isPending
    }
}