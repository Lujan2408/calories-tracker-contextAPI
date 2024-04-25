import { useMemo, Dispatch } from "react"
import { categories } from "../data/categories"
import { Activity } from "../types/types"
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/solid"
import { ActivityAcions } from "../reducers/activity-reducer"

type ActivityListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityAcions>
}

export default function ActivityList({ activities, dispatch } : ActivityListProps) {

    const categoryName = useMemo(() => (category : Activity['category']) => categories.map( cat => cat.id === category ? cat.name : ''), [])

    const isActivitiesEmpty = useMemo(() => activities.length === 0,[activities])

    return (
        <>
            <h2 className=" text-4xl font-bold text-slate-600 text-center">
                Comida y Actividades
            </h2>

            {isActivitiesEmpty ? 
                <p className=" text-center my-5">No hay Actividades aún...</p> : 
                    activities.map(activity => (
                        <div 
                            className=" px-5 py-10 bg-white mt-5 flex justify-between shadow" 
                            key={activity.id}
                        >
                            <div className=" space-y-2 relative">
                                <p className={` absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                                    {categoryName(+activity.category)}
                                </p>
                                <p className=" text-2xl font-bold pt-5">{activity.name}</p>
                                <p className=" font-black text-4xl text-orange-500">
                                    {activity.calories} {''}
                                        <span>Calorias</span>
                                </p>
                            </div>
                            <div className=" flex gap-10 items-center">
                                <button 
                                    onClick={() => dispatch({type: 'set-activeId', payload: {id: activity.id}})}
                                >
                                    <PencilSquareIcon 
                                        className=" h-8 w-8 text-gray-800"
                                    />
                                    
                                </button>
                                
                                <button 
                                    onClick={() => dispatch({type: 'delete-activity', payload: {id: activity.id}})}
                                >
                                    <XCircleIcon 
                                        className=" h-8 w-8 text-red-600"
                                    />
                                    
                                </button>
                            </div>
                        </div>
                    ))}
        </>
    )
}
