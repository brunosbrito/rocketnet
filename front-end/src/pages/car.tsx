import { Gauge } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import Form from "../components/form";
import Header from "../components/header";
import MainContext from "../context/brunonetContext";
import { IPlans } from "../context/brunonetProvider";
import '../styles/carStyle.css'

export default function Car() {
  const [dataPlan, setDataPlan] = useState<IPlans[]>([]);
  const { planId} = useContext(MainContext)

  useEffect(() => {

    const getPlan = async (id: number) => {
    const request = await fetch(`http://localhost:3001/plans/${id}`, {
      method: "GET",
      mode: "cors"
    });
    const response = await request.text()
    const json = response === "" ? {} : JSON.parse(response)
    setDataPlan(json)
  }
    getPlan(planId)
  },[])

  console.log(dataPlan)
    

  return (
    <div className="car">
      <Header />
      <div className="plan-content">
        <h2>Plano escolhido</h2>
        {dataPlan.map((plan) => (
          <div key={plan.id}>
            <div className="plan-speed">
              <Gauge size={24} />
              <p>{plan.speed} Mbps</p>
            </div>
            <p className="desc">{plan.description}</p>
            <p className="value">Preço: {plan.value} R$</p>
          </div>
        ))}
      </div>
      <Form />
    </div>
  )
}