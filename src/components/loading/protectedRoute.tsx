import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/auth/useAuth"
import PageLoader from "../../pages/pageLoader";

const ProtectedRoute = () => {
    const { utilisateur, isLoading } = useAuth();

    if (isLoading) return <PageLoader />
    if (!utilisateur) return <Navigate to="/" replace />

    return <Outlet />
}

export default ProtectedRoute
