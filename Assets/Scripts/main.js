'use strict'

import Vue from 'vue'
import store from '@/Scripts/store'
import router from '@/Scripts/router'
import icon from '@/Vue/Components/icon.vue'

// generate svg sprite
const files = require.context('@/Images/svg/symbol/', false, /.*\.svg$/)
files.keys().forEach(files)

let App = new Vue({
    el: '#App',
    router,
    store,
    components: {
        icon
    }
})
