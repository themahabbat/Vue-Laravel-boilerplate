import Home from '../pages/Home'
import About from '../pages/About'
import User from '../pages/User'

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
   }

]