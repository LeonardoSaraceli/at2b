import gestao from '../assets/images/gestao.svg'
import leanSixSigma from '../assets/images/lean-six-sigma.svg'
import analise from '../assets/images/analise.svg'
import '../assets/styles/Consultoria.css'

export default function Consultoria() {
  return (
    <main>
      <section id="consultoria">
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
            <img src={gestao} alt="Gestão icon" />

            <span>Gestão e processos</span>
          </li>

          <li>
            <img src={leanSixSigma} alt="Lean Six Sigma icon" />

            <span>Lean Six Sigma</span>
          </li>

          <li>
            <img src={analise} alt="Análise icon" />

            <span>Análise de riscos</span>
          </li>
        </ul>
      </section>
    </main>
  )
}
