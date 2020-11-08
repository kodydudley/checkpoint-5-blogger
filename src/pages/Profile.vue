<template>
  <div class="about body-font text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
  </div>
  <div>
    <profileBlogs v-for="blog in blogs" :profile-blogs-prop="blog" :key="blog" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import profileBlogs from '../components/ProfileBlogs'
import { allBlogsService } from '../services/AllBlogsService'
export default {
  name: 'Profile',
  setup() {
    onMounted(() =>
      allBlogsService.getProfileBlogs()
    )
    return {
      profile: computed(() => AppState.profile),
      blogs: computed(() => AppState.profileBlogs)
    }
  },
  components: { profileBlogs }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
