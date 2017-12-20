import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
