import { useState } from "react";

const defaultText = `Aos olhos do mundo, somos apenas duas pessoas comuns que se encontraram numa noite qualquer.

Mas eu sei — e você também — que entre nós existe uma corte inteira de memórias, um reino feito de risadas baixas, de mãos quentes em invernos longos, de silêncios que dizem tudo.

Se eu pudesse escolher de novo, em qualquer mundo, em qualquer vida, ainda assim seria você. Sempre você.

A minha sorte tem o seu nome.`;

export function Letter() {
  const [text, setText] = useState(defaultText);
  const [editing, setEditing] = useState(false);

  return (
    <section id="carta" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6 text-center reveal">
        <p className="font-script text-2xl text-gold">Pra você, sempre</p>
        <h2 className="mt-3 font-serif text-5xl md:text-6xl">A Carta</h2>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-6 reveal">
        <div className="relative rounded-sm border border-[var(--gold)]/25 bg-[var(--card)] p-10 shadow-[var(--shadow-gold)] backdrop-blur-md md:p-16">
          {/* corner ornaments */}
          {[
            "left-3 top-3", "right-3 top-3 rotate-90",
            "left-3 bottom-3 -rotate-90", "right-3 bottom-3 rotate-180",
          ].map((c) => (
            <svg key={c} className={`absolute h-8 w-8 text-gold/60 ${c}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden>
              <path d="M2 2 L2 12 M2 2 L12 2 M2 2 Q14 4 16 16" />
            </svg>
          ))}

          {editing ? (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={12}
              className="w-full resize-none bg-transparent font-serif text-xl leading-relaxed italic text-foreground outline-none focus:ring-0 md:text-2xl"
            />
          ) : (
            <p className="whitespace-pre-wrap font-serif text-xl leading-relaxed italic text-foreground md:text-2xl">
              {text}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between">
            <p className="font-script text-3xl text-gold">— com amor</p>
            <button
              onClick={() => setEditing((v) => !v)}
              className="rounded-full border border-[var(--gold)]/60 px-5 py-2 text-[0.7rem] uppercase tracking-[0.3em] text-gold transition-all hover:bg-[var(--gold)]/10"
            >
              {editing ? "Salvar" : "Editar"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
