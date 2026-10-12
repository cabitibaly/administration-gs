import { useState } from "react";
import NotificationModal from "../modal/notificationModal";
import { BellIcon } from "lucide-react";

interface Props {
    pathname: string;
}

const Topbar = ({pathname}: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="relative px-8 py-4 w-full  flex items-center justify-between gap-4">
            <span className="text-2xl text-gris-1 font-bold">{pathname}</span>
            <div className="flex items-center justify-center gap-4">
                <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer size-10 aspect-square rounded-full bg-bleu-12 flex items-center justify-center transition duration-200 ease-in-out hover:bg-bleu-11/70">
                    <BellIcon strokeWidth={1.25} className="size-7 stroke-bleu-9 aspect-square" />
                    <div className={`absolute top-0.5 right-0.5 size-2.5 bg-bleu-9 rounded-full block`} />
                </div>
                <div className="flex items-center justify-center gap-2">
                    <>
                        
                        <div className="bg-bleu-8 size-10 aspect-square rounded-full flex items-center justify-center max-md:size-8">
                            <span className="text-lg text-gris-12 font-bold max-md:text-sm">{("Admin").charAt(0).toUpperCase()}</span>
                        </div>                                
                        <div className="flex flex-col items-start justify-center max-xs:hidden">
                            <span className="text-base text-gris-1 font-bold max-md:text-sm">Admin Admin</span>
                            <span className="text-sm text-gris-8 font-semibold max-md:text-xs">Administrateur</span>
                        </div>
                    </>                
                </div>
            </div>
            {
                isOpen && <NotificationModal isOpen={isOpen} setIsOpen={setIsOpen} />
            }
        </div>
    )
}

export default Topbar
