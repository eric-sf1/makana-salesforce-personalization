import { useEffect, useState } from "react";
import { emitEvent } from "@/events/emit";
import { usePersonalization } from "@/personalization/usePersonalization";

const SESSION_KEY = "sfhc_exit_intent_shown";

export function ExitIntentModal() {
  const { config, verticalId } = usePersonalization();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return;
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(true);
      emitEvent("exit_intent_shown", { verticalId });
    };

    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, [verticalId]);

  if (!visible) return null;

  return (
    <div className="modal-backdrop" role="presentation">
      <div className="modal card" role="dialog" aria-modal="true" aria-labelledby="exit-title">
        <h2 id="exit-title">{config.exitIntent.title}</h2>
        <p>{config.exitIntent.body}</p>
        <div className="modal__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              emitEvent("exit_intent_cta", { verticalId });
              setVisible(false);
            }}
          >
            {config.exitIntent.ctaLabel}
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              emitEvent("exit_intent_dismissed", { verticalId });
              setVisible(false);
            }}
          >
            {config.exitIntent.dismissLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
