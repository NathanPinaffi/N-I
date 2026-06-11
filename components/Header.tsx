import { useScrollY } from "@/hooks/use-scroll-y";

const links = [
  { href: "#hero", label: "Início" },
  { href: "#historia", label: "História" },
  { href: "#galeria", label: "Galeria" },
  { href: "#carta", label: "Carta" },
  { href: "#trilha", label: "Trilha" },
];

export function Header() {
  const y = useScrollY();
  const scrolled = y > 60;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-[var(--gold)]/15" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#hero" className="flex items-center gap-2 text-gold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2l1.8 6.6L20 10l-5.5 3.8L17 22l-5-4-5 4 2.5-8.2L4 10l6.2-1.4L12 2z" />
          </svg>
          <span className="font-serif text-lg tracking-[0.3em]">N &amp; I</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2l1.8 6.6L20 10l-5.5 3.8L17 22l-5-4-5 4 2.5-8.2L4 10l6.2-1.4L12 2z" />
          </svg>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#fim"
          className="rounded-full border border-[var(--gold)]/60 px-5 py-2 text-xs uppercase tracking-[0.3em] text-gold transition-all hover:bg-[var(--gold)]/10 hover:shadow-[0_0_20px_var(--gold)]"
        >
          O Fim
        </a>
      </div>
    </header>
  );
}
