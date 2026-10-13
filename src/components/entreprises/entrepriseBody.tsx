import { ToastContainer } from "react-toastify"
import Topbar from "../navbar/topbar"
import { useState } from "react";
import { Check } from "lucide-react";
import EntrepriseLigne from "../cards/EntrepriseLigne";
import AjouterEntreprise from "../modal/ajouterEntreprise";

const EntrepriseBody = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [recherche, setRecherche] = useState<string>("")
    const [isParentChecked, setIsParentChecked] = useState<boolean>(false);

    return (
        <div className="w-full flex flex-col items-start justify-start gap-0">
            <div className="absolute top-0"><ToastContainer /></div>
            <Topbar pathname="Entreprises" />
            <div className="px-8 overflow-x-hidden overflow-y-auto h-[85.5vh] w-full flex flex-col items-start justify-start gap-4">
                <div className="border-t border-gris-6/20 pt-4 w-full shrink-0 flex items-start justify-between space-x-4">
                    <div className="flex justify-center items-center gap-6">
                        <label htmlFor="recherche" className="sr-only">Recherche entreprise</label>
                        <input value={recherche} onChange={(e) => setRecherche(e.target.value)} type="text" className="border border-gris-8/20 bg-gris-11/20 rounded-xl w-80 py-2 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Recherche..." />
                    </div> 
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer px-4 py-2 bg-bleu-9 rounded-xl tetx-lg text-bleu-12 font-medium transition duration-200 hover:bg-bleu-11"
                    >
                        Ajouter
                    </button>
                </div>
                <div className="border border-bleu-11 w-full h-full relative rounded-3xl overflow-x-auto">                            
                    <table className="absolute top-0 left-0 w-full text-base text-left text-gris-12 rtl:text-right">
                        <thead className="text-base text-bleu-9 uppercase bg-tranparent">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <div onClick={() => setIsParentChecked(!isParentChecked)} className={`rounded-md cursor-pointer border size-5 flex items-center justify-center transition duration-200 ease-in-out ${isParentChecked ? "bg-bleu-9 border-transparent" : "border-bleu-6 bg-transparent"}`}>
                                            {isParentChecked && <Check className={`size-4 stroke-bleu-12`} />}
                                        </div>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    N°
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nom Entreprise
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Téléphone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date création
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>                                    
                            <EntrepriseLigne />
                        </tbody>
                    </table>
                </div>
            </div>
            {
                isOpen && 
                <AjouterEntreprise 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}    
                />
            }
        </div>
    )
}

export default EntrepriseBody
