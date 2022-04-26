<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <thread-list :threads="threads" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThreadList from "@/components/ThreadList.vue";

import sourceData from "@/data.json";
import { Forum } from "@/models/Forums";
import { Threads } from "@/models/Threads";

export default defineComponent({
  name: "ForumPage",
  data() {
    return {};
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    forum() {
      return sourceData.forums.find((forum) => forum.id === this.id) as Forum;
    },
    threads() {
      return sourceData.threads.filter((thread) => thread.forumId === this.id) as Threads;
    },
  },
  components: {
    ThreadList,
  },
  methods: {},
});
</script>

<style scoped></style>
