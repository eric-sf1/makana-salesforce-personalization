/* eslint-disable react-refresh/only-export-components -- context + provider module */
import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { VerticalConfig, VerticalId } from "@/model/verticalConfig";
import { defaultPacks } from "@/config/packs";
import { emitEvent } from "@/events/emit";

export type DemoSegment = "anonymous" | "known";

export type PersonalizationContextValue = {
  verticalId: VerticalId;
  config: VerticalConfig;
  segment: DemoSegment;
  userEmail: string | null;
  setSegment: (s: DemoSegment) => void;
  setUserEmail: (email: string | null) => void;
  signOut: () => void;
};

export const PersonalizationContext = createContext<PersonalizationContextValue | null>(
  null,
);

export function PersonalizationProvider({
  verticalId,
  children,
}: {
  verticalId: VerticalId;
  children: ReactNode;
}) {
  const [segment, setSegmentState] = useState<DemoSegment>("anonymous");
  const [userEmail, setUserEmailState] = useState<string | null>(null);

  const config = defaultPacks[verticalId];

  const setSegment = useCallback((s: DemoSegment) => {
    setSegmentState(s);
    emitEvent("segment_changed", { segment: s });
  }, []);

  const setUserEmail = useCallback((email: string | null) => {
    setUserEmailState(email);
    if (email) {
      setSegmentState("known");
      emitEvent("identity_identified", { email });
    }
  }, []);

  const signOut = useCallback(() => {
    setUserEmailState(null);
    setSegmentState("anonymous");
    emitEvent("identity_cleared", {});
  }, []);

  const value = useMemo(
    () => ({
      verticalId,
      config,
      segment,
      userEmail,
      setSegment,
      setUserEmail,
      signOut,
    }),
    [verticalId, config, segment, userEmail, setSegment, setUserEmail, signOut],
  );

  return (
    <PersonalizationContext.Provider value={value}>
      {children}
    </PersonalizationContext.Provider>
  );
}
