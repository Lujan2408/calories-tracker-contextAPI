import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import type { Activity } from "../types/types"
import { categories } from "../data/categories"
import { ActivityAcions, ActivityState } from "../reducers/activity-reducer"

type FormProps = {
    dispatch: Dispatch<ActivityAcions>,
    state: ActivityState  
} 

const INITIAL_STATE : Activity = {
    id: uuidv4(),
    category: 0, 
    name: '', 
    calories: 0
}

export default function Form({ dispatch, state } : FormProps) {

    const [activity, setActivity] = useState<Activity>(INITIAL_STATE)

    useEffect(() => {
        if(state.activeId) {
            const selectedActivity = state.activities.filter( stateActivity  => stateActivity.id === state.activeId )[0]
            setActivity(selectedActivity)
        }
    }, [state.activeId, state.activities])

    const handleChange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        //Setear los valores en el state - de string a number 
        const isNumber = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumber ? +e.target.value : e.target.value 
        })
    }

    const showTextToSave = () => {
        if(activity.category === 0) {
            return 'Guardar'
        } else if (activity.category === 1) {
            return 'Guardar Comida'
        } else {
            return 'Guardar Ejercicio'
        }
    }

    // Validar el form 
    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0 
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: 'save-activity', payload: { newActivity: activity } })

        setActivity({
            ...INITIAL_STATE, 
            id: uuidv4()
        })
    }


  return (
    <>
        <form 
            className=" space-y-5 bg-white shadow-xl p-10 rounded-lg"
            onSubmit={handleSubmit}
            >
            <div className=" grid grid-cols-1 gap-3">
                <label htmlFor="category" className=" font-bold">Categoría:</label>
                <select 
                    className="border border-slate-300 p-2 rounded-lg"
                    id="category" 
                    value={activity.category}
                    onChange={handleChange}

                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className=" grid grid-cols-1 gap-3">
                <label htmlFor="name" className=" font-bold">Actividad:</label>
                <input 
                    className=" border border-slate-300 p-2 rounded-lg"
                    id="name" 
                    type="text" 
                    placeholder="Comida, Jugo de Naranja, Ensalada, Ejercicio, Gimnasio, Bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>
            
            <div className=" grid grid-cols-1 gap-3">
                <label htmlFor="calories" className=" font-bold">Calorias:</label>
                <input 
                    className=" border border-slate-300 p-2 rounded-lg"
                    id="calories" 
                    type="number" 
                    placeholder="Calorias Ejm: 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input 
                className=" bg-gray-900 hover:bg-gray-800 w-full p-2 font-bold uppercase cursor-pointer text-white disabled:opacity-15"
                type="submit"
                value={showTextToSave()}
                disabled={!isValidActivity()}
            />
            
        </form>
    </>
  )
}
