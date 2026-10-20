import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getDepartementRequest, getDepartementsRequest } from "../../services/departements.service"
import type { ApiResponse } from "../../interfaces/apiResponse"
import type { Departement } from "../../interfaces/departement"
import type { PagedResponse } from "../../interfaces/pagedResponse"

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