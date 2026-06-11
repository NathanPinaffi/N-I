import { useScrollY } from "@/hooks/use-scroll-y";
import { Starfield, FloatingParticles } from "./Starfield"
import { ShootingStars } from "./ShootingStars";

export function Hero() {
  const y = useScrollY();
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* LiquidEther como fundo animado */}
      <div className="absolute inset-0 -z-30">
        <ShootingStars count={120}/>
      </div>

      {/* Overlay gradients para manter legibilidade */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[var(--night)]/60 via-transparent to-[var(--night)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_var(--night)_80%)]" />

      <Starfield count={200} />

      {/* Decorative runes (mantidas) */}
      <svg
        className="pointer-events-none absolute left-10 top-32 h-24 w-24 text-gold opacity-30"
        style={{ transform: `translateY(${y * -0.2}px) rotate(${y * 0.05}deg)` }}
        viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.6" aria-hidden
      >
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="28" />
        <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M78 22 L22 78" />
      </svg>

      <svg
        className="pointer-events-none absolute right-12 top-44 h-20 w-20 text-gold opacity-25"
        style={{ transform: `translateY(${y * -0.15}px) rotate(${y * -0.08}deg)` }}
        viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.6" aria-hidden
      >
        <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" />
      </svg>

      {/* Conteúdo principal */}
      <div
        className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center"
        style={{ transform: `translateY(${y * 0.15}px)`, opacity: Math.max(0, 1 - y / 700) }}
      >
        <p className="font-script text-2xl text-gold md:text-3xl">A Court of Memories</p>
        <div className="my-6 divider-rune w-full max-w-md">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2l1.8 6.6L20 10l-5.5 3.8L17 22l-5-4-5 4 2.5-8.2L4 10l6.2-1.4L12 2z" />
          </svg>
        </div>
        <h1 className="relative font-serif text-6xl leading-[0.95] tracking-tight text-foreground md:text-8xl lg:text-9xl">
          Nathan <span className="gold-shimmer italic">&amp;</span> Isa
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[130%] -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 800 220"
            fill="none"
            aria-hidden
          >
            {/* ... defs e paths da seta ... */}
          </svg>
        </h1>
        <p className="mt-10 max-w-xl font-serif text-lg italic text-muted-foreground md:text-xl">
          Uma jornada escrita entre estrelas, runas e madrugadas — onde duas almas decidiram pertencer.
        </p>
      </div>

      <div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center"
        style={{ opacity: Math.max(0, 1 - y / 300) }}
      >
        <p className="mb-2 text-[0.65rem] uppercase tracking-[0.4em] text-gold">role para desvendar a história</p>
        <svg className="mx-auto h-6 w-6 animate-bounce text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
