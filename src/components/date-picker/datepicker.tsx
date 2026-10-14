import { DayPicker } from "react-day-picker";
import { fr } from "react-day-picker/locale";


interface DatepickerProps {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const Datepicker = ({date, setDate}: DatepickerProps) => {


    return (
        <>
            <button 
                popoverTarget="rdp-popover" 
                className={`cursor-pointer border border-gris-8/20 bg-gris-11/20 px-3 py-2 w-50 text-base font-normal rounded-xl flex items-center justify-start ${date ? "text-gris-1" : "text-gris-10"}`}
                style={{ anchorName: "--rdp" } as React.CSSProperties}
            >
                {date ? date.toLocaleDateString() : "Date..."}
            </button>            
            <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" } as React.CSSProperties}>
                <DayPicker 
                    className="react-day-picker" 
                    locale={fr}  
                    mode="single" 
                    selected={date} 
                    onSelect={setDate} 
                    style={{
                        border: "1px solid #5F606A",
                        backgroundColor: "#EEEEF0",
                        color: "#111113",                                                        
                    }}
                    required
                />
            </div>
        </>
    )
}

export default Datepicker
