import Vue from 'vue'
import Router from 'vue-router'

import Start from '@Vues/Start'
import Second from '@Vues/Second'
import CaseStudies from '@Vues/CaseStudies'

Vue.use(Router)

// const User = {
//     template: '<div>User: {{ $route.params.id }}</div>'
// }

export default new Router({
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     component: Start
        // },
        // {
        //     path: '/second',
        //     component: Second
        // },
        {
            path: '/:id',
            component: CaseStudies,
            props: { default: true }

        }
    ]
})
