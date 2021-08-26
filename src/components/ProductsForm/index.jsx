import React, { useState } from 'react';
import axios from 'axios';
import 'rbx/index.css';
import styles from './index.module.css';
import { Field, Control, Input, Select, Icon, Button } from 'rbx';

export default function ProductsForm() {

	const [ productNameValue, setProductNameValue ] = useState("");
	const [ fileSelected, setFileSelected ] = useState({});
	const [ productPrice, setProductPrice ] = useState("");
	const [ selectedCategoryValue, setSelectCategoryValue ] = useState("Hortifrúti");

	const registerProduct = () => {
		const formData = new FormData();
		formData.append('nome', productNameValue);
		formData.append('file', fileSelected);
		formData.append('preco', productPrice);
		formData.append('categoria', selectedCategoryValue);

		axios({
			url: 'http://localhost:4000/v1/produto/cadastrar',
			data: formData,
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			method: "POST"
		}).then(response => {
			console.log("Produto cadastro com sucesso: ", response);
		}).catch(error => {
			console.log("Erro ao tentar cadastrar o produto: ", error);
		});
	}

	return (
		<div className={styles.container}>
			<Field>
				<Input type="text" placeholder="Nome do produto" value={productNameValue} onChange={e => {setProductNameValue(e.target.value)}}/>
			</Field>
			<Field>
				<Input type="file" placeholder="Escolha a foto do produto" onChange={e => {setFileSelected(e.target.files[0])}}/>
			</Field>
			<Field>
				<Control className={styles.control_double_input}>
					<Input className={styles.input_price} type="number" placeholder="Preço do produto" value={productPrice} onChange={e => setProductPrice(e.target.value)}/>

					<Select.Container className={styles.input_category}>
						<Select value={selectedCategoryValue} onChange={e => setSelectCategoryValue(e.target.value)}>
							<Select.Option>Hortifrúti</Select.Option>
							<Select.Option>Higiene</Select.Option>
							<Select.Option>Enlatados e Conservas</Select.Option>
							<Select.Option>Limpeza</Select.Option>
							<Select.Option>Bebidas</Select.Option>
							<Select.Option>Carnes, Aves e Peixes</Select.Option>
						</Select>
					</Select.Container>
				</Control>
			</Field>
			<Field>
				<Control className={styles.control_button}>
					<Button state="" color="success" className={styles.confirm_button} onClick={registerProduct}>Cadastrar</Button>
				</Control>
			</Field>
		</div>		
	);
} 