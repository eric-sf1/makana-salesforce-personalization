import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { emitEvent } from "@/events/emit";

export function usePageView(title?: string) {
  const location = useLocation();
  useEffect(() => {
    emitEvent("page_view", {
      path: location.pathname + location.search,
      title,
    });
  }, [location.pathname, location.search, title]);
}
