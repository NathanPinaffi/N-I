import { useMemo } from "react";
export function ShootingStars({ count = 8 }: { count?: number }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 60}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${2.2 + Math.random() * 2.8}s`,
      length: 120 + Math.random() * 180,
      angle: 25 + Math.random() * 25,
    }));
  }, [count]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="shooting-star"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.length}px`,
            transform: `rotate(${s.angle}deg)`,
            animation: `shoot ${s.duration} ease-in ${s.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}