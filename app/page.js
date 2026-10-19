import { CONFIG } from "../lib/config";
import CopiarPix from "./CopiarPix";

export default function Home() {
  const zapLink = (numero) =>
    `https://wa.me/${numero}?text=${encodeURIComponent(CONFIG.mensagem)}`;

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
            <div className="chip"><small>Começa às</small><b>{CONFIG.horaMissa}, com missa</b></div>
            <div className="chip"><small>Onde</small><b>Paineira do Iguaçu</b></div>
            <div className="chip"><small>Almoço e matinê</small><b>{CONFIG.valorAlmoco}</b></div>
            <div className="chip"><small>Hospedagem</small><b>Não inclusa</b></div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="wrap">
            <h2>Como vai ser o dia</h2>
            <ol className="agenda">
              <li>
                <div className="hora">{CONFIG.horaMissa}</div>
                <h3>Missa</h3>
                <p>Pra agradecer a família, os que estão aqui e os que a gente lembra com saudade.</p>
              </li>
              <li>
                <div className="hora">Depois da missa</div>
                <h3>Almoço tradicional</h3>
                <p>Mesa farta, prato cheio e muita conversa. Valor: {CONFIG.valorAlmoco}, com água e refrigerante incluídos.</p>
              </li>
              <li>
                <div className="hora">À tarde</div>
                <h3>Matinê</h3>
                <p>Conjunto ao vivo, dança e prosa até o sol baixar. Já está incluso nos {CONFIG.valorAlmoco}. Traga o pé de valsa.</p>
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
            <div className="mapa">
              <iframe
                title="Mapa de Cruzeiro do Iguaçu - PR"
                src={CONFIG.mapaSrc}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="aviso">
              <h2>Sobre a hospedagem</h2>
              <p>
                O encontro é promovido e organizado pela família Langa. A organização
                cuida da missa, do almoço e da matinê, mas não oferece hospedagem.
                Quem vier de longe precisa reservar o seu lugar por conta própria.
              </p>
            </div>
          </div>
        </section>

        <section>
  <div className="wrap">
    <h2>Pagamento por Pix</h2>
    <div className="pix">
      <p>Valor: {CONFIG.valorAlmoco}, com almoço, bebidas* e matinê.</p>
      <p className="chave">Chave Pix (CPF): <b>{CONFIG.pix.chave}</b></p>
      <p>Titular: {CONFIG.pix.titular}</p>
      <CopiarPix chave={CONFIG.pix.chave} />
      <p className="obs">Depois de pagar, mande o comprovante no WhatsApp de um dos contatos abaixo.</p>
      <p className="obs">bebidas esta incluso somente água e refrigerante</p>
    </div>
  </div>
</section>

<section>
  <div className="wrap">
    <h2>Baixe e compartilhe o convite</h2>
    <p className="intro">Mande pra família toda:</p>
    <div className="btns">
      <a
        className="btn btn-main"
        href="/convite-encontro-familia-langa.png"
        download="convite-encontro-familia-langa.png"
      >
        Baixar imagem (PNG)
      </a>
      <a
        className="btn btn-line"
        href="/convite-encontro-familia-langa.pdf"
        download="convite-encontro-familia-langa.pdf"
      >
        Baixar PDF
      </a>
    </div>
  </div>
</section>

        <section id="contato">
          <div className="wrap">
            <h2>Informações e confirmação</h2>
            <p className="intro">Chame no WhatsApp:</p>
            <div className="contatos">
              {CONFIG.contatos.map((c) => (
                <a
                  key={c.whatsapp}
                  className="contato"
                  href={zapLink(c.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="nome">{c.nome}</span>
                  <span className="num">{c.exibir}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>Chame a família toda e avise quantos vão pra gente separar a comida.</p>
        </div>
      </footer>
    </>
  );
}
