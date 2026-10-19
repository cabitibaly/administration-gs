import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import type { ApiResponse } from "../../interfaces/apiResponse"
import type { PagedResponse } from "../../interfaces/pagedResponse"
import type { Visiteur } from "../../interfaces/visiteur"
import { getVisiteurRequest, getVisiteursRequest } from "../../services/visiteurs.service"

export const useFetchVisiteurs = (search?: string, date?: string) => {
    const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery<ApiResponse<PagedResponse<Visiteur>> | null>({
        queryKey: ['visiteurs', search, date],
        queryFn: async ({ pageParam }) => await getVisiteursRequest(pageParam as number, 10, "nomVisiteur", "asc", search, date),
        initialPageParam: 0,    
        getNextPageParam: (lastPage) => lastPage?.data.hasNext ? lastPage.data.page + 1 : undefined,
        staleTime: 5 * 60 * 1000,
    })
        
    const visiteurs: Visiteur[] = data?.pages.flatMap(page => page?.data.content).filter(visiteur => visiteur != undefined) ?? []

    const handleLoadMore = () => {
        if (!isFetchingNextPage && hasNextPage) {
            fetchNextPage()
        }
    }

    return {
        visiteurs,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        handleLoadMore,
        refetch,
    }
}

export const useFetchVisiteur = (id: number) => {
    const { data, isLoading, refetch } = useQuery<ApiResponse<Visiteur> | null>({
        queryKey: ['visiteur', id],
        queryFn: async () => await getVisiteurRequest(id),
        staleTime: 5 * 60 * 1000,
    })

    return {
        visiteur: data?.data,
        isLoading,
        refetch,
    }
}