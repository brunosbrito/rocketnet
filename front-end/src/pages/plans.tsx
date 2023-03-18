import React from "react";
import Header from "../components/header";
import MainContext from "../context/brunonetContext";
import { IPlans } from "../context/brunonetProvider";
import '../styles/plansStyle.css'
import { Gauge } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom";

export default function Plans() {
  const {dataPlans, planId, setPlanId} = React.useContext(MainContext)
  const navigate = useNavigate();

  const getIdPlan = async (e: React.SyntheticEvent) => {
    setPlanId(e.target.value)
    navigate('/car')
  };

  return (
   <>
      <Header />
      {dataPlans.map((plan: IPlans) => (
        <div className='container' key={plan.id}>
          <div className="content">
            <div className="speed">
              <Gauge size={24} />
              <p>{plan.speed} Mbps</p>
            </div>
              <p className="description">{plan.description}</p>
              <p className="value">Preço:{plan.value} R$</p>
          </div>
          <button onClick={getIdPlan} value={plan.id} type="button">Comprar</button>
        </div>
      ))}
    </>
  )
}