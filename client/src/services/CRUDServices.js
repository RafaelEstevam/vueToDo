import Api from '@/services/Api'

export default{
  fetchPosts (route) {
    return Api().get(route)
  },
  
  addPost (route, params) {
    return Api().post(route, params)
  },

  updatePost (route, params) {
    return Api().put(route + params.id, params)
  },

  getPost (route, params) {
    return Api().get(route + params.id)
  },

  deletePost (route, id) {
    return Api().delete(route + id)
  }
}