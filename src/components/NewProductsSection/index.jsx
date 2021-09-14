import React, { useRef } from 'react';
import 'rbx/index.css';
import styles from './index.module.css';

import TitleStrip from '../TitleStrip';
import SliderSection from '../SliderSection';
import ProductsCard from '../ProductsCard';

export default function NewProductsSection() {

	return (
		<section className={styles.container}>
			<TitleStrip title="Novidades" position="left"/>
			<SliderSection>
				<ProductsCard produto="abacaxi" />
				<ProductsCard produto="abacaxi" />
				<ProductsCard produto="abacaxi" />
				<ProductsCard produto="abacaxi" />
				<ProductsCard produto="abacaxi" />
				<ProductsCard produto="abacaxi" />
				<ProductsCard produto="abacaxi" />
				<ProductsCard produto="abacaxi" />
				<ProductsCard produto="abacaxi" />
				<ProductsCard produto="abacaxi" />
			</SliderSection>
		</section>
	);
}