import { type Icon } from "@phosphor-icons/react"
import { MoonLoader } from "react-spinners"

interface StatsCardProps {
    intitule: string,
    valeur: number,
    Icon: Icon,
    isLoading: boolean,
}

const StatsCard = ({intitule, valeur, Icon, isLoading}: StatsCardProps) => {
    return (
        <div className="relative w-1/3 p-4 rounded-2xl bg-bleu-9 carousel-item flex-col items-start justify-start gap-3">
            <div className="w-auto flex items-center justify-between gap-2">
                <div className="flex items-center justify-center">                    
                    <Icon size={24} color="#EEEEF0" weight="light" />
                </div>
                <span className="text-lg text-gris-12 font-medium">{intitule}</span>
            </div>            
            {
                isLoading ? (
                    <MoonLoader color="#EEEEF0" size={24} />
                ) : (
                    <span className="text-6xl text-gris-12 font-bold "> {valeur?.toLocaleString()}</span>
                )
            }
        </div>
    )
}

export default StatsCard