import isAuthenticated from "./isAuthenticated";

export default function requireAuth(pathname, router) {
  // Se o caminho começar com /user ou /admin e não houver um token JWT, redirecionar para a página de login
  // if ((pathname.startsWith('/user') || pathname.startsWith('/admin')) && !isAuthenticated()) {
  //   router.push('/login')
  // }

  // if ((pathname.startsWith('/login') || pathname.startsWith('/register')) && isAuthenticated()) {
  //   if (isAuthenticated === 'user') router.push('/user')
  //   else router.push('/admin')
  // }
}