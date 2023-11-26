// axios
import axios from "axios";
import productPhoto from '@/api/upload/productPhoto';

export default async function updateProduct(formData, photoProductData, router) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.post('http://localhost:8050/product/create', formData, { headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')}});
    if (response.status === 200) {
      // Salvar o toast no armazenamento de sessão
      sessionStorage.setItem('type', 'success')
      sessionStorage.setItem('message', 'Produto cadastrado com sucesso!')
      photoProductData.id = response.data.id
      await productPhoto(photoProductData);
    }
  } catch(error) {
    // Lida com erros da requisição aqui
    sessionStorage.setItem('type', 'error')
    sessionStorage.setItem('message', 'Falha ao cadastrar produto!')
    console.error('Erro ao enviar requisição:', error);
  }
}