import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full bg-background border-b border-surface flex items-center justify-between px-6 h-15">
      <span className="font-display text-3xl text-neon tracking-wide">
        OLIMPI<span className="text-soft-white">QUIZ</span>
      </span>

      <Link
        to="/"
        className="font-display text-sm tracking-widest bg-neon text-background px-5 py-2 rounded hover:shadow-neon-sm transition-shadow"
      >
        INÍCIO
      </Link>
    </header>
  );
};
