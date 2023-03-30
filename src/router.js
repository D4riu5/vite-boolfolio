import { createRouter, createWebHistory } from "vue-router";

// pages
import AppHomepage from './pages/AppHomepage.vue';
import AboutMe from './pages/AboutMe.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectsShow from './pages/ProjectsShow.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHomepage
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AboutMe
        },
        {
            path: '/projects',
            name: 'projects-index',
            component: ProjectsIndex
        },
        {
            path: '/projects/:slug',
            name: 'projects-show',
            component: ProjectsShow
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export { router };
