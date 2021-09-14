import React from 'react';
import Image from 'next/image';
import 'rbx/index.css';
import styles from './index.module.css';

import AbacaxiImage from '../../../assets/images/Abacaxi.jpg';
import SaboneteEmBarra from '../../../assets/images/SaboneteEmBarra.jpg';

export default function ProductsCard({produto, minWidth, maxWidth}) {

	return (
		<div className={styles.container} >
			{
				produto === "abacaxi" ?
					<Image
						src={AbacaxiImage} 
						alt="Abacaxi Image"
						width="200"
						height="200"
					/>
				:
					<Image
						src={SaboneteEmBarra} 
						alt="Sabonete Image"
						width="200"
						height="200"
					/>
			}
			<p>Título/Descrição do produtoaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb</p>
			<h2>R$ 000,00</h2>
		</div>
	)
}