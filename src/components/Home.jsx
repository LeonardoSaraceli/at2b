import quemSomos from '../assets/images/quem-somos.png'
import consultoria from '../assets/images/consultoria.png'
import contato from '../assets/images/contato.png'
import '../assets/styles/Home.css'

export default function Home() {
  return (
    <main id="home">
      <section>
        <article>
          <h1>SOBRE NÓS</h1>

          <p>
            A AT2B surgiu com o propósito de fornecer soluções customizadas para
            as mais variadas demandas na área de tecnologia e serviços que
            envolvam a criação, manuseio e expedição de documentos.
          </p>

          <a href="/quem-somos">
            <button>Saiba mais</button>
          </a>
        </article>

        <img src={quemSomos} alt="Quem somos banner" loading="lazy" />
      </section>

      <section>
        {window.innerWidth >= 1280 && (
          <img src={consultoria} alt="Consultoria banner" loading="lazy" />
        )}

        <article>
          <h1>CONSULTORIA</h1>

          <p>
            Prestamos consultoria e treinamento na área de gestão, projetos,
            mapeamento de processos e análise de riscos utilizando a metodologia
            Lean Six Sigma, com um time de Black Belts e Green Belts treinados e
            certificados.
          </p>

          <a href="/consultoria">
            <button>Saiba mais</button>
          </a>
        </article>

        {window.innerWidth < 1280 && (
          <img src={consultoria} alt="Consultoria banner" loading="lazy" />
        )}
      </section>

      <section id="fale-conosco">
        <article>
          <h1>FALE CONOSCO</h1>

          <p>
            Entre em contato a gente para obter mais informações sobre nossos
            serviços e produtos. Nossa equipe de atendimento ao cliente é
            experiente e pode ajudá-lo a encontrar o que precisa.
          </p>

          <a href="/contato">
            <button>Contate-nos</button>
          </a>
        </article>

        <img src={contato} alt="Contato banner" loading="lazy" />
      </section>
    </main>
  )
}
