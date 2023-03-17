import { createContext } from "react"
type GlobalContent = {
  cep: string;
  setCep: (cep: string) => void
}
const MainContext = createContext({} as GlobalContent)

export default MainContext