<template>
  <section class="py-12 bg-white w-10/12 mx-auto">
    <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
      <!-- Image with badge -->
      <div class="w-full lg:w-1/2 relative">
        <img src="@/assets/image/about.jpg" alt="Logistics" class="w-full rounded-lg shadow-lg" />
        <div
          class="absolute bottom-0 left-0 bg-blue-500 text-white w-full text-center py-4 text-xl font-bold"
        >
          12+ Years Experience
        </div>
      </div>

      <!-- Text and Video Button -->
      <div class="w-full lg:w-1/2">
        <h6 class="text-blue-500 font-bold uppercase mb-2">About Us</h6>
        <h2 class="text-3xl lg:text-4xl font-extrabold mb-4 leading-snug">
          Trusted & Faster Logistic Service Provider
        </h2>
        <p class="text-gray-600 mb-6">
          Wings Global has been at the forefront of international freight forwarding and large-scale
          warehousing and storage. Our expertise allows you to optimize your supply chain from
          sourcing to distribution, ensuring peak performance and efficiency.
        </p>

        <!-- Play Button -->
        <div class="flex items-center gap-4">
          <button
            @click="openModal('https://www.youtube.com/embed/DWRcNpR6Kdc')"
            class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition"
          >
            <svg class="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
            </svg>
          </button>
          <span class="font-semibold text-lg">Play Video</span>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-lg overflow-hidden w-full max-w-3xl shadow-lg">
          <div class="relative pb-[56.25%]">
            <iframe
              :src="videoSrc"
              class="absolute top-0 left-0 w-full h-full"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
          <button class="absolute top-2 right-2 text-black text-2xl font-bold" @click="closeModal">
            &times;
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const videoSrc = ref('')

function openModal(url) {
  videoSrc.value = url + '?autoplay=1'
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
  videoSrc.value = ''
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
