import { useEffect, useState } from "react";
import DropdownData from "../dropdowns/dropdownData";
import { convertDateToTime, convertTimeToDate } from "../../utils/convertTimeToDate";
import type { EmployeRequest, EmployeRequestAction } from "../../interfaces/Employe";
import { useDebounce } from "../../hooks/debounce/useDebounce";
import type { VigileRequest, VigileRequestAction } from "../../interfaces/vigile";
import { useFetchEntreprises } from "../../hooks/entrerpise/useFetchEntreprise";

interface ManualFormProps {
    vigile: VigileRequest;
    dispatch: React.Dispatch<VigileRequestAction>;    
    vigileId: number | null;
}

const ManualForm = ({vigile, dispatch, vigileId}: ManualFormProps) => {
    const [selected, setSelected] = useState<string>("");
    const [recherche, setRecherche] = useState<string>("");
    const debouncedSearch = useDebounce(recherche, 500) 
    const { entreprises, handleLoadMore, hasNextPage, isLoading } = useFetchEntreprises(debouncedSearch.trim() || "")
    const [heureDebut, setHeureDebut] = useState<string>("");
    const [heureFin, setHeureFin] = useState<string>("");

    useEffect(() => {
        if (selected !== "") dispatch({ type: "SET_ENTREPRISE", payload: selected })
    }, [selected])
    
    useEffect(() => {
        setSelected(vigile.entreprise ?? "")
    }, [vigile])

    const handleChangeHeure = (e: React.ChangeEvent<HTMLInputElement>, isHeureDebut: boolean) => {
        const date = convertTimeToDate(e.target.value)
        if (isHeureDebut) {
            dispatch({ type: "SET_HEURE_DEBUT_GARDE", payload: date.toISOString() })
            // setHeureDebut(e.target.value)
        } else {
            dispatch({ type: "SET_HEURE_FIN_GARDE", payload: date.toISOString() })
            // setHeureFin(e.target.value)
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-start gap-6">            
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <label htmlFor="poste-carte" className="text-lg text-gris-8 font-medium">Poste de garde</label>
                <input 
                    id="poste-carte"
                    value={vigile.posteDeGarde}
                    onChange={(e) => dispatch({ type: "SET_POSTE_DE_GARDE", payload: e.target.value })}
                    type="text" 
                    required
                    className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" 
                    placeholder="Saisir le poste de garde..." 
                />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <span className="text-lg text-gris-8 font-medium">Entreprise</span>
                <DropdownData 
                    data={entreprises}
                    getLabel={(entreprise) => entreprise.nom}
                    getKey={(entreprise) => entreprise.id}
                    setSelected={setSelected}
                    selected={selected}
                    setRecherche={setRecherche}
                    recherche={recherche}
                    placeholder="Selectionner une entreprise..."
                    isLoading={isLoading}
                    hasNextPage={hasNextPage}
                    handleLoadMore={handleLoadMore}
                />
            </div>
            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="heure-debut" className="text-lg text-gris-8 font-medium">Heure de début de garde</label>
                    <input
                        value={convertDateToTime(vigile.heureDebutGarde)} 
                        onChange={(e) => handleChangeHeure(e, true)}
                        id="heure-debut" 
                        type="time" 
                        className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir l'heure de fin de garde..." 
                    />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="heure-fin" className="text-lg text-gris-8 font-medium">Heure de fin de garde</label>
                    <input
                        value={convertDateToTime(vigile.heureFinGarde)} 
                        onChange={(e) => handleChangeHeure(e, false)}
                        id="heure-fin" 
                        type="time" 
                        className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir l'heure de fin de garde..." 
                    />
                </div>
            </div>
            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="nom" className="text-lg text-gris-8 font-medium">Nom</label>
                    <input 
                        id="nom"
                        value={vigile.nom}
                        onChange={(e) => dispatch({ type: "SET_NOM", payload: e.target.value })}
                        type="text"
                        required 
                        className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" 
                        placeholder="Saisir le nom..." 
                    />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="prenom" className="text-lg text-gris-8 font-medium">Prénom</label>
                    <input 
                        id="prenom" 
                        value={vigile.prenom}
                        onChange={(e) => dispatch({ type: "SET_PRENOM", payload: e.target.value })}
                        type="text"
                        required 
                        className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" 
                        placeholder="Saisir le prénom..." 
                    />
                </div>
            </div>    
            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="telephone" className="text-lg text-gris-8 font-medium">Téléphone</label>
                    <input 
                        id="telephone"
                        value={vigile.telephone}
                        onChange={(e) => dispatch({ type: "SET_TELEPHONE", payload: e.target.value })}
                        type="text" 
                        required
                        className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" 
                        placeholder="Saisir le téléphone..." 
                    />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="email" className="text-lg text-gris-8 font-medium">Email</label>
                    <input 
                        id="email"
                        value={vigile.email}
                        onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                        type="text"
                        required 
                        className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" 
                        placeholder="Saisir le mail..." 
                    />
                </div>
            </div>                
        </div>
    )
}

export default ManualForm
