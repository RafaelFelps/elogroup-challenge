import NavBar from '../Generic/Navbar/Navbar';
import styles from './LeadsComponent.module.css';
import LeadsTable from './LeadsTable/LeadsTable';
import NewLead from './NewLead/NewLead';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeadsProvider from '../../Contexts/LeadsContext';


const LeadsComponent = () => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {

    const loggedUser = localStorage.getItem('LoggedUser') || "";
    if (!loggedUser) {
      navigate("/");
    }
    setLoggedUser(loggedUser);
  }, []);


  return (
    <LeadsProvider>
      <div className={styles.Leads}>
        <NavBar />
        <NewLead />
        <LeadsTable />
      </div>
    </LeadsProvider>
  );
}

export default LeadsComponent;
