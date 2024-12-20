/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useMemo } from "react"
import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"
import { useActivity } from "./hooks/useActivity"

function App() {

  const { state, dispatch } = useActivity()

  useEffect(() => {
      localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])
  
  const canUserRestart = () => useMemo(() => state.activities.length > 0, [state.activities]) 

  return (
    <>
      <header className=' bg-lime-700 py-3'>
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
      
      <section className=' bg-lime-500 py-20 px-5'>
        <div className=' max-w-4xl mx-auto'>
          <Form/>          
        </div>
      </section>

      <section className=" bg-gray-800 py-10">
        <div className=" max-w-4xl mx-auto">
          <CalorieTracker/>
        </div>
      </section>

      <section className=" p-10 mx-auto max-w-4xl">
        <ActivityList />
      </section>
    </>
  )
}

export default App
