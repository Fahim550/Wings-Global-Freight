<script setup>
import { RouterView } from 'vue-router'
import Navbar from '../components/shared/Navbar.vue'
</script>

<template>
  <Navbar />
  <div>
    <RouterView />
  </div>
</template>
