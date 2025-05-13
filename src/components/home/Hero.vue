<script setup>
// import heroImage from '@/assets/image/hero.jpg'
// const backgroundImage = `url(${logo})`
</script>
<template>
  <section
    class="relative bg-[url('https://i.ibb.co/F4KwdvPC/hero.jpg')] bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
  >
    <!-- Black overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Hero text content -->
    <div class="relative z-10 text-center px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Welcome to <span class="text-primary"> Wings Global Freight</span>
      </h1>
      <p class="text-lg md:text-xl max-w-2xl mx-auto">
        Your reliable logistics partner across the globe. Fast, safe, and efficient delivery.
      </p>
      <!-- <button class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
        Our Services
      </button> -->
      <button
        href="#_"
        class="relative inline-flex items-center mt-10 justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-secondery rounded-xl group"
      >
        <span
          class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-navy/70 rounded group-hover:-mr-4 group-hover:-mt-4"
        >
          <span
            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
          ></span>
        </span>
        <span
          class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-navy rounded-2xl group-hover:mb-12 group-hover:translate-x-0"
        ></span>
        <span
          class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
          >Our Service</span
        >
      </button>
    </div>
  </section>
</template>
