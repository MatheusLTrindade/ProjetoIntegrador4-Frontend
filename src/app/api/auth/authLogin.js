// axios
import axios from "axios";

export default async function authLogin(formData, router) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.post('http://localhost:8050/auth/login', formData);
    if (response.status === 200) {
      console.info('Login realizado com sucesso!')
      console.log('Resposta da API:', response.data);
      // Salvar o token JWT no armazenamento de sessão
      sessionStorage.setItem('jwtToken', response.data.token)
      // Redireciona o usuário para a página de usuário
      router.push('/user')
    }      
  } catch(error) {
    // Lida com erros da requisição aqui
    alert("Usuário ou senha inválido")
    console.error('Erro ao enviar requisição:', error);
  }
}