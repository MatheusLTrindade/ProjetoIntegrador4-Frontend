// axios
import axios from "axios";

export default async function deleteProduct(id) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.delete(('http://localhost:8050/product/delete/' + id), { headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')}});
    if (response.status === 200) {
      sessionStorage.setItem('type', 'success')
      sessionStorage.setItem('message', 'Produto excluido com sucesso!')
      return true
    }
  } catch(error) {
    // Lida com erros da requisição aqui
    sessionStorage.setItem('type', 'error')
    sessionStorage.setItem('message', 'Falha ao excluir produto!')
    console.error('Erro ao enviar requisição:', error);
    return false
  }
}