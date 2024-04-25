import { Activity } from "../types/types"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({ activities } : CalorieTrackerProps) {
  return (
    <div>CalorieTracker</div>
  )
}
