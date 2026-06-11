interface Track {
  title: string;
  artist: string;
  moment: string;
  url: string;
}

const tracks: Track[] = [
  {
    title: "Lonely Day",
    artist: "System Of A Down",
    moment: "os dias em que a saudade falou mais alto",
    url: "https://open.spotify.com/search/Lonely%20Day%20System%20Of%20A%20Down",
  },
  {
    title: "Swim",
    artist: "Chase Atlantic",
    moment: "as madrugadas sem hora para acabar",
    url: "https://open.spotify.com/search/Swim%20Chase%20Atlantic",
  },
  {
    title: "The Devil in I",
    artist: "Slipknot",
    moment: "quando aprendemos a enfrentar nossos demônios juntos",
    url: "https://open.spotify.com/search/The%20Devil%20in%20I%20Slipknot",
  },
  {
    title: "Gunslinger",
    artist: "Avenged Sevenfold",
    moment: "a certeza de sempre voltar para casa",
    url: "https://open.spotify.com/search/Gunslinger%20Avenged%20Sevenfold",
  },
  {
    title: "Buried Alive",
    artist: "Avenged Sevenfold",
    moment: "as fases difíceis que superamos lado a lado",
    url: "https://open.spotify.com/search/Buried%20Alive%20Avenged%20Sevenfold",
  },
  {
    title: "Samba em Paris",
    artist: "Baco Exu do Blues",
    moment: "os sonhos compartilhados em voz baixa",
    url: "https://open.spotify.com/search/Samba%20em%20Paris%20Baco%20Exu%20do%20Blues",
  },
  {
    title: "Hotel Caro",
    artist: "Baco Exu do Blues",
    moment: "as conversas que duraram mais que a noite",
    url: "https://open.spotify.com/search/Hotel%20Caro%20Baco%20Exu%20do%20Blues",
  },
];

export function Soundtrack() {
  return (
    <section id="trilha" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6 text-center reveal">
        <p className="font-script text-2xl text-gold">A trilha sonora</p>
        <h2 className="mt-3 font-serif text-5xl md:text-6xl">Músicas que sabem nossa história</h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((t, i) => (
          <a
            key={i}
            href={t.url}
            target="_blank"
            rel="noreferrer"
            className="group reveal relative overflow-hidden rounded-sm border border-[var(--gold)]/15 bg-[var(--card)] p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[var(--gold)]/50 hover:shadow-[var(--shadow-gold)]"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--gold)]/10 ring-1 ring-[var(--gold)]/40">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-serif text-xl text-foreground">{t.title}</p>
                <p className="text-sm text-muted-foreground">{t.artist}</p>
                <p className="mt-3 font-script text-lg text-gold">{t.moment}</p>
              </div>
            </div>
            <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--gold)]/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </section>
  );
}
