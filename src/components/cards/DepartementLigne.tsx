import { Check } from "lucide-react";
import { useState } from "react";
import type { Departement } from "../../interfaces/departement";

interface DepartementLigneProps {
    departement: Departement,
    ref: React.RefObject<HTMLTableRowElement | null>,
    setIsOpen: (isOpen: boolean) => void,
    isOpen: boolean,
    setDepartementId: React.Dispatch<React.SetStateAction<number | null>>,
}

const DepartementLigne = ({ departement, ref, setIsOpen, isOpen, setDepartementId }: DepartementLigneProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <tr ref={ref} className={`cursor-pointer border-t border-bleu-11 hover:bg-bleu-12/40 ${isChecked ? "bg-bleu-12/40" : "bg-transprent"}`}>
            <td className="w-4 p-4">
                <div onClick={(e) => {e.stopPropagation();setIsChecked(!isChecked)}} className={`rounded-md cursor-pointer border size-5 flex items-center justify-center transition duration-200 ease-in-out ${isChecked ? "bg-bleu-9 border-transparent" : "border-bleu-6 bg-transparent"}`}>
                    {isChecked && <Check className={`size-4 stroke-bleu-12`} />}
                </div>
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                001
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {departement.nom}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {
                    departement.dateCreation ?
                        new Date(departement.dateCreation).toLocaleDateString("fr-FR") : "-"

                    
                }
            </td>            
            <td className="px-6 py-4 text-gris-1 font-normal">
                <div className="flex">
                    <button
                        onClick={() => {
                            setIsOpen(true)
                            setDepartementId(departement.id)
                        }}
                        className="cursor-pointer font-medium text-bleu-9 hover:underline"
                    >
                        Modifier
                    </button>
                    <button className="cursor-pointer font-medium text-rouge ms-3 hover:underline">Supprimer</button>
                </div>                
            </td>
        </tr>
    )
}

export default DepartementLigne
