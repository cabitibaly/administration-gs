import { useState } from "react";
import DropdownData from "../dropdowns/dropdownData"

interface Departement {
    id: number;
    nom: string;
}

const departements: Departement[] = [
    { id: 1, nom: "Direction Générale" },
    { id: 2, nom: "Ressources Humaines" },
    { id: 3, nom: "Comptabilité" },
    { id: 4, nom: "Finance" },
    { id: 5, nom: "Commercial" },
    { id: 6, nom: "Marketing" },
    { id: 7, nom: "Communication" },
    { id: 8, nom: "Service Client" },
    { id: 9, nom: "Informatique (IT)" },
    { id: 10, nom: "Juridique" },
    { id: 11, nom: "Achats" },
    { id: 12, nom: "Logistique" },
    { id: 13, nom: "Production" },
    { id: 14, nom: "Recherche et Développement (R&D)" },
    { id: 15, nom: "Services Généraux" }
];

const ManualForm = () => {
    const [selected, setSelected] = useState<string>("");
    const [recherche, setRecherche] = useState<string>("");    

    return (
        <div className="w-full flex flex-col items-center justify-start gap-6">            
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <label htmlFor="matricule" className="text-lg text-gris-8 font-medium">Matricule</label>
                <input id="matricule" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le matricule..." />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">                
                <span className="text-lg text-gris-8 font-medium">Département</span>
                <DropdownData
                    data={departements}
                    getLabel={(departement) => departement.nom}
                    getKey={(departement) => departement.id}
                    setSelected={setSelected} 
                    selected={selected} 
                    setRecherche={setRecherche} 
                    recherche={recherche} 
                    placeholder="Selectionner un département..."
                />
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
