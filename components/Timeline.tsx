import { useEffect, useRef, useState } from "react";
import moment1 from "../assets/nos.jpg";
import moment2 from "../assets/lianca.jpg";
import moment3 from "../assets/tontinhos.jpg";
import gallery1 from "../assets/us.jpg";
import LiquidEther from "./LiquidEther";

interface Chapter {
  date: string;
  title: string;
  body: string;
  note: string;
  image: string;
}

const chapters: Chapter[] = [
  {
    date: "Capítulo I — O Reencontro",
    title: "A distância não é uma possibilidade.",
    body:
      "Nunca conseguimos nos afastar, isso talvez seja um sinal mais forte do que nós, dito isso, quem somos nós para contrariar o destino?",
    note: "‘Seguimos o que parecer ser nosso destino’",
    image: moment1,
  },
  {
    date: "Capítulo II — A certeza.",
    title: "Um destino escrito em runas, preso em nossos dedos e corações",
    body:
      "Caminhamos pelo cume e o céu se abriu como um livro antigo. Sob a constelação que ninguém havia nomeado, prometemos cuidar das tempestades um do outro.",
    note: "‘Carregar um ao outro até o fim.’",
    image: moment2,
  },
  {
    date: "Capítulo III — A essência mais pura",
    title: "Nossa forma mais íntima, dois tontos",
    body:
      "Havia luzes suspensas como vagalumes adormecidos. Você girou nos meus braços e por um instante o tempo desistiu de existir.",
    note: "‘rodopio até cair’",
    image: moment3,
  },
  {
    date: "Capítulo IV — A Promessa",
    title: "Entre as palmas das mãos, um lar",
    body:
      "Não foi um juramento gritado ao mundo. Foi sussurrado entre dedos entrelaçados — promessa pequena, eterna, nossa.",
    note: "‘sempre, em todas as vidas’",
    image: gallery1,
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const passed = Math.max(0, vh - rect.top);
      setProgress(Math.min(1, Math.max(0, passed / total)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="historia" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center reveal">
        <p className="font-script text-2xl text-gold">A nossa história</p>
        <h2 className="mt-3 font-serif text-5xl md:text-6xl">Capítulos entre madrugadas</h2>
        <div className="divider-rune mx-auto mt-6 max-w-xs">
          <span className="font-serif text-gold">✦</span>
        </div>
      </div>

      <div ref={ref} className="relative mx-auto mt-24 max-w-6xl px-6">
        {/* central line */}
        <div className="pointer-events-none absolute inset-y-0 left-6 w-px md:left-1/2 md:-translate-x-1/2">
          <div className="absolute inset-0 bg-[var(--gold)]/15" />
          <div
            className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-[var(--gold)] via-[var(--gold-soft)] to-[var(--ember)] shadow-[0_0_20px_var(--gold)]"
            style={{ height: `${progress * 100}%` }}
          />
        </div>

        <ol className="space-y-28">
          {chapters.map((c, i) => (
            <ChapterRow key={i} chapter={c} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ChapterRow({ chapter, index }: { chapter: Chapter; index: number }) {
  const left = index % 2 === 0;
  return (
    <li className="reveal relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
      {/* node */}
      <span className="absolute left-6 top-6 z-10 -translate-x-1/2 md:left-1/2">
        <span className="block h-3 w-3 rounded-full bg-[var(--gold)] shadow-[0_0_18px_var(--gold)]" />
        <span className="absolute inset-0 -m-2 animate-ping rounded-full border border-[var(--gold)]/50" />
      </span>

      <div className={`pl-16 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:order-2 md:pl-16"}`}>
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-gold">{chapter.date}</p>
        <h3 className="mt-3 font-serif text-3xl italic leading-tight md:text-4xl">{chapter.title}</h3>
        <p className="mt-5 font-serif text-lg leading-relaxed text-muted-foreground">{chapter.body}</p>
      </div>

      <div className={`pl-16 md:pl-0 ${left ? "md:order-2 md:pl-16" : "md:pr-16"}`}>
        <ParallaxPhoto src={chapter.image} note={chapter.note} />
      </div>
    </li>
  );
}

function ParallaxPhoto({ src, note }: { src: string; note: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * -0.08);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="group relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[var(--shadow-deep)] ring-1 ring-[var(--gold)]/20">
        <img
          src={src}
          alt=""
          loading="lazy"
          className="absolute inset-x-0 -top-8 h-[115%] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--night)]/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-block h-12 w-12 border border-[var(--gold)]/60" />
        <span className="absolute bottom-4 right-4 inline-block h-12 w-12 border border-[var(--gold)]/60" />
      </div>
      <p className="handwritten absolute -bottom-4 -right-2 text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-3xl">
        {note}
      </p>
    </div>
  );
}
