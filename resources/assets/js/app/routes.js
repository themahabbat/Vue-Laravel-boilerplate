import Home from '../pages/Home'
import About from '../pages/About'
import User from '../pages/User'

import NotFound404 from '../pages/NotFound404'

import Login from '../auth/Login'
import Register from '../auth/Register'
import Logout from '../auth/Logout'


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
        // props:true MEANS YOU CAN USE {{ id }} instead of {{ $route.params.id }}
        // THAT MEANS id property will get its value from route params
        // YOU JUST HAVE TO DEFINE PROPERTY LIKE: props: ['id']
        props: true,

        // THIS WAY YOU CAN CHANGE TYPES OF PROPERTIES (AS ALL ROUTE PARAMS ARE STRING)
        // DIFFERENCE IS YOU CAN DEFINE TYPE OF PROPERTIES IN COMPONENT LIKE BELOW
        // props: { id: { type: Number, required: true } }
        props(route){
            const props = { ...route.params }
            props.id = Number(props.id)
            return props
        },
        component: User
    },

    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },

    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: {
            requiresGuest: true
        }
    },

    {
        name: 'logout',
        path: '/logout',
        component: Logout,
        meta: {
            requiresAuth: true
        }
    },

    {
        name: '404',
        path: '*',
        component: NotFound404
    }


]