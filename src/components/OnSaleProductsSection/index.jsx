import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';

import TitleStrip from '../TitleStrip';
import ProductsCard from '../ProductsCard';

export default function OnSaleProductsSection() {

	return (
		<section className={styles.container}>
			<div className={styles.title_container}>
				<TitleStrip className={styles.title_strip} title="Promoções" position="center" />
			</div>
			<div className={styles.content_container}>
				<ProductsCard produto="sabonete" />
				<ProductsCard produto="sabonete" />
				<ProductsCard produto="sabonete" />
				<ProductsCard produto="sabonete" />
				<ProductsCard produto="sabonete" />
				<ProductsCard produto="sabonete" />
				<ProductsCard produto="sabonete" />
				{/* <ProductsCard produto="sabonete" /> */}
				{/* <ProductsCard produto="sabonete" /> */}
				{/* <ProductsCard produto="sabonete" /> */}
			</div>
		</section>
	);
}