import { getModalidade, modalidades } from "../../data/mockModalities";
import { ArrowRight, Undo2, Globe } from "lucide-react";
import type { Dificuldade } from "../../data/mockModalities";
import { ButtonLink } from "../ButtonLink";

interface QuizStartProps {
  modality: string;
  dificulty: string;
  onStart: () => void;
}

const MODO_GERAL = {
  titulo: "MODO GERAL",
  descricao: "Perguntas de todas as modalidades olímpicas.",
};

export const QuizStart = ({ modality, dificulty, onStart }: QuizStartProps) => {
  const isGeral = modality === "666";
  const modalidade = isGeral ? MODO_GERAL : getModalidade(modality);
  const Icon = isGeral ? Globe : getModalidade(modality)?.icon;

  const totalPerguntas = isGeral
    ? modalidades
        .flatMap((m) => m.perguntas)
        .filter((p) => p.dificuldade === (dificulty as Dificuldade)).length
    : (getModalidade(modality)?.perguntas.filter(
        (p) => p.dificuldade === (dificulty as Dificuldade),
      ).length ?? 0);

  const difficultyLabel =
    {
      facil: "FÁCIL",
      medio: "MÉDIO",
      dificil: "DIFÍCIL",
    }[dificulty] ?? dificulty.toUpperCase();

  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-[calc(100vh-60px)] bg-background px-6 gap-8">
      {Icon && <Icon size={64} className="text-neon" />}

      <div className="flex flex-col items-center gap-3 text-center">
        <span className="badge">{difficultyLabel}</span>
        <h1 className="font-display text-6xl md:text-8xl text-soft-white">
          {modalidade?.titulo}
        </h1>
        <p className="font-body text-muted text-lg max-w-sm">
          {modalidade?.descricao}
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 bg-surface rounded-lg px-10 py-6">
        <span className="font-body text-muted text-sm tracking-widest uppercase">
          Você vai responder
        </span>
        <span className="font-display text-5xl text-neon">
          {totalPerguntas}
        </span>
        <span className="font-body text-muted text-sm tracking-widest uppercase">
          perguntas
        </span>
      </div>

      <button
        onClick={onStart}
        className="font-display text-2xl tracking-widest bg-neon text-background px-12 py-4 rounded-sm transition-all duration-200 hover:brightness-110 hover:shadow-neon-md active:scale-95 flex items-center gap-3"
      >
        COMEÇAR <ArrowRight size={24} />
      </button>

      <ButtonLink
        destiny={`/dificuldade/${modality}`}
        label="VOLTAR"
        icon={Undo2}
        iconPosition="left"
        variant="outline"
      />
    </div>
  );
};
