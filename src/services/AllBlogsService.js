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

  async createBlog(blogData) {
    try {
      // const newBlog = {
      //   title: title,
      //   body: body,
      //   imgUrl: imgUrl,
      //   tags: tags
      // }
      const res = await api.post('api/blogs/', blogData)
      this.getAllBlogs()
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  async createComments(data) {
    try {
      const newComment = {
        body: data,
        blog: AppState.activeBlog.id
      }
      const res = await api.post('api/comments', newComment)
      this.getComments(AppState.activeBlog.id)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  async getComments(blogId) {
    try {
      const res = await api.get('api/blogs/' + blogId + '/comments')
      AppState.comments = res.data
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
}

export const allBlogsService = new AllBlogsService()
