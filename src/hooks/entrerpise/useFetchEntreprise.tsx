import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"
import { ajouterEntrepriseRequest, getEntrepriseRequest, getEntreprisesRequest, modifierEntrepriseRequest } from "../../services/entreprises.service"
import { toast } from "react-toastify"
import { TOAST_OPTIONS_ERROR, TOAST_OPTIONS_SUCCESS } from "../../constants/toastOption"

export const useFetchEntreprises = (nom?: string) => {
    const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery({
        queryKey: ['entreprises', nom],
        queryFn: async ({ pageParam }) => await getEntreprisesRequest(pageParam as number, 10, "nomEntreprise", "asc", nom),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage?.data.hasNext ? lastPage.data.page + 1 : undefined,
        staleTime: 5 * 60 * 1000,
    })

    const entreprises = data?.pages.flatMap(page => page?.data.content).filter(entreprise => entreprise != undefined) ?? []

    const handleLoadMore = () => {
        if (!isFetchingNextPage && hasNextPage) {
            fetchNextPage()
        }
    }

    return {
        entreprises,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        handleLoadMore,
        refetch
    }
}

export const useFetchEntreprise = (id: number | null) => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['entreprise', id],
        queryFn: async () => await getEntrepriseRequest(id!),
        staleTime: 5 * 60 * 1000,
        enabled: id !== null
    })

    return {
        entreprise: data?.data,
        isLoading,
        refetch
    }
}

export const useAjouterEntreprise = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: ajouterEntrepriseRequest,
        onSuccess: (data) => {
            toast.success(data?.message, TOAST_OPTIONS_SUCCESS)
        },
        onError: (error) => {
            toast.error(error.message ?? "Erreur lors de l'ajout de l'entreprise", TOAST_OPTIONS_ERROR)
        }
    })

    return {
        ajouterEntreprise: mutateAsync,
        isPending
    }
}

export const useModifierEntreprise = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: modifierEntrepriseRequest,
        onSuccess: (data) => {
            toast.success(data?.message, TOAST_OPTIONS_SUCCESS)
        },
        onError: (error) => {
            toast.error(error.message ?? "Erreur lors de la modification de l'entreprise", TOAST_OPTIONS_ERROR)
        }
    })

    return {
        modifierEntreprise: mutateAsync,
        isPending
    }
}