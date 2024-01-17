import { Button } from "@/modules/share/components/Button";
import { CheckFat, Flag } from "@phosphor-icons/react/dist/ssr";

interface SuccessProps {
  handleClick: () => void;
}

export function Success({ handleClick }: SuccessProps) {
  return (
    <div className="max-w-5xl px-4 mx-auto flex justify-between items-center h-full">
      <div className="flex items-center gap-3">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-green-secondary">
          <CheckFat size={32} weight="fill"></CheckFat>
        </div>
        <div className="flex flex-col gap-4 text-green-primary">
          <span>excellent</span>
        </div>
        <div className="flex items-center gap-1">
          <Flag size={20} weight="bold"></Flag>
          REPORT
        </div>
      </div>
      <div className="w-36">
        <Button onClick={handleClick}>Continue</Button>
      </div>
    </div>
  );
}
