import { Button } from "@/modules/share/components/Button";

interface NormalProps {
  handleCheck: () => void;
  skip: () => void;
}

export function Normal({ handleCheck, skip }: NormalProps) {
  return (
    <div className="max-w-5xl px-4 w-full mx-auto flex justify-between items-center h-full">
      <div className="w-36">
        <Button variant="secondary" onClick={skip}>
          skip
        </Button>
      </div>

      <div className="w-36">
        <Button variant="primary" onClick={handleCheck}>
          Check
        </Button>
      </div>
    </div>
  );
}
