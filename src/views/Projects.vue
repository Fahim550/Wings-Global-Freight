<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '../assets/main.css'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Navigation, Pagination],
    }
  },
}
</script>

<template>
  <div>
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
      ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
      ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
      ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
    </swiper>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-8 uppercase">Wings Global Freight Ltd</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Large item -->
        <div
          class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group"
        >
          <img
            src="https://i.ibb.co/9H3gH9D8/IMG-20250512-WA0004.jpg"
            alt="Nature"
            class="w-full object-cover"
          />
          <div
            class="absolute inset-0 bg-black/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-xl font-bold text-white">Wings Global Freight</h4>
            </div>
          </div>
        </div>

        <!-- Two small items -->
        <div class="relative overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://i.ibb.co/RkJ9ptQJ/Whats-App-Image-2025-05-12-at-17-22-07-3bf35ffc.jpg"
            alt="Food"
            class="w-full h-48 object-cover"
          />
          <div
            class="absolute inset-0 bg-black/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-xl font-bold text-white">Wings Global Freight</h4>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://i.ibb.co/N2P87bc8/IMG-20250512-WA0008.jpg"
            alt="IMG-20250512-WA0008"
            border="0 "
            class="w-full h-48 object-cover"
          />
          <div
            class="absolute inset-0 bg-black/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-xl font-bold text-white">Wings Global Freight</h4>
            </div>
          </div>
        </div>

        <!-- Three medium items -->
        <div class="relative overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://i.ibb.co/4gZb9v8V/Whats-App-Image-2025-05-12-at-17-22-06-cd8f6157.jpg"
            alt="Travel"
            class="w-full h-48 object-cover"
          />
          <div
            class="absolute inset-0 bg-black/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-xl font-bold text-white">Wings Global Freight</h4>
            </div>
          </div>
          <div
            class="absolute inset-0 bg-black/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-xl font-bold text-white">Wings Global Freight</h4>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://i.ibb.co/fz6s5hS2/Screenshot-2025-05-13-024549.png"
            alt="Screenshot-2025-05-13-024549"
            border="0"
            class="w-full h-48 object-cover"
          />
          <div
            class="absolute inset-0 bg-black/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-xl font-bold text-white">Wings Global Freight</h4>
            </div>
          </div>
        </div>

        <!-- bottom cards -->
        <!-- <div class="relative overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZ3xlbnwwfDB8fHwxNzIxMDQzMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Sport"
            class="w-full h-48 object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-xl font-bold text-white">Swimming</h4>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Sport"
            class="w-full h-48 object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-xl font-bold text-white">Chess</h4>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Sport"
            class="w-full h-48 object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-xl font-bold text-white">Football</h4>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Sport"
            class="w-full h-48 object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h4 class="text-xl font-bold text-white">Cricket</h4>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
