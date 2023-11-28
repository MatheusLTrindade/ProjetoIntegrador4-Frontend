// axios
import axios from "axios";

export default async function getAccountPersonal( username ) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.get(('http://localhost:8050/account/find/' + username), { headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')}});
    if (response.status === 200) {
      return response.data
    }
  } catch(error) {
    // Lida com erros da requisição aqui
    sessionStorage.setItem('type', 'error')
    sessionStorage.setItem('message', 'Falha ao carregar os dados do usuário!')
    console.error('Erro ao enviar requisição:', error);
  }
}