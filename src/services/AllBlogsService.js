import router from '../router'
import { AppState } from '../AppState'
import { api } from './AxiosService'

class AllBlogsService {
  async getAllBlogs() {
    try {
      const res = await api.get('api/blogs')
      console.log(res.data)
      AppState.allBlogs = res.data
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

  async createBlog(data) {
    try {
      const res = await api.post('api/blogs/', data)
      router.push({ name: 'Profile' })
      this.getAllBlogs()
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteBlog(blogId) {
    try {
      const res = await api.delete('api/blogs/' + blogId)
      router.push({ name: 'Home' })
      AppState.allBlogs = res.data
      this.getAllBlogs()
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteComment(commentId) {
    try {
      const res = await api.delete('api/comments/' + commentId)
      // router.push({ name: 'Home' })
      AppState.comments = res.data
      console.log(res.data)
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
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async getProfileBlogs() {
    try {
      const res = await api.get('api/profile/blogs')
      console.log(res.data)
      AppState.profileBlogs = res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const allBlogsService = new AllBlogsService()
