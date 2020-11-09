<template>
  <div class="ProfileBlogs body-font">
    <div class="row">
      <div class="col-6 offset-3 text-center my-3 text-dark">
        <router-link class="text-dark" :to="{name: 'ActiveBlog', params:{blogId: blogs._id}}">
          <h2>{{ blogs.title }}</h2>
        </router-link>
        <h6>{{ blogs.body }}</h6>
        <div class="row">
          <div class="col-6">
            <button class="btn btn-warning col-6  mb-3">
              Edit Blog Post
            </button>
          </div>
          <div class="col-6">
            <button @click="deleteBlog()" class="btn btn-danger col-6  mb-3">
              Delete Blog Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from 'vue'

// import { allBlogsService } from '../services/AllBlogsService'
export default {
  name: 'ProfileBlogs',
  props: ['profileBlogsProp'],
  setup(props) {
    return {
      profile: computed(() => AppState.profile),
      blogs: computed(() => props.profileBlogsProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
