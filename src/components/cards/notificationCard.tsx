import { Mail } from "lucide-react"
import type { Notification } from "../../interfaces/notification";

interface NotificationCardProps {
    notification: Notification;
}

const NotificationCard = ({notification}: NotificationCardProps) => {
    return (
        <div className="relative border-b border-bleu-6/30 p-4 w-full flex items-start justify-center gap-4">
            <div className={`size-10 aspect-square rounded-full bg-bleu-11 flex items-center justify-center`}>
                <Mail strokeWidth={1.5} className="size-6 stroke-bleu-9" />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-1">
                <span className="text-gris-1 text-base text-left font-bold">{notification.titre}</span>
                <span className="text-base text-left text-gris-1 font-normal">{notification.contenu}</span>
                <span className="text-base text-left text-gris-9/50 font-normal">{new Date(notification.date || "").toLocaleString("fr-FR", {day: "2-digit", month: "long", year: "numeric"})}</span>
                <div className="w-full flex items-center justify-start gap-4">
                    <button 
                        onClick={() => console.log("Has read")} 
                        className={`cursor-pointer px-3 py-1.5 bg-bleu-9 rounded-lg text-base text-gris-12 font-medium transition duration-200 hover:bg-bleu-9/50 ${notification.estLu ? "hidden" : ""}`}
                    >
                        Marquer comme lu
                    </button>
                    <button onClick={() => console.log("Deleted")} className="cursor-pointer px-3 py-1.5 bg-rouge/50 rounded-lg text-base text-rouge font-medium transition duration-200 hover:bg-rouge/20">
                        Supprimer
                    </button>
                </div>
            </div>            
            <div className={`absolute top-6 right-4 ${notification.estLu ? "hidden" : ""}`}>
                <div className="rounded-full size-2.5 bg-bleu-9" />
            </div>
        </div>
    )
}

export default NotificationCard