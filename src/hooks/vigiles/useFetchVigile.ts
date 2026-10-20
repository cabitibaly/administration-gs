import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getVigileRequest, getVigilesRequest } from "../../services/vigiles.service"

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