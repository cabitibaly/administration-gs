import { Check } from "lucide-react";
import { useState } from "react";
import type { Employe } from "../../interfaces/Employe";

interface EmployeLigneProps {
    employe: Employe;
    ref: React.RefObject<HTMLTableRowElement | null>;
    setEmployeId: React.Dispatch<React.SetStateAction<number | null>>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmployeLigne = ({employe, setEmployeId, setIsOpen, isOpen, ref}: EmployeLigneProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <tr ref={ref} className={`cursor-pointer border-t border-bleu-11 hover:bg-bleu-12/40 ${isChecked ? "bg-bleu-12/40" : "bg-transprent"}`}>
            <td className="w-4 p-4">
                <div onClick={(e) => {e.stopPropagation();setIsChecked(!isChecked)}} className={`rounded-md cursor-pointer border size-5 flex items-center justify-center transition duration-200 ease-in-out ${isChecked ? "bg-bleu-9 border-transparent" : "border-bleu-6 bg-transparent"}`}>
                    {isChecked && <Check className={`size-4 stroke-bleu-12`} />}
                </div>
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {employe.nom + " " + employe.prenom}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {employe.telephone}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {employe.email}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {employe.matricule}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {employe.departement}
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                {
                    employe.dateCreation ?
                        new Date(employe.dateCreation).toLocaleDateString("fr-FR") : "-"
                }
            </td>
            <td className="px-6 py-4 text-gris-1 font-normal">
                <div className="flex">
                    <button
                        onClick={() => {
                            setEmployeId(employe.id)
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

export default EmployeLigne
