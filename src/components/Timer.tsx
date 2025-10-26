import useTimer from "../hooks/useTimer";

interface TimerProps {
  seconds: number;
  onFinish?: () => void;
  onTick?: (time: number) => void;
}

export default function Timer({ seconds, onTick, onFinish }: TimerProps) {
  const { timeLeft } = useTimer({
    initialTime: seconds,
    onTick: onTick,
    onFinish: onFinish,
  });

  return <div className="text-2xl font-bold">{timeLeft}s</div>;
}
