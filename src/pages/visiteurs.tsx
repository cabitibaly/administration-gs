import Sidebar from "../components/navbar/sidebar"
import VisiteurBody from "../components/visiteurs/visiteurBody"

const Visiteurs = () => {
    return (
        <div className="relative flex flex-row items-start justify-start w-screen h-screen">
            <Sidebar />
            <VisiteurBody />
        </div>
    )
}

export default Visiteurs
