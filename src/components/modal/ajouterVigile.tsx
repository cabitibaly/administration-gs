import { X } from "lucide-react";
import { useEffect, useReducer, useState } from "react";
import ManualForm from "../vigiles/manuelForm";
import ImportFile from "../dropzone/importFile";
import type { VigileRequest, VigileRequestAction } from "../../interfaces/vigile";
import { useAjouterVigile, useFetchVigile, useImporterVigile, useModifierVigile } from "../../hooks/vigiles/useFetchVigile";
import { toast } from "react-toastify";
import { TOAST_OPTIONS_INFO } from "../../constants/toastOption";
import { MoonLoader } from "react-spinners";

const initialState: VigileRequest = {
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    posteDeGarde: "",
    heureDebutGarde: "",
    heureFinGarde: "",
    entreprise: ""
}

const vigileReducer = (state: VigileRequest, action: VigileRequestAction): VigileRequest => {
    switch (action.type) {
        case "SET_NOM":
            return { ...state, nom: action.payload }
        case "SET_PRENOM":
            return { ...state, prenom: action.payload }
        case "SET_TELEPHONE":
            return { ...state, telephone: action.payload }
        case "SET_EMAIL":
            return { ...state, email: action.payload }
        case "SET_POSTE_DE_GARDE":
            return { ...state, posteDeGarde: action.payload }
        case "SET_HEURE_DEBUT_GARDE":
            return { ...state, heureDebutGarde: action.payload }
        case "SET_HEURE_FIN_GARDE":
            return { ...state, heureFinGarde: action.payload }
        case "SET_ENTREPRISE":
            return { ...state, entreprise: action.payload }
        case "RESET":
            return initialState
        case "UPDATE":
            return action.payload
        default:
            return state
    }
}

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    vigileId: number | null;
    refetch: () => void;
}

const AjouterVigile = ({isOpen, setIsOpen, refetch, vigileId}: Props) => {
    const [isManual, setIsManual] = useState<boolean>(true)
    const [file, setFile] = useState<File[]>([])
    const [vigile, dispatch] = useReducer(vigileReducer, initialState)
    const { ajouterVigile, isPending: isPendingAdd } = useAjouterVigile();
    const { modifierVigile, isPending: isPendingUpdate } = useModifierVigile();
    const { importerVigile, isPending: isPendingImport } = useImporterVigile();
    const { vigile: vigileToModify, isLoading, refetch: refetchAfterUpdate } = useFetchVigile(vigileId);

    useEffect(() => {
        if (vigileToModify) {
            dispatch({ type: "UPDATE", payload: vigileToModify })
        }
    }, [vigileToModify])

    const addVigile = async () => {        
        if (isManual) {
            if (vigile.entreprise === "") {
                toast.error("Veuillez sélectionner une entreprise", TOAST_OPTIONS_INFO)
                return
            } 
    
            if (vigile.heureDebutGarde === "") {
                toast.error("Veuillez sélectionner une heure de début de garde", TOAST_OPTIONS_INFO)
                return
            }
    
            if (vigile.heureFinGarde === "") {
                toast.error("Veuillez sélectionner une heure de fin de garde", TOAST_OPTIONS_INFO)
                return
            }
            
            await ajouterVigile(vigile)
        } else {
            if (file.length === 0) {
                toast.error("Veuillez choisir un fichier", TOAST_OPTIONS_INFO)
                return
            }
            importerVigile(file[0])
        }
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()        
                                
        try {
            if (vigileId === null) {
                await addVigile()
            } else {
                await modifierVigile({ id: vigileId, data: vigile })
            }
        } finally {
            if (vigileId !== null) refetchAfterUpdate()
            refetch()                        
            setFile([])
            dispatch({ type: "RESET" })
        }
    }

    return (
        <div onClick={() => setIsOpen(!isOpen)} className="p-4 absolute top-0 left-0 z-30 bg-gris-1/70 w-full h-screen flex items-center justify-end">
            <form 
                onSubmit={handleSubmit}
                onClick={(e) => e.stopPropagation()} 
                className="relative pt-4 rounded-3xl bg-gris-12 w-1/2 h-full flex flex-col items-start justidy-center gap-2"
            >
                <div className="sticky top-0 z-10 border-b border-gris-11 px-3 pb-3 w-full flex items-center justify-between gap-6">
                    <span className="text-xl text-gris-1 font-medium">{vigileId ? "Modifier" : "Ajouter"} une vigile</span>
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <X strokeWidth={2} className="size-6 stroke-gris-1"/>
                    </button>
                </div>
                <div className="overflow-y-auto px-4 flex-1 w-full flex flex-col items-start justify-start gap-4">
                    {    
                        vigileId === null &&
                        <div className="p-1 bg-gris-11/20 rounded-xl w-full flex items-center justify-between gap-1">
                            <button
                                type="button"
                                onClick={() => setIsManual(true)}
                                className={`cursor-pointer border border-transparent px-4 py-2.5 w-1/2 rounded-lg tetx-lg font-medium transition duration-200 ${ isManual ?  "bg-bleu-9 text-bleu-12 hover:bg-bleu-8" : "bg-transparent text-gris-10 hover:border-bleu-9 hover:text-bleu-9"}`}
                            >
                                Saisie manuelle
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsManual(false)}
                                className={`cursor-pointer border border-transparent px-4 py-2.5 w-1/2 rounded-lg tetx-lg font-medium transition duration-200 ${ !isManual ?  "bg-bleu-9 text-bleu-12 hover:bg-bleu-8" : "bg-transparent text-gris-10 hover:border-bleu-9 hover:text-bleu-9"}`}
                            >
                                Importer un fichier
                            </button>
                        </div>
                    }
                    {
                        isManual && 
                        <ManualForm 
                            dispatch={dispatch}
                            vigile={vigile}
                            vigileId={vigileId}

                        />
                    }
                    {
                        !isManual && <ImportFile setFile={setFile} file={file} />
                    }
                </div>
                <div className="rounded-b-2xl border-t border-gris-11 p-3 w-full flex items-center justify-between gap-4">
                    <button
                        disabled={isPendingAdd || isPendingImport || isPendingUpdate}
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer text-rouge text-lg font-medium underline underline-offset-4"
                    >
                        Annuler
                    </button>
                    {        
                        isPendingAdd || isPendingImport || isPendingUpdate ? (
                            <div className={`py-2 px-4 rounded-xl bg-bleu-9`}>                                                    
                                <MoonLoader color='#EEEEF0' size={24} />
                            </div>

                        ) : (
                            <button
                                disabled={isPendingAdd || isPendingImport || isPendingUpdate}
                                type="submit" 
                                className={`py-2 px-4 rounded-xl bg-bleu-9 cursor-pointer text-gris-12 text-lg font-medium hover:bg-bleu-8 transion-all duration-200`}
                            >
                                Soumettre                                               
                            </button>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default AjouterVigile
