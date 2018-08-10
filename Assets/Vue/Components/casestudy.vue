<template>
    <div>
        <div class="card" id="absolut">
            <div class="client-logo" v-if="result.logo">
                <img :src="result.logo.fields.file.url">
            </div>
            <div class="card-details">
                <h3>{{result.title}}</h3>
                <p>{{result.description}}</p>
            </div>
            <!-- <video width="320" height="240" preload="none" controls v-if="result.video">
                <source src="" type="video/mp4">
                Your browser does not support the video tag.
            </video> -->
            <div v-if="result.videoEmbed" v-html="result.videoEmbed"></div>
            <img :src="result.image.fields.file.url" class="card-image" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'casestudy',
        props: ['result'],
        data() {
            return {}
        },
        mounted(){
            console.log('mounted case study result...')
            console.log(this.result)
        }
    }
</script>

<style lang="less" scoped>
    
</style>