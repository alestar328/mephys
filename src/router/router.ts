import {createRouter, createWebHistory} from "vue-router";
import routes from './index';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from,next) => {
    const a: string = to.name ? to.name.toString() : 'Sin valor';
    const b: string = from.name ? from.name.toString() : 'Sin valor';

    console.log('Navigation to ' + a + " from " + b);
    next();
});
router.afterEach((to, from) => {
    const a : string = to.name ? to.name.toString() : 'sense valor';
    const b : string = from.name ? from.name.toString() : 'sense valor';

    console.log('Navigated to ' +  a + " from " +  b);

});

export default router;
