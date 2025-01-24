import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/style.css";
import Dashboard from "./components/Dashboard";
// import Forgotpassword from './pages/Forgotpassword';
import Auth from './components/Auth';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/dashboard/Home';
import Channel from './pages/dashboard/Channel';
import TicketsPage from "./pages/dashboard/Tickets";
import AnalyticsPage from "./pages/dashboard/Analytics";
import ChatBot from './pages/dashboard/ChatBot';
import AgentSignup from './pages/onboarding/AgentSignup';
import ManagerSignup from './pages/onboarding/ManagerSignup';
import Onboarding from './components/Onboarding';
import Signin from './pages/onboarding/Signin';
import OTPSignup from './pages/onboarding/OTPSignup';

function App() {
  const role = "Manager";

  useEffect(() => {
    localStorage.setItem("testRole", role);
  }, []);
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Onboarding />}>
						<Route path="" element={<Auth><Signin /></Auth>} />
						<Route path="manager/signup" element={<Auth><ManagerSignup /></Auth>} />
						<Route path="otp/signup" element={<Auth><OTPSignup /></Auth>} />
						<Route path="agent/signup/:user_id" element={<Auth><AgentSignup /></Auth>} />
						<Route path="login" element={<Auth><Signin /></Auth>} />
						<Route path="*" element={<h1>Not Found</h1>} />
					</Route>
					<Route path="/dashboard" element={<Dashboard />}>
					{/* <Route path="/dashboard" element={<Dashboard />}> */}
						<Route index element={<Home />} />
						<Route path='channel' element={<Channel />} />
						<Route path="tickets" element={<TicketsPage />} />
            {role === "Manager" && (
              <>
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="chat/bot" element={<ChatBot />} />
              </>
            )}
					</Route>
				</Routes>
			</BrowserRouter >
		</>
	)
}

export default App;
