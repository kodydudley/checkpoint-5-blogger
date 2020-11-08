<template>
  <div class="activeBlog container-fluid body-font" v-if="activeBlog.id">
    <div class="row">
      <div class="col-6 offset-3 text-center mt-5 text-dark bg-transparent">
        <img :src="activeBlog.creator.picture"
             style="height:200px"
             alt=""
             srcset=""
             class="img-fluid"
        >
        <h1 class="m-3">
          Title: {{ activeBlog.title }}
        </h1>
        <h6>Author: {{ activeBlog.creator.name }}</h6>
        <h4 class="m-3">
          {{ activeBlog.body }}
        </h4>
        <div class="">
          <button class="btn btn-block btn-transparent btn-outline-danger" @click="deleteBlog(blogId)" v-if="profile.email == activeBlog.creatorEmail">
            Delete Blog
          </button>
        </div>
        <h2 class="mt-5">
          Comments:
        </h2>
        <form v-if="profile.email" @submit.prevent="createComments" action="">
          <input class="mt-3 mb-3" v-model="state.body">
          <button type="submit">
            <i class="far fa-plus-square"></i>
          </button>
        </form>
        <allComments v-for="c in comments" :key="c.body" :comments-prop="c" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { allBlogsService } from '../services/AllBlogsService'
import allComments from '../components/AllCommentsComponent'
import { AppState } from '../AppState'
export default {
  name: 'ActiveBlog',
  setup() {
    const state = reactive({
      body: '',
      newComment: {},
      props: ['blogsProp']
    })
    const route = useRoute()
    onMounted(() => {
      allBlogsService.getActiveBlog(route.params.blogId)
      allBlogsService.getComments(route.params.blogId)
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      activeBlog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.comments),
      createComments() {
        allBlogsService.createComments(state.body)
      },
      deleteBlog() {
        allBlogsService.deleteBlog(route.params.blogId)
      }
    }
  },
  components: {
    allComments
  }
}
</script>

<style lang="scss" scoped>

</style>
