'use strict'

import Vue from 'vue'
import store from '@/Scripts/store'
import router from '@/Scripts/router'
import icon from '@/Vue/Components/icon.vue'
import casestudies from '@/Vue/Components/casestudies.vue'
import first from '@Components/first.vue'
import './vueImports'
import accordion from '@/Scripts/custom/accordion.js'
import {
    slider
} from '@/Scripts/custom/slider.js'

// generate svg sprite
const files = require.context('@/Images/svg/symbol/', false, /.*\.svg$/)
files.keys().forEach(files)

let App = new Vue({ // eslint-disable-line no-unused-vars
    el: '#App',
    router,
    store,
    components: {
        icon,
        casestudies,
        first
    }
})

accordion()
slider()

console.log('main.js done!')

// var client = contentful.createClient({
//     space: '008bxitgtft2',
//     accessToken: 'Dac4229750f09cd6d98f70a28027d9f0d8f0e696d8e3891fbcb588d010a006d4'
// })

// //Gives Wilson, Filippo Berio (but does not give the id)
// // client.getEntries({
// //     content_type: 'category'
// //     //'fields.<field_name>.sys.id': '<target_entry_id>',
// //   })
// //   .then((response) => console.log(response.items))
// //   .catch(console.error)

//   client.getEntries({
//     content_type: 'category',
//     'fields.title': 'Wilson'
//   })
//   .then(function(response){
//     console.log(response.items)
//     let fieldData = response.items[0]
//     let contentId = fieldData.sys.id
//     renderCategory(fieldData.fields)
//     getCaseStudies(contentId)
//   })
//   .catch(console.error)

// function renderCategory(data){
//     console.log('data:', data)
// }

// function getCaseStudies(contentId){
// client.getEntries({
//     links_to_entry: contentId // Wilson (Shows json for everything that's linked to Wilson)
//   })
//   .then((response) => console.log(response.items))
//   .catch(console.error)
// }

// // //Wilson
// // client.getEntries({
// //     links_to_entry: '3oqjLZ3fiM62aEOaYikoaE' // Wilson (Shows json for everything that's linked to Wilson)
// //     //would love to use not have to use Entry ID, but use a friendly name instead.
// //   })
// //   .then((response) => console.log(response.items))
// //   .catch(console.error)
  

// // How do i take "Wilson" and get all of it's items
