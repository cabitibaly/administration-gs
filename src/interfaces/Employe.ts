export interface EmployeRequest {
    nom: string
    prenom: string
    email: string
    telephone: string
    matricule: string
    departement: string
}

export interface Employe extends EmployeRequest {
    id: number
    dateCreation: string
}

export interface EmployeWithUserInfo extends Employe {
    username: string
    password: string
}

export type EmployeRequestAction = 
    | {type: "SET_NOM"; payload: string}
    | {type: "SET_PRENOM"; payload: string}
    | {type: "SET_EMAIL"; payload: string}
    | {type: "SET_TELEPHONE"; payload: string}
    | {type: "SET_MATRICULE"; payload: string}
    | {type: "SET_DEPARTEMENT"; payload: string}
    | {type: "RESET"}