import { FC } from 'react';
import NavBar from '../Generic/Navbar/Navbar';
import styles from './LeadsComponent.module.css';
import LeadsTable from './LeadsTable/LeadsTable';

interface LeadsProps { }

const LeadsComponent: FC<LeadsProps> = () => (
  <div className={styles.Leads}>
    <NavBar />
    <LeadsTable />
  </div>
);

export default LeadsComponent;
