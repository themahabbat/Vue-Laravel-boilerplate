import Home from '../pages/Home'
import About from '../pages/About'
import User from '../pages/User'

import Login from '../auth/Login'
import Register from '../auth/Register'

export default [

   // WITH NAME: router-link :to={ name: 'home' }
   // WITHOUT NAME: router-link to="/home"

   {
      name: 'home',
      path: '/',
      component: Home
   },

   {
      name: 'about',
      path: '/about',
      component: About
   },

   {
      name: 'user',
      path: '/user/:id',
      component: User
   },

   {
      name: 'login',
      path: '/login',
      component: Login
   },

   {
      name: 'register',
      path: '/register',
      component: Register
   },


]