import Vue from 'vue'
import Router from 'vue-router'

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login')

const Layout = () => import(/* webpackChunkName: "layout" */ '@/layout/Index')

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard')

const Document = () => import(/* webpackChunkName: "document" */ '@/views/document/Index')
const Conventions = () => import(/* webpackChunkName: "document" */ '@/views/document/Conventions')

const Menu1 = () => import(/* webpackChunkName: "muitiMenu" */ '@/views/multi-menu/menu1/Index')
const Menu11 = () => import(/* webpackChunkName: "muitiMenu" */ '@/views/multi-menu/menu1/Menu1-1')
const Menu12 = () => import(/* webpackChunkName: "muitiMenu" */ '@/views/multi-menu/menu1/Menu1-2')
const Menu2 = () => import(/* webpackChunkName: "muitiMenu" */ '@/views/multi-menu/Menu2')

const Form1 = () => import(/* webpackChunkName: "form" */ '@/views/form/Form')
const Form2 = () => import(/* webpackChunkName: "form" */ '@/views/form/Form2')

const Permission = () => import(/* webpackChunkName: "permission" */ '@/views/permission/Permission')

const Err404 = () => import(/* webpackChunkName: "404" */ '@/views/error/404')

Vue.use(Router)

/*
  * hidden: true  默认 false,当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面
  * redirect: 'noredirect'  当设置 noredirect 的时候该路由在面包屑导航中不可被点击，如404
  * name: 'router-name' 设定路由的名字
  * meta: {
      roles: ['super-admin', 'admin'] 设置该路由进入的权限，支持多个权限叠加
      title: 'title'  设置该路由在侧边栏和面包屑中展示的名字
      icon: ''  设置该路由的图标
      breadcrumb: false 如果设置为false，则不会在breadcrumb面包屑中显示
    }
*/

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { title: '首页', icon: 'menu' }
      }
    ]
  },
  {
    path: '/document',
    name: 'Document',
    component: Layout,
    meta: {
      title: '文档',
      icon: 'document'
    },
    children: [
      {
        path: 'index',
        name: 'DocumentIndex',
        component: Document,
        meta: { title: '索引' }
      },
      {
        path: 'conventions',
        name: 'Conventions',
        component: Conventions,
        meta: { title: '规范' }
      }
    ]
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Layout,
    meta: {
      title: '多级菜单',
      icon: 'goods'
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        component: Menu1,
        meta: { title: '菜单1' },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu1-1',
            component: Menu11,
            meta: { title: '菜单1-1' }
          },
          {
            path: 'menu1-2',
            name: 'Menu1-2',
            component: Menu12,
            meta: { title: '菜单1-2' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: Menu2,
        meta: { title: '菜单2' }
      }
    ]
  },
  {
    path: '/404',
    name: 'Err404',
    component: Err404,
    hidden: true
  }
]

export const asyncRoutes = [
  {
    path: '/permission',
    name: 'Permission',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'PermissionIndex',
        component: Permission,
        meta: { title: '权限', icon: 'success', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/form',
    name: 'Form',
    component: Layout,
    meta: {
      title: '表单',
      icon: 'picture'
    },
    children: [
      {
        path: 'form1',
        name: 'Form1',
        component: Form1,
        meta: { title: '表单' }
      },
      {
        path: 'form2',
        name: 'Form2',
        component: Form2,
        meta: { title: '权限表单2', roles: ['admin'] }
      }
    ]
  },
  {
    path: '*',
    name: 'All',
    component: Err404,
    hidden: true
  }
]

export default new Router({
  routes: constantRoutes
})
