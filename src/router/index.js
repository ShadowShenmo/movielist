import Vue from 'vue';
import VueRouter from 'vue-router';
import MovieList from '../components/MovieList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MovieList',
    component: MovieList
  }
];

const router = new VueRouter({
  routes
});

export default router;