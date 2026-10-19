import { TimerIcon } from "lucide-react"
import { useFetchVisites } from "../../hooks/visites/useFetchVisites"

const VisiteEnCoursCard = () => {
    const { visites } = useFetchVisites(new Date().toISOString(), "EN_COURS")

    return (
        <div className="relative p-2.5 bg-bleu-12 rounded-2xl w-1/2 h-90 flex flex-col items-start justify-start gap-3">
            <div className="flex items-center justify-center gap-2">
                <div className="size-8 rounded-full bg-bleu-9 flex items-center justify-center">
                    <TimerIcon className="size-4 aspect-square" />
                </div>
                <span className="text-xl text-bleu-9 font-medium">Visites en cours</span>
            </div>                     
            <div className="absolute top-13 border border-bleu-11 rounded-2xl w-[97%] h-73.5 overflow-x-auto">
                <table className="rounded-2xl w-full text-base text-left">
                    <thead className="rounded-2xl text-base text-bleu-9 uppercase">
                        <tr className="">
                            <th scope="col" className="px-3 py-3 font-bold">
                                Visiteur
                            </th>
                            <th scope="col" className="px-3 py-3 font-bold">
                                Hôte
                            </th>
                            <th scope="col" className="px-3 py-3 font-bold">
                                Heure d'arrivée
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            visites?.map((visite) => (
                                <tr key={visite.id} className="border-t border-bleu-11">
                                    <th scope="row" className="px-3 py-4 text-gris-1 font-normal">
                                        {visite.visiteurInfo}
                                    </th>
                                    <td className="px-3 py-4 text-gris-1 font-normal">
                                        {visite.employeHoteInfo}
                                    </td>
                                    <td className="px-3 py-4 text-gris-1 font-normal">                                
                                        {new Date(visite.heureArrivee).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
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

export default VisiteEnCoursCard
