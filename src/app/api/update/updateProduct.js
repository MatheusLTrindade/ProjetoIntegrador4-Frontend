// axios
import axios from "axios";
import productPhoto from '@/api/upload/productPhoto';

export default async function updateProduct(formData, photoData) {
  try {
    // Faz a requisição POST usando Axios
    const response = await axios.post('http://localhost:8050/product/create', formData, { headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')}});
    if (response.status === 200) {
      try {
        photoData.id = response.data.id
        await productPhoto(photoData);
      } catch(errorPhoto) {
        console.error('Erro ao enviar requisição:', errorPhoto);
      }
      return true
    }
  } catch(error) {
    // Lida com erros da requisição aqui
    sessionStorage.setItem('type', 'error')
    sessionStorage.setItem('message', 'Falha ao atualizar produto!')
    console.error('Erro ao enviar requisição:', error);
  }
}