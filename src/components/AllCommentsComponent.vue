<template>
  <div class="allComments">
    <h5>
      {{ commentsProp.creatorEmail }}
    </h5>
    <h3 class="mb-4">
      {{ commentsProp.body }}
      <button @click="deleteComment()" class=" d-flex float-right text-danger btn btn-sm">
        <i class="far fa-trash-alt"></i>
      </button>
    </h3>
    <form class="form-group" @submit.prevent="editComment">
      <textarea v-model="state.editComment.body"
                name=""
                id=""
                cols="30"
                rows="2"
      ></textarea>
      <button class="btn btn-block btn-transparent btn-outline-danger" type="submit">
        Edit Comment
      </button>
    </form>
  </div>
</template>

<script>
import { allBlogsService } from '../services/AllBlogsService'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'

export default {
  name: 'AllComments',
  props: ['commentsProp'],

  setup(props) {
    const route = useRoute()
    const state = reactive({
      editComment: {}
    })

    return {
      state,
      deleteComment() {
        allBlogsService.deleteComment(props.commentsProp._id)
        route.push({ name: 'Profile' })
      },
      editComment() {
        allBlogsService.editComment(props.commentsProp._id, state.editComment)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
