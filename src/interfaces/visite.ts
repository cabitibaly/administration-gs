import type { Employe } from "./Employe"
import type { Vigile } from "./vigile"
import type { carteVisiteur, HoteVisiteur, ProfileVisiteur, Visiteur } from "./visiteur"

export interface Visite {
    id: number
    motif: string
    heureArrivee: string
    heureDepart: string
    etatVisite: string
    typeCloture: string
    origine: String
    visiteurInfo: string
    employeHoteInfo: string,
    dateCreation: string
}

export interface VisiteWithPersons extends Visite {    
    visiteur: Visiteur
    vigile: Vigile
    employeHote: Employe
}

export interface VisiteRequest extends ProfileVisiteur, carteVisiteur, HoteVisiteur {}