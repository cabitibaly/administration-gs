export interface Visiteur {
    id: number
    nom: string
    prenom: string
    telephone: string
    numeroCarte: string
    typeCarte: string,
    dateCreation: string
}

export interface ProfileVisiteur {
    nom: string
    prenom: string
    telephone: string
}


export interface carteVisiteur {
    typeCarte: string
    numeroCarte: string
}   
export interface HoteVisiteur {
    idEmployeHote: number | null
    motif: string
}