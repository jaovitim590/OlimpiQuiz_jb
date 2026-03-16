import { getModalidadesCard } from "../../data/mockModalities";
import { ModalityCard } from "./ModalityCard";

export const ModalityGrid = () => {
  const modalidades = getModalidadesCard();

  return (
    <div className="flex flex-col flex-1 min-h-[calc(100vh-60px)] bg-background px-6 py-12 gap-10 max-w-6xl mx-auto w-full">
      <div className="flex flex-col gap-3">
        <span className="font-body text-muted text-sm tracking-widest uppercase">
          {modalidades.length} modalidades disponíveis
        </span>
        <h1 className="font-display text-5xl md:text-7xl text-soft-white leading-none">
          ESCOLHA UMA
          <br />
          <span className="text-neon">MODALIDADE</span>
        </h1>
        <p className="font-body text-muted text-base max-w-md">
          Selecione o esporte que deseja ser testado e escolha sua dificuldade.
        </p>
      </div>

      <hr className="divider-neon" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {modalidades.map((m) => (
          <ModalityCard key={m.id} {...m} />
        ))}
      </div>
    </div>
  );
};
