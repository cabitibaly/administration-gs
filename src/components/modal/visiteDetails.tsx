import { X } from "lucide-react";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisiteDetails = ({isOpen, setIsOpen}: Props) => {
    
    return (
        <div onClick={() => setIsOpen(!isOpen)} className="p-4 absolute top-0 left-0 z-30 bg-gris-1/70 w-full h-screen flex items-center justify-center">
            <form 
                onSubmit={(e) => e.preventDefault()}
                onClick={(e) => e.stopPropagation()} 
                className="relative pt-4 rounded-3xl bg-gris-12 w-1/3 flex flex-col items-start justidy-center gap-4"
            >
                <div className="sticky top-0 z-10 border-b border-gris-11 px-4 pb-4 w-full flex items-center justify-between gap-6">
                    <span className="text-xl text-gris-1 font-medium">Détails de la visite</span>
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <X strokeWidth={2} className="size-6 stroke-gris-1"/>
                    </button>
                </div>
                <div className="overflow-y-auto px-4 pb-4 flex-1 w-full flex flex-col items-start justify-start gap-6">
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                        <span className="text-lg text-gris-8 font-medium">Visiteur</span>
                        <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                            Aoteru Misumi
                        </p>                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                        <span className="text-lg text-gris-8 font-medium">Employé (hôte)</span>
                        <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                            Natsuki Subaru
                        </p>                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                        <span className="text-lg text-gris-8 font-medium">Motif de la visite</span>
                        <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                        </p>                        
                    </div>
                    <div className="w-full flex items-center justify-center gap-6">
                        <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                            <span className="text-lg text-gris-8 font-medium">Heure d'arrivée</span>
                            <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                                {new Date().toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit"})}
                            </p>
                        </div>
                        <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                            <span className="text-lg text-gris-8 font-medium">Heure de départ</span>
                            <p className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 font-medium">
                                {new Date().toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit"})}
                            </p>
                        </div>
                    </div>
                </div>                
            </form>
        </div>
    )
}

export default VisiteDetails
