import React from 'react';
import 'rbx/index.css';
import styles from './index.module.css';
import { Input, Icon } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchInput() {

	return (
		<div className={styles.container}>
			<div className={styles.input_container}>
				<Input id={styles.input} type="search" placeholder="Pesquisar"/>
				<div className={styles.search_icon_container}>
					<Icon className={styles.icon} size="small">
						<FontAwesomeIcon icon={faSearch} size="sm"/>
					</Icon>
				</div>
			</div>
		</div>
	);
}