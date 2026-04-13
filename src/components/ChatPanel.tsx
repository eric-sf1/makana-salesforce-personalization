import { useState } from "react";
import { emitEvent } from "@/events/emit";
import { usePersonalization } from "@/personalization/usePersonalization";

export function ChatPanel() {
  const { config, verticalId } = usePersonalization();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  function openChat() {
    setOpen(true);
    emitEvent("chat_opened", { verticalId });
  }

  function send() {
    const text = input.trim();
    if (!text) return;
    emitEvent("chat_message_sent", { verticalId, text });
    setInput("");
  }

  return (
    <div className="chat-dock">
      {open ? (
        <div className="chat-panel card" role="dialog" aria-label="Demo assistant">
          <header className="chat-panel__head">
            <strong>Assistant (demo)</strong>
            <button type="button" className="btn btn--ghost" onClick={() => setOpen(false)}>
              Close
            </button>
          </header>
          <p className="chat-panel__welcome">{config.chat.welcomeMessage}</p>
          <div className="chat-panel__chips">
            {config.chat.suggestedReplies.map((r) => (
              <button
                key={r}
                type="button"
                className="chip"
                onClick={() =>
                  emitEvent("chat_message_sent", { verticalId, text: r })
                }
              >
                {r}
              </button>
            ))}
          </div>
          <div className="chat-panel__input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message…"
              aria-label="Message"
            />
            <button type="button" className="btn btn--primary" onClick={send}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <button type="button" className="chat-fab" onClick={openChat}>
          Chat
        </button>
      )}
    </div>
  );
}
