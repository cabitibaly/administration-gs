
// @ts-ignore
import { Chart } from "chart.js/auto"
import { Line } from "react-chartjs-2"
import { CalendarBlankIcon } from "@phosphor-icons/react"
import type { NombreVisiteParJour } from "../../interfaces/stats"
import { formaterVisitesPourGraphique } from "../../utils/formaterVisitesGraphique"
import { MoonLoader } from "react-spinners"

interface NombreVisiteCardProps {
    isLoading: boolean;
    nombreVisiteParJour: NombreVisiteParJour[];
}

const NombreVisiteCard = ({isLoading, nombreVisiteParJour}: NombreVisiteCardProps) => {
    const { labels, datasets } = formaterVisitesPourGraphique(nombreVisiteParJour)        

    return (
        <div className="relative p-2.5 overflow-hidden bg-bleu-12 rounded-2xl w-1/2 h-90 flex flex-col items-start justify-start gap-3">
            <div className="flex items-center justify-center gap-2">
                <div className="size-8 rounded-full bg-bleu-9 flex items-center justify-center">
                    <CalendarBlankIcon className="size-4 aspect-square" />
                </div>
                <span className="text-xl text-bleu-9 font-medium">Nombre de visites</span>
            </div>                        
            <div className="absolute top-13 w-[97%] h-73.5 overflow-x-auto">
                {        
                    isLoading ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <MoonLoader size={24} color="#EEEEF0" />
                        </div>
                    ) : (    
                            <Line
                                className="w-full h-full"
                                data={{
                                    labels: labels,
                                    datasets: [{
                                        label: "Nombre de vistes des sept derniers jours",
                                        data: datasets,
                                        borderColor: "#0C7DEF",
                                        fill: false,                            
                                    }]
                                }}
                                options={{
                                    maintainAspectRatio: false,                        
                                    plugins: {                            
                                        legend: {
                                            display: false
                                        },                            
                                    },
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                            border: {
                                                display: false
                                            },
                                            grid: {
                                                color: "rgba(12, 125, 239, 0.1)",                                                                        
                                            },
                                            ticks: {
                                                color: "#1E1F24",
                                                font: {
                                                    size: 10
                                                }
                                            },

                                        },
                                        x: {
                                            border: {
                                                display: false
                                            },
                                            grid: {
                                                color: "rgba(255, 255, 255, 0)"
                                            },
                                            ticks: {
                                                color: "#1E1F24",
                                                font: {
                                                    size: 10
                                                }
                                            }
                                        }
                                    }
                                }}
                            />
                        )
                }
            </div>
        </div>
    )
}

export default NombreVisiteCard
