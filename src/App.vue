<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./assets/styles.css";

export default defineComponent({
  name: "App",
});
</script>

<style>
</style>
