import { createContext, ReactNode, useReducer  } from "react";
import { ActivityAcions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";

type ActivityProviderProps = {
  children: ReactNode
}

type ActivityContextProps = {
  state: ActivityState,
  dispatch: React.Dispatch<ActivityAcions>
}

export const ActivityContext = createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({children} : ActivityProviderProps) => {
  
  const [ state, dispatch ] = useReducer(activityReducer, initialState)

  return (
    <ActivityContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </ActivityContext.Provider>
  )
}