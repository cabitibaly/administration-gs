import { Check } from "lucide-react";
import { useState } from "react";
import type { Vigile } from "../../interfaces/vigile";

interface VigileLigneProps {
    vigile: Vigile;
    ref: React.RefObject<HTMLTableRowElement | null>;
    setVigileId: React.Dispatch<React.SetStateAction<number | null>>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const VigileLigne = ({vigile, setVigileId, setIsOpen, isOpen, ref}: VigileLigneProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <tr ref={ref} className={`cursor-pointer border-t border-bleu-11 hover:bg-bleu-12/40 ${isChecked ? "bg-bleu-12/40" : "bg-transprent"}`}>
            <td className="w-4 p-4">
                <div onClick={(e) => {e.stopPropagation();setIsChecked(!isChecked)}} className={`rounded-md cursor-pointer border size-5 flex items-center justify-center transition duration-200 ease-in-out ${isChecked ? "bg-bleu-9 border-transparent" : "border-bleu-6 bg-transparent"}`}>
                    {isChecked && <Check className={`size-4 stroke-bleu-12`} />}
                </div>
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {vigile.nom + " " + vigile.prenom}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {vigile.telephone}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {vigile.email}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {vigile.posteDeGarde}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {vigile.entreprise}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {
                    vigile.dateCreation ?                    
                        new Date(vigile.dateCreation).toLocaleDateString("fr-FR") : "-"
                }
            </td>            
            <td className="px-6 py-4 text-gris-1 font-normal">
                <div className="flex">
                    <button
                        onClick={() =>{ 
                            setVigileId(vigile.id)
                            setIsOpen(!isOpen)
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

export default VigileLigne
