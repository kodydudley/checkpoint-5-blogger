<template>
  <div class="ProfileBlogs">
    <div class="row">
      <div class="card col-6 offset-3 text-center my-3 shadow-sm">
        <h2>{{ blogs.title }}</h2>
        <h6>{{ blogs.body }}</h6>
        <button @click="deleteBlog()" class="btn btn-danger col-4 offset-4 mb-3">
          Delete Blog Post
        </button>
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
