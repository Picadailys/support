import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/style.css'
// import Onboarding from "./components/Onboarding";
// import Home from './pages/dashboard/Home';
import Dashboard from './components/Dashboard';
// import Forgotpassword from './pages/Forgotpassword';
import Auth from './components/Auth';
import ScrollToTop from './components/ScrollToTop';
// import NotFound from './pages/NotFound';
// import Signin from './pages/Signin';
// import AuthPIN from './pages/AuthPIN';
// import Forgotpassword from './pages/Forgotpassword';
// import Newpassword from './pages/Newpassword';
import Home from './pages/dashboard/Home';
import Channel from './pages/dashboard/Channel';
import Tickets from './pages/dashboard/Tickets';
import ChatBot from './pages/dashboard/ChatBot';
import Signup from './pages/onboarding/Signup';
import Onboarding from './components/Onboarding';
import Signin from './pages/onboarding/Signin';

function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Onboarding />}>
						<Route path="" element={<Auth><Signin /></Auth>} />
						<Route path="signup/:user_id" element={<Auth><Signup /></Auth>} />
						<Route path="login" element={<Auth><Signin /></Auth>} />
						<Route path="*" element={<h1>Not Found</h1>} />
					</Route>
					<Route path="/dashboard" element={<Dashboard />}>
					{/* <Route path="/dashboard" element={<Dashboard />}> */}
						<Route index element={<Home />} />
						<Route path='channel' element={<Channel />} />
						<Route path='tickets' element={<Tickets />} />
						<Route path='chat/bot' element={<ChatBot />} />
					</Route>
				</Routes>
			</BrowserRouter >
		</>
	)
}

export default App;
