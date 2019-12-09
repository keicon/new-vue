// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import {
  Button,Dialog , Tabbar, TabbarItem, Row, Col, Swipe, SwipeItem, Lazyload, Sidebar, SidebarItem, List, NoticeBar, NavBar, Field,
  Tab, Tabs, GoodsAction, GoodsActionIcon, GoodsActionButton, DropdownMenu, DropdownItem, SubmitBar, Checkbox,Toast,Stepper 
} from 'vant'
Vue.use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Row)
  .use(Col)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Sidebar)
  .use(SidebarItem)
  .use(List)
  .use(NoticeBar)
  .use(Field)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(SubmitBar)
  .use(Checkbox)
  .use(Toast)
  .use(Stepper)
  .use(Dialog)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
