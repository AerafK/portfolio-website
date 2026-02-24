"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    if (media.matches) {
      window.addEventListener("mousemove", onMove);
    }

    const onChange = (e: MediaQueryListEvent) => {
      setEnabled(e.matches);
      if (!e.matches) {
        window.removeEventListener("mousemove", onMove);
      } else {
        window.addEventListener("mousemove", onMove);
      }
    };

    media.addEventListener("change", onChange);

    return () => {
      window.removeEventListener("mousemove", onMove);
      media.removeEventListener("change", onChange);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background: `radial-gradient(380px at ${position.x}px ${position.y}px, rgba(6,182,212,0.17), transparent 70%)`
      }}
    />
  );
}
