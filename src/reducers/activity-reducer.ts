import { Activity } from "../types/types"

export type ActivityAcions = {
    type: 'save-activity', 
    payload: { newActivity : Activity }   
}

type ActivityState = {
    activities: Activity[]
}

export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (
        state: ActivityState = initialState,
        action: ActivityAcions
    ) => {

        if (action.type === 'save-activity') {
            console.log()
        }

}