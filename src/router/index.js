import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import News from '@/components/News'
import Teams from '@/components/Teams'
import Content from '@/components/Content'
import Partners from '@/components/Partners'
import Contact from '@/components/Contact'
import Jobs from '@/components/Jobs'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs
    } 
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  } 
})
