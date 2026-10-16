import { NetworkIcon } from "@phosphor-icons/react"
import type { DepartementsLePlusVisites } from "../../interfaces/stats";

interface DepartementLePlusVisiteProps {
    departements: DepartementsLePlusVisites[];
}

const DepartementsLePlusVisitesCard = ({departements}: DepartementLePlusVisiteProps) => {
    return (
        <div className="relative p-2.5 bg-bleu-12 rounded-2xl w-1/2 h-90 flex flex-col items-start justify-start gap-3">
            <div className="flex items-center justify-center gap-2">
                <div className="size-8 rounded-full bg-bleu-9 flex items-center justify-center">
                    <NetworkIcon className="size-4 aspect-square" />
                </div>
                <span className="text-xl text-bleu-9 font-medium">Departement le plus visité</span>
            </div>                     
            <div className="absolute top-13 border border-bleu-11 rounded-2xl w-[97%] h-73.5 overflow-x-auto">
                <table className="rounded-2xl w-full text-base text-left">
                    <thead className="rounded-2xl text-base text-bleu-9 uppercase">
                        <tr className="">
                            <th scope="col" className="px-6 py-3 font-bold">
                                Rang
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold">
                                département
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            departements?.map((departement, index) => (
                                <tr key={departement.departement} className="border-t border-bleu-11">
                                    <th scope="row" className="px-6 py-4 text-gris-1 font-normal">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4 text-gris-1 font-normal">
                                        {departement.departement}
                                    </td>
                                    <td className="px-6 py-4 text-gris-1 font-normal">                                
                                        {departement.total}
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

export default DepartementsLePlusVisitesCard
