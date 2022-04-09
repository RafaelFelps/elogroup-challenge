import { useState } from 'react';
import styles from './RegisterComponent.module.css';
import logo from '../../img/elogroup_logo.png';
import small_logo from '../../img/elogroup_small_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBack from '../Generic/ArrowBack/ArrowBack';


function RegisterComponent() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Encryption lib
  const bcrypt = require('bcryptjs');

  // Returns a hashed password
  async function hashIt(password: string) {
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
    return hashedPassword;
  }

  // Register user
  function registerUser(username: string, password: string, confirmPassword: string) {

    // Validate if password matches
    if (password === confirmPassword) {
      // Password encryption
      Promise.resolve(hashIt(password)).then(function (value) {

        const user = {
          username: username,
          password: value,
        };

        // Get list of all users
        let allUsers = JSON.parse(localStorage.getItem("Users") || '[]');

        localStorage.setItem('Users', JSON.stringify([...allUsers, user]));
        navigate(-1);

      }, function (value) {
        // not called
      });
    } else {
      return console.log("Error");
    }
  }

  // Form handle
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    const { user, password, confirmPassword } = document.forms[0];

    if (user.value === "" || password.value === "" || confirmPassword.value === "") {
      // Return error alert and add css to inputs
      const Swal = require('sweetalert2');
      Swal.fire({
        icon: 'error',
        title: 'Ooops',
        showConfirmButton: false,
        text: 'Insira todos os campos e tente novamente',
      })
    } else {
      registerUser(user.value, password.value, confirmPassword.value);
    }
  }



  return (
    <div className={styles.root}>
      <div className={styles.info_side}>
        <Link to="/" className={styles.register} >
          <ArrowBack></ArrowBack>
        </Link>
        <img src={logo} alt="logomarca elogroup" className={styles.elogroup_logo} />
        <div className="spacing">&nbsp;</div>
      </div>

      <div className={styles.register_side}>
        <div className={styles.register_form}>

          <img src={small_logo} alt="logomarca elogroup" className={styles.elogroup_small_logo} />

          <h1>Registre-se</h1>

          <span>Os campos marcados com * são obrigatórios</span>
          <form className={styles.frm_register} onSubmit={submitForm}>
            <input name="user" placeholder='Usuário *' type="text" className='ipt_login' onChange={e => setUsername(e.target.value)} value={username} />
            <input name="password" placeholder='Senha *' type="password" className='ipt_password' onChange={e => setPassword(e.target.value)} value={password} />
            <input name="confirmPassword" placeholder='Confirmação de senha *' type="password" className='ipt_password' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
            <input type="submit" value="Registrar" />
          </form>
        </div>
      </div>
    </div>

  )

}

export default RegisterComponent;
