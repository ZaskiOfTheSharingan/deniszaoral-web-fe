<template>
  <div class="h-full desktop:h-screen">
    <h1 class="font-bold text-3xl">{{ post.title }}</h1>
    <img :src="post.image" class="my-4" />
    <div class="flex flex-col gap-3">
      <p
        class="text-xl"
        v-for="(paragraph, index) in post.content"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
import blogs from '@/content/blog.json'

export default {
  data() {
    return {
      post: {},
    }
  },
  created() {
    this.getBlog()
  },
  methods: {
    async getBlog() {
      const posts = await blogs.data
      console.log(this.$route.params)
      this.post = posts.find((obj) => obj.id === this.$route.params.blogId)
    },
  },
}
</script>

<style scoped></style>
