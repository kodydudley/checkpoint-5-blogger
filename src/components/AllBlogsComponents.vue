<template>
  <div class="allBlogs bg-transparent col-4 justify-content-around ">
    <div class="m-3 justify-content-between card text-center shadow-lg">
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
