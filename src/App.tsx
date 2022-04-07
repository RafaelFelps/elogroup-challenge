import './components/LoginComponent/LoginComponent'
import LoginComponent from './components/LoginComponent/LoginComponent';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RegisterComponent from './components/RegisterComponent/RegisterComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent/>} />
        <Route path="/register" element={<RegisterComponent/>} />
        <Route path="*" element={<LoginComponent/>} /> {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
