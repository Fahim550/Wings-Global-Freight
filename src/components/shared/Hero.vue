<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <section
    class="relative bg-[url('https://i.ibb.co/fYsFStTY/share-hero.jpg')] bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
  >
    <!-- Black overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Hero text content -->
    <div class="relative z-10 text-center px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ message }}</h1>
      <p class="text-lg md:text-xl max-w-2xl mx-auto">
        Home<span class="text-6xl font-bold mb-6"> . </span>{{ message }}
      </p>
    </div>
  </section>
</template>
