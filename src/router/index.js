import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting

const HomePage = () => import('client/pages/Home.page.vue');
const Bounty = () => import('client/pages/Bounty.page.vue');
const ExplorerBlocks = () => import('client/pages/Explorer.page.vue');
const NetworkPage = () => import('client/pages/Pool.page.vue');
const FaqPage = () => import('client/pages/Faq.page.vue');
const ClearIndexedDBPage = () => import('client/pages/ClearIndexedDB.page.vue');

export function createRouter (){

    return new Router({
        mode: 'history',
        scrollBehavior(to, from, savedPosition) {
            //console.log('router scroll', to, from, to === from);

            if (savedPosition) {
                return savedPosition
            } else {
                if (to.hash) {
                    return {
                        selector: to.hash
                    }
                }
            }

        },
        routes: [

            { path: '/explorer/:a?', component: ExplorerBlocks },
            { path: '/explorer', component: ExplorerBlocks },
            { path: '/bounties', component: Bounty },
            { path: '/faq', component: FaqPage },
            { path: '/mypool', component: NetworkPage },
            { path: '/clearIndexedDB', component: ClearIndexedDBPage },
            { path: '/:a?/*', component: HomePage },
            { path: '/:a?', component: HomePage },
            { path: '/', component: HomePage },

        ]
    })
}
