import { ChevronDown, Search } from "lucide-react";
import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/outside-click/useClickOutside";

interface DropdownDataProps<T> {
    data: T[];
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    selected: string;
    setRecherche: React.Dispatch<React.SetStateAction<string>>;
    recherche: string;
    getLabel: (item: T) => string;
    getKey: (item: T) => string | number;
    placeholder?: string;
}

const DropdownData = <T,> ({
    data,
    setSelected, 
    selected, 
    setRecherche, 
    recherche, 
    getLabel,
    getKey,
    placeholder = "Selectionner..."
}: DropdownDataProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => setIsOpen(false), isOpen);

    const dataFiltered = data.filter(
        (item) => getLabel(item).toLowerCase().includes(recherche.toLowerCase())
    );

    const selectedItem = data.find((item) => getLabel(item) === selected);

    return (
        <div
            ref={ref}
            onClick={() => setIsOpen(!isOpen)}
            className={`relative bg-gris-11/20 w-full py-3 px-3 rounded-xl flex items-center jusitfy-start ${isOpen ? "border border-gris-8" : ""}`}
        >
            <div className="w-full flex items-center justify-between gap-4">
                <span className={`cursor-default text-base font-normal ${selectedItem ? "text-gris-1" : "text-gris-10"}`}>
                    {
                        selectedItem ? getLabel(selectedItem) : placeholder
                    }
                </span>
                <div className={`size-6 flex items-center justify-center transition duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="stroke-gris-6 size-6 aspect-square" />
                </div>
                {    
                    isOpen &&
                        <div className="absolute left-0 overflow-auto z-50 top-full px-2 pb-2 border border-gris-8/20 bg-gris-12 rounded-xl w-full h-72 flex-col items-start justify-start">
                            <div className="sticky top-0 py-2 bg-gris-12 w-full flex justify-center items-center gap-6">
                                <label htmlFor="recherche" className="sr-only">Recherche vigiles</label>
                                <input 
                                    value={recherche} 
                                    onChange={(e) => setRecherche(e.target.value)} 
                                    type="text"
                                    onClick={(e) => e.stopPropagation()}
                                    className="border border-gris-8/20 rounded-sm w-full p-2 ps-9 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Recherche..." 
                                />
                                <div className="absolute top-0 inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                                    <Search strokeWidth={1.5} size={20} color='#797B86' />
                                </div>
                            </div>
                            {
                                dataFiltered.map((item) => {
                                    const key = getKey(item);
                                    const label = getLabel(item);
                                    const isSelected = label === selected;

                                    return (    
                                        <button 
                                            key={key} 
                                            type="button" 
                                            onClick={() => {
                                                setSelected(label)
                                                setIsOpen(false)
                                                setRecherche("")
                                            }} 
                                            className={`cursor-pointer p-2 rounded-sm w-full text-left text-base text-gris-6 font-normal transition duration-200 hover:bg-gris-10/20 ${isSelected ? "bg-gris-10/20" : ""}`}
                                        >
                                            {label}
                                        </button>
                                    )
                                })
                            }                                
                        </div>
                }
            </div>
        </div>
    )
}

export default DropdownData
