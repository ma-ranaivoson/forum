<template>
  <div class="col-full text-center">
    <h1>Not found</h1>
    <router-link :to="{name: 'Home'}">Read some cool threads</router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNotFound',
});
</script>

<style></style>
