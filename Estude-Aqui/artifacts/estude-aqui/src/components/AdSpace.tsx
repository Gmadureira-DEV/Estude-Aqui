import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSpaceProps {
  id: string;
  type?: "horizontal" | "sidebar" | "square";
  slot?: string;
  className?: string;
}

const AD_CLIENT = "ca-pub-5446399353519060";

const DEFAULT_SLOTS: Record<string, string> = {
  "ad-top": "2345678901",
  "ad-sidebar": "3456789012",
  "ad-mid-content": "4567890123",
  "ad-between-exercises": "5678901234",
  "ad-bottom": "6789012345",
};

export function AdSpace({ id, type = "horizontal", slot, className = "" }: AdSpaceProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  const resolvedSlot = slot ?? DEFAULT_SLOTS[id] ?? "2345678901";

  const sizeStyles: Record<string, React.CSSProperties> = {
    horizontal: { display: "block", minHeight: 90 },
    sidebar: { display: "block", minHeight: 250 },
    square: { display: "block", minHeight: 250, width: "100%" },
  };

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
    }
  }, []);

  return (
    <div
      id={id}
      className={`overflow-hidden rounded-xl ${className}`}
      aria-label="Espaço publicitário"
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={sizeStyles[type]}
        data-ad-client={AD_CLIENT}
        data-ad-slot={resolvedSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
