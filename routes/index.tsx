import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Quote } from "@/components/Quote";
import { Gallery } from "@/components/Gallery";
import { Letter } from "@/components/Letter";
import { Soundtrack } from "@/components/Soundtrack";
import { Ending } from "@/components/Ending";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nathan & Isa — A Court of Memories" },
      { name: "description", content: "Um álbum digital cinematográfico que conta a história de um casal entre estrelas, runas e madrugadas." },
      { property: "og:title", content: "Nathan & Isa — A Court of Memories" },
      { property: "og:description", content: "Uma carta de amor moderna escrita entre constelações." },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="relative bg-night text-foreground">
      <Header />
      <Hero />

      <Quote text="Se há um milhão de mundos possíveis, em todos eles eu te encontro primeiro." />

      <Timeline />

      <Quote
        text="Que sejamos sempre o pequeno refúgio um do outro — colina, fogueira, abrigo."
      />

      <Gallery />

      <Letter />

      <Quote text="A noite é vasta. Mas o seu nome basta para iluminá-la inteira." />

      <Soundtrack />

      <Ending />
    </main>
  );
}
