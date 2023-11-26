// axios
import axios from 'axios';

import isAuthenticated from '@/api/auth/isAuthenticated'

export default async function authLogin(formData, router) {
	try {
		// Faz a requisição POST usando Axios
		const response = await axios.post(
			'http://localhost:8050/auth/login',
			formData,
		);
		if (response.status === 200) {
			console.info('Login realizado com sucesso!');
			// Salvar o token JWT no armazenamento de sessão
			sessionStorage.setItem('jwtToken', response.data.token);
			sessionStorage.setItem('authority', response.data.authorities[0].authority);
			await isAuthenticated()
			// Salvar o toast no armazenamento de sessão
			sessionStorage.setItem('type', 'success');
			sessionStorage.setItem('message', 'Login realizado com sucesso!');
			if (sessionStorage.getItem('authority') === 'ROLE_USER') {
				// Redireciona o usuário para a página de usuário
				router.push('/user');
			} else if (sessionStorage.getItem('authority') === 'ROLE_ADMIN') {
				// Redireciona o usuário para a página de admin
				router.push('/admin');
			}
		}
	} catch (error) {
		// Lida com erros da requisição aqui
		sessionStorage.setItem('type', 'error');
		sessionStorage.setItem('message', 'Credencial inválida!');
		console.error('Erro ao enviar requisição:', error);
	}
}
