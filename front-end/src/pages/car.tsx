import { Gauge } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Forms from "../components/form";
import Header from "../components/header";
import MainContext from "../context/brunonetContext";
import { IPlans } from "../context/brunonetProvider";

export default function Car() {
  const [dataPlan, setDataPlan] = useState<IPlans[]>([]);
  const { planId} = useContext(MainContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(planId === 0) {
      alert('Ops! tem algo de errado com a Api')
    }
    const getPlan = async (id: number) => {
      try {
        const request = await fetch(`http://localhost:3002/plans/${id}`, {
          method: "GET",
          mode: "cors"
        });
      const response = await request.json()
      const result = [response]

      setDataPlan(result)
      } catch (error) {
        console.log(error);
        // alert('Ops! tem algo de errado com a Api')
    }
  }
    getPlan(planId)
  },[])

  return (
    <div >
        <h2>PLANO ESCOLHIDO</h2>
        <div className="car-bory">
          {dataPlan?.map((plan) => (
            <Card  key={plan.id} style={{ width: '24rem' }}>
              <Card.Header><Card.Title>{plan.name}</Card.Title></Card.Header>
              <Card.Body>
                <Card.Text>{plan.description}</Card.Text>
                <Card.Text>R${plan.price}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" onClick={() => navigate('/')}>Trocar plano</Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      <Forms />
    </div>
  )
}