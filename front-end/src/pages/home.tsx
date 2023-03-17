import React from "react"
import Header from "../components/header"
import '../styles/homeStyle.css'
import Cobertura from "./cobertura"

function Home() {
  return (
    <div className="home">
      <Header />
      <Cobertura />
    </div>
  )
}
export default Home