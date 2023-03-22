import React, { useContext, useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import MainContext from '../context/brunonetContext';
import Modal from 'react-modal';
import rocketnet from '../images/rocketnet.png'
import { Button, Form, Image, InputGroup } from 'react-bootstrap';
import Header from '../components/header';
import Plans from './plans';
import Advantages from '../components/advantages';
import Footer from '../components/footer';

type Props =  {
  cep: string,
  setCep: (cep: string) => void,
  value: string
}

export default function Home() {
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
    <div>
      <Header />
      <div className='div-header'>
        <Image className='img-rocketnet' fluid src={rocketnet}/>
      </div>
      <Advantages />
      <Plans />
      <Footer />
    </div>
  )
}