import { useContext } from "react";
import AuthContext from "../../contexts/authContext/authContext"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginRequest, logoutRequest } from "../../services/auth.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const context = useContext(AuthContext);
    const query = useQueryClient();
    const navigate = useNavigate();

    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }

    const loginMutation = useMutation({
        mutationFn: loginRequest,
        onSuccess: async (data) => {
            if (data) {
                await context.saveSessionAfterLogin(data)
                toast(
                    "connexion réussie",
                    {
                        type: "success",
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    }
                )
                navigate("/dashboard")
            }
        },
        onError: (error: Error) => {
            toast(
                error.message,
                {
                    type: "error",
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            )
        },
    })

    const logoutMutation = useMutation({
        mutationFn: logoutRequest,
        onSuccess: () => {
            query.clear() 
            navigate("/")
        },
        onError: (error: Error) => {
            toast(
                error.message,
                {
                    type: "error",
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            )
        },
    })

    return {
        utilisateur: context.utilisateur,
        isLoading: context.isLoading,
        isAuthenticated: context.isAuthenticated,
        refetech: context.refetch,
        login: loginMutation.mutate,
        logout: logoutMutation.mutate,
        isLoggingIn: loginMutation.isPending,
        isLoggingOut: logoutMutation.isPending,  
    }
}