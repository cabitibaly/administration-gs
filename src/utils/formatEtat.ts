export const formatEtatForDB = (etat: string) => {
    switch (etat) {
        case "En cours":
            return "EN_COURS"
        case "En prévision":
            return "EN_PREVISION"
        case "Terminée":
            return "TERMINEE"
        default:
            return ""
    }
}

export const formatEtatForUI = (etat: string) => {
    switch (etat) {
        case "EN_COURS":
            return "En cours"
        case "EN_PREVISION":
            return "En prévision"
        case "TERMINEE":
            return "Terminée"
        default:
            return ""
    }
}