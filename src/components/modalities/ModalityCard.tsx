import { type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ModalityCardProps {
  id: string;
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}

export const ModalityCard = ({
  id,
  titulo,
  descricao,
  icon: Icon,
}: ModalityCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/dificuldade/${id}`)}
      className="
        group
        bg-surface border border-surface
        rounded-xl p-6
        flex flex-col items-center text-center gap-4
        cursor-pointer
        transition-all duration-200
        hover:border-neon hover:shadow-neon-sm
        active:scale-95
      "
    >
      <div
        className="
        w-16 h-16 rounded-full
        bg-background border border-surface
        flex items-center justify-center
        group-hover:border-neon group-hover:shadow-neon-sm
        transition-all duration-200
      "
      >
        <Icon size={28} className="text-neon" />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <h2 className="font-display text-2xl text-soft-white tracking-wide">
          {titulo}
        </h2>
        <p className="font-body text-sm text-muted leading-relaxed">
          {descricao}
        </p>
      </div>

      <div className="divider-neon w-full" />

      <span
        className="
        flex items-center gap-2
        font-display text-2xl tracking-widest text-neon
        group-hover:gap-2 transition-all duration-200
      "
      >
        JOGAR <ArrowRight size={22} />
      </span>
    </div>
  );
};
