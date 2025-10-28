import useTimer from "../hooks/useTimer";

interface TimerProps {
  seconds: number;
  onFinish?: () => void;
  onTick?: (time: number) => void;
  className?: string;
}

export default function Timer({
  seconds,
  onTick,
  onFinish,
  className,
}: TimerProps) {
  const { timeLeft } = useTimer({
    initialTime: seconds,
    onTick: onTick,
    onFinish: onFinish,
  });

  return (
    <div
      className={`${className} bg-white px-4 py-2 rounded-xs border-2 border-black font-bold font-nunito shadow-black shadow-[2px_2px_1px_rgba(0,0,0,0.5)]`}
    >
      Time Left: {timeLeft}s
    </div>
  );
}
