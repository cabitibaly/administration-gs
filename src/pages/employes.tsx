import EmployeBody from "../components/employes/employeBody"
import Sidebar from "../components/navbar/sidebar"

const Employes = () => {
    return (
        <div className="relative flex flex-row items-start justify-start w-screen h-screen">
            <Sidebar />
            <EmployeBody />
        </div>
    )
}

export default Employes
