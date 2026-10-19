import { X } from "lucide-react";
import { useFetchVisite } from "../../hooks/visites/useFetchVisites";
import { MoonLoader } from "react-spinners";
import { formatEtatForUI } from "../../utils/formatEtat";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    visiteId: number;
}

const VisiteDetails = ({isOpen, setIsOpen, visiteId}: Props) => {
    const { visite, isLoading } = useFetchVisite(visiteId);
    
    return (
        <div onClick={() => setIsOpen(!isOpen)} className="p-4 absolute top-0 left-0 z-30 bg-gris-1/70 w-full h-screen flex items-center justify-center">
            <div                
                onClick={(e) => e.stopPropagation()} 
                className="relative pt-4 rounded-3xl bg-gris-12 w-1/3 flex flex-col items-start justidy-center gap-4"
            >
                <div className="sticky top-0 z-10 border-b border-gris-11 px-4 pb-4 w-full flex items-center justify-between gap-6">
                    <span className="text-xl text-gris-1 font-medium">Détails de la visite</span>
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <X strokeWidth={2} className="size-6 stroke-gris-1"/>
                    </button>
                </div>
                {   
                    isLoading ? (
                        <div className="pb-4 w-full flex items-center justify-center">
                            <MoonLoader color='#0C7DEF' size={40} />
                        </div>
                    ) : (
                            <div className="overflow-y-auto px-4 pb-4 flex-1 w-full flex flex-col items-start justify-start gap-6">
                                <div className="w-full flex flex-col items-start justify-start gap-2">
                                    <span className="text-lg text-gris-8 font-medium">Visiteur</span>
                                    <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                                        {visite?.visiteurInfo ?? "-"}
                                    </p>                        
                                </div>
                                <div className="w-full flex flex-col items-start justify-start gap-2">
                                    <span className="text-lg text-gris-8 font-medium">Employé (hôte)</span>
                                    <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                                        {visite?.employeHoteInfo ?? "-"}
                                    </p>                        
                                </div>
                                <div className="w-full flex flex-col items-start justify-start gap-2">
                                    <span className="text-lg text-gris-8 font-medium">Motif de la visite</span>
                                    <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                                        {visite?.motif ?? "-"}
                                    </p>                        
                                </div>
                                <div className="w-full flex items-center justify-center gap-6">
                                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                                        <span className="text-lg text-gris-8 font-medium">Heure d'arrivée</span>
                                        <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                                            {
                                                visite?.heureArrivee ?
                                                new Date(visite.heureArrivee).toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short",}) : "-" 
                                            }
                                        </p>
                                    </div>
                                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                                        <span className="text-lg text-gris-8 font-medium">Heure de départ</span>
                                        <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                                            {
                                                visite?.heureDepart ?
                                                new Date(visite.heureDepart).toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short",}) : "-" 
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex items-center justify-center gap-6">
                                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                                        <span className="text-lg text-gris-8 font-medium">Vigile</span>
                                        <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                                            { visite?.vigile.nom + " " + visite?.vigile.prenom }
                                        </p>
                                    </div>
                                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                                        <span className="text-lg text-gris-8 font-medium">Etat visite</span>
                                        <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                                            { visite?.etatVisite ? formatEtatForUI(visite?.etatVisite) : "-" }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )                
                }
            </div>
        </div>
    )
}

export default VisiteDetails
