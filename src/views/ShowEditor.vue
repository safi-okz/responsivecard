<template>
  <div id="app">
    <vue-editor v-model="content"></vue-editor>
    <div v-html="content"></div>
  </div>
</template>

<script>
//   import { VueEditor } from '../vue2-editor'
//   import VueEditor  from 'd:/VueResponsive/cardresponsive/node_modules/vue2-editor/dist/vue2-editor.common'
  import {VueEditor}  from '../../node_modules/vue2-editor/dist/vue2-editor.common';
  

  export default {
      components: {
    VueEditor
  },
    data() {
      return {
        content: '<h1>Initial Content</h1>'  
      }
    }
  }
</script>