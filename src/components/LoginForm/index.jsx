import React, { useState } from 'react';
import axios from 'axios';
import 'rbx/index.css';
import styles from './index.module.css';
import { Field, Control, Input, Icon, Button } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

export default function LoginForm({onClose = () => {}}) {

	const [ emailValue, setEmailValue ] = useState("");
	const [ passwordValue, setPasswordValue ] = useState("");
	const [ typeButton, setTypeButton ] = useState("");

	const Login = async () => {
		setTypeButton("loading");
		axios({
			url: `http://localhost:4000/v1/usuario/login`,
			data: {
				email: emailValue,
				senha: passwordValue
			},
			method: "POST",
		}).then(data => {
			window.localStorage.setItem('token', data.data.token);
			window.localStorage.setItem('userData', JSON.stringify(data.data.usuario));
			onClose();
		}).catch(error => {
			console.log('Não foi possível fazer o login', error.response.data);
		})
		
		setTypeButton("");
	}

	return (
		<div className={styles.form_container}>
            <Field>
				<Control iconLeft className={styles.form_input}>
					<Input type="email" placeholder="Email" value={emailValue} onChange={e => {setEmailValue(e.target.value)}}/>
					<Icon className={styles.icon} align="left">
						<FontAwesomeIcon  icon={faEnvelope} />
					</Icon>
				</Control>
			</Field>
			<Field>
				<Control iconLeft className={styles.form_input}>
					<Input type="password" placeholder="Password" value={passwordValue} onChange={e => {setPasswordValue(e.target.value)}}/>
					<Icon size="small" align="left" className={styles.icon}>
						<FontAwesomeIcon icon={faLock} size="xs"/>
					</Icon>
				</Control>
			</Field>
			<Field>
				<Control className={styles.control_button}>
					<Button state={typeButton} color="success" className={styles.confirm_button} onClick={Login}>Login</Button>
				</Control>
			</Field>
        </div>
	);
}