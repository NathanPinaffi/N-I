import { useMemo } from "react";

interface Star {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
}

export function Starfield({ count = 80, className = "" }: { count?: number; className?: string }) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.5,
      delay: `${Math.random() * 6}s`,
      duration: `${3 + Math.random() * 5}s`,
    }));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            boxShadow: `0 0 ${s.size * 3}px rgba(255, 240, 200, 0.8)`,
            animation: `twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      delay: `${Math.random() * 12}s`,
      duration: `${14 + Math.random() * 18}s`,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: "-20px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-up ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
