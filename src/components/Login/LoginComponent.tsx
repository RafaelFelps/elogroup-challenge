import styles from './LoginComponent.module.css';
import logo from '../../img/elogroup_logo.png';
import small_logo from '../../img/elogroup_small_logo.png';
import LoginFormComponent from './LoginForm/LoginFormComponent';

function LoginComponent() {
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

          <LoginFormComponent></LoginFormComponent>

        </div>
      </div>
    </div>

  )
};

export default LoginComponent;
