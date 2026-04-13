import type { CSSProperties } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { usePersonalization } from "@/personalization/usePersonalization";
import { DemoDisclaimer } from "@/components/DemoDisclaimer";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? 600 : 400,
});

export function SiteChrome() {
  const { config, verticalId, userEmail, signOut } = usePersonalization();
  const base = `/v/${verticalId}`;
  const b = config.branding;
  const shellStyle = {
    ...(b.primaryColor ? { ["--color-primary" as string]: b.primaryColor } : {}),
    ...(b.secondaryColor ? { ["--color-accent" as string]: b.secondaryColor } : {}),
    ...(b.fontFamily ? { fontFamily: b.fontFamily } : {}),
  } satisfies CSSProperties;

  return (
    <div className="site-shell" style={shellStyle}>
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to={base} className="site-logo">
            {config.branding.logoUrl ? (
              <img src={config.branding.logoUrl} alt="" height={32} />
            ) : (
              <span>Makana Health</span>
            )}
            <span className="site-logo__badge">{config.displayName}</span>
          </NavLink>
          <nav className="site-nav">
            <NavLink to={base} end style={linkStyle}>
              Home
            </NavLink>
            <NavLink to={`${base}/signup`} style={linkStyle}>
              Sign up
            </NavLink>
            <NavLink to={`${base}/login`} style={linkStyle}>
              Portal login
            </NavLink>
          </nav>
          <div className="site-header__user">
            {userEmail ? (
              <>
                <span className="muted">{userEmail}</span>
                <button type="button" className="btn btn--ghost" onClick={signOut}>
                  Sign out
                </button>
              </>
            ) : (
              <span className="muted">Anonymous browsing</span>
            )}
          </div>
        </div>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <DemoDisclaimer />
        <p className="muted small">
          Engagement events may be sent to Salesforce for demo purposes. Internal SE use only.
        </p>
      </footer>
    </div>
  );
}
