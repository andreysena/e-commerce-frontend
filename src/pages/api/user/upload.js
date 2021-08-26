const axios = require('axios');
const fs = require('fs');

export default async(req, res) => {
	console.log(req.query.teste)


	axios({
		url: 'http://localhost:4000/v1/usuario/foto',
		data: req.query.data,
		method: 'post',
	}).then(data => {
		console.log(data)
	}).catch(error => {
		console.log(error);
	});
}