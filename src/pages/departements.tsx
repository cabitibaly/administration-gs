import DepartementBody from "../components/departements/departementBody"
import Sidebar from "../components/navbar/sidebar"

const Departements = () => {
    return (
        <div className="relative flex flex-row items-start justify-start w-screen h-screen">
            <Sidebar />
            <DepartementBody />
        </div>
    )
}

export default Departements
