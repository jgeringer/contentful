<template>
    <div>
        <h1 v-text="title"></h1>
        <div class="article-text">
            <vuemarkdown :source="message"></vuemarkdown>
        </div>
        <div class="Grid">
            <casestudy :result="item.fields" v-for="item in items" :key="item.id"></casestudy>
        </div>
    </div>
</template>

<script>
import casestudy from "../Components/casestudy.vue";
import vuemarkdown from 'vue-markdown'

var contentful = require('contentful')

export default {
    name: 'CaseStudies',
    data() {
        return {
            title: '',
            message: '',
            items: []
        };
    },
    props: ['id', '$route.params.id'],
     mounted() {
        //console.warn(' $route.params.id: ',  this.id)
        console.warn(' this: ',  this.$route.params.id) 

        var client = contentful.createClient({
            space: "008bxitgtft2",
            accessToken: "Dac4229750f09cd6d98f70a28027d9f0d8f0e696d8e3891fbcb588d010a006d4"
        })

        let vm = this

        client
        .getEntries({
            content_type: "category",
            'fields.slug': this.$route.params.id
            //"fields.title": "Filippo Berio" //"Wilson" //"Filippo Berio"
        })
        .then(function(response) {
            if(!response.items.length) return

            console.log(response.items);

            let fieldData = response.items[0]
            let contentId = fieldData.sys.id

            renderCategory(fieldData.fields)
            getCaseStudies(contentId)
        })
        .catch(console.error)

        function renderCategory(data) {
            console.log("data:", data);
            vm.title  = data.title
            vm.message  = data.message
        }

        function getCaseStudies(contentId) {
        client
            .getEntries({
            links_to_entry: contentId // Wilson (Shows json for everything that's linked to Wilson)
            })
            .then(function(response){
            console.warn('response..', response.items)
            vm.items = response.items //console.log(response.items)
            console.warn(vm)
            })
            .catch(console.error);
        }
    },
    components: {
        casestudy,
        vuemarkdown
    }
}
</script>

<style lang="less" scoped>
    p{font-size:16px;color:#fff;background:#000;}
    a{color:aqua;}
</style>