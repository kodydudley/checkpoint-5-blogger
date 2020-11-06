<template>
  <div class="activeBlog container-fluid" v-if="activeBlog.id">
    <div class="row">
      <div class="col-6 offset-3 text-center mt-5 text-dark bg-transparent">
        <img :src="activeBlog.creator.picture" alt="" srcset="" class="img-fluid">
        <h1 class="m-3">
          Title: {{ activeBlog.title }}
        </h1>
        <h6>Author: {{ activeBlog.creator.name }}</h6>
        <h4 class="m-3">
          {{ activeBlog.body }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { allBlogsService } from '../services/AllBlogsService'
import { AppState } from '../AppState'
export default {
  name: 'ActiveBlog',
  setup() {
    const route = useRoute()
    onMounted(() => { allBlogsService.getActiveBlog(route.params.blogId) })
    return {
      activeBlog: computed(() => AppState.activeBlog)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
