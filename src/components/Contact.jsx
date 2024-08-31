import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/Contact.css'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Contact() {
  return (
    <main id="contact">
      <section>
        <h1>ENTRE EM CONTATO</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            id='name'
            autoComplete="name"
            placeholder="Nome"
          />

          <input
            type="email"
            name="email"
            id='email'
            autoComplete="email"
            placeholder="E-mail"
          />

          <textarea placeholder="Mensagem"></textarea>

          <button type="submit">Enviar</button>
        </form>

        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} />

            <a href="tel:+552133496955" target="_blank">
              <span>+55 21 3349-6955</span>
            </a>
          </li>

          <li>
            <FontAwesomeIcon icon={faClock} />

            <span>De segunda a sexta-feira, das 10h às 18h</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faEnvelope} />

            <a href="mailto:at2b@at2b.com.br" target="_blank">
              <span>at2b@at2b.com.br</span>
            </a>
          </li>

          <li>
            <FontAwesomeIcon icon={faLocationDot} />

            <a href="https://maps.app.goo.gl/YQ4QiRjkKirP5NEw5" target="_blank">
              <span>
                Estrada do Gabinal, 313 - Loja 218 Rio Shopping - Freguesia -
                Jacarepaguá - RJ
              </span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
