import phone from '../assets/images/phone-contact.svg'
import time from '../assets/images/time-contact.svg'
import email from '../assets/images/email-contact.svg'
import location from '../assets/images/location-contact.svg'
import '../assets/styles/Contact.css'

export default function Contact() {
  return (
    <main id="contact">
      <section>
        <h1>NOSSA LOCALIZAÇÃO</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.1267446826155!2d-43.347645124910684!3d-22.945558879227846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd834949c2ba1%3A0x1ff990460bd9fc11!2sAT2B%20Tecnologia%20e%20Servi%C3%A7os!5e0!3m2!1spt-PT!2spt!4v1722527166485!5m2!1spt-PT!2spt"
          loading="lazy"
        ></iframe>
      </section>

      <section id="entre-em-contato">
        <h1>ENTRE EM CONTATO</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            id="nome"
            placeholder="NOME"
            autoComplete="nome"
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-MAIL"
            autoComplete="email"
          />

          <textarea name="message" placeholder="MENSAGEM"></textarea>

          <button type="submit">ENVIAR</button>
        </form>

        <ul>
          <li>
            <img src={phone} alt="Phone icon" />

            <a href="tel:+552133496955" target="_blank">
              <span>+55 21 3349-6955</span>
            </a>
          </li>

          <li>
            <img src={time} alt="Time icon" />

            <span>Segunda à sexta, das 10h às 18h</span>
          </li>

          <li>
            <img src={email} alt="Email icon" />

            <a href="mailto:at2b@at2b.com.br" target="_blank">
              <span>at2b@at2b.com.br</span>
            </a>
          </li>

          <li>
            <img src={location} alt="Location icon" />

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
