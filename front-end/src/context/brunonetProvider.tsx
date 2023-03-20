import React, { FC, useEffect } from "react";
import { useMemo, useState } from "react";
import { json } from "react-router-dom";
import MainContext from "./brunonetContext";

interface IContextData  {
  cep: string,
}

type Props = {
  children: JSX.Element
}

export interface IPlans {
  id?: number,
  value: number,
  description: string,
  speed: number,
}

function BrunonetProvider ({children}: Props){
  const [cep, setCep] = useState('')
  const [planId, setPlanId] = React.useState(Number)
  const [dataPlans, setDataPlans] = React.useState<IPlans[]>([])

  const getAllPlans = async () => {
    const request = await fetch('http://localhost:3001/plans', {
      method: "GET",
      mode: "cors"
    });
    const response = await request.text()
    const json = response === "" ? {} : JSON.parse(response)
    setDataPlans(json)
  }

  useEffect(() => {
    getAllPlans()
  },[])

  const value = useMemo(() => ({
    cep,
    setCep,
    dataPlans,
    setDataPlans,
    planId,
    setPlanId,
  }), [cep, setCep, dataPlans, setDataPlans, planId, setPlanId])

  return(
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}

export default BrunonetProvider;
