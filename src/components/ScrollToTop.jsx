import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    const dashboardContent = document.querySelector(".xui-dashboard .screen .content");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });;
    if(dashboardContent){
      dashboardContent.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);
  return <></>;
};

export default ScrollToTop;
