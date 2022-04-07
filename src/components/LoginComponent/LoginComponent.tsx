import React, { FC } from 'react';
import { Link } from "react-router-dom";
import styles from './LoginComponent.module.css';
import logo from '../../img/elogroup_logo.png';
import small_logo from '../../img/elogroup_small_logo.png';
interface LoginComponentProps { }

const LoginComponent: FC<LoginComponentProps> = () => {


  return (
    <div className={styles.root}>
      <div className={styles.info_side}>
        <img src={logo} alt="logomarca elogroup" className={styles.elogroup_logo} />
      </div>

      <div className={styles.login_side}>
        <div className={styles.login_form}>

          <img src={small_logo} alt="logomarca elogroup" className={styles.elogroup_small_logo} />

          <h1>Bem Vindo</h1>
          <span className={styles.login_label}>Entre com seu usuário e senha</span>

          <input placeholder='Usuário' type="text" className='ipt_login' />
          <input placeholder='Senha' type="password" className='ipt_password' />
          <Link to="/register" className={styles.register} >
              Registre-se aqui
          </Link>
          <input type="button" className={styles.btn_login} value="Login" />

        </div>
      </div>
    </div>

  )
};

export default LoginComponent;
