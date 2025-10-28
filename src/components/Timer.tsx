import { useEffect, useRef, useState } from "react";

interface TimerProps {
  seconds: number;
  onTick?: (timeLeft: number) => void;
  onFinish?: () => void;
  className?: string;
}

export default function Timer({
  seconds,
  onTick,
  onFinish,
  className,
}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Only start interval once
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        onTick?.(next);
        if (next <= 0) {
          clearInterval(intervalRef.current!);
          onFinish?.();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, []); // empty dependency => runs once on mount

  // Optional: only reset when parent explicitly wants to (like new quiz)
  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  return (
    <div
      className={`${className} bg-white px-4 py-2 rounded-xs border-2 border-black font-bold font-nunito shadow-black shadow-[2px_2px_1px_rgba(0,0,0,0.5)]`}
    >
      Time Left: {timeLeft}s
    </div>
  );
}
