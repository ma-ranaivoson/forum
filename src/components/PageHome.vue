<template>
  <h1>Welcome to the forum</h1>
  <thread-list :threads="threads" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sourceData from "@/data.json";
import ThreadList from "@/components/ThreadList.vue";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      threads: sourceData.threads,
    };
  },
  components: {
    ThreadList,
  },
});
</script>

<style scoped></style>
