import React, { useEffect, useState } from "react";
import Header from "../components/header";
import MainContext from "../context/brunonetContext";
import { IPlans } from "../context/brunonetProvider";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Card, CardGroup, Col, Container, Modal, Row } from "react-bootstrap";

interface IButtonClickEvent extends React.MouseEvent<HTMLButtonElement> {
  target: HTMLButtonElement & {
    value: number;
  }
}

interface IDialog {
  title: string,
  description: string,
}

interface IJson {
  message: string,
}

export default function Plans() {
  const {dataPlans, setCep, cep, setPlanId} = React.useContext(MainContext)
  const navigate = useNavigate();
  const [data, setData] =  React.useState<{message: string}>()
  const [dialog, setDialog] = useState<IDialog>({} as IDialog);
  const [show, setShow] = useState(false);
  const [isButton, setIsButton] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getIdPlan = ({target}: IButtonClickEvent) => {
    setPlanId(target.value)
    navigate('/car')
  };

   const handleChange = ( {target}:React.ChangeEvent<HTMLInputElement>) => {
    const dataCep = target.value;
    setCep(dataCep)
  }

  const body = {
    cep
  }
  
  const verifyCep = async (): Promise<void> => {
    try {
      const request = await fetch('http://localhost:3001/coverage', {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })

  const response = await request.text();
  const json = response === "" ? {} : JSON.parse(response)
  handleShow()
  dialogModal(json)
    } catch (error) {
      console.log(error);
      alert('Ops! tem algo de errado com a Api')
    }
  }

  const dialogModal = (json: IJson) => {
    console.log(json.message)
    if(json.message === 'cep requerido'){
      setDialog({
        title: 'Está faltando alguma coisa ai',
        description: 'Digite um cep valido'
      })
    }

    if(json.message === 'CEP INVÁLIDO'){
        setDialog({
        title: 'Que pena!',
        description: 'Ainda não temos cobertura na sua região.'
      })
    }

    if(json.message === 'CEP APROVADO'){
       setDialog({
        title: 'CEP ENCONTRADO!',
        description: 'Temos cobertura na sua região e os planos serão desbloqueados'
      })
      setIsButton(false)
    }
  }

  return (
  <div style={{marginTop: '30px', width: '80%', margin: '30px auto'}}>
    <div className="row g-2" style={{marginBottom: '30px'}}>
      <h2>Digite seu CEP para verificação de cobertura e desbloqueio dos planos</h2>
      <label  className="form-label">Cep<span style={{color: 'red'}}>*</span></label>
      <input className="form-control" placeholder="00000-000" type="text" onChange={handleChange} />
      <Button className="form-control" onClick={verifyCep}>Verificar</Button>
    </div>
    <Row xs={1} md={4} lg={2} className="g-4" id="plans">
      {dataPlans.map((plan: IPlans) => (
        <Col key={plan.id}>
          <Card>
            <Card.Header>
            <Card.Title  className="card-title">{plan.speed} MEGAS</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text className="card-description">{plan.description}</Card.Text>
            <Card.Text className="card-value">R${plan.value}/mês</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button value={plan.id} size="sm" disabled={isButton} onClick={getIdPlan}>Assinar</Button>
          </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{dialog.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dialog.description}
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" onClick={handleClose}>OK</Button>
        </Modal.Footer>
      </Modal>
  </div>
  )
}