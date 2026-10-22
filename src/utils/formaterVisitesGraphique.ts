import type { NombreVisiteParJour } from "../interfaces/stats";

export const formaterVisitesPourGraphique = ( data: NombreVisiteParJour[] ) => {
    if (data === undefined) return { datasets: [], labels: [] }
    const dates = getDerniersJours();    
    const keyValue = Object.fromEntries(data.map(item => [new Date(item.jour).toISOString().split("T")[0], item.nbVisites]))

    const datasets = dates.map(date => keyValue[date] || 0)

    return {
        datasets,
        labels: getLabelsDerniersJours()
    }        
}

const getDerniersJours = () => {
    const today = new Date();
    const dates = [];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dates.push(date.toISOString().split("T")[0]);
    }
    return dates.reverse();
};

const getLabelsDerniersJours = () => {
    const today = new Date();
    const dates = [];
    
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i);
                
        const monthDay = date.toLocaleString('fr-FR', { month: 'short', day: 'numeric' });
        dates.push(monthDay);
    }
    return dates.reverse();
};