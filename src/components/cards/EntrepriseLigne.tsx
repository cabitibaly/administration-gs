import { Check } from "lucide-react";
import { useState } from "react";
import type { Entreprise } from "../../interfaces/entreprise";

interface EntrepriseLigneProps {
    index: number,
    entreprise: Entreprise,
    ref: React.RefObject<HTMLTableRowElement | null>,
    setIsOpen: (isOpen: boolean) => void,
    isOpen: boolean,
    setEntrepriseId: React.Dispatch<React.SetStateAction<number | null>>,
}

const EntrepriseLigne = ({ index, entreprise, ref, setIsOpen, isOpen, setEntrepriseId }: EntrepriseLigneProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <tr className={`cursor-pointer border-t border-bleu-11 hover:bg-bleu-12/40 ${isChecked ? "bg-bleu-12/40" : "bg-transprent"}`}>
            <td className="w-4 p-4">
                <div onClick={(e) => {e.stopPropagation();setIsChecked(!isChecked)}} className={`rounded-md cursor-pointer border size-5 flex items-center justify-center transition duration-200 ease-in-out ${isChecked ? "bg-bleu-9 border-transparent" : "border-bleu-6 bg-transparent"}`}>
                    {isChecked && <Check className={`size-4 stroke-bleu-12`} />}
                </div>
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {index}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {entreprise.nom}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {entreprise.email}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {entreprise.telephone}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {
                    entreprise.dateCreation ?
                        new Date(entreprise.dateCreation).toLocaleDateString("fr-FR") : "-"                    
                }
            </td>            
            <td className="px-6 py-4 text-gris-1 font-normal">
                <div className="flex">
                    <button
                        onClick={() => {
                            setIsOpen(true)
                            setEntrepriseId(entreprise.id)
                        }}
                        className="cursor-pointer font-medium text-bleu-9 hover:underline"
                    >
                        Modifier
                    </button>                    
                </div>                
            </td>
        </tr>
    )
}

export default EntrepriseLigne
