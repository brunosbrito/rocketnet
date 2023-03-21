import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import MainContext from '../context/brunonetContext'
import {  IPlans } from '../context/brunonetProvider'
import '../styles/formStyle.css'
import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form'

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

const formSchema = yup.object().shape({
    name: yup.string().required('NOME É OBRIGATÓRIO'),
    tel:yup.string().required('TEKEFONE É OBRIGATÓRIO'),
    email:yup.string().email('ENSIRA UM EMAIL VÀLIDO: EMAIL@EXAMPLE.COM').required('EMAIL É OBRIGATÓRIO')
  })

export default function Form() {
  const {planId} = useContext(MainContext)
  const navigate = useNavigate()
  
  const { register, handleSubmit, formState: {errors} } = useForm<IClients>({
    resolver: yupResolver(formSchema)
  })

  const postClient: SubmitHandler<IClients> = async (values: IClients) => {
    alert("cadatro realizado")
    navigate('/')

    const data = {
      ...values,
      plan_id: planId
    }
    
    const request = await fetch('http://localhost:3001/clients', {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  
  const templateParams = {
      from_name: values.name ,
      message: 'Informações do novo cliente',
      email: values.email,
      tel: values.tel,
    }

  emailjs.send('service_u2zvicq', 'template_gaz091d', templateParams, 'I6yIoRj7mzubrp5Bg')
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
      }, (error) => {
        console.log("Eroor", error)
      })  

  const response = await request.text();
  const json = response === "" ? {} : JSON.parse(response)
  return json
  };

  return(
    <div>
      <form action='' onSubmit={handleSubmit(postClient)}>
        <label htmlFor="name" >
          <p>Nome <span>*</span></p>
        </label>
        <input type="text"
          //@ts-ignore
          name="name"
          id="name" 
          {...register('name')}
        />
        {errors.name && <span>{errors.name.message}</span>}
        
        <label htmlFor="cpf">
          <p>CPF</p>
        </label>
        <input type="text"
          //@ts-ignore
          name="cpf"
          id="cpf"
          {...register('cpf')}
        />
        {errors.cpf && <span>{errors.cpf.message}</span>}

        <label htmlFor="rg">
         <p>RG</p>
        </label>
        <input type="text"
          //@ts-ignore
          name="rg"
          id="rg"
          {...register('rg')}
        />
        {errors.rg && <span>{errors.rg.message}</span>}

        <label htmlFor="date_of_birth">
         <p>Data de nascimento</p>
          <input className='date'
          type="date"
          //@ts-ignore
          name="date_of_birth"
          id="date_of_birth"
          {...register('date_of_birth')}
        />
        </label>
        {errors.date_of_birth && <span>{errors.date_of_birth.message}</span>}

        <label htmlFor="tel">
          <p>Telefone <span>*</span></p>
        </label>
        <input type="text"
          //@ts-ignore
          name="tel"
          id="tel"
          {...register('tel')}
        />
        {errors.tel && <span>{errors.tel.message}</span>}

        <label htmlFor="email">
         <p>Email <span>*</span></p>
        </label>
        <input type="text"
          //@ts-ignore
          name="email"
          id="email"
          {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="adress">
          <p>Endereço</p>
        </label>
        <input type="text"
          //@ts-ignore
          name="adress"
          id="adress"
          {...register('adress')}
        />
        {errors.adress && <span>{errors.adress.message}</span>}

        <label htmlFor="number">
          <p>Número</p>
        </label>
        <input type="text"
          //@ts-ignore
          name="number"
          id="number"
          {...register('number')}
        />
        {errors.number && <span>{errors.number.message}</span>}

        <label htmlFor="district">
          <p>Bairro</p>
        </label>
        <input type="text"
          //@ts-ignore
          name="district"
          id="district"
          {...register('district')}
        />
        {errors.district && <span>{errors.district.message}</span>}

        <label htmlFor="city">
          <p>Cidade</p>
        </label>
        <input type="text"
          //@ts-ignore
          name="city"
          id="city"
          {...register('city')}
        />
        {errors.city && <span>{errors.city.message}</span>}

        <label htmlFor="cep">
          <p>CEP</p>
        </label>
        <input type="text"
          //@ts-ignore
          name="cep"
          id="cep"
          {...register('cep')}
        />
        {errors.cep && <span>{errors.cep.message}</span>}

        <button className="form-button" type="submit" > FINALIZAR</button>
    </form>
    </div>
  )
};