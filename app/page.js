import { CONFIG } from "../lib/config";

const MAPA =
  "https://www.google.com/maps/search/?api=1&query=Paineira+do+Igua%C3%A7u+Cruzeiro+do+Igua%C3%A7u+PR";

export default function Home() {
  const zap = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="kicker">Você está convidado para o</p>
          <h1>Encontro da Família Langa</h1>
          <div className="typos" aria-label="Variações do sobrenome: Longa, Langue, Lange, Lenga">
            <span>Longa</span>
            <span>Langue</span>
            <span>Lange</span>
            <span>Lenga</span>
          </div>
          <p className="tagline">Tudo é Langa. O cartório que se confundiu.</p>

          <div className="when">
            <div className="chip"><small>Domingo</small><b>{CONFIG.data}</b></div>
            <div className="chip"><small>Começa às</small><b>9h, com missa</b></div>
            <div className="chip"><small>Onde</small><b>Paineira do Iguaçu</b></div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="wrap">
            <h2>Como vai ser o dia</h2>
            <ol className="agenda">
              <li>
                <div className="hora">9h</div>
                <h3>Missa</h3>
                <p>Pra agradecer a família, os que estão aqui e os que a gente lembra com saudade.</p>
              </li>
              <li>
                <div className="hora">Depois da missa</div>
                <h3>Almoço tradicional</h3>
                <p>Mesa farta, prato cheio e muita conversa. Dá pra repetir.</p>
              </li>
              <li>
                <div className="hora">À tarde</div>
                <h3>Matinê</h3>
                <p>Música, dança e prosa até o sol baixar. Traga o pé de valsa.</p>
              </li>
            </ol>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="humor">
              <h2>Por que tem Longa, Langue e Lange?</h2>
              <p>
                Segundo a lenda da família, lá atrás o moço do cartório ouviu
                &ldquo;Langa&rdquo;, escreveu do jeito que achou melhor e seguiu a vida.
                Pronto: um sobrenome virou vários.
              </p>
              <p>
                Resultado: primos que nunca se conheceram e que são parentes de verdade,
                com sobrenome diferente no RG.
              </p>
              <p className="ps">Se o seu é parecido, você é da família. Pode vir.</p>
            </div>
          </div>
        </section>

        <section className="local">
          <div className="wrap">
            <h2>Onde fica</h2>
            <p>Comunidade de Paineira do Iguaçu, município de Cruzeiro do Iguaçu, Paraná.</p>
            <div className="btns">
              <a className="btn btn-main" href={zap} target="_blank" rel="noopener noreferrer">
                Confirmar presença no WhatsApp
              </a>
              <a className="btn btn-line" href={MAPA} target="_blank" rel="noopener noreferrer">
                Ver no mapa
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>
            Informações:{" "}
            <a href={zap} target="_blank" rel="noopener noreferrer">
              {CONFIG.whatsappExibir}
            </a>
            . Chame a família toda e avise quantos vão pra gente separar a comida.
          </p>
        </div>
      </footer>
    </>
  );
}
