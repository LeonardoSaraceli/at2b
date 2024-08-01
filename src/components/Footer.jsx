import at2b from '../assets/images/AT2B.png'
import location from '../assets/images/location.svg'
import email from '../assets/images/email.svg'
import '../assets/styles/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <Link to={'/'}>
        <img src={at2b} alt="AT2B logo" id="at2b-logo" />
      </Link>

      <div id="divisor"></div>

      <ul>
        <li>
          <img src={location} alt="Location icon" />

          <a href="https://maps.app.goo.gl/YQ4QiRjkKirP5NEw5" target="_blank">
            <span id="location-url">
              Estrada do Gabinal, 313 - Loja 218 Rio Shopping - Freguesia -
              Jacarepaguá - RJ
            </span>
          </a>
        </li>

        <li>
          <img src={email} alt="E-mail icon" />

          <a href="mailto:at2b@at2b.com.br" target="_blank">
            <span>at2b@at2b.com.br</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}
