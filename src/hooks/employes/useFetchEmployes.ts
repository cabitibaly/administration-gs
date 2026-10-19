import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import type { ApiResponse } from "../../interfaces/apiResponse"
import type { PagedResponse } from "../../interfaces/pagedResponse"
import type { Employe } from "../../interfaces/Employe"
import { getEmployeRequest, getEmployesRequest } from "../../services/employes.service"

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