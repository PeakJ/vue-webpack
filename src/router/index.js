import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestPage from '@/pages/TestPage'
import TestVant from '@/pages/TestVant'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'HelloWorld'
      }
    }, {
      path: '/testPage',
      name: 'TestPage',
      component: TestPage,
      meta: {
        title: 'TestPage'
      }
    },
    {
      path: '/testVant',
      name: 'TestVant',
      component: TestVant,
      meta: {
        title: 'TestVant'
      }
    }
  ]
})
router.beforeEach((to,form,next) =>{
  /*路由变化修改title*/
  if(to.meta.title){
      document.title=to.meta.title
  }
  next();
})
export default router
