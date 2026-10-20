import { X } from "lucide-react";
import { useState } from "react";
import ManualForm from "../vigiles/manuelForm";
import ImportFile from "../dropzone/importFile";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    vigileId: number | null;
    refetch: () => void;
}

const AjouterVigile = ({isOpen, setIsOpen, refetch, vigileId}: Props) => {
    const [isManual, setIsManual] = useState<boolean>(true)
    const [file, setFile] = useState<File[]>([])

    return (
        <div onClick={() => setIsOpen(!isOpen)} className="p-4 absolute top-0 left-0 z-30 bg-gris-1/70 w-full h-screen flex items-center justify-end">
            <form 
                onSubmit={(e) => e.preventDefault()}
                onClick={(e) => e.stopPropagation()} 
                className="relative pt-4 rounded-3xl bg-gris-12 w-1/2 h-full flex flex-col items-start justidy-center gap-2"
            >
                <div className="sticky top-0 z-10 border-b border-gris-11 px-3 pb-3 w-full flex items-center justify-between gap-6">
                    <span className="text-xl text-gris-1 font-medium">Ajouter un vigile</span>
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
                        isManual && <ManualForm />
                    }
                    {
                        !isManual && <ImportFile setFile={setFile} file={file} />
                    }
                </div>
                <div className="rounded-b-2xl border-t border-gris-11 p-3 w-full flex items-center justify-between gap-4">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer text-rouge text-lg font-medium underline underline-offset-4"
                    >
                        Annuler
                    </button>
                    <button
                        type="submit" 
                        className="py-2 px-4 rounded-xl bg-bleu-9 cursor-pointer text-gris-12 text-lg font-medium transion-all duration-200 hover:bg-bleu-8"
                    >
                        Soumettre
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AjouterVigile
