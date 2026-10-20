import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getEntrepriseRequest, getEntreprisesRequest } from "../../services/entreprises.service"

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