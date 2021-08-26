import React from 'react';
import 'rbx/index.css';
import styles from './index.module.css';

import ProductsCard from '../ProductsCard';

export default function NewProductsSection() {

	return (
		<section className={styles.container}>
			<div className={styles.section_title_container}>
				<div className={styles.retangle}>
					<h1>NOVIDADES</h1>
				</div>
				<div className={styles.triangle} />
			</div>
			<div className={styles.cards_container}>
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
			</div>
		</section>
	)
}