import Sidebar from "../components/navbar/sidebar"
import VigileBody from "../components/vigiles/vigileBody"

const Vigiles = () => {
    return (
        <div className="relative flex flex-row items-start justify-start w-screen h-screen">
            <Sidebar />
            <VigileBody />
        </div>
    )
}

export default Vigiles
