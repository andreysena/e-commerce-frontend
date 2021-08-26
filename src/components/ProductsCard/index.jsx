import React from 'react';
import Image from 'next/image';
import 'rbx/index.css';
import styles from './index.module.css';

import AbacaxiImage from '../../../assets/images/Abacaxi.jpg';

export default function ProductsCard() {

	return (
		<div className={styles.container}>
			<Image
				src={AbacaxiImage} 
				alt="Abacaxi Image"
				width="200"
				height="200"
			/>
			<p>Título/Descrição do produto</p>
			<h2>R$ 000,00</h2>
		</div>
	)
}