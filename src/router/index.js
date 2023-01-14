import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/photography',
        name: 'Photography',
        component: () =>
            import ('../views/Photography.vue')
    },
    {
        path: '/drawings',
        name: 'Drawings',
        component: () =>
            import ('../views/Drawings.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ('../views/Contact.vue')
    }

]

const router = new VueRouter({
    mode: "history",
    base: '/practicawd/',
    routes
})

export default router