export interface Utilisateur {
    email: string,
    nom: string,
    prenom: string,
    telephone: string,
    mustChangePassword: boolean,
}

export interface LoginData {
    email: string
    password: string
}

export interface ChangeDefaultPasswordData {
    oldPassword: string
    newPassword: string
}