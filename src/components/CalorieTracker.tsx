import { useMemo } from "react"
import { Activity } from "../types/types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({ activities } : CalorieTrackerProps) {

    //Contadores 
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
    
    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])

    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned,[caloriesBurned, caloriesConsumed])

    //Validar para cambiar el color del texto
    let textColor = 'text-white'
        
    if(netCalories > 0) {
        textColor = 'text-green-400'
    } else if(netCalories < 0) {
        textColor = 'text-red-500'
    }

    return (
        <>
            <h2 className=" text-4xl font-black text-white text-center">Resumen de Calorías</h2>

            <div className=" flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay 
                    calories={caloriesConsumed}
                    text="Consumidas"
                />
                
                <CalorieDisplay 
                    calories={caloriesBurned}
                    text="Ejercicio"
                />
                
                <p className=" text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                    <span className={` font-black text-6xl text-orange ${textColor}`}>{netCalories}</span>
                    Diferencia
                </p>
                
            </div>

        </>
    )
}
