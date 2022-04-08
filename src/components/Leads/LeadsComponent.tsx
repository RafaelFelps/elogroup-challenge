import { FC } from 'react';
import NavBar from '../Generic/Navbar/Navbar';
import styles from './LeadsComponent.module.css';

interface LeadsProps { }

const LeadsComponent: FC<LeadsProps> = () => (
  <div className={styles.Leads}>
    <NavBar />
  </div>
);

export default LeadsComponent;
