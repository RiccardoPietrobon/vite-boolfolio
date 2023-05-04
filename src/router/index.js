import { createRouter, createWebHistory } from "vue-router";

//importo le pagine
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import TypeProjectsPage from '../pages/TypeProjectsPage.vue';

//creazione route
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active', //adatto per bootstrap
    linkExactActiveClass: '', //adatto per bootstrap
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage,
        },
        {
            path: '/projects/:slug',
            name: 'project-detail',
            component: ProjectDetailPage,
        },
        {
            path: '/type/:type_id/projects',
            name: 'type-projects',
            component: TypeProjectsPage,
        },
        {
            path: '/:pathMatch(.*)*', //se ho un path diverso dai primi tre allora mi mostra notfound
            name: 'not-found',
            component: NotFoundPage,
        },
    ],
});

export { router };
