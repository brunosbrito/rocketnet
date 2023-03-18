import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import MainContext from '../context/brunonetContext'
import {  IPlans } from '../context/brunonetProvider'
import '../styles/formStyle.css'
import emailjs from '@emailjs/browser'

export interface IClients {
  id?: number,
  name: string,
  cpf: string,
  rg: string
  date_of_birth: Date,
  tel: string,
  email: string,
  adress: string,
  number: number,
  district: string,
  city: string,
  cep: string
  plan_id: number,
}


export default function Form() {
  const {planId} = useContext(MainContext)
  const [fieldData, setFieldData] = useState<IClients[]>([])
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate()

  const closedModal = () => {
    setIsOpen(false);
    navigate('/')

  }

  const handleChange = ({target}:React.ChangeEvent<HTMLInputElement> ) => {
    setFieldData((prev) => {
      return {
          ...prev,
          [target.name]: target.value,
          plan_id: 1
      }
    })

    console.log(fieldData.name)
  };

  const postClient = async () => {
    setIsOpen(true)
    const request = await fetch('http://localhost:3001/clients', {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(fieldData)
  })
  sendEmail()
  const response = await request.text();
  const json = response === "" ? {} : JSON.parse(response)
  return json
  
  
  }

  const sendEmail = () =>{

    const templateParams = {
      from_name: fieldData.name,
      message: 'Oi você conseguiu',
      email: fieldData.email,
    }
    emailjs.send('service_u2zvicq', 'template_likuj3y', templateParams, 'I6yIoRj7mzubrp5Bg')
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
      }, (error) => {
        console.log("Eroor", error)
      })
  }

  return(
    <div>
      <form>
      <label htmlFor="name" >
        Nome
        <input type="text" name="name" id="name" onChange={ handleChange } />
      </label>
      <label htmlFor="cpf">
        CPF
        <input type="text" name="cpf" id="cpf" onChange={ handleChange } />
      </label>
      <label htmlFor="rg">
        RG
        <input type="text" name="rg" id="rg" onChange={ handleChange } />
      </label>
      <label htmlFor="date_of_birth">
        Data nascimento
        <input type="date" name="date_of_birth" id="date_of_birth" onChange={ handleChange } />
      </label>
      <label htmlFor="tel">
        Telefone
        <input type="text" name="tel" id="tel" onChange={ handleChange } />
      </label>
      <label htmlFor="email">
        Email
        <input type="text" name="email" id="email" onChange={ handleChange } />
      </label>
      <label htmlFor="adress">
        Endereço
        <input type="text" name="adress" id="adress" onChange={ handleChange } />
      </label>
      <label htmlFor="number">
        Número
        <input type="number" name="number" id="number" onChange={ handleChange } />
      </label>
      <label htmlFor="district">
        Bairro
        <input type="text" name="district" id="district" onChange={ handleChange } />
      </label>
      <label htmlFor="city">
        Cidade
        <input type="text" name="city" id="city" onChange={ handleChange } />
      </label>
      <label htmlFor="cep">
        CEP
        <input type="text" name="cep" id="cep" onChange={ handleChange } />
      </label>
      <button className="button" type="button"  onClick={postClient}>finzalir</button>
    </form>
      <Modal
        className="a"
        isOpen={modalIsOpen}
        onRequestClose={closedModal}
        contentLabel="Modal"
      > 
      <div className='content'>
        <h1 >Obrigado por contratar os nossos serviços</h1>
        <button type='button'onClick={closedModal}>x</button>
      </div>
        
      </Modal>
    </div>
  )
};