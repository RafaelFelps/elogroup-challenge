import { FC } from 'react';
import LeadsComponent from '../../components/Leads/LeadsComponent';


interface LeadsView { }

const LeadsView: FC<LeadsView> = () => {


  return (
    <>
      <LeadsComponent></LeadsComponent>
    </>

  )
};

export default LeadsView;
