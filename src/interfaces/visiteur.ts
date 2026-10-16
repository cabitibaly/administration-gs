export interface Visiteur {
    id: number
    nom: string
    prenom: string
    telephone: string
    numeroCarte: string
    typeCarte: string
}

export interface ProfileVisiteur {
    nom: string
    prenom: string
    telephone: string
}

// export type ClientInviteAction =
//     | { type: "SET_NOM"; payload: string }
//     | { type: "SET_PRENOM"; payload: string }
//     | { type: "SET_EMAIL"; payload: string }
//     | { type: "SET_TELEPHONE"; payload: string };

export type ProfileVisiteurAction =
    | { type: "SET_NOM"; payload: string }
    | { type: "SET_PRENOM"; payload: string }
    | { type: "SET_TELEPHONE"; payload: string };

export interface carteVisiteur {
    typeCarte: string
    numeroCarte: string
}

export type CarteVisiteurAction =
    | { type: "SET_TYPE_CARTE"; payload: string }
    | { type: "SET_NUMERO_CARTE"; payload: string }    
export interface HoteVisiteur {
    idEmployeHote: number | null
    motif: string
}

export type HoteVisiteurAction =
    | { type: "SET_ID_EMPLOYE_HOTE"; payload: number }
    | { type: "SET_MOTIF"; payload: string }