import { ArrowBendDownLeft } from '@phosphor-icons/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import logo from '../images/netflash.png'
import salles from '../images/salles.png'
import Nav from 'react-bootstrap/Nav';

function Header() {
  

  return(
    <div style={{borderBottom: '1px solid blue'}}>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item >
          <Nav.Link  className='nav-item' href="/">Área do cliente</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className='nav-item' href="#plans">Planos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-item' eventKey="disabled" disabled>Suporte 0800 000 000</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
     
  )
}

export default Header