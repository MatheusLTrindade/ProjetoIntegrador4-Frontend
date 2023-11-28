export default async function authLogout() {
  try {
    // Limpa o token JWT do armazenamento de sessão do cliente
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('authority');
    sessionStorage.removeItem('username');
    console.info('Logout realizado com sucesso!')
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
  }
}