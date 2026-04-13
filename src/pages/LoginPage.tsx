import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { emitEvent } from "@/events/emit";
import { usePersonalization } from "@/personalization/usePersonalization";
import { usePageView } from "@/hooks/usePageView";

export function LoginPage() {
  const { verticalId, setUserEmail } = usePersonalization();
  const [email, setEmail] = useState("demo.user@example.com");
  usePageView("Portal login");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    emitEvent("login_submit", { email });
    setUserEmail(email);
  }

  return (
    <div className="page form-page card">
      <h1>Portal login (simulated)</h1>
      <p className="muted">
        No backend — sets a known-user session for the demo. Use a synthetic email only.
      </p>
      <form onSubmit={onSubmit} className="stack">
        <label className="stack">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>
        <button type="submit" className="btn btn--primary">
          Sign in
        </button>
      </form>
      <p>
        <Link to={`/v/${verticalId}`}>← Back to site</Link>
      </p>
    </div>
  );
}
