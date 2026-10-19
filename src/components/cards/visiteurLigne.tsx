import { Check } from "lucide-react";
import { useState } from "react";
import type { Visiteur } from "../../interfaces/visiteur";

interface VisiteurLigneProps {
    visiteur: Visiteur;
    ref: React.RefObject<HTMLTableRowElement | null>;    
}

const VisiteurLigne = ({ visiteur, ref }: VisiteurLigneProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <tr ref={ref} className={`cursor-pointer border-t border-bleu-11 hover:bg-bleu-12/40 ${isChecked ? "bg-bleu-12/40" : "bg-transprent"}`}>
            <td className="w-4 p-4">
                <div onClick={(e) => {e.stopPropagation();setIsChecked(!isChecked)}} className={`rounded-md cursor-pointer border size-5 flex items-center justify-center transition duration-200 ease-in-out ${isChecked ? "bg-bleu-9 border-transparent" : "border-bleu-6 bg-transparent"}`}>
                    {isChecked && <Check className={`size-4 stroke-bleu-12`} />}
                </div>
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {visiteur.nom + " " + visiteur.prenom}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {visiteur.telephone}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {visiteur.typeCarte}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {visiteur.numeroCarte}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {
                    visiteur.dateCreation ?
                        new Date(visiteur.dateCreation).toLocaleDateString("fr-FR") : "-"
                }
            </td>
        </tr>
    )
}

export default VisiteurLigne
