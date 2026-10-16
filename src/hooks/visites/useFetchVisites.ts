import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import type { ApiResponse } from "../../interfaces/apiResponse"
import type { PagedResponse } from "../../interfaces/pagedResponse"
import type { Visite, VisiteWithPersons } from "../../interfaces/visite"
import { getVisiteRequest, getVisitesRequest } from "../../services/visites.service"

export const useFetchVisites = (date?: string, etat?: string) => {
    const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery<ApiResponse<PagedResponse<Visite>> | null>({
        queryKey: ['visites', date, etat],
        queryFn: async ({ pageParam }) => await getVisitesRequest(pageParam as number, 10, "idVisite", "desc", date, etat),
        initialPageParam: 0,    
        getNextPageParam: (lastPage) => lastPage?.data.hasNext ? lastPage.data.page + 1 : undefined,
        staleTime: 5 * 60 * 1000,
    })   
    
    const visites: Visite[] = data?.pages.flatMap(page => page?.data.content).filter(visite => visite != undefined) ?? []

    const handleLoadMore = () => {
        if (!isFetchingNextPage && hasNextPage) {
            fetchNextPage()
        }
    }

    return {
        visites,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        handleLoadMore,
        refetch,
    }
}

export const useFetchVisite = (id: number) => {
    const { data, isLoading, refetch } = useQuery<ApiResponse<VisiteWithPersons> | null>({
        queryKey: ['visite', id],
        queryFn: async () => await getVisiteRequest(id),
        staleTime: 5 * 60 * 1000,
    })    
    
    return {
        visite: data?.data,
        isLoading,
        refetch,
    }
}