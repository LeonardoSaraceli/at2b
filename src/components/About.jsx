import missao from '../assets/images/missao.svg'
import valores from '../assets/images/valores.svg'
import '../assets/styles/About.css'

export default function About() {
  return (
    <main id="about">
      <section id="quem-somos">
        <h1>QUEM SOMOS</h1>

        <p>
          Atuando também como provedor de soluções em microinformática,
          impressão, mailing e gerenciamento de expedições em todo o estado do
          Rio de Janeiro, a AT2B possui equipe técnica especializada e treinada
          para atender as mais rigorosas exigências de SLA.
        </p>

        <p>
          Representamos as mais conceituadas empresas nos segmentos de
          tecnologia, impressão, finalização de documentos, sistemas de
          franqueamento postal, logística de documentos e pacotes, sistemas de
          controle de acesso, telecomunicações e geoprocessamento.
        </p>

        <p>
          Possuímos soluções automatizadas que gerenciam todo o processo de
          registro e rastreamento de correspondências em geral, com visibilidade
          total e imediata do pacote e seu status, garantindo redução de tempo
          no processo e também oferecendo entregas mais rápidas, seguras e com
          menor custo.
        </p>
      </section>

      <section>
        <h1>NOSSA MISSÃO E VALORES</h1>

        <article>
          <img src={missao} alt="Missão icon" />

          <p>
            Superar as expectativas de nossos clientes, proporcionando as
            soluções adequadas à realidade e necessidade de cada empresa, com
            eficácia e agilidade, transformando conhecimento e experiência em
            resultados.
          </p>
        </article>

        <article>
          <img src={valores} alt="Valores icon" />

          <ul>
            <li>
              <span>I. Ética</span>
            </li>

            <li>
              <span>II. Foco em resultados</span>
            </li>

            <li>
              <span>III. Comprometimento</span>
            </li>

            <li>
              <span>IV. Profissionalismo</span>
            </li>

            <li>
              <span>V. Criatividade</span>
            </li>

            <li>
              <span>VI. Determinação</span>
            </li>

            <li>
              <span>VII. Dinamismo</span>
            </li>

            <li>
              <span>VIII. Iniciativa</span>
            </li>

            <li>
              <span>IX. Eficiência</span>
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}
