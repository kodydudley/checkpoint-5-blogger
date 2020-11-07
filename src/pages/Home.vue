<template>
  <div class="home">
    <div class="row my-3">
      <div class="col-12 text-center">
        <h6>Create Your Own Blog</h6>
        <form @submit.prevent="createBlog" action="">
          <div class="col-8 offset-2 my-2">
            <input type="text" placeholder="Blog Title" class="form-control" v-model="state.newBlog.title">
          </div>
          <div class="col-8 offset-2 my-2">
            <input type="text" placeholder="Blog Body" class="form-control" v-model="state.newBlog.body">
          </div>
          <button type="submit" class="btn bg-transparent grow">
            <h2><i class="far fa-plus-square"></i></h2>
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-primary">
          View All Blogs
        </h1>
      </div>
      <div class="col-10 offset-1">
        <div class="row">
          <allBlogs v-for="b in blogs" :key="b.title" :blogs-prop="b" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { allBlogsService } from '../services/AllBlogsService'
import allBlogs from '../components/AllBlogsComponents'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      newBlog: {}
    })
    onMounted(() => {
      allBlogsService.getAllBlogs()
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      blogs: computed(() => AppState.allBlogs),
      createBlog() {
        console.log(state.newBlog.title, state.newBlog.body)
        allBlogsService.createBlog(state.newBlog)
      }
    }
  },
  components: { allBlogs }
}
</script>
