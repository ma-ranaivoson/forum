<template>
  <div class="col-full">
    <form @submit.prevent="save">
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      newPostText: "",
    };
  },
  methods: {
    save() {
      const postId = `ggg${Math.random()}`;
      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: "w9WeYrRVDaNNpxOkyVArjCKLSnD2",
      };
      this.$emit("save", { post });
      this.newPostText = "";
    },
  },
});
</script>

<style></style>
