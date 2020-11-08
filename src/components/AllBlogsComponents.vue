<template>
  <div class="allBlogs bg-transparent col-4 justify-content-around body-font">
    <router-link :to="{name: 'ActiveBlog', params: {blogId: blogsProp.id}}">
      <div class=" mt-5 text-light outline-light justify-content-between text-center">
        <h2 class="text-center">
          {{ blogsProp.title }}
        </h2>
        <p>
          Author: {{ blogsProp.creatorEmail }}
        </p>
      </div>
    </router-link>
    <div class="row mt-4 mb-5">
      <div class="col-6">
        <button class="btn btn-block text-light btn-transparent btn-outline-warning" v-if="blogsProp.creatorEmail == profile.email">
          Edit Blog
        </button>
      </div>
      <div class="col-6">
        <button class="btn btn-block text-light btn-transparent btn-outline-danger" v-if="blogsProp.creatorEmail == profile.email" @click="deleteBlog(blogId)">
          Delete Blog
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { allBlogsService } from '../services/AllBlogsService'
import { useRoute } from 'vue-router'

export default {
  name: 'AllBlogs',
  props: ['blogsProp'],
  setup() {
    const route = useRoute()

    return {
      profile: computed(() => AppState.profile),
      props: computed(() => AppState.activeBlog),
      deleteBlog() {
        allBlogsService.deleteBlog(route.params.blogId)
        route.push({ name: 'Home' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
