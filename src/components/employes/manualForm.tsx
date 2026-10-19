import { useEffect, useState } from "react";
import DropdownData from "../dropdowns/dropdownData"
import type { EmployeRequest, EmployeRequestAction } from "../../interfaces/Employe";
import { useFetchDepartements } from "../../hooks/departemets/useFetchDepartements";
import { useDebounce } from "../../hooks/debounce/useDebounce";

interface ManualFormProps {
    employe: EmployeRequest;
    dispatch: React.Dispatch<EmployeRequestAction>;    
}

const ManualForm = ({employe, dispatch}: ManualFormProps) => {
    const [selected, setSelected] = useState<string>("");
    const [recherche, setRecherche] = useState<string>("");
    const debouncedSearch = useDebounce(recherche, 500)
    const { departements, handleLoadMore, hasNextPage, isLoading } = useFetchDepartements(debouncedSearch.trim() || "")  

    useEffect(() => {
        if (selected !== "") dispatch({ type: "SET_DEPARTEMENT", payload: selected })
    }, [selected])

    useEffect(() => {
        setSelected(employe.departement ?? "")
    }, [employe])

    return (
        <div className="w-full flex flex-col items-center justify-start gap-6">            
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <label htmlFor="matricule" className="text-lg text-gris-8 font-medium">Matricule</label>
                <input 
                    id="matricule" 
                    value={employe.matricule}
                    onChange={(e) => dispatch({ type: "SET_MATRICULE", payload: e.target.value })}
                    type="text"
                    required 
                    className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le matricule..." 
                />
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
                    isLoading={isLoading}
                    hasNextPage={hasNextPage}
                    handleLoadMore={handleLoadMore}
                />
            </div>
            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="nom" className="text-lg text-gris-8 font-medium">Nom</label>
                    <input 
                        id="nom"
                        value={employe.nom}
                        onChange={(e) => dispatch({ type: "SET_NOM", payload: e.target.value })}
                        type="text"
                        required 
                        className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le nom..." 
                    />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="prenom" className="text-lg text-gris-8 font-medium">Prénom</label>
                    <input 
                        id="prenom" 
                        value={employe.prenom}
                        onChange={(e) => dispatch({ type: "SET_PRENOM", payload: e.target.value })}
                        type="text"
                        required 
                        className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le prénom..." 
                    />
                </div>
            </div>    
            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="telephone" className="text-lg text-gris-8 font-medium">Téléphone</label>
                    <input 
                        id="telephone"
                        value={employe.telephone}
                        onChange={(e) => dispatch({ type: "SET_TELEPHONE", payload: e.target.value })}
                        type="text" 
                        required
                        className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le téléphone..." 
                    />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="email" className="text-lg text-gris-8 font-medium">Email</label>
                    <input 
                        id="email"
                        value={employe.email}
                        onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                        type="text"
                        required 
                        className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le mail..." 
                    />
                </div>
            </div>    
        </div>
    )
}

export default ManualForm
