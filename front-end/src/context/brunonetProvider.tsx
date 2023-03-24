import { NumberEight } from "@phosphor-icons/react";
import React, { FC, useEffect } from "react";
import { useMemo, useState } from "react";
import { json } from "react-router-dom";
import { number } from "yup";
import MainContext from "./brunonetContext";

interface IContextData  {
  cep: string,
}

type Props = {
  children: JSX.Element
}

export interface IPlans {
  id?: number,
  name: string,
  description: string,
  price: string,
}

function BrunonetProvider ({children}: Props){
  const [planId, setPlanId] = React.useState(Number)
  const [dataPlans, setDataPlans] = React.useState<IPlans[]>([])

  const getAllPlans = async () => {
    try  {
      const request = await fetch('http://localhost:3002/plans', {
      method: "GET",
      mode: "cors"
    });
    const response = await request.text()
    const json = response === "" ? {} : JSON.parse(response)
    console.log(json)
    setDataPlans(json)
    } catch (error) {
      console.log(error)
      alert('Ops! tem algo de errado com a Api')
    }
      
  }

  useEffect(() => {
    getAllPlans()
  },[])

  const value = useMemo(() => ({
    dataPlans,
    setDataPlans,
    planId,
    setPlanId,
  }), [ dataPlans, setDataPlans, planId, setPlanId])

  return(
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}

export default BrunonetProvider;
