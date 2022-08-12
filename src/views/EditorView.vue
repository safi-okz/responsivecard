<template>
    <div>
        <QuillEditor ref="quillEditor" v-model:content="content" theme="snow" toolbar="full"></QuillEditor>
        
    </div>
    <button @click.prevent="saveData">Save</button>

    <div>
        {{content}}
    </div>
    <!-- <div class="ql-blank">{{ ddd }}</div> -->
    
    <div id="text"></div>
</template>

<script setup>
import {ref,  } from 'vue'
import { QuillEditor } from '@vueup/vue-quill';
import "@vueup/vue-quill/dist/vue-quill.snow.css"


const delta = ref('');
// const props = defineProps(['content']);
const content = ref('Hellow contents');

const saveData = () => {
    console.log('SAAvvase')
    const editor = JSON.stringify(content.value);
    const output = document.getElementById('text');
    output.innerHTML = content.value;
    localStorage.setItem('editorD', editor);
    delta.value = editor;
}


</script>
