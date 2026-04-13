import { useContext } from "react";
import { PersonalizationContext } from "./context";

export function usePersonalization() {
  const ctx = useContext(PersonalizationContext);
  if (!ctx) {
    throw new Error("usePersonalization must be used within PersonalizationProvider");
  }
  return ctx;
}
