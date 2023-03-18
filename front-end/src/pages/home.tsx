import React from "react"
import Header from "../components/header"
import '../styles/homeStyle.css'
import Coverage from "./coverage"

function Home() {
  return (
    <div className="home">
      <Header />
      <Coverage />
    </div>
  )
}
export default Home