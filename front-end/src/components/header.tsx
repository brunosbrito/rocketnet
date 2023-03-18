import { ArrowBendDownLeft } from '@phosphor-icons/react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/headerStyle.css'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const url = location.pathname;

  console.log(url)

  const verifyHome = () => {
    if(url === '/') return 'orange'
  }

  const verifyPlans = () => {
    if(url === '/plans') return 'orange'
  }

  return(
    <div className="header">
      <ul>
        <button type="button" onClick={() => navigate(-1)}><ArrowBendDownLeft size={20}  /></button>
        <li style={{color: verifyHome()}}>Cobertura</li>
        <li style={{color: verifyPlans()}}>Planos</li>
        <li>Carrinho</li>
      </ul>
    </div>
  )
}

export default Header