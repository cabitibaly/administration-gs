import { AlignBottomIcon, ChartBarIcon, UsersIcon } from "@phosphor-icons/react"
import StatsCard from "../cards/statsCard"
import Topbar from "../navbar/topbar"
import NombreVisiteCard from "../cards/nombreVisiteCard"
import VisiteEnCoursCard from "../cards/visiteEnCoursCard"
import EmployeLePlusVisite from "../cards/EmployeLePlusVisite"
import DepartementLePlusVisite from "../cards/DepartementLePlusVisite copy"

const DashboardBody = () => {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-4">
            <Topbar pathname="Tableau de bord" />
            <div className="px-8 overflow-x-hidden overflow-y-auto h-[85.5vh] w-full flex flex-col items-start justify-start gap-4">
                <div className="rounded-2xl w-full shrink-0 carousel carousel-horizontal space-x-4">
                    <StatsCard 
                        intitule="Visite en cours" 
                        valeur={4}
                        Icon={ChartBarIcon} 
                    />
                    <StatsCard 
                        intitule="Nombre de visites" 
                        valeur={13} 
                        Icon={AlignBottomIcon} 
                    />
                    <StatsCard 
                        intitule="Nombre de visiteurs" 
                        valeur={7} 
                        Icon={UsersIcon}
                    />
                </div>
                <div className="rounded-2xl w-full shrink-0 flex items-start justify-start gap-4">
                    <NombreVisiteCard  />  
                    <VisiteEnCoursCard />
                </div>
                <div className="rounded-2xl w-full shrink-0 flex items-start justify-start gap-4">
                    <EmployeLePlusVisite  />  
                    <DepartementLePlusVisite />
                </div>
            </div>
        </div>
    )
}

export default DashboardBody
