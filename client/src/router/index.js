import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '@/components/tasks/Tasks'
import NewTasks from '@/components/tasks/NewTasks'
import EditTasks from '@/components/tasks/EditTasks'
import Categories from '@/components/categories/Categories'
import NewCategory from '@/components/categories/NewCategory'
import EditCategory from '@/components/categories/EditCategory'
import _404 from '@/components/errors/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/tasks/new',
      name: 'NewTasks',
      component: NewTasks
    },
    {
      path: '/tasks/:id',
      name: 'EditTasks',
      component: EditTasks
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/categories/new',
      name: 'NewCategory',
      component: NewCategory
    },
    {
      path: '/categories/:id',
      name: 'EditCategory',
      component: EditCategory
    },
    {
      path: '*',
      component: _404
    }
  ]
})
