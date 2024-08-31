import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/Consultoria.css'
import {
  fa6,
  faClipboardCheck,
  faUsersGear,
} from '@fortawesome/free-solid-svg-icons'

export default function Consultoria() {
  return (
    <main id="consultoria">
      <section>
        <h1>CONSULTORIA</h1>

        <p>
          O nosso time de consultores e técnicos possui uma sólida formação
          acadêmica, com competências desenvolvidas em vários anos de
          experiência executiva empresarial em empresas nacionais e
          multinacionais, treinada para atender as mais rigorosas exigências de
          SLA e foco no cliente.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faUsersGear} />

            <span>Gestão e processos</span>
          </li>

          <li>
            <FontAwesomeIcon icon={fa6} />

            <span>Lean Six Sigma</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faClipboardCheck} />

            <span>Análise de riscos</span>
          </li>
        </ul>
      </section>
    </main>
  )
}
