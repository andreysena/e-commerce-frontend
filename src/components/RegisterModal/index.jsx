import React from 'react';
import 'rbx/index.css';
import styles from './index.module.css';
import { Modal, Icon  } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import RegisterForm from '../RegisterForm';

export default function RegisterModal({onClose = () => {}}) {

	const handleOutside = e => {
		if (e.target.id == "modal_background") {
			onClose();
		}
	}

	return (
		<div className={styles.container} >
	        <div id="modal_background" className={styles.modal_background} onClick={handleOutside}>
	            <Modal.Content className={styles.modal_content}>
	                <div className={styles.box}>                    
	                    <Icon size="small" className={styles.close_button}>
	                        <FontAwesomeIcon icon={faTimes} onClick={onClose} size="sm" />
	                    </Icon>

	                    <h1 className={styles.modal_title}>Faça seu cadastro</h1>
	                    <RegisterForm onClose={onClose}/>            
	                </div>
	            </Modal.Content>
	        </div>
	    </div>
	);
}