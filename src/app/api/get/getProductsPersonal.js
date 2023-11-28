// axios
import axios from "axios";

export default async function getProductsPersonal(username) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.get(('http://localhost:8050/product/findall/' + username), { headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')}});
    if (response.status === 200) {
      return response.data
    }
  } catch(error) {
    // Lida com erros da requisição aqui
    sessionStorage.setItem('type', 'error')
    sessionStorage.setItem('message', 'Falha ao carregar os produtos cadastrados!')
    console.error('Erro ao enviar requisição:', error);
  }
}