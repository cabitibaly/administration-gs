
import axios, { AxiosError, type AxiosRequestConfig, } from "axios";
import { baseurl } from "../constants/api";
import type { ApiError } from "../interfaces/apiError";
import type { Utilisateur } from "../interfaces/utilisateur";
import type { ApiResponse } from "../interfaces/apiResponse";
import { toast } from "react-toastify";
import type { NavigateFunction } from "react-router-dom";
import { TOAST_OPTIONS_ERROR } from "../constants/toastOption";

const api = axios.create({
    baseURL: baseurl,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

const notifyError = (message?: string) => toast(message ?? "Une erreur est survenue", TOAST_OPTIONS_ERROR);

const handleSessionExpired = () => {
    window.location.replace("/");
}

const LOGIN_URL = `/auth/web/login`;
const REFRESH_URL = `/auth/web/refresh-token`;

let refreshPromise: Promise<boolean> | null = null;

export const refreshAccessToken = async (): Promise<boolean> => {
    if (!refreshPromise) {
        refreshPromise = axios
            .post(
                `${baseurl}${REFRESH_URL}`,
                {},
                { withCredentials: true },
            )
            .then(() => true)
            .catch(() => false)
            .finally(() => {
                refreshPromise = null;
            });
    }

    return refreshPromise;
};

export const authenticatedRequest = async <T = unknown>(
    config: AxiosRequestConfig,
    retryOnce = true,
): Promise<T | null> => {    
    try {
        const response = await api.request<T>(config);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>;
        const status = axiosError.response?.status;
        const message = axiosError.response?.data.detail;
        
        if (config.url === LOGIN_URL) {
            notifyError(message);
            return null;            
        }
        
        if (axiosError.response?.status === 401 && retryOnce) {
            console.log("Rafraichissement en cours...");;
            const refreshed = await refreshAccessToken();

            return refreshed ? authenticatedRequest(config, false) : null;            
        }
        
        if (status === 401) {
            notifyError(message);
            handleSessionExpired();
            return null;
        }

        if (status === 403) {
            notifyError(message ?? "Accès refusé");
            return null;
        }


        console.log("Erreur récupération token refresh:", error);
        notifyError(message);
        return null;
    }
};

export const getUserInformations = async (
    setUtilisateur: React.Dispatch<
        React.SetStateAction<Utilisateur | null | undefined>
    >,
    setIsAuthenticated: React.Dispatch<
        React.SetStateAction<boolean>
    >,
    navigate: NavigateFunction    
): Promise<Utilisateur | null> => {
    return await authenticatedRequest<ApiResponse<Utilisateur>>({
        url: "/auth/me",
        method: "GET",            
    }).then(res => {
        if (res?.status === 200) {
            const utilisateur = res.data;

            setUtilisateur(utilisateur);
            setIsAuthenticated(true);

            navigate("/dashboard");
            return utilisateur;
        }
        return null;
    });    
};