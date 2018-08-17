<template>
    <div>
        <div class="article-text">
            <vuemarkdown :source="message"></vuemarkdown>
        </div>
        <div class="Grid Grid--withExtraWideGutter container--cases">
            <casestudy :result="caseStudy.fields" v-for="caseStudy in caseStudies" :key="caseStudy.id" class="Grid-cell u-md-size1of3"></casestudy>
        </div>
        
        <div class="ContentWidth" v-if="bios">
            <h3 class="container footer-heading">
                <span>Leadership Bios</span>
            </h3>
            <ol class="bio">
                <li class="container" v-for="bio in bios" :key="bio.id">
                    <div class="bio-photo">
                        <img :src="bio.fields.image.fields.file.url">
                    </div>
                    <div class="bio-detail">
                        <vuemarkdown :source="bio.fields.message"></vuemarkdown>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    import casestudy from "../Components/casestudy.vue";
    import vuemarkdown from 'vue-markdown'
    import client from '@/Scripts/contentful'

    export default {
        name: 'Start',
        props: ['client'],
        data() {
            return {
                title: '',
                message: '',
                caseStudies: [],
                bios: null
            };
        },
        mounted() {
            let vm = this

            client
                .getEntries({
                    content_type: "category",
                    'fields.showOnHome': true
                })
                .then(function(response) {
                    if(!response.items.length) return

                    let fieldData = response.items[0]
                    let contentId = fieldData.sys.id

                    renderCategory(fieldData.fields)
                })
                .catch(console.error)

            function renderCategory(data) {
                vm.title  = data.title
                vm.message  = data.message
                vm.bios  = data.bios
                vm.caseStudies = data.caseStudies
            }
        },
        components: {
            casestudy,
            vuemarkdown
        }
    }
</script>

<style lang="less" scoped>
    
</style>