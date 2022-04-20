<template>
  <div>Hello from page home</div>
  <div v-for="thread in threads" :key="thread.id">
    <h1>{{ thread.title }}</h1>
    <div v-for="postId in thread.posts" :key="postId">
      <p>{{ userById(postById(postId).userId).name }}</p>
      <p>{{ postById(postId).text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import sourceData from '@/data.json';

export default defineComponent({
  name: 'PageHome',
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  methods: {
    postById(postId: string) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId: string) {
      return this.users.find((u) => u.id === userId);
    },
  },
});
</script>

<style scoped></style>
