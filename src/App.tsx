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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView/>} />
        <Route path="/register" element={<RegisterView/>} />
        <Route path="/leads" element={ <LeadsView/> } />
        <Route path="*"/> {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
