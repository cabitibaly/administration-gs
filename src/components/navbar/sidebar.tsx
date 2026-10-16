import { ChevronLeft, LogOutIcon } from "lucide-react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Logo from "../logo/logo"
import Navigation from "./navigation"
import { DashboardActiveIcon } from "../../assets/svg/dashboardActiveIcon"
import { DashboardIcon } from "../../assets/svg/dashboardIcon"
import { VisiteIcon } from "../../assets/svg/visiteIcon"
import { VisiteActiveIcon } from "../../assets/svg/visteActiveIcon"
import { VisiteurActiveIcon } from "../../assets/svg/visiteurActiveIcon"
import { VisiteurIcon } from "../../assets/svg/visiteurIcon"
import { IdentificationBadgeIcon, ShieldCheckeredIcon, NetworkIcon, BuildingIcon } from "@phosphor-icons/react"
import { useAuth } from "../../hooks/auth/useAuth"
import { MoonLoader } from "react-spinners"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const { logout, isLoggingOut } = useAuth();
    const location = useLocation()

    return (
        <div className={`relative p-4 h-screen bg-bleu-1 flex flex-col items-start justify-start gap-4 transition-all duration-100 ease-out`}>
            <button onClick={() => setIsOpen(!isOpen)} className={`cursor-pointer absolute top-4 -right-4 z-20 rounded-full size-8 bg-bleu-10 flex items-center justify-center transition duration-200 ease-linear max-896:hidden ${!isOpen ? "rotate-180" : ""}`}>
                <ChevronLeft className="size-6 stroke-gris-12" />
            </button>          
            <Logo isOpen={isOpen} />
            <div className="flex flex-col items-start justify-start gap-2">
                <Navigation 
                    isOpen={isOpen}
                    pathname="Tableau de bord"
                    href={"/dashboard"}    
                    active={location.pathname === "/dashboard"}
                >
                    {
                        location.pathname === "/dashboard" ?
                            <DashboardActiveIcon color="#EEEEF0" size={24} />
                        :
                            <DashboardIcon color="#EEEEF0" size={24} />
                    }
                </Navigation>
                <Navigation 
                    isOpen={isOpen}
                    pathname="Visites"
                    href={"/visites"}    
                    active={location.pathname.startsWith("/visites")}            
                >
                    {
                        location.pathname.startsWith("/visites") ?
                            <VisiteActiveIcon color="#EEEEF0" size={24} />
                        :
                            <VisiteIcon color="#EEEEF0" size={24} />
                    }
                </Navigation>
                <Navigation 
                    isOpen={isOpen}
                    pathname="Visiteurs"
                    href={"/visiteurs"}    
                    active={location.pathname.startsWith("/visiteur")}
                >
                    {
                        location.pathname.startsWith("/visiteurs") ?
                            <VisiteurActiveIcon color="#EEEEF0" size={24} />
                        :
                            <VisiteurIcon color="#EEEEF0" size={24} />
                    }
                </Navigation>            
                <Navigation 
                    isOpen={isOpen}
                    pathname="Employés"
                    href={"/employes"}    
                    active={location.pathname.startsWith("/employes")}            
                >
                    {
                        location.pathname.startsWith("/employes") ?
                            <IdentificationBadgeIcon size={24} color="#EEEEF0" weight="fill" />
                        :
                            <IdentificationBadgeIcon size={24} color="#EEEEF0" weight="thin" />
                    }
                </Navigation>
                <Navigation 
                    isOpen={isOpen}
                    pathname="Vigiles"
                    href={"/vigiles"}    
                    active={location.pathname.startsWith("/vigiles")}            
                >
                    {
                        location.pathname.startsWith("/vigiles") ?
                            <ShieldCheckeredIcon color="#EEEEF0" size={24} weight="fill" />
                        :
                            <ShieldCheckeredIcon color="#EEEEF0" size={24} weight="thin" />
                    }
                </Navigation>
                <Navigation 
                    isOpen={isOpen}
                    pathname="Départements"
                    href={"/departements"}
                    active={location.pathname.startsWith("/departements")}            
                >
                    {
                        location.pathname.startsWith("/departements") ?
                            <NetworkIcon color="#EEEEF0" size={24} weight="fill" />
                        :
                            <NetworkIcon color="#EEEEF0" size={24} weight="thin" />
                    }
                </Navigation>
                <Navigation 
                    isOpen={isOpen}
                    pathname="Entreprises"
                    href={"/entreprises"}    
                    active={location.pathname.startsWith("/entreprises")}            
                >
                    {
                        location.pathname.startsWith("/entreprises") ?
                            <BuildingIcon color="#EEEEF0" size={24} weight="fill" />
                        :
                            <BuildingIcon color="#EEEEF0" size={24} weight="thin" />
                    }
                </Navigation>
            </div>

            <div 
                onClick={() => logout()}
                className={`absolute left-5 bottom-4 flex flex-col ${isLoggingOut ? "items-center justify-center p-3 bg-rouge rounded-2xl" : "items-start justify-start"}`}
            >                
                {
                    isLoggingOut ? (
                        <MoonLoader color="#EEEEF0" size={24} />
                    ) : (
                        <Navigation 
                            isOpen={isOpen}
                            pathname="Déconnexion"
                            href={"/deconnexion"}                    
                            isLogoutBtn={true}
                        >
                            <LogOutIcon strokeWidth={1} className="size-6 aspect-square" />
                        </Navigation>
                    )
                }
            </div>                        
        </div>
    )
}

export default Sidebar
