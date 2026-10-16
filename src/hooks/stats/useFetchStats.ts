import { useQuery } from "@tanstack/react-query"
import { departementLePlusVisiteRequest, nombreVisiteEnCoursRequest, nombreVisiteParJourRequest, totalVisiteRequest, visitesParEmployeRequest } from "../../services/stats.service"
import type { ApiResponse } from "../../interfaces/apiResponse"
import type { commonType, DepartementsLePlusVisites, EmployeLePlusVisite, NombreVisiteParJour } from "../../interfaces/stats"

export const useFetchStats = () => {
    const nombreVisiteEnCours = useQuery<ApiResponse<commonType> | null>({
        queryKey: ['nombreVisiteEnCours'],
        queryFn: async () => await nombreVisiteEnCoursRequest(),
        staleTime: 5 * 60 * 1000,
    })

    const totalVisite = useQuery<ApiResponse<commonType> | null>({
        queryKey: ['totalVisite'],
        queryFn: async () => await totalVisiteRequest(),
        staleTime: 5 * 60 * 1000,
    })

    const nombreVisiteParJour = useQuery<ApiResponse<NombreVisiteParJour[]> | null>({
        queryKey: ['nombreVisiteParJour'],
        queryFn: async () => await nombreVisiteParJourRequest(),
        staleTime: 5 * 60 * 1000,
    })

    const visitesParEmploye = useQuery<ApiResponse<EmployeLePlusVisite[]> | null>({
        queryKey: ['visitesParEmploye'],
        queryFn: async () => await visitesParEmployeRequest(),
        staleTime: 5 * 60 * 1000,
    })

    const departementLePlusVisite = useQuery<ApiResponse<DepartementsLePlusVisites[]> | null>({
        queryKey: ['departementLePlusVisite'],
        queryFn: async () => await departementLePlusVisiteRequest(),
        staleTime: 5 * 60 * 1000,
    })

    const isLoading = nombreVisiteEnCours.isLoading || 
        totalVisite.isLoading || 
        nombreVisiteParJour.isLoading || 
        visitesParEmploye.isLoading ||
        departementLePlusVisite.isLoading

    const refetch = async () => { 
        await Promise.all([
            nombreVisiteEnCours.refetch(), 
            totalVisite.refetch(), 
            nombreVisiteParJour.refetch(), 
            visitesParEmploye.refetch(),
            departementLePlusVisite.refetch()
        ]) 
    }



    return {
        nombrevisiteEnCours: nombreVisiteEnCours.data?.data.totalVisite,
        totalVisite: totalVisite.data?.data.totalVisite,
        nombreVisiteParJour: nombreVisiteParJour.data?.data,
        visitesParEmploye: visitesParEmploye.data?.data,
        departementLePlusVisite: departementLePlusVisite.data?.data,
        isLoading,
        refetch,
    }
}