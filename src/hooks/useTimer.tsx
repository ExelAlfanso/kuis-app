import { useEffect, useRef, useState } from "react";

interface UseTimerProps {
  initialTime: number;
  onFinish?: () => void;
  onTick?: (timeLeft: number) => void;
}

export default function useTimer({
  initialTime,
  onTick,
  onFinish,
}: UseTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // mekanisme timer dengan onFinish dan onTick events
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        onTick?.(next);
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          onFinish?.();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [onFinish, onTick]);

  return { timeLeft };
}
