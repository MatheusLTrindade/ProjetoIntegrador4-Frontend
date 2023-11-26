// axios
import axios from "axios";

export default async function createProduct(formData, router) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.post('http://localhost:8050/trade/create', formData, { headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')}});
    if (response.status === 200) {
      // Salvar o toast no armazenamento de sessão
      sessionStorage.setItem('type', 'success')
      sessionStorage.setItem('message', 'Trade enviado com sucesso!')
      // router.
    }
  } catch(error) {
    // Lida com erros da requisição aqui
    sessionStorage.setItem('type', 'error')
    sessionStorage.setItem('message', 'Falha ao enviar trade!')
    console.error('Erro ao enviar requisição:', error);
  }
}