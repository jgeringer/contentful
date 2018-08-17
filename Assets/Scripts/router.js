import Vue from 'vue'
import Router from 'vue-router'

import Start from '@Vues/Start'
import CaseStudies from '@Vues/CaseStudies'
import NotFound from '@Vues/NotFound'

Vue.use(Router)

// const User = {
//     template: '<div>User: {{ $route.params.id }}</div>'
// }

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Start
        },
        {
            path: '/:client',
            component: CaseStudies,
            props: { default: true }

        },
        {
            path: '*',
            component: NotFound
        }
    ]
})
