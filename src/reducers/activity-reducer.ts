import { Activity } from "../types/types"

export type ActivityAcions = {

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
        
}