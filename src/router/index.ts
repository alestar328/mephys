import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'indexMain',
        component: () => import('@/components/indexMain.vue')
    },
    {
        path: '/man',
        name: 'menCloth',
        component: () => import('@/views/menCloth.vue')
    },
    {
        path: '/woman',
        name: 'womenCloth',
        component: () => import('@/views/womenCloth.vue')
    },
    {
        path: '/cloth',
        name: 'clothScene',
        component: () => import('@/views/clothScene.vue')
    },
    {
        path: '/carrito',
        name: 'shoppingCart',
        component: () => import('@/components/shoppingCart.vue')
    }

]
export default routes;
