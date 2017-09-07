const Home = () => import('@/components/home/Home')
const Login = () => import('@/components/login/Login')
const ContactsList = () => import('@/components/contacts/ContactsList')
const ContactCreated = () => import('@/components/contacts/ContactCreated')

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsList
  }, {
    path: '/contact',
    name: 'Created.Contacts',
    component: ContactCreated
  }
]
