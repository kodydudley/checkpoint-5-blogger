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
  </div>
</template>

<script>
import { allBlogsService } from '../services/AllBlogsService'
import { useRoute } from 'vue-router'
export default {
  name: 'AllComments',
  props: ['commentsProp'],

  setup(props) {
    const route = useRoute()

    return {
      deleteComment() {
        allBlogsService.deleteComment(props.commentsProp._id)
        route.push({ name: 'Profile' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
