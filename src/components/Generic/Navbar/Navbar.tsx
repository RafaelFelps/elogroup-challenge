import styles from './Navbar.module.css';
import logo from '../../../img/elogroup_logo.png';
import Logout from '../Logout/Logout';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    function logout() {
        navigate("/");
    }

    return (
        <div className={styles.navbar}>
            <img src={logo} className={styles.logo} alt="elogroup logo" />
            <Logout onClick={logout} ></Logout>
        </div>
    )
};

export default NavBar;
