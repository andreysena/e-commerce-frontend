import React, { useState } from 'react';
import axios from 'axios';
import 'rbx/index.css';
import styles from './index.module.css';
import { Field, Control, Input, Icon, Button } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

// import convertAndSave from '../../../utils/convertAndSave';

export default function RegisterForm({onClose = () => {}}) {

	const [ nameValue, setNameValue ] = useState("");
	const [ emailValue, setEmailValue ] = useState("");
	const [ passwordValue, setPasswordValue ] = useState("");
	const [ passwordConfirmValue, setPasswordConfirmValue ] = useState("");
	const [ phoneValue, setPhoneValue ] = useState("");
	const [ addressValue, setAddressValue ] = useState("");
	const [ cpfValue, setCpfValue ] = useState("");
	const [ typeButton, setTypeButton ] = useState("");
	const [ fileSelected, setFileSelected ] = useState({});

	const Register = async() => {
		setTypeButton("loading");

		// const { NEXT_PUBLIC_BASE_URL } = process.env;
		const formData = new FormData();
		formData.append('nome', nameValue);
		formData.append('file', fileSelected);
		formData.append('email', emailValue);
		formData.append('senha', passwordValue);
		formData.append('telefone', phoneValue);
		formData.append('cpf', cpfValue);
		formData.append('endereco', addressValue);
		
		axios({
			url: `http://localhost:4000/v1/usuario/cadastrar`,
			data: formData,
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			method: 'POST'
		}).then(data => {
			window.localStorage.setItem('token', data.data.token);
			window.localStorage.setItem('userData', JSON.stringify(data.data.usuario));
			

			onClose();
		}).catch(error => {
			console.log('Não foi possível fazer o login', error.response.data);
		});

		setTypeButton("");
	}


	const SendPhoto = async() => {
		console.log(fileSelected)

		const formData = new FormData();
		formData.append('file', fileSelected);
		formData.append('nome', "Andrey Sena");
		axios({
			url: `http://localhost:4000/v1/usuario/foto`,
			data: formData,
			headers: {
				'Content-Type': 'multipart/form-data;Boundary=""'
			},
			method: 'POST'
		}).then(data => {
			console.log("deu certo: ", data);
		}).catch(error => {
			console.log("Deu erro: ", error);
		});
	}

	return (
		<div className={styles.form_container}>
			<Field>
				<Input type="text" placeholder="Nome" value={nameValue} onChange={e => {setNameValue(e.target.value)}}/>
			</Field>
            <Field>
				<Input type="email" placeholder="Email" value={emailValue} onChange={e => {setEmailValue(e.target.value)}}/>
			</Field>
			<Field>
				<Input type="text" placeholder="Endereço" value={addressValue} onChange={e => {setAddressValue(e.target.value)}} />
			</Field>
			<Field>
				<Control className={styles.control_double_input}>
					<Input className={styles.each_input} type="tel" placeholder="Telefone" value={phoneValue} onChange={e => {setPhoneValue(e.target.value)}} />
					<Input className={styles.each_input} type="text" placeholder="CPF" value={cpfValue} onChange={e => {setCpfValue(e.target.value)}} />
				</Control>
			</Field>
			<Field>
				<Control className={styles.control_double_input}>
					<Input className={styles.each_input} type="password" placeholder="Senha" value={passwordValue} onChange={e => {setPasswordValue(e.target.value)}}/>
					<Input className={styles.each_input} type="password" placeholder="Confirmação de Senha" value={passwordConfirmValue} onChange={e => {setPasswordConfirmValue(e.target.value)}}/>
				</Control>
			</Field>
			<Field>
				<Input type="file" placeholder="Escolha um foto para seu perfil" onChange={e => {setFileSelected(e.target.files[0])}}/>
			</Field>
			<Field>
				<Control className={styles.control_button}>
					<Button state={typeButton} color="success" className={styles.confirm_button} onClick={Register}>Cadastrar</Button>
				</Control>
			</Field>
        </div>
	);
}