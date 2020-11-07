<template>
  <div class="allBlogs bg-transparent col-4 justify-content-around ">
    <router-link :to="{name: 'ActiveBlog', params: {blogId: blogsProp.id}}">
      <div class="m-5 text-dark justify-content-between text-center">
        <h1 class="text-center">
          {{ blogsProp.title }}
        </h1>
        <h6>
          Author: {{ blogsProp.creator.name }}
        </h6>
        <button class="btn btn-danger" v-if="blogsProp.creatorEmail == profile.email" @click="deleteBlog(blogId)">
          Delete Blog
        </button>
      </div>
    </router-link>
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
      deleteBlog(blogId) {
        allBlogsService.deleteBlog(route.params.blogId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
