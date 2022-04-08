import { FC } from 'react';
import RegisterComponent from '../../components/Register/RegisterComponent';


interface RegisterView { }

const RegisterView: FC<RegisterView> = () => {


  return (
    <>
      <RegisterComponent></RegisterComponent>
    </>

  )
};

export default RegisterView;
