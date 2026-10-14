import { useState } from "react";
import DropdownData from "../dropdowns/dropdownData";

interface Entreprise {
    id: number;
    nom: string;
}

const entrerpises: Entreprise[] = [
    { id: 1, nom: "BBS First Security" },
    { id: 2, nom: "Bat Security" },
    { id: 3, nom: "Burval Corporate" },
    { id: 4, nom: "BBC Security SARL" },
    { id: 5, nom: "BASE Sécurité" },
    { id: 6, nom: "Freedos Agence Sécurité" },
    { id: 7, nom: "Prime Security & Services" },
    { id: 8, nom: "B.P.S Protection SARL" },
    { id: 9, nom: "Sogarnet" },
    { id: 10, nom: "ESSD Deschamps" }
]    

const ManualForm = () => {
    const [selected, setSelected] = useState<string>("");
    const [recherche, setRecherche] = useState<string>("");

    return (
        <div className="w-full flex flex-col items-center justify-start gap-6">            
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <label htmlFor="poste-carte" className="text-lg text-gris-8 font-medium">Poste de garde</label>
                <input id="poste-carte" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le poste de garde..." />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <span className="text-lg text-gris-8 font-medium">Entreprise</span>
                <DropdownData 
                    data={entrerpises}
                    getLabel={(entreprise) => entreprise.nom}
                    getKey={(entreprise) => entreprise.id}
                    setSelected={setSelected}
                    selected={selected}
                    setRecherche={setRecherche}
                    recherche={recherche}
                    placeholder="Selectionner une entreprise..."
                />
            </div>
            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="heure-debut" className="text-lg text-gris-8 font-medium">Heure de début de garde</label>
                    <input id="heure-debut" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir l'heure de début de garde..." />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="heure-fin" className="text-lg text-gris-8 font-medium">Heure de fin de garde</label>
                    <input id="heure-fin" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir l'heure de fin de garde..." />
                </div>
            </div>
            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="nom" className="text-lg text-gris-8 font-medium">Nom</label>
                    <input id="nom" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le nom..." />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="prenom" className="text-lg text-gris-8 font-medium">Prénom</label>
                    <input id="prenom" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le prénom..." />
                </div>
            </div>    
            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="telephone" className="text-lg text-gris-8 font-medium">Téléphone</label>
                    <input id="telephone" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le téléphone..." />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="email" className="text-lg text-gris-8 font-medium">Email</label>
                    <input id="email" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le mail..." />
                </div>
            </div>                
        </div>
    )
}

export default ManualForm
