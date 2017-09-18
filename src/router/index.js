import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Schedule from '@/components/Schedule'
import Tabs from '@/components/Tabs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/plan',
      name: 'schedule',
      component: Schedule
    }
  ]
})
