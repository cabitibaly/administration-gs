import { CloudArrowUpIcon } from "@phosphor-icons/react"
import { ExcelIcon } from "../../assets/svg/excelIcon"
import { X } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { CsvIcon } from "../../assets/svg/csvIcon"

interface ImportFormProps {
    setFile: React.Dispatch<React.SetStateAction<File[]>>
    file: File[]
}

const ImportFile = ({setFile, file}: ImportFormProps) => {
    const {getRootProps, getInputProps, isDragGlobal } = 
        useDropzone({ 
            accept: {
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
                "application/vnd.ms-excel": [".xls", ".csv"]
            },
            multiple: false,
            onDrop: (acceptedfiles) => {
                setFile(acceptedfiles)
            }
        });
    
    const octetToKiloBytes = (octets: number) => {
        if (!octets) return 0
        return Math.round((octets / 1024) * 100) / 100
    }

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center w-full">
                <label
                    {...getRootProps()}                     
                    className={`flex flex-col items-center justify-center w-full h-64 border border-dashed rounded-2xl cursor-pointer ${isDragGlobal ? "border-bleu-9 bg-bleu-11/30" : "border-gris-11"}`}
                >
                    <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                        <CloudArrowUpIcon size={32} color="#5F606A" weight="light" />
                        <p className="mb-1 text-gris-8 text-sm font-medium">Glisser ou choisissez un <span className="text-bleu-9">fichier</span> à téléverser</p>
                        <p className=" text-gris-8 text-sm font-medium">xlsx, xls ou csv</p>
                    </div>
                    <input {...getInputProps()} />
                </label>
            </div>
            {
                file.length > 0 &&
                <div className="p-2 bg-gris-11/10 rounded-2xl w-full flex items-center justify-between gap-2.5">
                    <div className="flex items-center justify-center gap-2">
                        {
                            file[0].name.split(".").pop() === "xlsx" || file[0].name.split(".").pop() === "xls" 
                            ? (
                                <ExcelIcon size={40}/>
                            ) : (
                                <CsvIcon size={40}/>
                            )
                        }
                        <div className="flex flex-col items-start justify-center gap-0.5">
                            <span className="text-base text-gris-8 font-medium line-clamp-1">{file[0].name}</span>
                            <span className="text-base text-gris-8/70 font-medium">{octetToKiloBytes(file[0].size)}KB</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => setFile([])}
                        className="cursor-pointer"
                    >
                        <X strokeWidth={2} className="size-5 stroke-gris-1"/>
                    </button>            
                </div>
            }
        </div> 
    )
}

export default ImportFile
