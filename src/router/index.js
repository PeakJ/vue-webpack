import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestPage from '@/pages/TestPage'

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
      path: '/test',
      name: 'TestPage',
      component: TestPage,
      meta: {
        title: 'TestPage'
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
