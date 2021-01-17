import { createRouter, createWebHistory } from 'vue-router';
import Test from './components/Test.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
    // todo: do an api lookup here, in beforeEnter, to check for existence
  }
];

export default createRouter({
  routes,
  history: createWebHistory()
});
