<template>
  <div class="home">
    <div class="row my-3">
      <div class="col-12 text-center">
        <h1>Blogs</h1>
        <button class="btn bg-transparent grow">
          <h2><i class="far fa-plus-square"></i></h2>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1">
        <div class="row">
          <allBlogs v-for="b in blogs" :key="b.title" :blogs-prop="b" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { allBlogsService } from '../services/AllBlogsService'
import allBlogs from '../components/AllBlogsComponents'
export default {
  name: 'Home',
  setup() {
    onMounted(() => { allBlogsService.getAllBlogs() })
    return {
      blogs: computed(() => AppState.allBlogs)
    }
  },
  components: { allBlogs }
}
</script>
