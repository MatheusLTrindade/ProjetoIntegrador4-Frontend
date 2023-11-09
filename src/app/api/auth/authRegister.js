// axios
import axios from "axios";

export default async function authRegister(formData) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.post('http://localhost:8050/auth/register', formData);
    if (response.status === 200) {
      console.info('Cadastrado realizado com sucesso!')
      console.log('Resposta da API:', response.data);
      // Redireciona o usuário para a página de login
      return '/login'
    }
  } catch(error) {
    // Lida com erros da requisição aqui
    alert("Falha ao cadastrar usuário.")
    console.error('Erro ao enviar requisição:', error);
  }
}