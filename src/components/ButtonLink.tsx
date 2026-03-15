import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface ButtonLinkProps {
  label: string;
  destiny: string;
  className?: string;
}

export const ButtonLink = ({ label, destiny, className }: ButtonLinkProps) => {
  return (
    <Link
      to={destiny}
      className={twMerge(
        "font-display text-base tracking-widest bg-neon text-background px-6 py-2 rounded-sm transition-all duration-200 hover:brightness-110 hover:shadow-neon-md active:scale-95",
        className,
      )}
    >
      {label}
    </Link>
  );
};
