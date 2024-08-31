import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import at2b from '../assets/images/AT2B.png'
import '../assets/styles/Footer.css'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
  return (
    <footer>
      <a href="/">
        <img src={at2b} alt="AT2B logo" />
      </a>

      <div id="divisor"></div>

      <ul>
        <li>
          <FontAwesomeIcon icon={faLocationDot} className="icon" />

          <a href="https://maps.app.goo.gl/YQ4QiRjkKirP5NEw5" target="_blank">
            <span>
              Estrada do Gabinal, 313 - Loja 218 Rio Shopping - Freguesia -
              Jacarepaguá - RJ
            </span>
          </a>
        </li>

        <li>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />

          <a href="mailto:at2b@at2b.com.br" target="_blank">
            <span>at2b@at2b.com.br</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}
