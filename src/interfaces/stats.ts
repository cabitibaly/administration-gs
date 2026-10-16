export interface NombreVisiteParJour {
    jour: string;
    nbVisites: number;
}

export interface commonType {
    totalVisite: number;    
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