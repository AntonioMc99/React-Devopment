// hook that mirrors to localStorage
import { useEffect, useState } from "react";

export default function usePersistedState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      // if localStorage isn't available, just use the initial value
      if (typeof window === "undefined" || !window.localStorage) return initialValue;

      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      // If JSON is corrupted or blocked
      return initialValue;
    }
  });

  // write it back to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  return [state, setState];
}
