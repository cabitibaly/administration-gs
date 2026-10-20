export interface EntrepriseRequest {
    nom: string
    email: string
    telephone: string
}

export interface Entreprise extends EntrepriseRequest {
    id: number,    
    dateCreation: string
}