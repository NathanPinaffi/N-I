import { useScrollY } from "@/hooks/use-scroll-y";
import { Starfield } from "./Starfield";
import { ShootingStars } from "./ShootingStars";
import ending from "@/assets/ending.jpg";

export function Ending() {
  const y = useScrollY();
  return (
    <section id="fim" className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translate3d(0, ${(y - 4000) * 0.1}px, 0)` }}
      >
        <img src={ending} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--night)]/70 via-[var(--night)]/50 to-[var(--night)]" />
      </div>
      <Starfield count={120} />
       <ShootingStars count={8} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center reveal">
        <p className="font-script text-2xl text-gold md:text-3xl">o fim de um capítulo - início de outro</p>
        <div className="divider-rune mx-auto my-8 max-w-md">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gold" aria-hidden>
            <path d="M12 2l1.8 6.6L20 10l-5.5 3.8L17 22l-5-4-5 4 2.5-8.2L4 10l6.2-1.4L12 2z" />
          </svg>
        </div>
        <h2 className="font-serif text-5xl leading-tight md:text-7xl">
          E que venham <em className="gold-shimmer not-italic">mil vidas</em> mais.
        </h2>
        <p className="mt-10 max-w-xl font-serif text-xl italic text-muted-foreground">
          Toda história precisa de uma página final — mas a nossa só termina para começar
          de novo, em outro reino, em outra estrela, em outra madrugada.
        </p>
        <p className="mt-12 font-script text-3xl text-gold">— para sempre, do seu menino dos olhos de esmeralda!</p>

        <div className="mt-16 flex items-center gap-3 text-gold/70">
          <span className="h-px w-12 bg-[var(--gold)]/40" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6" /></svg>
          <span className="h-px w-12 bg-[var(--gold)]/40" />
        </div>
      </div>
    </section>
  );
}
