import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/HomePage.tsx'),
        },

        {
            path: '/projects',
            name: 'projects',
            component: () => import('./pages/ProjectsPage.tsx'),
        },

        {
            path: '/contacts',
            name: 'contacts',
            component: () => import('./pages/ContactsPage.tsx'),
        },
    ],
})

export default router
