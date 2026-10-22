import { X } from "lucide-react"
import NotificationCard from "../cards/notificationCard";
import { useRef } from "react";
import { useClickOutside } from "../../hooks/outside-click/useClickOutside";
import { useFetchListeNotification } from "../../hooks/notifications/useFetchNotification";
import { MoonLoader } from "react-spinners";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationModal = ({isOpen, setIsOpen}: Props) => {
    const { notifications, isLoading, handleLoadMore, hasNextPage } = useFetchListeNotification();
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
            {
                isLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <MoonLoader size={24} color="#0C7DEF" />                        
                    </div>
                ) : (
                    notifications.length == 0 ? (
                        <div className="w-full h-full flex items-center justify-center">                            
                            <span className="text-lg text-gris-1 font-medium">Aucune notification</span>
                        </div>
                    ) : (
                        notifications.map(notif => (
                            <NotificationCard 
                                notification={notif}
                            />
                        ))
                    )
                )
            }    
            {
                hasNextPage &&
                <button
                    onClick={() => handleLoadMore?.()} 
                    className="z-50 w-full text-center text-base text-bleu-9 font-medium underline transition duration-200 hover:bg-gris-10/20"
                >
                        Charger plus de départements
                </button>
            }                        
        </div>
    )
}

export default NotificationModal
