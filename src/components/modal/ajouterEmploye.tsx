import { X } from "lucide-react";
import { useReducer, useState } from "react";
import ManualForm from "../employes/manualForm";
import ImportFile from "../dropzone/importFile";
import type { EmployeRequest, EmployeRequestAction } from "../../interfaces/Employe";
import { useAjouterEmploye } from "../../hooks/employes/useFetchEmployes";
import { MoonLoader } from "react-spinners";
import { TOAST_OPTIONS_INFO } from "../../constants/toastOption";
import { toast } from "react-toastify";

const initialState: EmployeRequest = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    matricule: "",
    departement: ""
}

const employeReducer = (state: EmployeRequest, action: EmployeRequestAction): EmployeRequest => {
    switch (action.type) {
        case "SET_NOM":
            return { ...state, nom: action.payload }
        case "SET_PRENOM":
            return { ...state, prenom: action.payload }
        case "SET_EMAIL":
            return { ...state, email: action.payload }
        case "SET_TELEPHONE":
            return { ...state, telephone: action.payload }
        case "SET_MATRICULE":
            return { ...state, matricule: action.payload }
        case "SET_DEPARTEMENT":
            return { ...state, departement: action.payload }
        case "RESET":
            return initialState
        default:
            return state
    }
}

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: () => void;
}

const AjouterEmploye = ({isOpen, setIsOpen, refetch}: Props) => {
    const [isManual, setIsManual] = useState<boolean>(true)
    const [file, setFile] = useState<File[]>([])
    const { ajouterEmploye, isPending } = useAjouterEmploye();    
    const [employe, dispatch] = useReducer(employeReducer, initialState)    

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (employe.departement === "") {
            toast.error("Veuillez sélectionner un département", TOAST_OPTIONS_INFO)
            return
        }
        
        await ajouterEmploye(employe)
        refetch()
        dispatch({ type: "RESET" })
    }

    return (
        <div onClick={() => setIsOpen(!isOpen)} className="p-4 absolute top-0 left-0 z-30 bg-gris-1/70 w-full h-screen flex items-center justify-end">
            <form 
                onSubmit={handleSubmit}
                onClick={(e) => e.stopPropagation()} 
                className="relative pt-4 rounded-3xl bg-gris-12 w-1/2 h-full flex flex-col items-start justidy-center gap-4"
            >
                <div className="sticky top-0 z-10 border-b border-gris-11 px-4 pb-4 w-full flex items-center justify-between gap-6">
                    <span className="text-xl text-gris-1 font-medium">Ajouter un employé</span>
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <X strokeWidth={2} className="size-6 stroke-gris-1"/>
                    </button>
                </div>
                <div className="overflow-y-auto px-4 flex-1 w-full flex flex-col items-start justify-start gap-4">
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
                    {
                        isManual && 
                            <ManualForm  
                                employe={employe}
                                dispatch={dispatch}
                            />
                    }
                    {
                        !isManual && <ImportFile setFile={setFile} file={file} />
                    }
                </div>
                <div className="rounded-b-2xl border-t border-gris-11 p-4 w-full flex items-center justify-between gap-4">
                    <button
                        disabled={isPending}
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer text-rouge text-lg font-medium underline underline-offset-4"
                    >
                        Annuler
                    </button>
                    <button
                        disabled={isPending}
                        type="submit" 
                        className={`py-2 px-4 rounded-xl bg-bleu-9 cursor-pointer text-gris-12 text-lg font-medium ${isPending ? "" : "hover:bg-bleu-8 transion-all duration-200"}`}
                    >
                        {
                            isPending ? (
                                <MoonLoader color='#EEEEF0' size={24} />
                            ) : (
                                "Soumettre"
                            )
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AjouterEmploye
