import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import blog from '../pages/blog.vue'
import product from '../pages/product.vue'
import aboutUs from '../pages/aboutUs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/product',
      name: 'product',
      component: product
    }
  ]
})
