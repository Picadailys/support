import { Outlet } from "react-router-dom";

/* eslint-disable react/prop-types */
const Onboarding = () => {
  return (
    <section className="onboarding-section">
      <Outlet />
    </section>
  );
};

export default Onboarding;
