import { createRouter, createWebHistory } from "vue-router";

//importo le pagine
import Homepage from '../pages/Homepage.vue';
import ContactPage from '../pages/ContactPage.vue';

//creazione route
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage,
        },
    ],
});

export { router };
