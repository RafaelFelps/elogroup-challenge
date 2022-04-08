import React, { FC, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from './LoginComponent.module.css';
import logo from '../../img/elogroup_logo.png';
import small_logo from '../../img/elogroup_small_logo.png';
interface LoginComponentProps { }




function LoginComponent() {

  const [username, setUsername] = useState("");
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  // Encryption lib
  const bcrypt = require('bcryptjs');

  // Verify hashed password
  async function verifyHashedPassword(password: string, hashedPassword: string) {

    // Verify if password matches
    const doesPasswordMatch = bcrypt.compareSync(password, hashedPassword)
    return doesPasswordMatch;
  }


  async function login(username: string, password: string) {
    // Get all users
    const usersParsed = JSON.parse(localStorage.getItem("Users") || '{}')

    // Get hashed password from user
    const usersFilter = usersParsed.filter((obj: { username: string; }) => {
      return obj.username === username
    });

    const hashedPassword = usersFilter[0].password;
    // Verify if password matches with hash
    if (await verifyHashedPassword(password, hashedPassword)) {
      navigate('/leads')
    }
  }



  return (
    <div className={styles.root}>
      <div className={styles.info_side}>
        <img src={logo} alt="elogroup logo" className={styles.elogroup_logo} />
      </div>

      <div className={styles.login_side}>
        <div className={styles.login_form}>

          <img src={small_logo} alt="elogroup logo" className={styles.elogroup_small_logo} />

          <h1>Bem Vindo</h1>
          <span className={styles.login_label}>Entre com seu usuário e senha</span>

          <input placeholder='Usuário' type="text" className='ipt_login' onChange={e => setUsername(e.target.value)} value={username} />
          <input placeholder='Senha' type="password" className='ipt_password' onChange={e => setPassword(e.target.value)} value={password} />
          <Link to="/register" className={styles.register} >
            Registre-se aqui
          </Link>
          <input type="button" className={styles.btn_login} onClick={() => login(username, password)} value="Login" />

        </div>
      </div>
    </div>

  )
};

export default LoginComponent;
