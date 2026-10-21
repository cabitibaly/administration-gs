import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useAjouterEntreprise, useFetchEntreprise, useModifierEntreprise } from "../../hooks/entrerpise/useFetchEntreprise";
import { toast } from "react-toastify";
import { TOAST_OPTIONS_INFO } from "../../constants/toastOption";
import { MoonLoader } from "react-spinners";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    entrepriseId: number | null;
    refetch: () => void;
}

const AjouterEntreprise = ({isOpen, setIsOpen, entrepriseId, refetch}: Props) => {
    const [nom, setNom] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [telephone, setTelephone] = useState<string>("")
    const { ajouterEntreprise, isPending: isPendingAdd } = useAjouterEntreprise();
    const { modifierEntreprise, isPending: isPendingUpdate } = useModifierEntreprise();
    const { entreprise: entrepriseToModify, isLoading, refetch: refetchAfterUpdate } = useFetchEntreprise(entrepriseId!);

    const reset = () => {
        setNom("")
        setEmail("")
        setTelephone("")
    }

    useEffect(() => {
        setNom(entrepriseToModify?.nom ?? "")
        setEmail(entrepriseToModify?.email ?? "")
        setTelephone(entrepriseToModify?.telephone ?? "")
    }, [entrepriseToModify])

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (nom === "") {
            toast.error("Veuillez saisir un nom d'entreprise", TOAST_OPTIONS_INFO)
            return
        }

        if (email === "") {
            toast.error("Veuillez saisir un email d'entreprise", TOAST_OPTIONS_INFO)
            return
        }

        if (telephone === "") {
            toast.error("Veuillez saisir un téléphone d'entreprise", TOAST_OPTIONS_INFO)
            return
        }

        try {
            if (entrepriseId === null) {
                await ajouterEntreprise({ nom, email, telephone })
            } else {
                await modifierEntreprise({ id: entrepriseId, data: { nom, email, telephone } })
            }
        } finally {
            if (entrepriseId !== null) refetchAfterUpdate()
            refetch()            
            reset()
            setIsOpen(!isOpen)
        }

    }

    return (
        <div onClick={() => setIsOpen(!isOpen)} className="p-4 absolute top-0 left-0 z-30 bg-gris-1/70 w-full h-screen flex items-center justify-center">
            <form 
                onSubmit={handleSubmit}
                onClick={(e) => e.stopPropagation()} 
                className="relative pt-4 rounded-3xl bg-gris-12 w-1/4 flex flex-col items-start justidy-center gap-4"
            >
                <div className="border-b border-gris-11 px-4 pb-4 sticky top-0 z-10 w-full flex items-center justify-between gap-6">
                    <span className="text-lg text-gris-1 font-medium">Ajouter une entreprise</span>
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="border border-gris-11 size-6 rounded-full cursor-pointer flex items-center justify-center">
                        <X strokeWidth={2} className="size-4 stroke-gris-1"/>
                    </button>
                </div>
                <div className="px-4 pb-4 w-full flex flex-col items-start justify-start gap-6">
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                        <label htmlFor="entreprise" className="text-lg text-gris-8 font-medium">Nom entreprise</label>
                        <input 
                            id="entreprise" 
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            type="text" 
                            required
                            className="border border-transparent bg-gris-11/20 rounded-lg w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le nom de l'entreprise..." 
                        />
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                        <label htmlFor="Email" className="text-lg text-gris-8 font-medium">Email entreprise</label>
                        <input 
                            id="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            required 
                            className="border border-transparent bg-gris-11/20 rounded-lg w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le mail de l'entreprise..." 
                        />
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                        <label htmlFor="telephone" className="text-lg text-gris-8 font-medium">Téléphone entreprise</label>
                        <input 
                            id="telephone"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                            type="text" 
                            className="border border-transparent bg-gris-11/20 rounded-lg w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le téléphone de l'entreprise..." 
                        />
                    </div>
                    {
                        isPendingAdd || isPendingUpdate ? (
                            <div className={`py-2 px-4 rounded-xl bg-bleu-9 w-full flex items-center justify-center`}>                                                    
                                <MoonLoader color='#EEEEF0' size={24} />
                            </div>
                        ) : (
                            <button
                                disabled={isPendingAdd || isPendingUpdate}                    
                                type="submit" 
                                className="py-2 px-4 w-full rounded-lg bg-bleu-9 cursor-pointer text-gris-12 text-lg font-medium transion-all duration-200 hover:bg-bleu-8"
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

export default AjouterEntreprise
