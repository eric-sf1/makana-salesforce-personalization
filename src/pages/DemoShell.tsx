import { Navigate, useParams } from "react-router-dom";
import { PersonalizationProvider } from "@/personalization/context";
import { SiteChrome } from "@/components/SiteChrome";
import { verticalIdSchema, type VerticalId } from "@/model/verticalConfig";

function parseVerticalId(raw: string | undefined): VerticalId | null {
  const r = verticalIdSchema.safeParse(raw);
  return r.success ? r.data : null;
}

export function DemoShell() {
  const { verticalId: raw } = useParams();
  const verticalId = parseVerticalId(raw);

  if (!verticalId) {
    return <Navigate to="/" replace />;
  }

  return (
    <PersonalizationProvider verticalId={verticalId} key={verticalId}>
      <SiteChrome />
    </PersonalizationProvider>
  );
}
