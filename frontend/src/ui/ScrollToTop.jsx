import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This ensures every time the URL changes,
    // the window glides back to the top (0,0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Makes it "buttery" instead of a jump
    });
  }, [pathname]);

  return null; // This component doesn't render anything visually
}

export default ScrollToTop;
