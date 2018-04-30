import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import New from '@/components/New'
import Too1 from '@/components/Too1'
import Too2 from '@/components/Too2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/new',
      component:New,
      children:[
        {
          path:'/new/too1',
          component:Too1
        },
        {
          path:'/new/too2',
          component:Too2
        }
      ]
    }
  ]
})
