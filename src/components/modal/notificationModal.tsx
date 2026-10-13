import { X } from "lucide-react"
import NotificationCard from "../cards/notificationCard";
import { useRef } from "react";
import { useClickOutside } from "../../hooks/outside-click/useClickOutside";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationModal = ({isOpen, setIsOpen}: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => setIsOpen(false), isOpen);

    return (
        <div ref={ref} className="absolute top-19 right-8 z-10 border border-gris-11 overflow-auto w-2/5 h-[85.5vh] bg-gris-12 rounded-2xl flex flex-col items-start justify-start">
            <div className="sticky top-0 z-10 border-b border-gris-11 p-4 w-full flex items-center justify-between gap-6">
                <span className="text-xl text-gris-1 font-medium">Notifications</span>
                <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                    <X strokeWidth={1.5} className="size-6 stroke-gris-1"/>
                </button>
            </div>    
            <NotificationCard 
                notification={{
                    id: 1,
                    titre: "Notification",
                    contenu: "Contenu de la notification",
                    type: "info",
                    estLu: false,
                    date: "2023-03-01T00:00:00.000Z"
                }}
            />
        </div>
    )
}

export default NotificationModal
