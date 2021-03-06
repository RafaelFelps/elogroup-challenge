import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './LoginFormComponent.module.css';

function LoginFormComponent() {
    const Swal = require('sweetalert2');
    const [username, setUsername] = useState("");
    let navigate = useNavigate();
    const [password, setPassword] = useState("");

    async function verifyHashedPassword(password: string, hashedPassword: string) {
        // Encryption lib
        const bcrypt = require('bcryptjs');

        // Verify if password matches
        const doesPasswordMatch = bcrypt.compareSync(password, hashedPassword)
        return doesPasswordMatch;
    }

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


    async function login(username: string, password: string) {
        // Get all users
        const usersParsed = JSON.parse(localStorage.getItem("Users") || '{}')

        const usersFilter = usersParsed.filter((obj: { username: string; }) => {
            return obj.username === username
        });

        if (usersFilter.length === 0) {
            ShowModal('error', 'Usuário ou senha inválidos, tente novamente');
        }

        const hashedPassword = usersFilter[0].password;
        // Verify if password matches with hash
        if (await verifyHashedPassword(password, hashedPassword)) {
            localStorage.setItem("LoggedUser", username);
            navigate('/leads')
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ooops',
                showConfirmButton: false,
                text: 'Usuário ou senha inválidos, tente novamente',
            })
        }
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
        const { user, password } = document.forms[0];

        const data = localStorage.getItem('initialData');
        if (!data) {
            ShowModal('error', 'Usuário ou senha inválidos, tente novamente');
        }

        if (user.value === "" || password.value === "") {
            // Return error alert and add css to inputs
            ShowModal('error', 'Usuário ou senha inválidos, tente novamente');
        } else {
            login(user.value, password.value)
        }
    }

    return (
        <form
            onSubmit={submitForm}
            className={styles.frm_login}
        >
            <input name="user" placeholder='Usuário' type="text" className='ipt_login' onChange={e => setUsername(e.target.value)} value={username} />
            <input name="password" placeholder='Senha' type="password" className='ipt_password' onChange={e => setPassword(e.target.value)} value={password} />
            <Link to="/register" className={styles.register} >
                Registre-se aqui
            </Link>
            <input type="submit" className={styles.btn_login} value="Login" />
        </form>
    )
};

export default LoginFormComponent;

