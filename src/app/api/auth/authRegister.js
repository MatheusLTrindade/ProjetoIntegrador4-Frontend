// axios
import axios from "axios";
import userPhoto from '@/api/upload/userPhoto';

export default async function authRegister(formData, photoData, router) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.post('http://localhost:8050/auth/register', formData)
    if (response.status === 200) {
      // Salvar o toast no armazenamento de sessão
      sessionStorage.setItem('type', 'success')
      sessionStorage.setItem('message', 'Cadastrado realizado com sucesso!')
      // Redireciona o usuário para a página de login
      photoData.id = response.data.data.id
			await userPhoto(photoData);
      router.push('/login')
    }
  } catch(error) {
    // Lida com erros da requisição aqui
    sessionStorage.setItem('type', 'error')
    sessionStorage.setItem('message', 'Falha ao cadastrar usuário!')
    console.error('Erro ao enviar requisição:', error);
  }
}