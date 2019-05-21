import Vue from 'vue'
import Router from 'vue-router'

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login')

const Layout = () => import(/* webpackChunkName: "layout" */ '@/layout/Index')

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Index')

const Document = () => import(/* webpackChunkName: "document" */ '@/views/document/Index')
const Conventions = () => import(/* webpackChunkName: "document" */ '@/views/document/Conventions')

const Menu1 = () => import(/* webpackChunkName: "muitiMenu" */ '@/views/multi-menu/menu1/Index')
const Menu11 = () => import(/* webpackChunkName: "muitiMenu" */ '@/views/multi-menu/menu1/Menu1-1')
const Menu12 = () => import(/* webpackChunkName: "muitiMenu" */ '@/views/multi-menu/menu1/Menu1-2')
const Menu2 = () => import(/* webpackChunkName: "muitiMenu" */ '@/views/multi-menu/Menu2')

const Form1 = () => import(/* webpackChunkName: "form" */ '@/views/form/Form')
const Form2 = () => import(/* webpackChunkName: "form" */ '@/views/form/Form2')

const List = () => import(/* webpackChunkName: "list" */ '@/views/list/List')

const Err404 = () => import(/* webpackChunkName: "404" */ '@/views/error/404')

Vue.use(Router)

/*
  * hidden: true  默认 false,当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面
  * redirect: 'noredirect'  当设置 noredirect 的时候该路由在面包屑导航中不可被点击，如404
  * name: 'router-name' 设定路由的名字
  * meta: {
      title: 'title'  设置该路由在侧边栏和面包屑中展示的名字
      icon: ''  设置该路由的图标
      breadcrumb: false 如果设置为false，则不会在breadcrumb面包屑中显示
    }
*/

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    hidden: true
  },
  {
    path: '/404',
    name: 'err404',
    component: Err404,
    hidden: true
  }
]

export const asyncRoutes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { title: '首页', icon: 'home', permission: ['dashboard'] }
      }
    ]
  },
  {
    path: '/document',
    name: 'document',
    component: Layout,
    meta: {
      title: '文档',
      icon: 'file-text'
    },
    children: [
      {
        path: 'index',
        name: 'documentIndex',
        component: Document,
        meta: { title: '索引' }
      },
      {
        path: 'conventions',
        name: 'donventions',
        component: Conventions,
        meta: { title: '规范' }
      }
    ]
  },
  {
    path: '/list',
    name: 'list',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'listIndex',
        component: List,
        meta: { title: '列表', icon: 'list', permission: ['list'] }
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: Layout,
    meta: {
      title: '表单',
      icon: 'file',
      permission: ['form']
    },
    children: [
      {
        path: 'form1',
        name: 'form1',
        component: Form1,
        meta: { title: '表单' }
      },
      {
        path: 'form2',
        name: 'form2',
        component: Form2,
        meta: { title: '分步表单' }
      }
    ]
  },
  {
    path: '/menu',
    name: 'menu',
    component: Layout,
    meta: {
      title: '多级菜单',
      icon: 'th',
      permission: ['multiMenu']
    },
    children: [
      {
        path: 'menu1',
        name: 'menu1',
        component: Menu1,
        meta: { title: '菜单1' },
        children: [
          {
            path: 'menu1-1',
            name: 'menu1-1',
            component: Menu11,
            meta: { title: '菜单1-1' }
          },
          {
            path: 'menu1-2',
            name: 'menu1-2',
            component: Menu12,
            meta: { title: '菜单1-2' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'menu2',
        component: Menu2,
        meta: { title: '菜单2' }
      }
    ]
  },
  {
    path: '*',
    name: 'all',
    component: Err404,
    hidden: true
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
export default router
