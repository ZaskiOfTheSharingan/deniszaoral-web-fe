<template>
  <div class="py-12">
    <h2 class="font-bold text-3xl mb-2">Blog</h2>
    <div class="flex flex-col items-center gap-5 h-full">
      <div
        v-for="(post, index) in posts"
        class="card-shadow w-full p-5 bg-sky-50 rounded-lg max-w-lg dark:bg-slate-50"
        @click="routeToBlog('/blog/' + post.id)"
      >
        <h3 class="font-bold text-2xl text-center mb-2">{{ post.title }}</h3>
        <img :src="post.image" class="object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
import blogs from '@/content/blog.json'

export default {
  data() {
    return {
      posts: [],
    }
  },
  created() {
    this.getBlogs()
  },
  methods: {
    async getBlogs() {
      this.posts = await blogs.data
    },
    routeToBlog(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style scoped>
.card-shadow {
  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.75);
}
</style>
