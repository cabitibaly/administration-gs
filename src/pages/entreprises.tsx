import EntrepriseBody from "../components/entreprises/entrepriseBody"
import Sidebar from "../components/navbar/sidebar"

const Entreprises = () => {
    return (
        <div className="relative flex flex-row items-start justify-start w-screen h-screen">
            <Sidebar />
            <EntrepriseBody />
        </div>
    )
}

export default Entreprises
