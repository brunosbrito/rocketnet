import { createContext } from "react"
import { IPlans } from "./brunonetProvider";
type GlobalContent = {

  dataPlans: IPlans[],
  planId: number,
  setPlanId: (planId: number) => void,
}
const MainContext = createContext({} as GlobalContent)

export default MainContext