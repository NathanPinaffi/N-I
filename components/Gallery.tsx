import { useEffect, useState } from "react";
import g1 from "../assets/kiss.jpg";
import g2 from "../assets/lianca.jpg";
import g3 from "../assets/nos.jpg";
import m1 from "../assets/tontinhos.jpg";
import m2 from "../assets/us.jpg";
import m3 from "../assets/tontos.jpg";

const photos = [
  { src: g2, caption: "Sob a Via Láctea", span: "md:col-span-2 md:row-span-2" },
  { src: m1, caption: "Mãos que se acharam" },
  { src: g1, caption: "A promessa" },
  { src: m3, caption: "A clareira encantada", span: "md:row-span-2" },
  { src: m2, caption: "O cume" },
  { src: g3, caption: "A carta" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? 0 : (a + 1) % photos.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? 0 : (a - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="galeria" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6 text-center reveal">
        <p className="font-script text-2xl text-gold">Memórias congeladas</p>
        <h2 className="mt-3 font-serif text-5xl md:text-6xl">Galeria</h2>
        <p className="mx-auto mt-5 max-w-xl font-serif text-lg italic text-muted-foreground">
          Cada quadro é um instante que recusou ser esquecido.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl auto-rows-[180px] grid-cols-2 gap-3 px-6 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-sm ring-1 ring-[var(--gold)]/15 transition-all hover:ring-[var(--gold)]/60 reveal ${p.span ?? ""}`}
          >
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--night)] via-[var(--night)]/20 to-transparent opacity-90 transition-opacity group-hover:opacity-60" />
            <span className="absolute bottom-3 left-4 right-4 text-left font-serif text-sm italic text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {p.caption}
            </span>
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--night)]/95 p-4 backdrop-blur-xl"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 rounded-full border border-[var(--gold)]/40 p-3 text-gold hover:bg-[var(--gold)]/10"
            onClick={() => setActive(null)}
            aria-label="Fechar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" /></svg>
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-[var(--gold)]/40 p-3 text-gold hover:bg-[var(--gold)]/10"
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? 0 : (a - 1 + photos.length) % photos.length)); }}
            aria-label="Anterior"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-[var(--gold)]/40 p-3 text-gold hover:bg-[var(--gold)]/10"
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? 0 : (a + 1) % photos.length)); }}
            aria-label="Próxima"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <figure className="relative max-h-full max-w-5xl animate-[reveal_0.4s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <img src={photos[active].src} alt={photos[active].caption} className="max-h-[85vh] w-auto rounded-sm shadow-[var(--shadow-gold)]" />
            <figcaption className="mt-4 text-center font-serif text-lg italic text-gold">{photos[active].caption}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
