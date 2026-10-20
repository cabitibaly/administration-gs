export interface VigileRequest {
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    posteDeGarde: string;
    heureDebutGarde: string;
    heureFinGarde: string;
    entreprise: string;    
}

export interface Vigile extends VigileRequest {
    id: number 
    dateCreation: string
}

export interface VigileWithUserInfo extends Vigile {
    username: string
    password: string
}

export type VigileRequestAction = 
    | {type: "SET_NOM"; payload: string}
    | {type: "SET_PRENOM"; payload: string}
    | {type: "SET_TELEPHONE"; payload: string}
    | {type: "SET_EMAIL"; payload: string}
    | {type: "SET_POSTE_DE_GARDE"; payload: string}
    | {type: "SET_HEURE_DEBUT_GARDE"; payload: string}
    | {type: "SET_HEURE_FIN_GARDE"; payload: string}
    | {type: "SET_ENTREPRISE"; payload: string}
    | {type: "RESET"}
    | {type: "UPDATE"; payload: VigileRequest}