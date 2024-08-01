import quemSomos from '../assets/images/quem-somos.png'
import consultoria from '../assets/images/consultoria.png'
import contato from '../assets/images/contato.png'
import '../assets/styles/Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

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

          <button onClick={() => navigate('/quem-somos')}>Saiba mais</button>
        </article>

        <img src={quemSomos} alt="Quem somos banner" loading="lazy" />
      </section>

      <section id="quem-somos">
        <img src={consultoria} alt="Consultoria banner" loading="lazy" />

        <article>
          <h1>CONSULTORIA</h1>

          <p>
            Prestamos consultoria e treinamento na área de gestão, projetos,
            mapeamento de processos e análise de riscos utilizando a metodologia
            Lean Six Sigma, com um time de Black Belts e Green Belts treinados e
            certificados.
          </p>

          <button onClick={() => navigate('/consultoria')}>Saiba mais</button>
        </article>
      </section>

      <section id="fale-conosco">
        <article>
          <h1>FALE CONOSCO</h1>

          <p>
            Entre em contato a gente para obter mais informações sobre nossos
            serviços e produtos. Nossa equipe de atendimento ao cliente é
            experiente e pode ajudá-lo a encontrar o que precisa.
          </p>

          <button onClick={() => navigate('/contato')}>Contate-nos</button>
        </article>

        <img src={contato} alt="Contato banner" loading="lazy" />
      </section>
    </main>
  )
}
