// axios
import axios from "axios";

export default async function userPhoto(formData) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.post('http://localhost:8050/account/upload', formData, { headers: {'Content-Type': 'multipart/form-data'}});
    if (response.status === 200) {
      console.info('Foto envida com sucesso!')
      // Salvar o toast no armazenamento de sessão
      sessionStorage.setItem('type', 'success')
      sessionStorage.setItem('message', 'Foto enviada com sucesso!')
    }
  } catch(error) {
    // Lida com erros da requisição aqui
    sessionStorage.setItem('type', 'error')
    sessionStorage.setItem('message', 'Falha ao enviar foto!')
    console.error('Erro ao enviar requisição:', error);
  }
}