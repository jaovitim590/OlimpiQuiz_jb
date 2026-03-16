import { useParams, useNavigate } from "react-router-dom";
import { getModalidade, modalidades } from "../../data/mockModalities";
import type { Dificuldade } from "../../data/mockModalities";
import { DifficultyCard } from "./DifficultyCard";

const DIFICULDADES: Dificuldade[] = ["facil", "medio", "dificil"];

const MODO_GERAL = {
  titulo: "MODO GERAL",
  descricao: "Perguntas de todas as modalidades olímpicas.",
};

export const CardGrid = () => {
  const { modality } = useParams<{ modality: string }>();
  const navigate = useNavigate();

  const isGeral = modality === "666";
  const modalidade = isGeral ? MODO_GERAL : getModalidade(modality ?? "");

  const totalPorDificuldade = (dificuldade: Dificuldade) => {
    if (isGeral) {
      return modalidades
        .flatMap((m) => m.perguntas)
        .filter((p) => p.dificuldade === dificuldade).length;
    }
    return (
      getModalidade(modality ?? "")?.perguntas.filter(
        (p) => p.dificuldade === dificuldade,
      ).length ?? 0
    );
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 gap-8 w-full">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="badge">{modalidade?.titulo}</span>
        <h1 className="font-display text-5xl md:text-7xl text-soft-white">
          ESCOLHA A DIFICULDADE
        </h1>
        <p className="font-body text-muted">{modalidade?.descricao}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        {DIFICULDADES.map((dificuldade) => (
          <DifficultyCard
            key={dificuldade}
            dificuldade={dificuldade}
            total={totalPorDificuldade(dificuldade)}
            onClick={() => navigate(`/quiz/${modality}/${dificuldade}`)}
          />
        ))}
      </div>
    </div>
  );
};
