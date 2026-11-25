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

export type EmployeRequestAction = 
    | {type: "SET_NOM"; payload: string}
    | {type: "SET_PRENOM"; payload: string}
    | {type: "SET_EMAIL"; payload: string}
    | {type: "SET_TELEPHONE"; payload: string}
    | {type: "SET_MATRICULE"; payload: string}
    | {type: "SET_DEPARTEMENT"; payload: string}
    | {type: "RESET"}
    | {type: "UPDATE"; payload: EmployeRequest}

export const initialState: EmployeRequest = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    matricule: "",
    departement: ""
}

export const employeReducer = (state: EmployeRequest, action: EmployeRequestAction): EmployeRequest => {
    switch (action.type) {
        case "SET_NOM":
            return { ...state, nom: action.payload }
        case "SET_PRENOM":
            return { ...state, prenom: action.payload }
        case "SET_EMAIL":
            return { ...state, email: action.payload }
        case "SET_TELEPHONE":
            return { ...state, telephone: action.payload }
        case "SET_MATRICULE":
            return { ...state, matricule: action.payload }
        case "SET_DEPARTEMENT":
            return { ...state, departement: action.payload }
        case "RESET":
            return initialState
        case "UPDATE":
            return action.payload
        default:
            return state
    }
}