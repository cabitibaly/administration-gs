import { Check } from "lucide-react";
import { useState } from "react";
import type { Visite } from "../../interfaces/visite";
import { formatEtatForUI } from "../../utils/formatEtat";

interface VisiteLigneProps {
    visite: Visite;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    ref: React.RefObject<HTMLTableRowElement | null>;
}

const VisiteLigne = ({ref, visite, isOpen, setIsOpen}: VisiteLigneProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <tr
            ref={ref}
            onClick={() => setIsOpen(!isOpen)}
            className={`cursor-pointer border-t border-bleu-11 hover:bg-bleu-12/40 ${isChecked ? "bg-bleu-12/40" : "bg-transprent"}`}
        >
            <td className="w-4 p-4">
                <div onClick={(e) => {e.stopPropagation();setIsChecked(!isChecked)}} className={`rounded-md cursor-pointer border size-5 flex items-center justify-center transition duration-200 ease-in-out ${isChecked ? "bg-bleu-9 border-transparent" : "border-bleu-6 bg-transparent"}`}>
                    {isChecked && <Check className={`size-4 stroke-bleu-12`} />}
                </div>
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {visite.visiteurInfo}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {visite.employeHoteInfo}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {formatEtatForUI(visite.etatVisite)}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {
                    visite.heureArrivee ?
                    new Date(visite.heureArrivee).toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit"}) : "-" 
                }
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {
                    visite.heureDepart ?
                    new Date(visite.heureDepart).toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit"}) : "-" 
                }
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {
                    visite.dateCreation ?
                    new Date(visite.dateCreation).toLocaleDateString("fr-FR") : "-" 
                }
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                <div className="flex">
                    <button className="cursor-pointer font-medium text-bleu-9 hover:underline">Modifier</button>
                    <button className="cursor-pointer font-medium text-rouge ms-3 hover:underline">Supprimer</button>
                </div>                
            </td>
        </tr>
    )
}

export default VisiteLigne
