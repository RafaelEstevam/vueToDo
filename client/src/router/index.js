import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index/HelloWorld'
import Posts from '@/components/posts/Posts'
import NewPost from '@/components/posts/NewPosts'
import EditPost from '@/components/posts/EditPosts'
import _404 from '@/components/errors/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
      path: '*',
      component: _404
    }
  ]
})
