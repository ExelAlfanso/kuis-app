import { useState, useCallback, type JSX } from "react";

interface UseLoadingReturn {
  loading: boolean;
  wrapAsync: <T>(asyncFn: () => Promise<T>) => Promise<T | undefined>;
  setLoading: (value: boolean) => void;
  Spinner: JSX.Element;
}

export function useLoading(): UseLoadingReturn {
  const [loading, setLoading] = useState(false);

  const wrapAsync = useCallback(
    async <T,>(asyncFn: () => Promise<T>): Promise<T | undefined> => {
      try {
        setLoading(true);
        const result = await asyncFn();
        return result;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const Spinner = (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
    </div>
  );

  return { loading, wrapAsync, setLoading, Spinner };
}
