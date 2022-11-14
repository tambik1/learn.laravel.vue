import {createRouter, createWebHistory} from 'vue-router';
import MainContainer from "@/Views/MainContainer.vue";

const routes = [
    {
        path: '/',
        name: MainContainer,
        component: MainContainer
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
