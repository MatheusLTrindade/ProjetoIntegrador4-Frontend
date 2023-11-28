// axios
import axios from 'axios';

export default async function productPhoto(formData) {
	try {
		// Faz a requisição POST usando Axios
		const response = await axios.post('http://localhost:8050/product/upload',	formData,	{ headers: { 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')}});
		if (response.status === 200) { 
			// Salvar o toast no armazenamento de sessão
			sessionStorage.setItem('type', 'success')
			sessionStorage.setItem('message', 'Produto cadastrado com sucesso!')
		}
	} catch (error) {
		// Lida com erros da requisição aqui
		// Salvar o toast no armazenamento de sessão
		sessionStorage.setItem('type', 'alert')
		sessionStorage.setItem('message', 'Produto cadastrado sem foto!')
		console.error('Erro ao enviar requisição:', error);
	}
}
