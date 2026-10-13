import Sidebar from '../components/navbar/sidebar'
import VisitesBody from '../components/visites/visitesBody'

const Visites = () => (
    <div className="relative flex flex-row items-start justify-start w-screen h-screen">
        <Sidebar />
        <VisitesBody />
    </div>
)

export default Visites
