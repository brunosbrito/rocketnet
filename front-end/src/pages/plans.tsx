import { useEffect } from "react";
import Header from "../components/header";



export default function Plans() {


  const getAllPlans = async () => {
    const response = await fetch('http://localhost:3001/plans', {
      method: "GET",
      mode: "cors"
    });
    const request = await response.text()

    const json = request === "" ? {} : JSON.parse(request)

    console.log(json)


  }

  return (
    <div>
      <Header />
      <button type="button" onClick={getAllPlans}>click</button>
    </div>
  )
}