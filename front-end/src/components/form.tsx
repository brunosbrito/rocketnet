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
    cpf: yup.string().required('CPF É OBRIGATÓRIO'),
    rg:yup.string().required('RG É OBRIGATÓRIO'),
    date_of_birth:yup.date().required('DATA DE NASCIMENTO É OBRIGATÓRIO'),
    tel:yup.string().required('TEKEFONE É OBRIGATÓRIO'),
    email:yup.string().email('ENSIRA UM EMAIL VÀLIDO: EMAIL@EXAMPLE.COM').required('EMAIL É OBRIGATÓRIO'),
    adress:yup.string().required('ENDEREÇO É OBRIGATÓRIO'),
    number:yup.number().required('NÚMERO É OBRIGATÓRIO'),
    district:yup.string().required('BAIRRO É OBRIGATÓRIO'),
    city:yup.string().required('CIDADE É OBRIGATÓRIO'),
    cep:yup.string().required('CEP É OBRIGATÓRIO'),
  })

export default function Form() {
  const {planId} = useContext(MainContext)
  const [fieldData, setFieldData] = useState<IClients>({} as IClients)
  const navigate = useNavigate()
  
  const { register, handleSubmit, formState: {errors} } = useForm<IClients>({
    resolver: yupResolver(formSchema)
  })

  const postClient: SubmitHandler<IClients> = async (values: IClients) => {
    alert("cadatro realizado")
    setFieldData(values)
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

  sendEmail()
  const response = await request.text();
  const json = response === "" ? {} : JSON.parse(response)
  return json
  };

  const sendEmail = () =>{
    const templateParams = {
      from_name: fieldData.name ,
      message: 'Informações do novo cliente',
      email: fieldData.email,
      tel: fieldData.tel,
    }

    emailjs.send('service_u2zvicq', 'template_gaz091d', templateParams, 'I6yIoRj7mzubrp5Bg')
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
      }, (error) => {
        console.log("Eroor", error)
      })
  }

  return(
    <div>
      <form action='' onSubmit={handleSubmit(postClient)}>
        <label htmlFor="name" >
          Nome
        </label>
        <input type="text"
          //@ts-ignore
          name="name"
          id="name" 
          {...register('name')}
        />
        {errors.name && <span>{errors.name.message}</span>}
        
        <label htmlFor="cpf">
          CPF
        </label>
        <input type="text"
          //@ts-ignore
          name="cpf"
          id="cpf"
          {...register('cpf')}
        />
        {errors.cpf && <span>{errors.cpf.message}</span>}

        <label htmlFor="rg">
          RG
        </label>
        <input type="text"
          //@ts-ignore
          name="rg"
          id="rg"
          {...register('rg')}
        />
        {errors.rg && <span>{errors.rg.message}</span>}

        <label htmlFor="date_of_birth">
          Data de nascimento
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
          Telefone
        </label>
        <input type="text"
          //@ts-ignore
          name="tel"
          id="tel"
          {...register('tel')}
        />
        {errors.tel && <span>{errors.tel.message}</span>}

        <label htmlFor="email">
          Email
        </label>
        <input type="text"
          //@ts-ignore
          name="email"
          id="email"
          {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="adress">
          Endereço
        </label>
        <input type="text"
          //@ts-ignore
          name="adress"
          id="adress"
          {...register('adress')}
        />
        {errors.adress && <span>{errors.adress.message}</span>}

        <label htmlFor="number">
          Número
        </label>
        <input type="number"
          //@ts-ignore
          name="number"
          id="number"
          {...register('number')}
        />
        {errors.number && <span>{errors.number.message}</span>}

        <label htmlFor="district">
          Bairro
        </label>
        <input type="text"
          //@ts-ignore
          name="district"
          id="district"
          {...register('district')}
        />
        {errors.district && <span>{errors.district.message}</span>}

        <label htmlFor="city">
          Cidade
        </label>
        <input type="text"
          //@ts-ignore
          name="city"
          id="city"
          {...register('city')}
        />
        {errors.city && <span>{errors.city.message}</span>}

        <label htmlFor="cep">
          CEP
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