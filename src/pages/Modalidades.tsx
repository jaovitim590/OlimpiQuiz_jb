import { ModalityGrid } from "../components/modalities/ModalityGrid";
import { Skull } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Modalidades = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-display text-soft-white text-center mb-6">
        Escolha uma modalidade
      </h1>
      <ModalityGrid />
      <div
        className="flex flex-wrap gap-4 justify-center"
        onClick={() => navigate(`/dificuldade/666`)}
      >
        <div className="flex flex-col items-center justify-center gap-2 bg-red-600 rounded-xl w-3/14 h-30 shadow shadow-indigo-900 hover:scale-105 transition">
          <h3 className="font-display text-2xl">Ultra quiz</h3>
          <Skull size={34} />
        </div>
      </div>
    </div>
  );
};
