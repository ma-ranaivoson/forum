<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default defineComponent({
  name: "AppDate",
  data() {
    return {};
  },
  props: {
    timestamp: {
      required: true,
      type: Number,
    },
  },
  methods: {
    diffForHumans() {
      return dayjs.unix(this.timestamp).fromNow();
    },
    humanFriendlyDate() {
      return dayjs.unix(this.timestamp).format("D MMMM, YYYY");
    },
  },
});
</script>

<style lang="scss" scoped></style>
