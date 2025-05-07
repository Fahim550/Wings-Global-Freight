<script setup>
import Footer from '@/components/shared/Footer.vue'
import { RouterView } from 'vue-router'
import Navbar from '../components/shared/Navbar.vue'
</script>

<template>
  <Navbar />
  <div>
    <RouterView />
  </div>
  <Footer />
</template>
