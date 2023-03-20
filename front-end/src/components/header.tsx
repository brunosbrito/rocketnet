import { ArrowBendDownLeft } from '@phosphor-icons/react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/headerStyle.css'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const url = location.pathname;

  const color = 'orange'

  console.log(url)

  const verifyHome = () => {
    if(url === '/') return color
  }

  const verifyPlans = () => {
    if(url === '/plans') return color
  }

  const verifyCar = () => {
    if(url === '/car') return color
  }

  return(
    <div className="header">
      <ul>
        <button type="button" onClick={() => navigate(-1)}><ArrowBendDownLeft size={20}  /></button>
        <li style={{color: verifyHome()}}>Cobertura</li>
        <li style={{color: verifyPlans()}}>Planos</li>
        <li style={{color:verifyCar()}}>Carrinho</li>
      </ul>
    </div>
  )
}

export default Header