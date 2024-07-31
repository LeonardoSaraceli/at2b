import { Link } from 'react-router-dom'
import phone from '../assets/images/phone.svg'
import time from '../assets/images/time.svg'
import '../assets/styles/Header.css'

export default function Header() {
  return (
    <header>
      <ul id="left-side">
        <li>
          <img src={phone} alt="Phone icon" />

          <a href="tel:+552133496955" target="_blank">
            <span id="phone-number">+55 21 3349-6955</span>
          </a>
        </li>

        <li>
          <img src={time} alt="Time icon" />

          <span>Segunda à sexta, das 10h às 18h</span>
        </li>
      </ul>

      <nav>
        <ul id="right-side">
          <li>
            <Link to={'/'}>
              <span>Página Inicial</span>
            </Link>
          </li>

          <li>
            <Link to={'/quem-somos'}>
              <span>Quem Somos</span>
            </Link>
          </li>

          <li>
            <Link to={'/consultoria'}>
              <span>Consultoria</span>
            </Link>
          </li>

          <li>
            <Link to={'/contato'}>
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
