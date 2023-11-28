import isAuthenticated from "./isAuthenticated";

// Função para extrair o username da URL
function extractUsernameFromPath(pathname) {
  const parts = pathname.split('/');
  return parts[2];
}

export default function requireAuth(pathname, router) {
  const auth = isAuthenticated()
  // Se o caminho começar com /user ou /admin e não houver um token JWT, redirecionar para a página de login
  if (auth !== null) {
    if ((pathname.startsWith('/user') && auth !== 'ROLE_USER') || (pathname.startsWith('/admin') && auth !== 'ROLE_ADMIN')) {
      router.push(pathname.startsWith('/user') ? '/admin' : '/user');
    } else if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
      router.push(auth === 'ROLE_USER' ? '/user' : '/admin');
    } else if (pathname.startsWith('/user/') && pathname.includes('/notifications')) {
      const username = extractUsernameFromPath(pathname);
      if (username !== sessionStorage.getItem('username')) {
        router.push(`/user/${sessionStorage.getItem('username')}/notifications`);
      }
    }
  } else if (pathname.startsWith('/user') || pathname.startsWith('/admin')) {
    router.push('/login');
  } 
}