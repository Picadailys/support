import { Route, Routes, Navigate } from "react-router-dom";
import "./assets/styles/style.css";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";

import Auth from "./components/Auth";
import Onboarding from "./components/Onboarding";
import AgentSignUpPage from "./pages/onboarding/AgentSignupPage";
import ManagerSignUpPage from "./pages/onboarding/ManagerSignupPage";
import SignInPage from "./pages/onboarding/SigninPage";
import VerifyOTPPage from "./pages/onboarding/VerifyOTPPage";
// import Forgotpassword from './pages/Forgotpassword';

import Dashboard from "./components/Dashboard";
import Home from "./pages/dashboard/Home";
import Channel from "./pages/dashboard/Channel";
import TicketsPage from "./pages/dashboard/Tickets";
import AnalyticsPage from "./pages/dashboard/Analytics";
import ChatBot from "./pages/dashboard/ChatBot";
import { getSupportRole } from "./config/axiosConfig";

function App() {
  const supportRole = getSupportRole();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Onboarding />}>
          <Route path="/" element={<RedirectToLogin />} />

          <Route
            path=""
            element={
              <Auth>
                <SignInPage />
              </Auth>
            }
          />
          <Route
            path="manager/signup"
            element={
              <Auth>
                <ManagerSignUpPage />
              </Auth>
            }
          />
          <Route
            path="verify-otp"
            element={
              <Auth>
                <VerifyOTPPage />
              </Auth>
            }
          />
          <Route
            path="agent/signup"
            element={
              <Auth>
                <AgentSignUpPage />
              </Auth>
            }
          />
          <Route
            path="login"
            element={
              <Auth>
                <SignInPage />
              </Auth>
            }
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* <Route path="/dashboard" element={<Dashboard />}> */}
          <Route index element={<Home />} />
          <Route path="channel" element={<Channel />} />
          <Route path="tickets" element={<TicketsPage />} />
          {supportRole === "Manager" && (
            <>
              <Route path="analytics" element={<AnalyticsPage />} />
              <Route path="chat/bot" element={<ChatBot />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}

const RedirectToLogin = () => <Navigate to="/login" replace />;

export default App;
