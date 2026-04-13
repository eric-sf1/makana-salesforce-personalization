import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { emitEvent } from "@/events/emit";
import { usePersonalization } from "@/personalization/usePersonalization";
import { usePageView } from "@/hooks/usePageView";

export function SignupPage() {
  const { verticalId, setUserEmail } = usePersonalization();
  const [email, setEmail] = useState("demo.subscriber@example.com");
  usePageView("Sign up");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    emitEvent("signup_submit", { email });
    setUserEmail(email);
  }

  return (
    <div className="page form-page card">
      <h1>Stay informed (simulated)</h1>
      <p className="muted">
        Captures email for the demo journey. Use synthetic emails only.
      </p>
      <form onSubmit={onSubmit} className="stack">
        <label className="stack">
          Work email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>
        <button type="submit" className="btn btn--primary">
          Subscribe
        </button>
      </form>
      <p>
        <Link to={`/v/${verticalId}`}>← Back to site</Link>
      </p>
    </div>
  );
}
