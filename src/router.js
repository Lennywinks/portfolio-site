import {createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/NotFound.vue'


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/:pathMatch(.*)*', name: '404 Not Found', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to) => {
    document.title = 'Lenny-Dev - ' + to.name ?? 'Lenny-Dev'
})

export default router