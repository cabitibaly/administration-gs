import { } from 'lucide-react'
import Sidebar from '../components/navbar/sidebar'
import DashboardBody from '../components/dashbord/dashboardBody'

const Dashboard = () => {
    return (
        <div className="relative flex flex-row items-start justify-start w-screen h-screen">
            <Sidebar />
            <DashboardBody />
        </div>
    )
}

export default Dashboard
