<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sourceData from "@/data.json";

import PostList from "@/components/PostList.vue";
import PostEditor from "@/components/PostEditor.vue";

import { Posts, Post } from "@/models/Posts";
import { Threads, Thread } from "@/models/Threads";

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
      threads: sourceData.threads as Threads,
      posts: sourceData.posts as Posts,
    };
  },
  components: {
    PostList,
    PostEditor,
  },
  computed: {
    thread() {
      return sourceData.threads.find((thread) => thread.id === this.id) as Thread;
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id) as Posts;
    },
  },
  methods: {
    addPost(enventData: { post: Post }) {
      const post = {
        ...enventData.post,
        threadId: this.id,
      };

      this.posts.push(post);
      this.thread?.posts.push(post.id);
    },
  },
});
</script>

<style scoped></style>
