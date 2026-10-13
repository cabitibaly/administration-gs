import { X } from "lucide-react";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AjouterDepartement = ({isOpen, setIsOpen}: Props) => {
    return (
        <div onClick={() => setIsOpen(!isOpen)} className="p-4 absolute top-0 left-0 z-30 bg-gris-1/70 w-full h-screen flex items-center justify-center">
            <form 
                onSubmit={(e) => e.preventDefault()}
                onClick={(e) => e.stopPropagation()} 
                className="relative p-4 rounded-3xl bg-gris-12 w-1/4 flex flex-col items-start justidy-center gap-4"
            >
                <div className="sticky top-0 z-10 w-full flex items-center justify-between gap-6">
                    <span className="text-lg text-gris-1 font-medium">Ajouter un département</span>
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="border border-gris-11 size-6 rounded-full cursor-pointer flex items-center justify-center">
                        <X strokeWidth={2} className="size-4 stroke-gris-1"/>
                    </button>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-2">
                    <label htmlFor="departement" className="sr-only ">departement</label>
                    <input id="departement" type="text" className="border border-transparent bg-gris-11/20 rounded-lg w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le departement..." />
                </div>
                <button
                    type="submit" 
                    className="py-2 px-4 w-full rounded-lg bg-bleu-9 cursor-pointer text-gris-12 text-lg font-medium transion-all duration-200 hover:bg-bleu-8"
                >
                    Soumettre
                </button>                
            </form>
        </div>
    )
}

export default AjouterDepartement
