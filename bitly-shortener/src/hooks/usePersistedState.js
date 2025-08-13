// hook that mirros to localstorage
import { useEffect, useState } from "react";

export default function usePersistedState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
        // If JSON is corrupted or blocked
      return initialValue;
    }
  });

  //write it back to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  return [state, setState];
}