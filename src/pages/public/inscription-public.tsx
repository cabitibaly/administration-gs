import { useReducer } from "react"
import { employeReducer, initialState } from "../../interfaces/Employe"
import ManualForm from "../../components/employes/manualForm"
import { toast, ToastContainer } from "react-toastify"
import { TOAST_OPTIONS_INFO } from "../../constants/toastOption"
import { isValidEmail, isValidPhone } from "../../utils/fieldValidation"
import { useAjouterEmploye } from "../../hooks/employes/useFetchEmployes"
import { MoonLoader } from "react-spinners"

const InscriptionPublic = () => {
    const [employe, dispatch] = useReducer(employeReducer, initialState)
    const { ajouterEmploye, isPending } = useAjouterEmploye({isPublicInscription: true});

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (employe.departement === "") {
            toast.error("Veuillez sélectionner un département", TOAST_OPTIONS_INFO)
            return
        }
        
        if (!isValidPhone(employe.telephone)) {
            toast.info("Veuillez saisir un numéro de téléphone valide", TOAST_OPTIONS_INFO)
            return
        }
        
        if (!isValidEmail(employe.email)) {
            toast.info("Veuillez saisir une adresse email valide", TOAST_OPTIONS_INFO)
            return
        }

        try {    
            ajouterEmploye(employe)
        } finally {
            dispatch({ type: "RESET" })
        }        
    }

    return (
        <div className='px-4 pt-8 bg-gris-12 w-screen h-screen flex items-start justify-center'>
            <ToastContainer />
            <form onSubmit={handleSubmit} className='w-2/5 rounded-3xl flex flex-col items-center justify-center gap-4'>                
                <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-gris-1 text-2xl font-medium">Inscription Employé</span>
                    <p className="text-gris-8 text-base font-normal text-center">
                        Veuillez renseigner vos informations personnelles pour vous enregistrer dans le système.
                    </p>
                </div>
                <ManualForm  
                    employe={employe}
                    dispatch={dispatch}                    
                />
                <span className="self-start text-sm font-normal text-rouge">NB: tous les champs sont obligatoires</span>
                {        
                    isPending ? (
                        <div className={`py-2 px-4 rounded-xl bg-bleu-9`}>                                                    
                            <MoonLoader color='#EEEEF0' size={24} />
                        </div>
                
                    ) : (
                        <button
                            disabled={isPending}
                            type="submit" 
                            className={`py-2 px-4 rounded-xl bg-bleu-9 cursor-pointer w-full text-gris-12 text-lg font-medium hover:bg-bleu-8 transion-all duration-200`}
                        >
                            S'inscrire                                               
                        </button>
                    )
                }
            </form>
        </div>
    )
}

export default InscriptionPublic
