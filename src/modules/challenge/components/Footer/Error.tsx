import { Button } from "@/modules/share/components/Button";
import { XCircle } from "@phosphor-icons/react/dist/ssr";

interface ErrorProps {
  handleClick: () => void;
  correctSolution: string;
  yourSolution: string;
}

export function Error({
  handleClick,
  correctSolution,
  yourSolution,
}: ErrorProps) {
  return (
    <div className="max-w-5xl px-4 w-full mx-auto flex justify-between items-center h-full">
      <div className="flex items-center gap-3">
        <div className="text-red-dark">
          <XCircle size={80} weight="fill"></XCircle>
        </div>

        <div className="flex flex-col text-red-dark">
          <div>
            <span className="text-sm md:text-lg font-bold">
              Correct solution
            </span>
            <div className="text-sm ">{correctSolution}</div>
          </div>
          <div>
            <span className="text-sm md:text-lg font-bold"> Your solution</span>
            <div className="text-sm">{yourSolution}</div>
          </div>
        </div>
      </div>
      <div className="w-36">
        <Button variant="error" onClick={handleClick}>
          Continue
        </Button>
      </div>
    </div>
  );
}
