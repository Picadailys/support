import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/style.css'
// import Onboarding from "./components/Onboarding";
// import Home from './pages/dashboard/Home';
import Dashboard from './components/Dashboard';
// import Forgotpassword from './pages/Forgotpassword';
// import Auth from './components/Auth';
import ScrollToTop from './components/ScrollToTop';
// import NotFound from './pages/NotFound';
// import Signin from './pages/Signin';
// import AuthPIN from './pages/AuthPIN';
// import Forgotpassword from './pages/Forgotpassword';
// import Newpassword from './pages/Newpassword';
import Home from './pages/dashboard/Home';
import Channel from './pages/dashboard/Channel';
import Tickets from './pages/Tickets';
import ChatBot from './pages/dashboard/ChatBot';

function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					{/* <Route path="/" element={<Onboarding />}>
						<Route path="" element={<Auth><Signin /></Auth>} />
						<Route path="pin/verify" element={<Auth><AuthPIN /></Auth>} />
						<Route path="forgot-password" element={<Auth><Forgotpassword /></Auth>} />
						<Route path="new-password" element={<Auth><Newpassword /></Auth>} />
						<Route path="*" element={<NotFound />} />
					</Route> */}
					<Route path="/" element={<Dashboard />}>
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
