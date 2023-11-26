// jwt
import { jwtDecode } from "jwt-decode";

export default function isAuthenticated() {
  const jwtToken = sessionStorage.getItem('jwtToken')
  if (!jwtToken) {
    // Token não encontrado, o usuário não está autenticado
    return null
  }
  try {
    // Decodificar o token JWT para obter as informações
    const decoded = jwtDecode(jwtToken)
    sessionStorage.setItem('username', decoded.username)
    // // Verificar se há uma propriedade 'role' no token
    if (decoded && decoded.roles) {
      // Retornar o tipo de usuário (user ou admin)
      return decoded.roles
    } else {
      // A propriedade 'role' não foi encontrada no token
      return null
    }
  } catch (error) {
    console.error('Erro ao decodificar o token:', error)
    return null
  }
}