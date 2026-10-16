import { IdentificationBadgeIcon } from "@phosphor-icons/react"
import type { EmployeLePlusVisite } from "../../interfaces/stats";

interface EmployeLePlusVisiteProps {
    employes: EmployeLePlusVisite[];
}

const EmployeLePlusVisiteCard = ({employes}: EmployeLePlusVisiteProps) => {
    return (
        <div className="relative p-2.5 bg-bleu-12 rounded-2xl w-1/2 h-90 flex flex-col items-start justify-start gap-3">
            <div className="flex items-center justify-center gap-2">
                <div className="size-8 rounded-full bg-bleu-9 flex items-center justify-center">
                    <IdentificationBadgeIcon className="size-4 aspect-square" />
                </div>
                <span className="text-xl text-bleu-9 font-medium">Employé le plus visité</span>
            </div>                     
            <div className="absolute top-13 border border-bleu-11 rounded-2xl w-[97%] h-73.5 overflow-x-auto">
                <table className="rounded-2xl w-full text-base text-left">
                    <thead className="rounded-2xl text-base text-bleu-9 uppercase">
                        <tr className="">
                            <th scope="col" className="px-6 py-3 font-bold">
                                Matricule
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold">
                                Nom et prénom
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employes?.map((employe) => (
                                <tr key={employe.idEmploye} className="border-t border-bleu-11">
                                    <th scope="row" className="px-6 py-4 text-gris-1 font-normal">
                                        {employe.matricule}
                                    </th>
                                    <td className="px-6 py-4 text-gris-1 font-normal">
                                        {employe.nomEmploye} {employe.prenomEmploye}
                                    </td>
                                    <td className="px-6 py-4 text-gris-1 font-normal">                                
                                        {employe.nbVisites}
                                    </td>
                                </tr>                                                       
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeLePlusVisiteCard
