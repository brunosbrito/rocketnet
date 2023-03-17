import React, { FC } from "react";
import { useMemo, useState } from "react";
import MainContext from "./brunonetContext";

interface IContextData  {
  cep: string,
}

type Props = {
  children: JSX.Element
}
function BrunonetProvider ({children}: Props){

  const [cep, setCep] = useState('')

  const value = useMemo(() => ({
    cep,
    setCep
  }), [cep, setCep])

  return(
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}

export default BrunonetProvider;

