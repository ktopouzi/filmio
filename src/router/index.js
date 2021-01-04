import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../components/Generic/404.vue'
import MovieDetails from '../views/MovieDetails.vue'
import Search from '../views/Search.vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/popular',
    name: 'Popular',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Popular.vue')
    }
  },
  {
    path: '/search',
    name: 'Movie Search',
    component: Search
  },
  {
    path: '/movies/:id',
    name: 'Movie Details',
    component: MovieDetails
  },
  {
    path: '*',
    name: 'Page not found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router