import { Route, Routes } from 'react-router-dom'
import Connexion from './pages/connexion'
import Dashboard from './pages/dashboard'
import Visites from './pages/visites'
import Visiteurs from './pages/visiteurs'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Connexion />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/visites" element={<Visites />} />
                <Route path="/visiteurs" element={<Visiteurs />} />
            </Routes>
        </>
    )
}

export default App
