import { CloudArrowUpIcon } from "@phosphor-icons/react"
import { ExcelIcon } from "../../assets/svg/excelIcon"
import { X } from "lucide-react"

const ImportForm = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center w-full">
                <label htmlFor="upload-file" className="flex flex-col items-center justify-center w-full h-64 border border-dashed border-gris-11 rounded-2xl cursor-pointer hover:bg-gris-11/10">
                    <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                        <CloudArrowUpIcon size={32} color="#5F606A" weight="light" />
                        <p className="mb-1 text-gris-8 text-sm font-medium">Glisser ou choisissez un <span className="text-bleu-9">fichier</span> à téléverser</p>
                        <p className=" text-gris-8 text-sm font-medium">xlsx, xls ou csv</p>
                    </div>
                    <input id="upload-file" type="file" className="hidden" />
                </label>
            </div> 
            <div className="p-2 bg-gris-11/10 rounded-2xl w-full flex items-center justify-between gap-2.5">
                <div className="flex items-center justify-center gap-2">
                    <ExcelIcon size={40}/>
                    <div className="flex flex-col items-start justify-center gap-0.5">
                        <span className="text-base text-gris-8 font-medium line-clamp-1">Liste_vigile.xlsx</span>
                        <span className="text-base text-gris-8/70 font-medium">367.6KB</span>
                    </div>
                </div>
                <button className="cursor-pointer">
                    <X strokeWidth={2} className="size-5 stroke-gris-1"/>
                </button>            
            </div>
        </div> 
    )
}

export default ImportForm
