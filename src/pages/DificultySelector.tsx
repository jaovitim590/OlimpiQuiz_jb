import { CardGrid } from "../components/dificultySelector/CardGrid";
import { ButtonLink } from "../components/ButtonLink";
import { Undo2 } from "lucide-react";

export const DificultySelector = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] bg-background gap-4">
      <CardGrid />
      <div className="flex justify-center pb-8">
        <ButtonLink
          destiny="/modalidades"
          label="VOLTAR"
          icon={Undo2}
          iconPosition="left"
          variant="outline"
        />
      </div>
    </div>
  );
};
