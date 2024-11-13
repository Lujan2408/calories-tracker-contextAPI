import CalorieDisplay from "./CalorieDisplay"
import { useActivity } from "../hooks/useActivity"

export default function CalorieTracker() {

    const { caloriesConsumed, caloriesBurned, netCalories } = useActivity()

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
