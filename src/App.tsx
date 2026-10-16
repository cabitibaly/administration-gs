import { Route, Routes } from 'react-router-dom'
import Connexion from './pages/connexion'
import Dashboard from './pages/dashboard'
import Visites from './pages/visites'
import Visiteurs from './pages/visiteurs'
import Employes from './pages/employes'
import Vigiles from './pages/vigiles'
import Departements from './pages/departements'
import Entreprises from './pages/entreprises'
import ProtectedRoute from './components/loading/protectedRoute'

const App = () => {
    return (
        <>
            <Routes>                
                <Route path="/" element={<Connexion />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/visites" element={<Visites />} />
                    <Route path="/visiteurs" element={<Visiteurs />} />
                    <Route path="/employes" element={<Employes />} />
                    <Route path="/vigiles" element={<Vigiles />} />
                    <Route path="/departements" element={<Departements />} />
                    <Route path="/entreprises" element={<Entreprises />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
