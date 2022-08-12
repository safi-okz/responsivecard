import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from '@/views/CardView.vue';
import EditorView from '@/views/EditorView.vue';
import ShowEditor from '@/views/ShowEditor.vue';
import VueThree from '@/views/VueThree.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vue',
    name: "VueThree",
    component: VueThree
  },
  {
    path: '/show',
    name: 'Show',
    component: ShowEditor
  },
  {
    path: '/editor',
    name: 'Editor',
    component: EditorView
  },
  {
      path: '/card',
      name: "Card",
      component: CardView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
