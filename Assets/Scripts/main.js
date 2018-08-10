'use strict'

import Vue from 'vue'
import store from '@/Scripts/store'
import router from '@/Scripts/router'
import icon from '@/Vue/Components/icon.vue'
import first from '@Components/first.vue'
import './vueImports'
import accordion from '@/Scripts/custom/accordion.js'
import { slider } from '@/Scripts/custom/slider.js'

// generate svg sprite
const files = require.context('@/Images/svg/symbol/', false, /.*\.svg$/)
files.keys().forEach(files)

let App = new Vue({ // eslint-disable-line no-unused-vars
    el: '#App',
    router,
    store,
    components: {
        icon,
        first
    }
})

accordion()
slider()

console.log('main.js done!')
