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
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AllBlogs',
  props: ['blogsProp'],
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
