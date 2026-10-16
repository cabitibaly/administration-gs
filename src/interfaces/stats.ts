export interface NombreVisiteParJour {
    jour: string;
    nbVisites: number;
}

export interface commonType {
    totalVisite: number;
    pour?: string;
}

export interface EmployeLePlusVisite {
    idEmploye: number;
    matricule: string;
    nomEmploye: string;
    prenomEmploye: string;
    nbVisites: number;
}

export interface DepartementsLePlusVisites {
    departement: string;
    total: number;
}