// axios
import axios from "axios";

export default async function authLogin(formData, router) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.post('http://localhost:8050/auth/login', formData);
    if (response.status === 200) {
      console.info('Login realizado com sucesso!')
      // Salvar o token JWT no armazenamento de sessão
      sessionStorage.setItem('jwtToken', response.data.token)
      // Salvar o toast no armazenamento de sessão
      sessionStorage.setItem('type', 'success')
      sessionStorage.setItem('message', 'Login realizado com sucesso!')
      // Redireciona o usuário para a página de usuário
      router.push('/user')
    }      
  } catch(error) {
    // Lida com erros da requisição aqui
    sessionStorage.setItem('type', 'error')
    sessionStorage.setItem('message', 'Credencial inválida!')
    console.error('Erro ao enviar requisição:', error);
  }
}