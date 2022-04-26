<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(postById(post.id).userId).name }}</a>
        <a href="#">
          <img
            :src="userById(postById(post.id).userId).avatar"
            alt="User image"
            class="avatar-large"
          />
        </a>
        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ postById(post.id).text }}
          </p>
        </div>
      </div>

      <div class="post-date text-faded">
        <app-date :timestamp="postById(post.id).publishedAt" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sourceData from "@/data.json";

import type { Post, Posts } from "@/models/Posts";

export default defineComponent({
  name: "PostList",
  data() {
    return {
      users: sourceData.users,
    };
  },
  props: {
    posts: {
      type: Object as () => Posts,
      required: true,
    },
  },
  methods: {
    postById(postId: string) {
      return this.posts.find((p: Post) => p.id === postId);
    },
    userById(userId: string) {
      return this.users.find((u) => u.id === userId);
    },
  },
});
</script>

<style></style>
