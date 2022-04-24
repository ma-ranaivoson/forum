<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />

    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <label for="textPost"
            >Comment:
            <textarea v-model="newPostText" cols="120" rows="10" class="form-input" id="textPost" />
          </label>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
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
      newPostText: "",
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
  methods: {
    addPost() {
      const postId = `ggg${Math.random()}`;
      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: "w9WeYrRVDaNNpxOkyVArjCKLSnD2",
      };
      // sourceData.threads.push(post);
      this.posts.push(post);
      this.thread?.posts.push(post.id);
      this.newPostText = "";
    },
  },
});
</script>

<style scoped></style>
