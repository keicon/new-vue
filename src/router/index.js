import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import indexMall from '@/components/page/indexMall'
import index from '@/components/page/index.vue'

import home from '@/components/page/home.vue'
import search from '@/components/page/search.vue'
import shopcart from '@/components/page/shopcart.vue'
import me from '@/components/page/me.vue'
import list from '@/components/page/list.vue'
import Inside from '@/components/page/Inside.vue'
import complete from '@/components/page/complete.vue'
import chantInfo from '@/components/page/chantInfo.vue'
import register from '@/components/page/register.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          redirect: 'home'
        },
        {
          path: 'home',
          component: home
        },
        {
          path: 'search',
          component: search
        }
      ]
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/me',
      component: me
    },
    {
      path: "/list/:id",
      component: list,
    }
    ,
    {
      path: "/Inside",
      component: Inside,
    },
    {
      path: "/complete",
      component: complete
    },
    {
      path: "/chantInfo",
      component: chantInfo
    },
    {
      path: "/register",
      component: register
    }
  ]
})
