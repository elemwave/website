import type { ReactNode } from "react";

type PillSize = "pill" | "md" | "sm";

const radiusClass: Record<PillSize, string> = {
  pill: "rounded-[24px]",
  md: "rounded-[20px]",
  sm: "rounded-[10px]",
};

interface PillButtonProps {
  href: string;
  children: ReactNode;
  size?: PillSize;
  className?: string;
}

/** White pill call-to-action. See specs/ui/style-guide.md → PillButton. */
export function PillButton({
  href,
  children,
  size = "pill",
  className = "",
}: PillButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center bg-white font-body font-semibold text-navy-800 transition-colors hover:bg-pill-hover ${radiusClass[size]} ${className}`}
    >
      {children}
    </a>
  );
}
