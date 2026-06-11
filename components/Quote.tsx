import LiquidEther from './LiquidEther';

interface QuoteProps {
  text: string;
  source?: string;
}

export function Quote({ text, source }: QuoteProps) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center reveal">
        <div className="divider-rune mx-auto mb-8 max-w-md">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-gold" aria-hidden>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" stroke="currentColor" strokeWidth="0.8" fill="none" />
          </svg>
        </div>
        <p className="font-serif text-3xl italic leading-snug text-foreground md:text-5xl">
          <span className="text-gold">“</span>
          {text}
          <span className="text-gold">”</span>
        </p>
        {source ? (
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-muted-foreground">— {source}</p>
        ) : null}
      </div>
    </section>
  );
}
