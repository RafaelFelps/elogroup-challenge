import NavBar from '../Generic/Navbar/Navbar';
import styles from './LeadsComponent.module.css';
import LeadsTable from './LeadsTable/LeadsTable';
import NewLead from './NewLead/NewLead';

const LeadsComponent = () => (
  <div className={styles.Leads}>
    <NavBar />
    <NewLead/>
    <LeadsTable />
  </div>
);

export default LeadsComponent;
