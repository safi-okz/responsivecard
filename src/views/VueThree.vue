<template>
  <div id="app">
    
    <vue-editor v-model="content"></vue-editor>
    <button @click="handleSavingContent">Save</button>
  </div>
  <pre>
    <div  v-html="content"></div>
  </pre>
  <h1>Content</h1>
  <div v-html="le"></div>
</template>

<script>
// import { VueEditor } from "@vue3-editor";
import { VueEditor } from "../../node_modules/vue3-editor/dist/vue3-editor.common";

export default {
  components: {
    VueEditor
  },

  data() {
    return {
      content: "<h3>Initial Content</h3>",
      le: ''
    };
  },

  methods: {
    handleSavingContent: function() {
      // You have the content to save
      console.log(this.content);
      const ddd = JSON.stringify(this.content);
        this.le = JSON.parse(ddd);
      console.log(ddd);
    }
  }
};
</script>