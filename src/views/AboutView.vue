<template>
  <div>
    <div class="container">
      <div class="flex">
        <button class="grid">Grid view</button>
        <button class="list">List View</button>
      </div>
      <div class="row flex-wrap">
          <div class="col-md-4 col-xl-3 col-sm-12" v-for="product in products" :key="product.id">
              <div class="card card-body">
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
import {ref} from 'vue';
import patato from '@/assets/img/patato.png'

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

</script>

<style lang="scss" scoped>
.img_width{
  width: 20rem;
}
</style>
