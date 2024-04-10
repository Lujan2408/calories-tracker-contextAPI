import { useState } from "react"
import { categories } from "../data/categories"

export default function Form() {

    const [activity, setActivity] = useState({
        category: 1, 
        name: '', 
        calories: 0
    })
  return (
    <>
        <form className=" space-y-5 bg-white shadow-xl p-10 rounded-lg">
            <div className=" grid grid-cols-1 gap-3">
                <label htmlFor="category" className=" font-bold">Categoría:</label>
                <select 
                    className="border border-slate-300 p-2 rounded-lg"
                    id="category" 
                    value={activity.category}
                >
                    <option > -- Seleccione --</option>
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
                />
            </div>

            <input 
                className=" bg-gray-900 hover:bg-gray-800 w-full p-2 font-bold uppercase cursor-pointer text-white"
                type="submit"
                value={'Guardar Comida o Guardar Ejercicio'} 
            />
            
        </form>
    </>
  )
}
