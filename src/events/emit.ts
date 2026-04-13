/**
 * Engagement events for Data Cloud / injected script (MAK-10).
 * Extend the payload union as the contract grows.
 */
export type DemoEventName =
  | "page_view"
  | "vertical_changed"
  | "segment_changed"
  | "identity_identified"
  | "identity_cleared"
  | "exit_intent_shown"
  | "exit_intent_cta"
  | "exit_intent_dismissed"
  | "hero_cta_click"
  | "chat_opened"
  | "chat_message_sent"
  | "signup_submit"
  | "login_submit";

export type DemoEventPayload = {
  page_view: { path: string; title?: string };
  vertical_changed: { verticalId: string };
  segment_changed: { segment: string };
  identity_identified: { email: string };
  identity_cleared: Record<string, never>;
  exit_intent_shown: { verticalId: string };
  exit_intent_cta: { verticalId: string };
  exit_intent_dismissed: { verticalId: string };
  hero_cta_click: { verticalId: string; href: string };
  chat_opened: { verticalId: string };
  chat_message_sent: { verticalId: string; text: string };
  signup_submit: { email: string };
  login_submit: { email: string };
};

type Listener = (name: DemoEventName, payload: unknown) => void;

const listeners = new Set<Listener>();

export function subscribeDemoEvents(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function emitEvent<N extends DemoEventName>(
  name: N,
  payload: DemoEventPayload[N],
) {
  const detail = { name, payload, ts: new Date().toISOString() };
  window.dispatchEvent(new CustomEvent("sfhc:demo", { detail }));

  listeners.forEach((fn) => {
    fn(name, payload);
  });

  const w = window as unknown as {
    dataLayer?: Record<string, unknown>[];
  };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({
    event: name,
    ...payload,
  });

  if (import.meta.env.DEV) {
    console.debug("[sfhc:demo]", name, payload);
  }
}
