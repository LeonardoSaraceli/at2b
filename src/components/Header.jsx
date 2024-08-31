import '../assets/styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
  return (
    <header>
      <ul id="left-side">
        <li>
          <a href="tel:+552133496955" target="_blank">
            <FontAwesomeIcon icon={faPhone} />

            <span id="phone-number">+55 21 3349-6955</span>
          </a>
        </li>

        <li>
          <FontAwesomeIcon icon={faClock} />

          <span>Segunda a sexta, das 10h às 18h</span>
        </li>
      </ul>

      <nav>
        <ul id="right-side">
          <li>
            <a href="/">
              <span>Página Inicial</span>
            </a>
          </li>

          <li>
            <a href="/quem-somos">
              <span>Quem Somos</span>
            </a>
          </li>

          <li>
            <a href="/consultoria">
              <span>Consultoria</span>
            </a>
          </li>

          <li>
            <a href="/contato">
              <span>Contato</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
