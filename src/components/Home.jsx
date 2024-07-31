import quemSomos from '../assets/images/quem-somos.png'
import consultoria from '../assets/images/consultoria.png'
import contato from '../assets/images/contato.png'
import '../assets/styles/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  document.title = 'AT2B - Página Inicial'

  return (
    <main id="home">
      <section id="sobre-nos">
        <article>
          <h1>SOBRE NÓS</h1>

          <p>
            A AT2B surgiu com o propósito de fornecer soluções customizadas para
            as mais variadas demandas na área de tecnologia e serviços que
            envolvam a criação, manuseio e expedição de documentos.
          </p>

          <Link to={'/quem-somos'}>
            <button>Saiba mais</button>
          </Link>
        </article>

        <img src={quemSomos} alt="Quem somos banner" />
      </section>

      <section id="quem-somos">
        <img src={consultoria} alt="Consultoria banner" />

        <article>
          <h1>CONSULTORIA</h1>

          <p>
            Prestamos consultoria e treinamento na área de gestão, projetos,
            mapeamento de processos e análise de riscos utilizando a metodologia
            Lean Six Sigma, com um time de Black Belts e Green Belts treinados e
            certificados.
          </p>

          <Link to={'/consultoria'}>
            <button>Conheça agora</button>
          </Link>
        </article>
      </section>

      <section id="fale-conosco">
        <article>
          <h1>FALE CONOSCO</h1>

          <p>
            Entre em contato conosco para obter mais informações sobre nossos
            serviços e produtos. Nossa equipe experiente de atendimento ao
            cliente pode ajudá-lo(a) a encontrar o que você precisa e
            orientá-lo(a) sobre as opções.
          </p>

          <Link to={'/contato'}>
            <button>Agende já</button>
          </Link>
        </article>

        <img src={contato} alt="Contato banner" />
      </section>
    </main>
  )
}
