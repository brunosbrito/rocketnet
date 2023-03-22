import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContext from '../context/brunonetContext'
import {  IPlans } from '../context/brunonetProvider'
import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'

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
    tel:yup.string().required('TELEFONE É OBRIGATÓRIO'),
    email:yup.string().email('ENSIRA UM EMAIL VÀLIDO: EMAIL@EXAMPLE.COM').required('EMAIL É OBRIGATÓRIO')
  })

export default function Forms() {
  const {planId} = useContext(MainContext)
  const navigate = useNavigate()
  
  const { register, handleSubmit, formState: {errors} } = useForm<IClients>({
    resolver: yupResolver(formSchema)
  })

  const postClient: SubmitHandler<IClients> = async (values: IClients) => {
    alert("cadastro realizado")
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
    <div className='form-body'>
      <Form action='' onSubmit={handleSubmit(postClient)}>

        <Form.Group className="mb-3" >
          <Form.Label >Nome <span style={{color: 'red'}}>*</span></Form.Label>
          <Form.Control type="text"
          //@ts-ignore
          name="name"
          id="name" 
          {...register('name')}
        />
        {errors.name && <span>{errors.name.message}</span>}

        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label >CPF</Form.Label>
          <Form.Control type="text"
          //@ts-ignore
          name="cpf"
          id="cpf"
          {...register('cpf')}
        />
        {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label >RG</Form.Label>
          <Form.Control type="text"
          //@ts-ignore
          name="rg"
          id="rg"
          {...register('rg')}
        />
        {errors.rg && <span>{errors.rg.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label >Data de nascimento</Form.Label>
          <Form.Control className='date'
          type="date"
          //@ts-ignore
          name="date_of_birth"
          id="date_of_birth"
          {...register('date_of_birth')}
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Telefone<span style={{color: 'red'}}>*</span></Form.Label>
          <Form.Control type="text"
          //@ts-ignore
          name="tel"
          id="tel"
          {...register('tel')}
        />
        {errors.tel && <span>{errors.tel.message}</span>}
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Email<span style={{color: 'red'}}>*</span></Form.Label>
          <Form.Control type="text"
          //@ts-ignore
          name="email"
          id="email"
          {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Endereço</Form.Label>
          <Form.Control type="text"
          //@ts-ignore
          name="adress"
          id="adress"
          {...register('adress')}
        />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Número</Form.Label>
          <Form.Control type="text"
          //@ts-ignore
          name="number"
          id="number"
          {...register('number')}
        />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text"
          //@ts-ignore
          name="district"
          id="district"
          {...register('district')}
        />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text"
          //@ts-ignore
          name="city"
          id="city"
          {...register('city')}
        />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="text"
          //@ts-ignore
          name="cep"
          id="cep"
          {...register('cep')}
        />
        </Form.Group>
        <Button className="form-control" type="submit" > FINALIZAR</Button>
    </Form>
    </div>
  )
};