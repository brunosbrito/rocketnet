import React, { useContext, useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import MainContext from '../context/brunonetContext';
import '../styles/coverageStyle.css';
import Modal from 'react-modal'
Modal.setAppElement('#root');

type Props =  {
  cep: string,
  setCep: (cep: string) => void,
  value: string
}

export default function Coverage() {
  const { cep, setCep} = useContext(MainContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [data, setData] =  React.useState<{message: string}>()

  const navigate = useNavigate()

  const closedModal = () => {
    setIsOpen(false);
    if(data?.message === 'CEP APROVADO'){
    navigate('/plans')
    }
  }

  const handleChange = ( {target}:React.ChangeEvent<HTMLInputElement>) => {
    const dataCep = target.value;
    setCep(dataCep)
  }

  const body = {
    cep
  }

  const verifyCep = async (): Promise<void> => {
    const request = await fetch('http://localhost:3001/coverage', {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })

  const response = await request.text();
  const json = response === "" ? {} : JSON.parse(response)
  setData(json)
  setIsOpen(true)
  
  }

  return (
    <div className="coverage">
      <div className="title">
        <h1>Verificação de Cobertura</h1>
        <p> Preencha o seu CEP que iremos verificar os planos disponíveis na sua localidade.</p>
      </div>
      <div className='cep'>
          <label htmlFor="cep">
            <p>CEP *</p>
             <input data-testid='cep' className="cep-input" type="text" name="cep" id="cep" onChange={handleChange}/>
          </label>
          <button type='button' onClick={verifyCep}>Buscar</button>
      </div>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closedModal}
        contentLabel="Modal"
      > 
        <div className='content'>
          <h1 >{data?.message.toUpperCase()}</h1>
          <button type='button'onClick={closedModal}>OK</button>
        </div>
      </Modal>
    </div>
  )
}