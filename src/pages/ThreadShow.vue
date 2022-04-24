<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sourceData from "@/data.json";

import PostList from "@/components/PostList.vue";

export default defineComponent({
  name: "ThreadShow",
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
    };
  },
  components: {
    PostList,
  },
  computed: {
    thread() {
      return sourceData.threads.find((thread) => thread.id === this.id);
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id);
    },
  },
});
</script>

<style scoped></style>
