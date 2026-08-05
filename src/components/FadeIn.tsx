import { useEffect, useRef, useState, type ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Component = Tag as any;
  return (
    <Component
      ref={ref as any}
      className={`fade-in-up ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
