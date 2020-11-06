<template>
  <div class="home">
    <div class="row my-3">
      <div class="col-12 text-center">
        <h1>
          Blogs
        </h1>
      </div>
    </div>
    <div class="row justify-content-around">
      <allBlogs v-for="b in blogs" :key="b.title" :blogs-prop="b" />
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
