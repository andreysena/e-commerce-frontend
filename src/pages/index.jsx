import Head from 'next/head';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchInput from '../components/SearchInput';
import NewProductsSection from '../components/NewProductsSection';
import OnSaleProductsSection from '../components/OnSaleProductsSection';

export default function Home() {

	return (
		<div className={styles.container}>
			<Head>
				<title>Home</title>
				<meta name="description" content="Application's Home Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<SearchInput />
				<NewProductsSection />
				<OnSaleProductsSection />
			</main>
			<footer>
			</footer>
		</div>
	);
}