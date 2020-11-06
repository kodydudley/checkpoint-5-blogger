<template>
  <div class="allBlogs card bg-transparent col-3 justify-content-around">
    <div class="my-3 justify-content-between text-center">
      <h1 class="text-center">
        {{ blogsProp.title }}
      </h1>
      <h6>
        Author: {{ blogsProp.creator.name }}
      </h6>
    </div>
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
