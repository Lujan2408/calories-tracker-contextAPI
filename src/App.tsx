/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useMemo, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
      localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])
  
  const canUserRestart = () => useMemo(() => state.activities.length > 0, [state.activities]) 

  return (
    <>
      <header className=' bg-orange-600 py-3'>
        <div className=' max-w-4xl mx-auto flex justify-between'>
          <h1 className=' text-center text-lg font-bold text-white uppercase'>
            Contador Calorias
          </h1>

          <button 
            className=" font-bold text-white bg-gray-800 hover:bg-gray-900  p-2 rounded-lg text-sm cursor-pointer disabled:opacity-15"
            disabled={!canUserRestart()}
            onClick={() => dispatch({ type: 'reset-app' })}
            >
            Reiniciar App
          </button>
        </div>
      </header>
      
      <section className=' bg-orange-500 py-20 px-5'>
        <div className=' max-w-4xl mx-auto'>
          <Form 
            dispatch={dispatch}
            state={state}
          />          
        </div>
      </section>

      <section className=" p-10 mx-auto max-w-4xl">
        <ActivityList 
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App
