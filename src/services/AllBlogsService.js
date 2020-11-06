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
}

export const allBlogsService = new AllBlogsService()
