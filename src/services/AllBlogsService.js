import { AppState } from '../AppState'
import { api } from './AxiosService'

class AllBlogsService {
  async getAllBlogs() {
    try {
      const res = await api.get('api/blogs')
      AppState.allBlogs = res.data
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async getActiveBlog(blogId) {
    try {
      const res = await api.get('api/blogs/' + blogId)
      AppState.activeBlog = res.data
      console.log((res.data))
    } catch (error) {
      console.error(error)
    }
  }

  async createBlog() {
    try {
      AppState.allBlogs.push('/')
      console.log(AppState.allBlogs)
    } catch (error) {
      console.error(error)
    }
  }

  async getComments(blogId) {
    try {
      const res = await api.get('api/blogs/' + blogId + '/comments')
      AppState.comments = res.data.body
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
}

export const allBlogsService = new AllBlogsService()
