import { ModalityGrid } from "../components/modalities/ModalityGrid";

export const Modalidades = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-display text-soft-white text-center mb-6">
        Escolha uma modalidade
      </h1>
      <ModalityGrid />
      <div className="flex flex-wrap gap-4 justify-center"></div>
    </div>
  );
};
