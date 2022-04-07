import React, { FC } from 'react';
import styles from './RegisterComponent.module.css';
import logo from '../../img/elogroup_logo.png';
import small_logo from '../../img/elogroup_small_logo.png';
import back_image from '../../img/back.png';
import { Link } from 'react-router-dom';




interface RegisterComponentProps { }

const RegisterComponent: FC<RegisterComponentProps> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.info_side}>
        <Link to="/" className={styles.register} >
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.back_image} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <img src={logo} alt="logomarca elogroup" className={styles.elogroup_logo} />
        <div className="spacing">&nbsp;</div>
      </div>

      <div className={styles.register_side}>
        <div className={styles.register_form}>

          <img src={small_logo} alt="logomarca elogroup" className={styles.elogroup_small_logo} />

          <h1>Registre-se</h1>

          <span>Os campos marcados com * são obrigatórios</span>
          <input placeholder='Usuário *' type="text" className='ipt_login' />
          <input placeholder='Senha *' type="password" className='ipt_password' />
          <input placeholder='Confirmação de senha *' type="password" className='ipt_password' />
          <input type="button" value="Registrar" />

        </div>
      </div>
    </div>

  )

}

export default RegisterComponent;
