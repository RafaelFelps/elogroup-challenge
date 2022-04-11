import { useState } from 'react';
import styles from './RegisterComponent.module.css';
import logo from '../../img/elogroup_logo.png';
import small_logo from '../../img/elogroup_small_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBack from '../Generic/ArrowBack/ArrowBack';


function RegisterComponent() {
  let navigate = useNavigate();
  const Swal = require('sweetalert2');

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

      ShowModal("success")

    }, function (value) {
      // not called
    });

  }
  // Show modal
  function ShowModal(type: string, message?: string) {
    let title;
    type === "success" ? title = "Operação concluída com sucesso" : title = "Ooops";

    Swal.fire({
      icon: type,
      title: title,
      showConfirmButton: false,
      html: message,
    })
  }

  // Verify if string have special charachters
  function containsSpecialChars(str: string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  // Verify if string have number charachters
  function containsNumberChars(str: string) {
    return /\d/.test(str);
  }

  // Verify if string have uppercase charachters
  function containsUppercaseChars(str: string) {
    return (/[A-Z]/.test(str));
  }

  // Form handle
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    const { user, password, confirmPassword } = document.forms[0];
    let hasErrors = false;

    // Validate if all fields are filled
    if (user.value === "" || password.value === "" || confirmPassword.value === "") {
      hasErrors = true;
      ShowModal("error", "Preencha todos os campos, tente novamente.");
      return;
    }

    // Valid if password maches with confirmPassword
    if (password.value !== confirmPassword.value) {
      hasErrors = true;
      ShowModal("error", "As senhas não conferem, tente novamente.");
      return;
    }

    // Valid if password have at minumun eight characters, contains special characters,
    // numerical charactes, uppercase character 
    const passwordLength = password.value.length;
    const hasSpecialCharacters = containsSpecialChars(password.value);
    const hasNumericCharacters = containsNumberChars(password.value);
    const hasUppercaseCharacter = containsUppercaseChars(password.value);

    if (passwordLength < 8 || !hasSpecialCharacters || !hasNumericCharacters || !hasUppercaseCharacter) {
      const html = `
        <div style="text-align:center">
          <p>&#10095; A senha deve possuir no mínimo 8 caracteres. </p>
          <p>&#10095; A senha deve possuir no mínimo 1 caractere especial.</p>
          <p>&#10095; A senha deve possuir no mínimo 1 caractere numérico.</p>
          <p>&#10095; A senha deve possuir no mínimo 1 caractere maiúsculo.</p>
        </div>
      `;

      ShowModal("error", html);
      return;
    }

    // Valid if username already exists
    // Get all users
    const usersParsed = JSON.parse(localStorage.getItem("Users") || '{}')

    if (Object.keys(usersParsed).length) {
      const usersFilter = usersParsed.filter((obj: { username: string; }) => {
        return obj.username === user.value
      });


      if (usersFilter.length > 0) {
        hasErrors = true;
        ShowModal("error", "Usuário já cadastrado, tente novamente.");
        return;
      }

    }


    if (!hasErrors) {
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
