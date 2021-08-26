import React from 'react';
import Head from 'next/head';
import styles from './index.module.css';
import ProductsForm from '../../components/ProductsForm';

export default function Products() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Produtos</title>
				<meta name="description" content="Application's Home Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Cadastre um produto</h1>
			<ProductsForm />
		</div>
	);
}