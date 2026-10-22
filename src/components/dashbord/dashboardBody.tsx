import { AlignBottomIcon, ChartBarIcon, UsersIcon } from "@phosphor-icons/react"
import StatsCard from "../cards/statsCard"
import Topbar from "../navbar/topbar"
import NombreVisiteCard from "../cards/nombreVisiteCard"
import VisiteEnCoursCard from "../cards/visiteEnCoursCard"
import DepartementsLePlusVisitesCard from "../cards/DepartementsLePlusVisites"
import { useFetchStats } from "../../hooks/stats/useFetchStats"
import EmployeLePlusVisiteCard from "../cards/EmployeLePlusVisite"

const DashboardBody = () => {      
    const { 
        nombrevisiteEnCours, 
        nombreVisiteTerminee,
        totalVisite, 
        nombreVisiteParJour, 
        visitesParEmploye,
        departementLePlusVisite, 
        isLoading 
    } = useFetchStats()

    return (
        <div className="w-full flex flex-col items-start justify-start gap-4">
            <Topbar pathname="Tableau de bord" />
            <div className="px-8 overflow-x-hidden overflow-y-auto h-[85.5vh] w-full flex flex-col items-start justify-start gap-4">
                <div className="rounded-2xl w-full shrink-0 carousel carousel-horizontal space-x-4">
                    <StatsCard 
                        intitule="Nombre de visites" 
                        valeur={totalVisite ?? 0}
                        Icon={AlignBottomIcon} 
                        isLoading={isLoading}
                    />
                    <StatsCard 
                        intitule="Visites en cours" 
                        valeur={nombrevisiteEnCours ?? 0}
                        Icon={ChartBarIcon} 
                        isLoading={isLoading}
                    />
                    <StatsCard 
                        intitule="Visites terminées"
                        valeur={nombreVisiteTerminee ?? 0}
                        Icon={UsersIcon}
                        isLoading={isLoading}
                    />
                </div>
                <div className="rounded-2xl w-full shrink-0 flex items-start justify-start gap-4">
                    <NombreVisiteCard 
                        nombreVisiteParJour={nombreVisiteParJour!} 
                        isLoading={isLoading}
                    />  
                    <VisiteEnCoursCard />
                </div>
                <div className="rounded-2xl w-full shrink-0 flex items-start justify-start gap-4">
                    <EmployeLePlusVisiteCard employes={visitesParEmploye!} />  
                    <DepartementsLePlusVisitesCard departements={departementLePlusVisite!} />
                </div>
            </div>
        </div>
    )
}

export default DashboardBody
