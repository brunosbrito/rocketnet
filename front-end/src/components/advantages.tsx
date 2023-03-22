import { Card, Col, Row } from "react-bootstrap";

export default function Advantages () {
  return(
    <div className="body">
      <h2>Vantagens de ser <span>ROCKETNET</span></h2>
      <Row xs={1} md={5} className="g-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Velocidade de conexão</Card.Title>
                <Card.Text>
                  A Rocketnet oferece uma velocidade de conexão rápida e confiável para seus usuários, permitindo que você navegue na internet, faça download de arquivos e assista a vídeos sem interrupções.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
       ))}  
    </Row>
    </div>
  )
}