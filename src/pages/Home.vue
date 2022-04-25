<template>
  <h1>Welcome to the forum</h1>
  <thread-list :threads="threads" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sourceData from "@/data.json";
import ThreadList from "@/components/ThreadList.vue";
import { Thread } from "@/models/Threads";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      threads: sourceData.threads as Thread[],
    };
  },
  components: {
    ThreadList,
  },
});
</script>

<style scoped></style>
