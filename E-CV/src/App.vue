<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CV from './views/CV/CV.cv.vue'
import Header from './components/header/Header.header.vue'
</script>

<template>
  <div>
    <Header></Header>
    <CV></CV>
    <div class="ok"></div>
  </div>
</template>

<style scoped>

</style>
