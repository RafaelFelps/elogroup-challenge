// Importing dependencies
import './components/Login/LoginComponent'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Importing Views
import LoginView from './views/Login/LoginView';
import RegisterView from './views/Register/RegisterView';
import LeadsView from './views/Leads/LoginView';
import NotFound from './components/Generic/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/leads" element={<LeadsView />} />
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
