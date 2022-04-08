import { FC } from 'react';
import LoginComponent from '../../components/Login/LoginComponent';


interface LoginView { }

const LoginView: FC<LoginView> = () => {


  return (
    <>
      <LoginComponent></LoginComponent>
    </>

  )
};

export default LoginView;
