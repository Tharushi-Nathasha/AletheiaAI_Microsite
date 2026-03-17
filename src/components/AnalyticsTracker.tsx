import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag("config", "G-XXXX", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;