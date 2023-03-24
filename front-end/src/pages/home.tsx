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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [data, setData] =  React.useState<{message: string}>()

  const navigate = useNavigate()

  const closedModal = () => {
    setIsOpen(false);
    if(data?.message === 'CEP APROVADO'){
    navigate('/plans')
    }
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