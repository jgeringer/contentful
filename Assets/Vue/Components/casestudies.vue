<template>
  <div>
      <h1 v-text="title"></h1>
      <div class="article-text" v-html="message"></div>
      <div class="Grid">
          <casestudy :result="item.fields" v-for="item in items" :key="item.id"></casestudy>
      </div>
  </div>
</template>

<script>
import casestudy from "./casestudy.vue";

var contentful = require('contentful')
//import contentful from 'contentful'

export default {
  name: "casestudies",
  data() {
    return {
      title: '',
      message: '',
      items: []
    };
  },
  mounted() {
    console.log("mounted case studies");

    var client = contentful.createClient({
      space: "008bxitgtft2",
      accessToken:
        "Dac4229750f09cd6d98f70a28027d9f0d8f0e696d8e3891fbcb588d010a006d4"
    });

    let vm = this

    client
      .getEntries({
        content_type: "category",
        "fields.title": "Wilson"
      })
      .then(function(response) {
        console.log(response.items);
        let fieldData = response.items[0];
        let contentId = fieldData.sys.id;
        renderCategory(fieldData.fields);
        getCaseStudies(contentId);
      })
      .catch(console.error);

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
    casestudy: casestudy
  }
};
</script>

<style lang="less" scoped>
</style>