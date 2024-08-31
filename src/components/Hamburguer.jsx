/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/Hamburguer.css'
import { faClock, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Hamburguer({ showBurguer, setShowBurguer }) {
  return (
    <aside id="hamburguer">
      <FontAwesomeIcon
        icon={faXmark}
        id="escape"
        onClick={() => setShowBurguer(!showBurguer)}
      />

      <ul id="up-side">
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

      <ul id="bottom-side">
        <li>
          <a href="tel:+552133496955" target="_blank">
            <FontAwesomeIcon icon={faPhone} />

            <span id="phone-number">+55 21 3349-6955</span>
          </a>
        </li>

        <li>
          <FontAwesomeIcon icon={faClock} />

          <span>Segunda a sexta, 10h às 18h</span>
        </li>
      </ul>
    </aside>
  )
}
