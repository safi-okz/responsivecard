<template>
  <div>
    <div class="container">
      <div class="flex">
        <button class="grid" @click="gridView">Grid view</button>
        <button class="list" @click="listViewFunction">List View</button>
         <button class="list" @click="gridViewThreeFunction">Three</button>
        <!--<button class="list" @click="gridViewFourFunction">Four</button> -->
      </div>
      <div class="row flex-wrap">
          <div class="row  col-sm-12 flex-wrap"  :class="[showColResult, three]" v-for="product in products" :key="product.id">
              <div class="card card-body " :class="[showCardResult]">
                <img :src="product.img" alt="" class="img-fluid img_width">
                <div>
                <h4>{{ product.name }}</h4>
                <p>{{ product.description }}</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import patato from '@/assets/img/patato.png';

// [!listView ? 'col-xl-3 col-md-4' : 'col-xl-12']
// [!listView ? '' : 'd-flex flex-md-row flex-sm-column']

const products = ref([
        {
          id: 1,
          name: 'Patato',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 2,
          name: 'Tomato',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 3,
          name: 'Peach',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 4,
          name: 'Apple',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 5,
          name: 'Mango',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 6,
          name: 'Banana',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 7,
          name: 'Graps',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 8,
          name: 'Fruits',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 9,
          name: 'Vegitable',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 10,
          name: 'Gjsdglk',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 11,
          name: 'jkdflsjf',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 12,
          name: 'utirut',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 13,
          name: 'bnvmbv',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 14,
          name: 'lllllll',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 15,
          name: 'qqqqq',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 16,
          name: 'ppppp',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },
        {
          id: 17,
          name: 'ggggg',
          img: patato,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, maxime quod dicta voluptates quidem voluptatum in dolorum amet deserunt temporibus corporis iure pariatur vel sapiente accusamus? Perferendis aspernatur quas architecto.'
        },

]);

const listView = ref(false);
const grid = ref(' col-xl-3 col-md-4');
const list = ref(' col-xl-12');
const cardStyle = ref(' d-flex flex-md-row flex-sm-column');
const colSix = ref('col-md-6 col-xl-6');
const three = ref(false);
const showColResult = ref(null);
const showCardResult = ref(null);

const gridView = () => {
    listView.value = false;
    if(grid.value){
          showColResult.value = grid.value;
          showCardResult.value = null;
    }
}

const listViewFunction = () => {
        listView.value = true;
        if(list.value){
          showColResult.value = list.value;
          showCardResult.value = cardStyle.value;
        }
}

// const col_rr = ref('col-6')

const gridViewThreeFunction = () => {
     three.value = !three.value ?  colSix.value  : '';
}

onMounted(() => gridView())

</script>

<style lang="scss" scoped>
.img_width{
  width: 20rem;
}
</style>
