import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/outside-click/useClickOutside";
import { ChevronDown } from "lucide-react";

const formatEtat = (etat: string) => {
    switch (etat) {
        case "En cours":
            return "EN_COURS"
        case "En prévision":
            return "EN_PREVISION"
        case "Terminé":
            return "TERMINEE"
        default:
            return "N/A"
    }
}

interface Props {
    setEtat: React.Dispatch<React.SetStateAction<string>>;
    etat: string;
}

const DropdownEtat = ({setEtat, etat}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
          
    useClickOutside(ref, () => setIsOpen(false), isOpen);
    
    return (
        <div ref={ref} onClick={() => setIsOpen(!isOpen)} className="border border-gris-8/20 bg-gris-11/20 relative py-2 px-3 w-50 rounded-xl flex items-center justify-start">
            <div className="w-full flex items-center justify-between gap-4">
                <span className={`cursor-default text-base font-normal ${etat === "" ? "text-gris-10" : "text-gris-1"}`}>{etat === "" ? "Etat visite..." : etat}</span>
                <div className={`size-6 flex items-center justify-center transition duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="stroke-gris-6 size-6 aspect-square" />
                </div>
            </div>
            {    
                isOpen &&
                <div className="absolute left-0 overflow-auto z-50 top-full border border-gris-8/20 bg-gris-12 rounded-xl w-full flex-col items-start justify-start">
                    <button type="button" onClick={() => setEtat("En cours")} className="cursor-pointer p-2 w-full text-left text-base text-gris-6 font-normal transition duration-200 hover:bg-gris-10/20">En Cours</button>                            
                    <button type="button" onClick={() => setEtat("En prévision")} className="cursor-pointer p-2 w-full text-left text-base text-gris-6 font-normal transition duration-200 hover:bg-gris-10/20">En prévision</button>                            
                    <button type="button" onClick={() => setEtat("Terminée")} className="cursor-pointer p-2 w-full text-left text-base text-gris-6 font-normal transition duration-200 hover:bg-gris-10/20">Terminé</button>                    
                </div>
            }
        </div>
    )
}

export default DropdownEtat
