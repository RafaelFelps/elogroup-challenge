import React, { FC } from 'react';
import styles from './NewLead.module.css';

interface NewLeadProps {}

const NewLead: FC<NewLeadProps> = () => (
  <div className={styles.NewLead}>
    NewLead Component
  </div>
);

export default NewLead;
