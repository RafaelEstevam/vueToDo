import Vue from 'vue'
import Router from 'vue-router'

//import Header from '@/components/common/Header'

import Posts from '@/components/posts/Posts'
import NewPost from '@/components/posts/NewPosts'
import EditPost from '@/components/posts/EditPosts'
import Tasks from '@/components/tasks/Tasks'
import NewTasks from '@/components/tasks/NewTasks'
import EditTasks from '@/components/tasks/EditTasks'
import _404 from '@/components/errors/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/tasks',
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
      path: '/',
      component: _404
    }
  ]
})
